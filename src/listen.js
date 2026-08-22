/* ═══ ORAL PROMPTS ═══ */

const ORAL = [
{ch:1, les:1, p:4, q:"Hvad er du i gang med at lære? Tager det lang tid at lære? Er det nemt eller svært?",
 use:["Jeg er lige begyndt at …","Det tager ikke så lang tid at …","Det er slet ikke så svært, som mange tror.","Det kommer an på, hvor meget tid man bruger på det.","Jeg har prøvet det én gang — det var ikke nogen succes."]},

{ch:1, les:2, p:13, q:"Fortæl om tre ting, du har lært i dit liv. Hvordan gik det? Hvad var pinligt? Hvad kom af sig selv?",
 use:["Da jeg var barn, lærte jeg at …","Jeg har for eksempel lært at …","Jeg var ret stolt af mig selv.","Det var pinligt, men nu griner jeg af det.","Med tiden er jeg blevet okay til det.","Jeg har vænnet mig til det."],
 note:"This is a datid vs. førnutid exam in disguise. <i>Da jeg var barn, lærte jeg</i> — closed, datid. <i>Jeg har lært at …</i> — no time given, førnutid."},

{ch:1, les:3, p:19, q:"Hvorfor lærer du dansk? Hvordan kan du bedst lide at lære sprog? Hvad motiverer dig?",
 use:["Jeg lærer dansk, fordi …","Jeg er nødt til at …","Jeg foretrækker at lære ved at …","Jeg bliver motiveret af at …","Jeg insisterer på at tale dansk, selvom jeg laver fejl.","Jeg har ikke lyst til at skifte til engelsk."],
 note:"Every one of these uses a ledsætning — so every one of them tests S–A–V. Say <i>fordi jeg ikke har tid</i>, never <i>fordi jeg har ikke tid</i>."},

{ch:2, les:1, p:41, q:"Hvilke egenskaber passer på dig? Hvilke passer slet ikke? Tror du på horoskoper?",
 use:["Jeg vil sige, at jeg er ret …","Jeg er nok mere … end …","Det passer overhovedet ikke på mig.","Jeg tror ikke rigtigt på den slags.","Nogle gange passer det altså ret godt.","Jeg synes, det er noget vrøvl."],
 note:"Adjective agreement is on show here. <i>Jeg er tålmodig</i> (n-form for a person) but <i>vi er tålmodige</i> (e-form for plural)."},

{ch:2, les:2, p:49, q:"Hvad er vigtigst ved en god ven? Fortæl om det første møde med en af dine venner.",
 use:["For mig er det vigtigste, at …","Man skal kunne stole på en god ven.","Vi mødte hinanden, da vi …","Vi har mange ting tilfælles — for eksempel …","Fra den dag voksede vores venskab.","Vi har været venner i over ti år."],
 note:"The two tenses sit next to each other here: <i>Vi mødte hinanden for ti år siden</i> (datid) and <i>Vi har været venner i ti år</i> (førnutid). Getting that pair right is a clear B1 signal."},

{ch:2, les:3, p:58, q:"Hvem i din familie ligner du mest, og på hvilken måde? Hvem er du tættest på?",
 use:["Jeg ligner nok mest min …","Vi minder om hinanden på den måde, at …","Da vi var yngre, lignede vi hinanden meget.","Jeg er tættest på min …, fordi …","Familie betyder rigtig meget for mig.","Vi er begge to ret …"],
 note:"Watch <i>ligner</i> vs <i>lignede</i>, and <i>hinanden</i> (each other) vs <i>sig selv</i>."},

{ch:2, les:1, p:45, q:"Beskriv dit hjem og den slags person, du gerne vil bo sammen med.",
 use:["Jeg bor i en … -værelses lejlighed på … m².","Vi deles om alle de fælles ting og udgifter.","Man skal have adgang til køkken, bad og vaskemaskine.","Jeg leder efter en, der er …","Personen kan flytte ind den 1. …"],
 note:"This one doubles as the written task on p.45 — around 150 words. Same vocabulary either way."},
];
