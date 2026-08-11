<#
    pruefblock.ps1 - KVP-56 - Human Resonanz
    Fuehrt den Messblock aus, der bisher pro Etappe von Hand getippt wurde.

    Grundsaetze (Regeln 32 / 35 / 41 / 42 / 50):
      - Zahlen kommen aus der Datei, nie aus einer Schaetzung
      - Jeder Lauf hat eine Blindkontrolle und eine Positivkontrolle
      - Anker und Befehle bleiben umlautfrei
      - Ein Pruefwerkzeug darf ueberzaehlen, nie unterzaehlen
      - Lesen ueber [System.IO.File] mit absolutem Pfad, kein Get-Content-Reencoding

    Beispiel:
      .\tools\pruefblock.ps1 -Datei src\data\G11.js `
          -Anker @{ 'Heilpraktiker' = 0; 'Wenn du unsicher bist' = 3 } `
          -PositivMin 20

    Exit 0 = alle Waechter gruen. Exit 1 = mindestens ein Waechter rot.
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string] $Datei,

    # Anker -> Sollwert. Sollwert -1 bedeutet: nur zaehlen, nicht bewerten.
    [hashtable] $Anker = @{},

    # Positivkontrolle: Zeichenkette, die im Bestand sicher vorkommt.
    [string] $Positiv = 'titel:',
    [int]    $PositivMin = 1,

    # Blindkontrolle: Zeichenkette, die nirgends vorkommen darf.
    [string] $Blind = 'ZZQXBLIND',

    # Vorher/Nachher: Schnappschuss ablegen und mit dem letzten vergleichen.
    [switch] $KeinSchnappschuss,

    [string] $Notiz = ''
)

$ErrorActionPreference = 'Stop'
$rot = $false

function Zeile($label, $wert, $urteil) {
    $farbe = switch ($urteil) {
        'GRUEN' { 'Green' }
        'ROT'   { 'Red' }
        default { 'Gray' }
    }
    Write-Host ("{0,-22} {1,-14} {2}" -f $label, $wert, $urteil) -ForegroundColor $farbe
}

# --- Datei aufloesen -------------------------------------------------------
$pfad = (Resolve-Path -LiteralPath $Datei -ErrorAction SilentlyContinue)
if (-not $pfad) {
    Write-Host "ABBRUCH  Datei nicht gefunden: $Datei" -ForegroundColor Red
    exit 1
}
$pfad = $pfad.Path

Write-Host ""
Write-Host "=== PRUEFBLOCK ===" -ForegroundColor Cyan
Write-Host $pfad -ForegroundColor Gray
if ($Notiz) { Write-Host $Notiz -ForegroundColor Gray }
Write-Host ""

# --- Grundmasse ------------------------------------------------------------
$bytes  = [System.IO.File]::ReadAllBytes($pfad)
$text   = [System.IO.File]::ReadAllText($pfad, [System.Text.Encoding]::UTF8)
$zeilen = ([regex]::Matches($text, "`n")).Count + 1

$hatBom  = ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF)
$hatCrlf = $text.Contains("`r`n")

Write-Host "--- Masse ---" -ForegroundColor Cyan
Zeile 'Bytes'    $bytes.Length        '-'
Zeile 'Zeichen'  $text.Length         '-'
Zeile 'Zeilen'   $zeilen              '-'
Zeile 'BOM'      $hatBom              $(if ($hatBom)  { $script:rot = $true; 'ROT' } else { 'GRUEN' })
Zeile 'CRLF'     $hatCrlf             $(if ($hatCrlf) { 'HINWEIS' } else { 'GRUEN' })

# --- Kontrollen ------------------------------------------------------------
Write-Host ""
Write-Host "--- Kontrollen ---" -ForegroundColor Cyan

$nBlind = [regex]::Matches($text, [regex]::Escape($Blind)).Count
$uBlind = if ($nBlind -eq 0) { 'GRUEN' } else { $script:rot = $true; 'ROT' }
Zeile "Blind '$Blind'" $nBlind $uBlind

$nPos = [regex]::Matches($text, [regex]::Escape($Positiv)).Count
$uPos = if ($nPos -ge $PositivMin) { 'GRUEN' } else { $script:rot = $true; 'ROT' }
Zeile "Positiv '$Positiv'" "$nPos (min $PositivMin)" $uPos

# --- Waechter --------------------------------------------------------------
if ($Anker.Count -gt 0) {
    Write-Host ""
    Write-Host "--- Waechter ---" -ForegroundColor Cyan
    foreach ($a in ($Anker.Keys | Sort-Object)) {
        $soll = [int] $Anker[$a]
        $ist  = [regex]::Matches($text, [regex]::Escape($a)).Count
        if ($soll -lt 0) {
            Zeile $a "$ist (Zaehlung)" '-'
        }
        elseif ($ist -eq $soll) {
            Zeile $a "$ist / $soll" 'GRUEN'
        }
        else {
            $script:rot = $true
            Zeile $a "$ist / $soll" 'ROT'
        }
    }
}

# --- Syntax ----------------------------------------------------------------
$endung = [System.IO.Path]::GetExtension($pfad).ToLower()
if ($endung -in @('.js', '.mjs', '.json')) {
    Write-Host ""
    Write-Host "--- Syntax ---" -ForegroundColor Cyan
    if ($endung -eq '.json') {
        try {
            $obj = $text | ConvertFrom-Json
            $n   = ($obj | Get-Member -MemberType NoteProperty | Measure-Object).Count
            Zeile 'JSON parse' "$n Schluessel" 'GRUEN'
        }
        catch {
            $script:rot = $true
            Zeile 'JSON parse' 'Fehler' 'ROT'
        }
    }
    else {
        & node --check $pfad 2>$null
        if ($LASTEXITCODE -eq 0) { Zeile 'node --check' 'ok' 'GRUEN' }
        else { $script:rot = $true; Zeile 'node --check' "exit $LASTEXITCODE" 'ROT' }
    }
}

# --- Schnappschuss / Vergleich ---------------------------------------------
if (-not $KeinSchnappschuss) {
    $ordner = Join-Path (Split-Path $PSCommandPath -Parent) 'messungen'
    if (-not (Test-Path $ordner)) { New-Item -ItemType Directory -Path $ordner | Out-Null }
    $name  = [System.IO.Path]::GetFileNameWithoutExtension($pfad) + '.json'
    $ziel  = Join-Path $ordner $name

    $jetzt = [ordered]@{
        zeitpunkt = (Get-Date).ToString('s')
        datei     = $pfad
        bytes     = $bytes.Length
        zeichen   = $text.Length
        zeilen    = $zeilen
        positiv   = $nPos
    }

    if (Test-Path $ziel) {
        $alt = [System.IO.File]::ReadAllText($ziel, [System.Text.Encoding]::UTF8) | ConvertFrom-Json
        Write-Host ""
        Write-Host "--- Vergleich zum letzten Lauf ($($alt.zeitpunkt)) ---" -ForegroundColor Cyan
        foreach ($f in 'bytes', 'zeichen', 'zeilen', 'positiv') {
            $d = $jetzt[$f] - [int] $alt.$f
            $v = if ($d -eq 0) { 'unveraendert' } elseif ($d -gt 0) { "+$d" } else { "$d" }
            Zeile $f "$($jetzt[$f])  ($v)" '-'
        }
    }
    else {
        Write-Host ""
        Write-Host "--- Erster Lauf, kein Vergleich ---" -ForegroundColor Gray
    }

    $json = ($jetzt | ConvertTo-Json)
    [System.IO.File]::WriteAllText($ziel, $json, (New-Object System.Text.UTF8Encoding($false)))
}

# --- Urteil ----------------------------------------------------------------
Write-Host ""
if ($rot) {
    Write-Host "=== ROT - nicht committen ===" -ForegroundColor Red
    exit 1
}
else {
    Write-Host "=== GRUEN ===" -ForegroundColor Green
    exit 0
}
