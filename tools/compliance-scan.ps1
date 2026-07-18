# ============================================================
# compliance-scan.ps1 - Human Resonanz Lernwelt - v1.2
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
#
# v1.2 (KVP-001, 19.07.2026):
# - NEU Kategorie 'Rollen': Praktiker-/Ausbildungs-Rolle
#   (Klient/Beratung/Coach/Reading/Sitzung/Honorar/Zielgruppe).
#   Schliesst den Blindfleck, der Y03/C06 harmlos aussehen
#   liess (Bef/Wirk niedrig, aber komplette Berater-Ausbildung).
# - Gewichtung: Rollen zaehlt x2 in die neue Prio-Summe.
#   ACHTUNG: hoehere False-Positive-Rate als Befaehig
#   (z.B. trifft 'Beratung' auch den Pflichtverweis
#   'Schuldner-/Steuerberatung'). Rollen-Wert ist IMMER
#   Trigger fuer Volltext-Triage, nie Urteil.
# - Kalibrierung: Y03/C06 vor Sanierung = hoch (Zielfall),
#   G09/G11 = niedrig (korrekt harmlos).
# - v1.1 miterledigt: kurse.js (Registry) vom Scan
#   ausgeschlossen (Titel-Sammlung, keine Kursinhalte).
# - Sortierung + LIVE-Warnung laufen jetzt ueber Prio
#   (Summe bleibt als Rohwert sichtbar).
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
    'Rollen'   = 'Klient|Berater|Beratung|Coach|Reading|Sitzung|Honorar|Zielgruppe'
}

# Gewichtung fuer die Prio-Summe (Standard = 1)
$gewichte = @{
    'Rollen' = 2
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
$files = Get-ChildItem (Join-Path $dataDir '*.js') |
    Where-Object { $_.Name -ne 'kurse.js' } |
    Sort-Object Name

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
    $prio  = 0
    foreach ($kat in $kategorien.Keys) {
        $count = [regex]::Matches($text, $kategorien[$kat],
            [System.Text.RegularExpressions.RegexOptions]::IgnoreCase).Count
        $row[$kat] = $count
        $summe += $count
        $g = 1
        if ($gewichte.ContainsKey($kat)) { $g = $gewichte[$kat] }
        $prio += ($count * $g)
    }
    $row['Summe'] = $summe
    $row['Prio']  = $prio
    $ergebnisse += New-Object PSObject -Property $row
}

Write-Host ""
Write-Host "COMPLIANCE-SCAN LERNWELT v1.2 (src/data, ohne kurse.js)" -ForegroundColor Yellow
Write-Host ("Stand: " + (Get-Date -Format 'dd.MM.yyyy HH:mm') + " | " + $files.Count + " Kursdateien | Prio = Summe + Rollen x2")
Write-Host ("=" * 70)

# Sortierung: hoechste Prio zuerst, saubere Dateien am Ende
$ergebnisse | Sort-Object -Property @{Expression='Prio';Descending=$true}, Datei |
    Format-Table Datei, Status, Heil, Befaehig, AltBrand, Therapie, Wirkung, Rollen, Summe, Prio -AutoSize

# Zusammenfassung
$belastet  = @($ergebnisse | Where-Object { $_.Summe -gt 0 })
$statusBug = @($ergebnisse | Where-Object { $_.Status -eq 'FEHLT!' })
$liveRisk  = @($ergebnisse | Where-Object { $_.Prio -gt 0 -and $_.Status -eq 'live' })

Write-Host ("Dateien mit Treffern: " + $belastet.Count + " von " + $files.Count)
if ($statusBug.Count -gt 0) {
    Write-Host ("status-Feld FEHLT bei: " + (($statusBug | ForEach-Object { $_.Datei }) -join ', ')) -ForegroundColor Red
}
if ($liveRisk.Count -gt 0) {
    Write-Host ("LIVE + Treffer (Prio): " + (($liveRisk | Sort-Object Prio -Descending | ForEach-Object { $_.Datei + '(' + $_.Prio + ')' }) -join ', ')) -ForegroundColor Red
}
Write-Host ""
Write-Host "Detail-Ansicht: .\tools\compliance-scan.ps1 -Detail <Kuerzel>  (z.B. -Detail E01)"
Write-Host "Rollen-Werte sind Trigger fuer Volltext-Triage, nie Urteil (False-Positives moeglich)."
Write-Host "Hinweis: Live-UI-Flaechen (Chips, Karten, Badges) separat pruefen - nicht Teil dieses Scans."
Write-Host ""