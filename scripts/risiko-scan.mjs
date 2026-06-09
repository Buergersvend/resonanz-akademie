import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = 'src/data';
const files = (await readdir(DIR)).filter(f => /^[A-Z0-9]{1,4}\.js$/.test(f) && /^[A-Z]/.test(f));

const HEAVY = ['heilung','heilt','heile ','heilmittel','heilwirkung','heilkraft','heilweise','heilkunde','diagnose','krankheit','therapie','therapeut','heilen','antidepress','antiviral','fiebersenk','blutdrucksenk','krebs','depression','trauma','dissoziat','suizid'];
const MED = ['symptom','lindert','lindernd','behandl','dosierung','tinktur','einnehmen','einnahme',' gegen ','bei erkält','beschwerden','indikation','klient','anamnese','blockade','wirkstoff','mg ','tropfen täglich'];
const THIRD = ['dein klient','den klienten','behandle','sitzung mit','der klient','die klientin','patient'];
const DISCLAIM = ['kein ersatz für ärztliche','keine ärztliche','ersetzt keine','keine heilkunde','keine diagnose','keine behandlung von krankheit','wende dich bitte an ärzt','apotheke oder heilpraktiker','keine medizinische'];

function count(text, terms){ let n=0, hits=[]; for(const t of terms){ const m=text.split(t).length-1; if(m>0){n+=m; hits.push(t.trim()+'×'+m);} } return {n,hits}; }

const rows = [];
for(const f of files){
  const raw = await readFile(join(DIR,f),'utf8');
  const low = raw.toLowerCase();
  const titel = (raw.match(/titel:\s*['"`](.+?)['"`]/)||[])[1] || '?';
  const status = (raw.match(/status:\s*['"`]?(\w+)['"`]?/)||[])[1] || 'FEHLT';
  const h=count(low,HEAVY), m=count(low,MED), t=count(low,THIRD), d=count(low,DISCLAIM);
  const score = h.n*5 + m.n*2 + t.n*4 - d.n*4;
  rows.push({f,titel,status,score,heavy:h.hits,third:t.hits,disc:d.n});
}
rows.sort((a,b)=>b.score-a.score);

let out = '# RISIKO-SCAN — '+files.length+' Kurse — '+new Date().toISOString().slice(0,10)+'\n\n';
out += 'Score = HEAVY×5 + MED×2 + DRITTE×4 - DISCLAIMER×4 (LIGHT/Eso-Vokabular NICHT gezaehlt)\n';
out += 'Schwellen: >=30 rot dringend | 12-29 gelb pruefen | <12 gruen | OFFLINE/FEHLT separat\n\n';
const live = rows.filter(r=>r.status==='live');
const rot = live.filter(r=>r.score>=30), gelb = live.filter(r=>r.score>=12&&r.score<30), gruen = live.filter(r=>r.score<12);
out += `ZUSAMMENFASSUNG: ${live.length} live (rot ${rot.length} / gelb ${gelb.length} / gruen ${gruen.length}) | offline/fehlt ${rows.length-live.length}\n\n`;
for(const r of rows){
  const flag = r.status!=='live' ? '['+r.status.toUpperCase()+']' : (r.score>=30?'ROT ':(r.score>=12?'GELB':'GRUE'));
  out += `${flag} ${r.f.padEnd(8)} Score ${String(r.score).padStart(4)} | ${r.titel}\n`;
  if(r.status==='live' && (r.heavy.length||r.third.length)){
    if(r.heavy.length) out += `     HEAVY: ${r.heavy.join(', ')}\n`;
    if(r.third.length) out += `     DRITTE: ${r.third.join(', ')}\n`;
    if(r.disc) out += `     (Disclaimer-Kontext: ${r.disc}× erkannt)\n`;
  }
}
await writeFile('RISIKO_SCAN.txt', out, 'utf8');
console.log(out);
