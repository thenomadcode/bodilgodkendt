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

{ch:3, les:1, p:77, q:"Dyrker du motion regelmæssigt? Hvad slags motion, hvor tit — og hvad motiverer dig?",
 use:["Jeg prøver at løbe et par gange om ugen.","Jeg cykler på arbejde i stedet for at tage bilen.","Jeg er lige begyndt at gå til yoga.","Det, der motiverer mig, er …","Hvis jeg skal være helt ærlig, så hader jeg faktisk at løbe.","Der skal være noget konkurrence, før jeg synes, det er sjovt."],
 note:"Frequency phrases are easy marks: <i>to gange om ugen, hver dag, en gang imellem</i>. Then show one cleft sentence: <i>Der er mange af mine kolleger, der løber.</i>"},

{ch:3, les:2, p:80, q:"Hvordan er dine kostvaner? Går du op i sund mad, eller er du glad, bare du får noget at spise?",
 use:["Jeg prøver så vidt muligt at spise sundt.","Jeg går ikke så meget op i økologi.","Der skal også være plads til lidt fredagshygge.","Jeg spiser næsten aldrig fastfood.","Livet ville være kedeligt uden søde sager.","Det er måske ikke sundt for kroppen, men det er sundt for sjælen."],
 note:"Quantity words follow the countable split: <i>meget slik, meget kød</i> but <i>mange grøntsager</i>. And the prepositions are fixed: <i>gå op i</i>, <i>vild med</i>, <i>glad for</i>."},

{ch:3, les:2, p:84, q:"Du har ondt i halsen, i ryggen eller i hovedet. Hvad gør du — og hvilke råd ville du give en ven?",
 use:["Jeg har ondt i halsen, og min næse løber.","Har du prøvet at drikke kamillete med citron og honning?","Hvad med at ringe og få en tid hos lægen?","Hvis jeg var dig, ville jeg tage noget smertestillende.","Du skal tage på skadestuen og få taget et røntgenbillede.","Det plejer at gå over efter en uge."],
 note:"Body parts take the definite form: <i>ondt i <b>halsen</b></i>, not <i>ondt i min hals</i>. Advice comes in three shapes: <i>Har du prøvet at …?</i>, <i>Hvad med at …?</i>, <i>Hvis jeg var dig, ville jeg …</i>"},

{ch:3, les:3, p:88, q:"Hvad er det gode liv for dig? Hvilke små og store ting gør dig glad?",
 use:["For mig er det gode liv at …","Det, der gør mig mest glad, er …","Jeg holder rigtig meget af at …","Jeg sætter stor pris på …","Jeg forbinder det gode liv med …","Jeg brænder for …"],
 note:"Two frames from the thread on p.87–88 carry the whole answer: <i>For mig <b>er det</b> gode liv at …</i> (inversion, because <i>for mig</i> comes first) and <i>Det, der gør mig mest glad, er …</i>"},

{ch:3, les:3, p:93, q:"Hvad tror du er hemmeligheden bag et langt og lykkeligt liv? Kunne du tænke dig at leve som folk i de blå zoner?",
 use:["De får naturlig motion i hverdagen.","De spiser ikke så meget kød, men masser af grøntsager.","De har et stærkt fællesskab og passer godt på hinanden.","De giver sig god tid og tager en eftermiddagslur.","Jeg kunne godt tænke mig at …, men …","Jeg tror ikke, jeg kunne leve uden …"],
 note:"A comparison question in disguise: <i>De lever <b>længere</b> og <b>sundere</b></i>, <i>der er <b>flere</b> 100-årige</i>, <i>de spiser <b>mindre</b> kød</i>."},

{ch:4, les:1, p:110, q:"Fortæl om en af de vigtigste begivenheder i dit liv. Hvad fejrede du, hvornår var det, og hvad var det bedste ved dagen?",
 use:["Det var, da jeg blev gift / blev student / fyldte 40.","Vi holdt festen i …, fordi …","Der var mange, der holdt taler.","Vi ville bare holde det stille og roligt.","Det bedste ved dagen var …","Det var en skøn fest, og jeg vil altid huske den dag."],
 note:"A datid story from start to finish: <i>vi holdt, vi fejrede, der var</i>. One closing førnutid line shows control: <i>Vi har været gift i 25 år nu.</i>"},

{ch:4, les:1, p:108, q:"Hvordan fejrede du din egen fødselsdag sidste gang? Hvilke fester skal du holde i år?",
 use:["Sidste år fejrede jeg den med …","Jeg holdt en lille fest derhjemme.","Vi var ude at spise sammen med …","I år skal jeg fylde …","Jeg har tænkt mig at holde en stor fest.","Jeg ved ikke rigtig, om jeg gider holde fest."],
 note:"Two tenses on purpose: <i>Sidste år <b>fejrede jeg</b></i> (closed, and inversion after the time phrase) and <i>I år <b>skal jeg</b> …</i> (future)."},

{ch:4, les:2, p:116, q:"Har man en nationaldag i dit land? Hvornår er den, hvad fejrer man, og hvad laver man på dagen?",
 use:["Vi fejrer nationaldagen den … (dato).","Vi fejrer, at landet blev selvstændigt i …","Man flager over hele landet.","Det er en helligdag, så de fleste har fri.","Der er tradition for, at man spiser …","Der er parader og taler i hovedstaden."],
 note:"Dates are <i>den</i> + ordinal: <i>den 5. juni</i>, read <i>den femte juni</i>. And <i>man</i> is your friend here — <i>man flager, man spiser, man mødes</i>."},

{ch:4, les:2, p:119, q:"Har du nogen særlige traditioner med din familie eller dine venner — eller nogen, du har fået, efter du flyttede til Danmark?",
 use:["Vi plejer at …","Der er tradition for, at vi …","Vi samles altid, når …","Det er altid en særlig dag i min familie, når …","Efter jeg flyttede til Danmark, er vi begyndt at …","Vi gør det for at holde kontakten / styrke sammenholdet."],
 note:"The book hands you the frames on p.119. <i>Efter jeg <b>flyttede</b> …, <b>har vi fået</b> en ny tradition</i> — datid for the move, førnutid for the habit you still have."},

{ch:4, les:3, p:123, q:"Synes du, det er vigtigt at fejre mors dag og fars dag — eller er det for kommercielt?",
 use:["Jeg synes, det er vigtigt, at vi fejrer …","Jeg er enig med dig, fordi …","Jeg er uenig i, at mors dag er for kommerciel.","Man kan jo bare bage en kage.","Det handler bare om at købe ting.","Selvom det er kommercielt, synes jeg alligevel, det er hyggeligt."],
 note:"<i>enig med</i> a person, <i>enig i</i> a statement. And this is the place for a <i>selvom … alligevel</i> sentence — the contrast is the whole question."},

{ch:5, les:1, p:141, q:"Hvordan har du indrettet dit hjem? Hvor står dine møbler — og hvorfor står de lige dér?",
 use:["Sofaen står op ad væggen, for så …","Jeg har stillet min lænestol foran vinduet, for så kan jeg …","Mine billeder hænger over …","Tæppet ligger midt i stuen.","Jeg har ikke så mange møbler, men …","Det vigtigste for mig er, at …"],
 note:"Two traps in one answer: position or movement (<i>Sofaen <b>står</b> … · Jeg har <b>stillet</b> den …</i>) and inversion after <i>for så</i> (<i>for så <b>kan jeg</b> sidde …</i>)."},

{ch:5, les:2, p:144, q:"Hvor bor du nu — i byen eller på landet? Hvad er det bedste og det værste ved at bo der?",
 use:["Der, hvor jeg bor, er der heldigvis …","Der, hvor jeg bor, er der desværre …","Det bedste ved at bo på … er …","Det værste ved at bo i … er nok, at …","Der er gode tog- og busforbindelser.","Jeg savner lidt …"],
 note:"<i>Der, hvor jeg bor,</i> fills the first position, so the verb comes next: <i>Der, hvor jeg bor, <b>er der</b> …</i>. And superlatives after <i>det</i> take -e: <i>det bedste, det værste</i>."},

{ch:5, les:2, p:145, q:"Fortæl om dit kvarter. Hvad er dit yndlingssted i den by, hvor du bor nu?",
 use:["Mit yndlingssted er …, for der kan man …","Lige rundt om hjørnet er der …","Inden for gåafstand er der …","Folk i mit kvarter er åbne og hjælpsomme.","Jeg hænger tit ud i …","Jeg har boet her i … år nu."],
 note:"Retell a partner's answer in 3rd person and you are testing <i>sin / hans</i>: <i>Hun bor sammen med <b>sine</b> forældre, men <b>hendes</b> lillebror bor i Aarhus.</i>"},

{ch:5, les:2, p:146, q:"Ville du helst bo i en storby, i en forstad eller på landet — og hvorfor?",
 use:["Jeg ville helst bo …, for så …","Fordelen ved at bo i en storby er, at …","Ulempen er, at der er alt for meget trafik og larm.","På landet er der masser af natur og frisk luft.","I en storby kender man ikke engang sine naboer.","Det kommer an på, om man har børn."],
 note:"<i>Man kender ikke engang <b>sine</b> naboer</i> (p.160) — <i>man</i> as subject takes sin/sit/sine. Weigh it with <i>fordele og ulemper</i> and you have the B1 shape."},

{ch:5, les:3, p:155, q:"Hvad er det vildeste, koldeste eller mest øde sted, du har været? Hvor ligger det, og hvad lavede du der?",
 use:["Det vildeste sted, jeg har været, er nok …","Det ligger i …, cirka … kilometer fra …","Jeg var der sammen med …, fordi …","Det var det koldeste sted, jeg nogensinde har været.","Det mest spændende var, da …","Det var helt klart alle anstrengelserne værd."],
 note:"A superlative drill in disguise: <i>det vildeste sted</i>, <i>det mest spændende</i>. And a tense one: <i>jeg <b>har været</b></i> with no time given, but <i>jeg <b>var</b> der i 2019</i>."},

{ch:6, les:1, p:172, q:"Hvad er vigtigst for dig, næste gang du søger nyt job? Hvad er dit nummer 1, 2 og 3 — og hvad er mindst vigtigt?",
 use:["For mig er det vigtigste gode kolleger, fordi …","Jeg lægger meget vægt på fleksible arbejdstider.","Lønnen er ikke det vigtigste for mig.","Det overraskede mig, at så mange lægger vægt på …","Jeg blev overrasket over, at så få lægger vægt på …","Jeg troede, at der var færre, der lagde vægt på …"],
 note:"The book's frames on p.172 hide a tense rule: after a past main verb, the <i>at</i>-clause goes into datid too — <i>Jeg troede, at der <b>var</b> færre, der <b>lagde</b> vægt på …</i>"},

{ch:6, les:1, p:174, q:"Hvad slags job vil du helt sikkert søge — og hvad slags job gider du slet ikke? Kunne du forestille dig et 8-16 job?",
 use:["Jeg vil helt sikkert søge et job, hvor jeg kan …","Jeg kunne godt forestille mig at arbejde hjemmefra.","Jeg kan overhovedet ikke se mig selv i sådan et job.","Jobbet behøver ikke at være særlig godt betalt.","Jeg gider ikke arbejde om aftenen og i weekenderne.","Jobbet må gerne være kreativt, men det må ikke være for stressende."],
 note:"Modal verbs all the way: no <i>at</i> after them — <i>vil søge</i>, <i>kan arbejde</i> — except <i>behøve</i> and <i>gide</i>, where it is optional. And <i>må ikke</i> means forbidden, <i>behøver ikke</i> means not necessary."},

{ch:6, les:2, p:179, q:"Hvilke kompetencer passer bedst på dig — og hvilke passer slet ikke? Giv et eksempel.",
 use:["Jeg vil sige, at jeg er ret …","Jeg er god til at samarbejde, men jeg kan også godt lide at arbejde selvstændigt.","Jeg er ikke bange for at prøve noget nyt.","Til gengæld er jeg ret lærenem.","Hvis der er noget, jeg ikke kan finde ud af, er jeg heller ikke bange for at spørge.","Tålmodig — det er jeg slet ikke."],
 note:"Most of these lines are from the model application on p.200. <i>god til at</i> and <i>bange for at</i> take <i>at</i> + infinitive; and a leading <i>hvis</i>-clause flips the main clause: <i>…, <b>er jeg</b> heller ikke bange for at spørge.</i>"},

{ch:6, les:2, p:178, q:"Har du prøvet at arbejde frivilligt? Hvis ja: hvor, hvad lavede du, og hvad lærte du? Hvis nej: hvad kunne du tænke dig?",
 use:["Jeg har arbejdet som frivillig i …","Da jeg boede i …, var jeg frivillig træner for …","Det gav mig en masse glæde.","Jeg lærte at være mere tålmodig.","Jeg kunne godt tænke mig at gøre en forskel for …","Jeg har ikke så meget fritid, men et par timer om ugen kunne jeg sagtens."],
 note:"Datid for a finished stint — <i>Da jeg boede i …, <b>var</b> jeg …</i> — and førnutid for experience up to now — <i>Jeg <b>har arbejdet</b> som frivillig i to år</i>."},

{ch:6, les:3, p:186, q:"Hvad drømte du om, da du var barn — og drømmer du om de samme ting nu? Har du en bucketliste?",
 use:["Da jeg var barn, drømte jeg om at blive …","Da jeg var teenager, ville jeg være …","Det har jeg faktisk drømt om, siden jeg var barn.","Først og fremmest vil jeg gerne …","Jeg håber, at min drøm går i opfyldelse.","Den skal nok blive til noget."],
 note:"The question is the tense test: <i>drømte</i> for then, <i>drømmer</i> for now, and <i>har drømt om … siden</i> for the line between them (p.186)."},
];
