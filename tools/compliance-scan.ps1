# ============================================================
# compliance-scan.ps1 - Human Resonanz Lernwelt
# Scannt alle Kursdateien (src/data/*.js) auf Compliance-
# Reizwoerter + status-Feld und gibt eine Tabelle aus.
#
# Aufruf im Repo-Root (resonanz-akademie):
#   powershell -ExecutionPolicy Bypass -File .\tools\compliance-scan.ps1
#
# Detail-Modus (Fundstellen einer Datei mit Zeilennummern):
#   powershell -ExecutionPolicy Bypass -File .\tools\compliance-scan.ps1 -Detail E01
#
# WICHTIG: Dieser Scan deckt NUR src/data ab. Live-UI-Flaechen
# (Bereichs-Chips, Kursbeschreibungen im Rendering, Badges)
# brauchen weiterhin den Blick in die Live-Oberflaeche.
# (Lehre 11.07.: src-Grep sieht keine UI-Komposition.)
#
# Muster-Hinweise:
# - 'heil(?!praktiker)' schliesst den Pflicht-Verweissatz
#   ("Arzt, Heilpraktiker oder Therapeut") bewusst aus.
# - 'bef.higt' statt Umlaut, damit das Skript unabhaengig
#   von der Datei-Codierung funktioniert (PS 5.1).
# ============================================================

param(
    [string]$Detail = ''
)

$kategorien = [ordered]@{
    'Heil'     = 'heil(?!praktiker)'
    'Befaehig' = 'Ausbildung|ausbild|bef.higt|bef.higung|Schulung|zertifizier'
    'AltBrand' = 'Resonanz.Akademie'
    'Therapie' = 'Therapie|therapeutisch|behandel|Diagnose|diagnostizier'
    'Wirkung'  = 'aufl.s(t|en)|Karma|DNS.Aktivierung|Fernheilung'
}

$dataDir = Join-Path (Get-Location) 'src\data'
if (-not (Test-Path $dataDir)) {
    Write-Host "FEHLER: src\data nicht gefunden. Bitte im Repo-Root ausfuehren." -ForegroundColor Red
    exit 1
}

# ---------- Detail-Modus: Fundstellen einer Datei ----------
if ($Detail -ne '') {
    $file = Join-Path $dataDir ($Detail + '.js')
    if (-not (Test-Path $file)) {
        Write-Host "FEHLER: $file nicht gefunden." -ForegroundColor Red
        exit 1
    }
    Write-Host ""
    Write-Host ("FUNDSTELLEN: " + $Detail + ".js") -ForegroundColor Yellow
    Write-Host ("=" * 60)
    $lines = [System.IO.File]::ReadAllLines($file, [System.Text.Encoding]::UTF8)
    foreach ($kat in $kategorien.Keys) {
        $pattern = $kategorien[$kat]
        $hits = @()
        for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i] -match $pattern) {
                $hits += ("  Z." + ($i + 1) + ": " + $lines[$i].Trim())
            }
        }
        if ($hits.Count -gt 0) {
            Write-Host ""
            Write-Host ("[" + $kat + "] " + $hits.Count + " Zeile(n):") -ForegroundColor Cyan
            $hits | ForEach-Object {
                if ($_.Length -gt 140) { Write-Host ($_.Substring(0, 140) + " ...") }
                else { Write-Host $_ }
            }
        }
    }
    Write-Host ""
    exit 0
}

# ---------- Standard-Modus: Tabelle ueber alle Dateien ----------
$ergebnisse = @()
$files = Get-ChildItem (Join-Path $dataDir '*.js') | Sort-Object Name

foreach ($f in $files) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)

    # status-Feld auslesen (erstes Vorkommen)
    $status = 'FEHLT!'
    $m = [regex]::Match($text, "status:\s*'(\w+)'")
    if ($m.Success) { $status = $m.Groups[1].Value }

    $row = [ordered]@{
        Datei  = $f.BaseName
        Status = $status
    }
    $summe = 0
    foreach ($kat in $kategorien.Keys) {
        $count = [regex]::Matches($text, $kategorien[$kat],
            [System.Text.RegularExpressions.RegexOptions]::IgnoreCase).Count
        $row[$kat] = $count
        $summe += $count
    }
    $row['Summe'] = $summe
    $ergebnisse += New-Object PSObject -Property $row
}

Write-Host ""
Write-Host "COMPLIANCE-SCAN LERNWELT (src/data)" -ForegroundColor Yellow
Write-Host ("Stand: " + (Get-Date -Format 'dd.MM.yyyy HH:mm') + " | " + $files.Count + " Kursdateien")
Write-Host ("=" * 70)

# Sortierung: hoechste Summe zuerst, saubere Dateien am Ende
$ergebnisse | Sort-Object -Property @{Expression='Summe';Descending=$true}, Datei |
    Format-Table Datei, Status, Heil, Befaehig, AltBrand, Therapie, Wirkung, Summe -AutoSize

# Zusammenfassung
$belastet  = @($ergebnisse | Where-Object { $_.Summe -gt 0 })
$statusBug = @($ergebnisse | Where-Object { $_.Status -eq 'FEHLT!' })
$liveRisk  = @($ergebnisse | Where-Object { $_.Summe -gt 0 -and $_.Status -eq 'live' })

Write-Host ("Dateien mit Treffern: " + $belastet.Count + " von " + $files.Count)
if ($statusBug.Count -gt 0) {
    Write-Host ("status-Feld FEHLT bei: " + (($statusBug | ForEach-Object { $_.Datei }) -join ', ')) -ForegroundColor Red
}
if ($liveRisk.Count -gt 0) {
    Write-Host ("LIVE + Treffer (Prio): " + (($liveRisk | Sort-Object Summe -Descending | ForEach-Object { $_.Datei + '(' + $_.Summe + ')' }) -join ', ')) -ForegroundColor Red
}
Write-Host ""
Write-Host "Detail-Ansicht: .\tools\compliance-scan.ps1 -Detail <Kuerzel>  (z.B. -Detail E01)"
Write-Host "Hinweis: Live-UI-Flaechen (Chips, Karten, Badges) separat pruefen - nicht Teil dieses Scans."
Write-Host ""
