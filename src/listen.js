/* ═══ LISTENING INDEX + ORAL PROMPTS ═══ */

const LISTENING = [
{ch:1, p:4, title:"Fem korte monologer — hvad har de lært?",
 what:"Five people describe something they learned. You match each to one of the ten pictures.",
 words:["at male","at stå på ski","at spille skak","at svømme","at danse salsa","at strikke","at spille guitar"],
 key:"Transcript and answers: p.25. Listen for the activity word, not the whole story — each monologue names it once."},

{ch:1, p:5, title:"En spørgeundersøgelse — 100 danskere",
 what:"A survey of what 100 Danes over 20 have learned to do. You write the percentages next to nr. 1–10.",
 words:["en undersøgelse","de fleste","de færreste","procent","at ligge nr. 1"],
 key:"Numbers only. Practise hearing Danish numerals — that is the whole exercise. Answers p.25."},

{ch:1, p:15, title:"Sylvester lærer at dykke",
 what:"A young man learns to dive before a sailing trip. Eight comprehension questions.",
 words:["en sejlerrejse","at snorkle","en iltflaske","(dykker)udstyr","at trække vejret","obligatorisk","sikkerhed","et dyk","et håndtegn","hajer"],
 key:"Read the ten words on p.15 first — the book gives them to you deliberately. Transcript p.28–29."},

{ch:1, p:18, title:"Mig og sprog — Rasmus, Helle, Pjotr og Hanifa",
 what:"Four people on which languages they are learning, why, and what motivates them. Ten questions, tick the right person.",
 words:["udstationeret","krævede","i forvejen","insisterer på","er sikker på","vild med","fejlfrit","officielle","til daglig","at tage sig sammen","lære sig selv","er nødt til","melde sig til","søge ind","lade sig gøre","at miste","et mål"],
 key:"Each person has their own word list printed under their name on p.18 — those words are the answer key in disguise. Transcript p.30."},

{ch:1, p:21, title:"Video: Hvad sprog kan føre til (Daniel)",
 what:"A video on Moodle. Daniel on his background, what he finds hard, and where he speaks Danish.",
 words:["en fremmed","at insistere på","at forbedre","en dagligdagssituation"],
 key:"Not in the book's transcript section — it's a Moodle video. The eight questions on p.21 are what to listen for."},

{ch:2, p:38, title:"Tror du på horoskoper? — Lin, Anton, Horst, Gitte, Kiran",
 what:"Five people on astrology. Seven questions, decide who says what.",
 words:["noget vrøvl","en pseudovidenskab","tilfældigt","at passe sammen med","et stjernetegn","instinktivt","numerologi"],
 key:"Transcript p.61–62. Two believe (Horst-type and Gitte-type), two don't, one is on the fence. Listen for the job mismatch and the furniture story — those are the giveaways for questions 5 and 7."},

{ch:2, p:43, title:"Linus og Draganas diskussion om ansøgerne",
 what:"The two flatmates argue about Mille, Ruben and Beatriz. Did they choose the same person you did?",
 words:["en ansøger","fanatisk","hyper-energisk","husarbejde","at gøre rent","at rydde op","til gengæld"],
 key:"Transcript p.62. Note how much of it is objections — <i>lyder han ikke lidt …</i>, <i>er du sikker på det …</i>. Good model language for the oral exam."},

{ch:2, p:46, title:"Venner for livet — fem venskaber",
 what:"Five pairs describe how they became friends. Match each to a statement A–E.",
 words:["at gå op i","at falde i snak","holdninger og værdier","at hænge ud","at stole på","en kammerat"],
 key:"Answers: 1 Ursula og Ella = D (god til at lytte) · 2 Ifan og Saman = C (en god kammerat) · 3 Cem m.fl. = E (klassisk musik og opera) · 4 Pierre og Niels = A (kedeligt at gå i skole) · 5 Maureen og Cecilie = B (kæmper for klimaet). Transcript p.63–64."},

{ch:2, p:47, title:"Venner for livet — udfyld de manglende ord (opgave 2C)",
 what:"The same recording again, this time as a ten-gap dictation. This is the closest thing in the book to the listening part of a test.",
 words:[],
 key:"1 <b>i mere end</b> 15 år · 2 <b>gik begge to rigtig meget op i</b> hiphop og skating · 3 <b>interesseret i</b> klima og aktivisme · 4 holdninger og værdier <b>til fælles</b> · 5 til en koncert <b>for snart 7 år siden</b> · 6 <b>lige så interesserede i klassisk musik</b>, som vi er · 7 <b>Fra den dag</b> voksede vores venskab · 8 det menneske, der <b>kender mig bedst</b> · 9 <b>Efter noget tid</b> begyndte vi at hænge ud · 10 <b>Jeg stoler</b> 100 % på ham. — from the transcript on p.63–64."},

{ch:2, p:54, title:"Hvem i din familie ligner du mest?",
 what:"Six people — Ariana, Asger, Rebecca, Jonas, Tasneem, Ewan — say who in their family they take after. Six matching questions.",
 words:["at ligne","at minde om","søskende","en morfar","yngre","af udseende"],
 key:"Transcript p.67. Listen for the tense: several of them switch between <i>ligner</i> (now) and <i>lignede</i> (when younger) — question 6 depends on hearing that switch."},
];

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
