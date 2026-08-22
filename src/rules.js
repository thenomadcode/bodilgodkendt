/* ═══ GRAMMAR RULES ═══
   src: "both" = in your class notes AND the book (highest test probability)
        "notes" = Studieskolen modul 3.3 notes only
        "book"  = Danish to Go 3 only
   ref: where to look it up                                            */

const RULE_GROUPS = [
{id:"verbs", name:"Verber og tid", sub:"Tenses — the single biggest scoring area on the test"},
{id:"order", name:"Ordstilling", sub:"Word order. The rule that decides whether a written text reads as A2 or B1"},
{id:"rel",   name:"Relativsætninger", sub:"der, som, and when to leave it out"},
{id:"adj",   name:"Adjektiver", sub:"n-form, t-form, e-form"},
{id:"noun",  name:"Substantiver", sub:"The four forms, and countable vs uncountable"},
{id:"adv",   name:"Adverbier", sub:"Long vs short, and where they sit in the sentence"},
{id:"conj",  name:"Bindeord", sub:"Conjunctions and how they change word order"},
{id:"time",  name:"Tidsudtryk", sub:"The expressions that force a particular tense"},
{id:"pairs", name:"Forvekslinger", sub:"Word pairs that look the same in English and are not in Danish"},
];

const RULES = [
/* ───────── VERBER OG TID ───────── */
{g:"verbs", src:"both", ref:"Notes · Book p.33", title:"Førnutid — har/er + -et / -t",
 rule:"Used for something that happened recently, or is still going on, where <em>when</em> it happened is not the point.",
 table:[["Group 1","har boet, har arbejdet, har lavet"],["Group 2","har købt, har begyndt, har læst"],["Irregular","har været, har haft, er kommet, har gjort"]],
 ex:["Jeg har lige været i Netto.","Jeg har boet her i 2 år.","Jeg har lige lært at stå på snowboard.","Hun har spillet violin i fem år."],
 trap:"Use <b>er</b> instead of <b>har</b> when the focus is on a change of state or a move from one place to another: <i>er kommet, er gået, er flyttet, er blevet, er faldet</i>."},

{g:"verbs", src:"both", ref:"Notes · Book p.33", title:"Datid — -ede / -te / irregular",
 rule:"Used for something finished, at a particular time or place in the past. There is usually a time expression in the same sentence.",
 table:[["Gruppe 1 · -ede","lavede, arbejdede, flyttede, studerede, spillede, boede, startede, passede"],["Gruppe 2 · -te","læste, købte, besøgte, spiste, begyndte"],["Gruppe U · irregular","ville, gjorde, havde, gik, fik, kom, kunne, tog"]],
 ex:["Jeg kom til Danmark i 2024.","I USA arbejdede jeg som ingeniør.","Vi spiste på en restaurant i går.","Han malede meget, da han var barn."]},

{g:"verbs", src:"both", ref:"Book p.47 + answer key p.64", title:"★ Førnutid or datid? The decision rule",
 rule:"Ask one question: <b>is the period finished?</b> A closed period in the past takes datid. A period running up to now — or with no stated time — takes førnutid.",
 table:[["→ datid","for … siden · i går · sidste år · da jeg var … · første gang vi …"],["→ førnutid","i (to år) — still true · aldrig · nogensinde · lige · endnu · siden 2021"]],
 ex:["✓ Vi <b>mødte</b> hinanden til basketball for snart 5 år siden. — <i>closed, „for … siden“</i>",
     "✓ Vi har været venner i mange år, men nu <b>har vi ikke set</b> hinanden i 2 år. — <i>still true now</i>",
     "✓ Da vi gik i gymnasiet, <b>gik vi</b> begge to meget op i sport. — <i>„da“ = closed period</i>",
     "✓ Allerede første gang vi mødte hinanden, <b>var det</b> tydeligt … — <i>one moment in the past</i>",
     "✓ Efter nogle måneder <b>fandt jeg ud af</b>, at … — <i>one finished event</i>"],
 trap:"These five are straight from the book's own exercise on p.47, with its answers on p.64. If the test reuses one pattern, it will be this one.",
 star:true},

{g:"verbs", src:"both", ref:"Notes · Book p.33", title:"The three conjugation groups",
 rule:"Every regular Danish verb is group 1 or group 2. You cannot hear which from the infinitive — you have to learn it with the verb.",
 table:[["Gruppe 1","bo → bor → bo<b>ede</b> → har bo<b>et</b>"],["Gruppe 2","køb<b>e</b> → køber → køb<b>te</b> → har køb<b>t</b>"],["Gruppe U","være → er → var → har været"]],
 trap:"Group 2 verbs drop the -e- : <i>købte</i>, not <i>købede</i>. Group 1 keeps it. This is the most common written-test slip."},

{g:"verbs", src:"book", ref:"Book p.33", title:"Refleksive verber",
 rule:"A reflexive verb is verb + reflexive pronoun. The pronoun is unstressed and follows <b>the verb it belongs to</b> — in a main clause, after the finite verb and any central adverb.",
 table:[["jeg → mig","du → dig"],["han/hun → sig","vi → os"],["I → jer","de → sig"]],
 ex:["Jeg kan ikke <b>vænne mig til</b> at skrive på dansk.","Du skal bare <b>øve dig</b> — så kommer det.","Kathrine <b>glæder sig til</b> næste gang.","Vi <b>kunne godt tænke os</b> at lære at surfe.","Hun <b>koncentrerer sig</b>, når hun spiller skak."],
 trap:"Danish uses <i>sig</i> for both han/hun and de. English has no equivalent, so this is easy to drop entirely — and dropping it changes the meaning or breaks the sentence."},

{g:"verbs", src:"notes", ref:"Notes", title:"Imperativ",
 rule:"The imperative is the infinitive minus its final -e. No pronoun.",
 ex:["at arbejde → <b>arbejd!</b>","at læse → <b>læs!</b>","at gå → <b>gå!</b>","reflexive keeps the pronoun: <b>øv dig!</b> · <b>glæd dig!</b> · <b>væn dig til det!</b>"],
 trap:"Modal verbs (skulle, ville, kunne, måtte) and <i>synes, koste, kunne lide</i> have no imperative."},

/* ───────── ORDSTILLING ───────── */
{g:"order", src:"notes", ref:"Notes", title:"Hovedsætning — S · V · A · (V)",
 rule:"In a main clause the central adverb comes <b>after</b> the finite verb.",
 ex:["Jeg <b>taler</b> altid dansk med min kone.","Jeg ville <b>gerne</b> prøve noget nyt.","Min kæreste vil <b>hellere</b> bo i Danmark.","Han har <b>altid</b> arbejdet i Vestas."]},

{g:"order", src:"notes", ref:"Notes", title:"Inversion — V · S · A · (V)",
 rule:"If anything other than the subject comes first, the verb and subject swap. That includes a time expression, an adverb, or a whole subordinate clause.",
 ex:["Næste år <b>vil jeg</b> gerne flytte tilbage til Tyskland.","Om sommeren <b>cykler jeg</b> som regel på arbejde.","Når det er sommer, <b>cykler jeg</b> som regel på arbejde.","Mandag den 2. <b>kan jeg</b> ikke."],
 trap:"A leading subordinate clause counts as \"first position\". The main clause then starts with its verb — this is the single most common written mistake at modul 3."},

{g:"order", src:"both", ref:"Notes · Book p.56", title:"★ Ledsætning — S · A · V",
 rule:"In a subordinate clause the central adverb comes <b>before</b> the verb. This is the opposite of a main clause, and it is what the test looks for.",
 table:[["Hovedsætning","Han taler <b>ikke</b> dansk."],["Ledsætning","… fordi han <b>ikke</b> taler dansk."]],
 ex:["Han cykler på arbejde, når han <b>ikke er</b> træt.","Jeg ved, at hun <b>altid kommer</b> for sent.","Fordi han <b>ikke kunne</b> tale dansk, tog han et kursus."],
 star:true},

{g:"order", src:"book", ref:"Book p.56", title:"at + S (+A) + V¹ (+V²)",
 rule:"A clause starting with <b>at</b> always takes subordinate word order.",
 ex:["Asger: „Min morfar kan godt lide orden og systemer.“ → Asger siger, <b>at</b> hans morfar (S) <b>godt</b> (A) <b>kan</b> (V¹) <b>lide</b> (V²) orden og systemer.",
     "Ariana: „Min mor vil helst bare hygge sig derhjemme.“ → Ariana siger, <b>at</b> hendes mor helst bare vil hygge sig derhjemme."]},

{g:"order", src:"book", ref:"Book p.56", title:"der (=S) + A + V¹ (+V²)",
 rule:"A relative clause starting with <b>der</b> also takes subordinate word order. <i>Der</i> is itself the subject.",
 ex:["Rebecca: „Min søster hænger altid ud med sine venner.“ → Rebecca har en søster, <b>der</b> (S) <b>altid</b> (A) <b>hænger</b> (V) ud med sine venner.",
     "Asger har en bror, <b>der</b> altid har gang i titusinde ting på samme tid.",
     "Jonas har en onkel, <b>der</b> bare passer sig selv og lever sit liv."]},

/* ───────── RELATIV ───────── */
{g:"rel", src:"both", ref:"Notes · Book p.34–35", title:"★ der or som?",
 rule:"<b>der</b> can only be the <b>subject</b> of the relative clause. <b>som</b> can be either subject or object. So when in doubt, <i>som</i> is never wrong — but <i>der</i> as an object always is.",
 table:[["Subject","der <i>or</i> som"],["Object","som only"],["Object","… or nothing at all"]],
 ex:["Jeg gik på et spanskkursus, <b>der/som</b> (S) var ret inspirerende.",
     "Ask prøver at tale finsk med de finner, <b>som</b> (O) han møder i Finland.",
     "Læreren underviste på en måde, <b>som</b> (O) hun rigtig godt kunne lide.",
     "Læreren underviste på en måde, <b>(–)</b> hun rigtig godt kunne lide."],
 trap:"Test yourself with the English: if you could say <i>that</i> or nothing (\"the way she liked\"), it's an object → som or nothing. If you'd need <i>who/which</i> as the doer, it's a subject → der or som.",
 star:true},

/* ───────── ADJEKTIVER ───────── */
{g:"adj", src:"notes", ref:"Notes", title:"★ The three forms",
 rule:"An adjective agrees with its noun: n-form for en-words, t-form for et-words, e-form for everything plural or definite.",
 table:[["n-form","en stor bil · en rød bog · en pæn taske"],
        ["t-form","et stort hus · et rødt flag · et pænt bord"],
        ["e-form","2 store biler · 2 røde bøger · 2 pæne borde"]],
 ex:["Den er stor / rød / pæn — Det er stort / rødt / pænt — De er store / røde / pæne.","Jeg/du/han/hun er pæn — Vi/I/de er pæne."],
 star:true},

{g:"adj", src:"notes", ref:"Notes", title:"When you must use the e-form",
 rule:"Four triggers. Learn the list, not the feeling.",
 table:[["Plural","2 store huse"],["After den/det/de","den store bil · det store hus · de store tasker"],["After a possessive","min store bil · din store bil · hans store bil"],["After a genitive","Peters røde bil · mormors store hus"],["Contraction","adjectives in -el/-en/-er lose the e: gammel → <b>gamle</b> · sulten → <b>sultne</b> · lækker → <b>lækre</b>"]]},

{g:"adj", src:"notes", ref:"Notes + standard usage", title:"t-form traps",
 rule:"Not every adjective takes -t.",
 table:[["Already ends in -e","moderne, stille, øde → no change: <i>et moderne hus</i>"],
        ["Ends in -sk","dansk, politisk → usually no -t: <i>et dansk flag</i>"],
        ["Ends in -t","sort, let → no extra t: <i>et sort hus</i>"],
        ["Ends in a vowel","ny → <b>nyt</b> · fri → <b>frit</b> · blå → <b>blåt</b>"]]},

{g:"adj", src:"book", ref:"Chapter 2 texts", title:"Comparison — used constantly in chapter 2",
 rule:"Short adjectives add -ere / -est. Long ones and most -isk / -et adjectives use mere / mest.",
 table:[["Short","dyb → dybere → dybest · tæt → tættere → tættest · sjov → sjovere → sjovest"],
        ["Long","oprigtig → mere oprigtig → mest oprigtig · interesseret → mere interesseret"],
        ["Irregular","stor → større → størst · god → bedre → bedst · mange → flere → flest · lille → mindre → mindst · gammel → ældre → ældst"]],
 ex:["Venskaber med danskere er <b>dybere</b> og <b>mere oprigtige</b>.","Han var <b>lige så</b> interesseret i at cykle <b>som</b> mig.","<b>Jo</b> flere ting vi kan tjekke af, <b>jo</b> større potentiale er der for venskab.","Hvad er den <b>mindst</b> vigtige ting ved en god ven?"]},

/* ───────── SUBSTANTIVER ───────── */
{g:"noun", src:"notes", ref:"Notes", title:"The four forms",
 rule:"Every noun has four: indefinite and definite, singular and plural. The definite article is a <i>suffix</i>, not a separate word.",
 table:[["","ubestemt → bestemt"],["Ental","et bord → bord<b>et</b> · en dag → dag<b>en</b>"],["Flertal","bord<b>e</b> → bord<b>ene</b> · dag<b>e</b> → dag<b>ene</b>"],["-er plural","en uge → uger → ug<b>erne</b> · en måned → måneder → måned<b>erne</b>"],["No ending","et år → år → år<b>ene</b>"]]},

{g:"noun", src:"notes", ref:"Notes", title:"Tælleligt og utælleligt",
 rule:"Countable and uncountable nouns take different quantity words.",
 table:[["Tælleligt","<b>mange</b> (many) · <b>flere</b> (more) — en bil, et æble, et hus"],["Utælleligt","<b>meget</b> (much) · <b>mere</b> (more) — vand, kaffe, kærlighed"]],
 ex:["Jeg har <b>mange</b> biler. · Har du <b>flere</b> æbler?","Jeg har <b>meget</b> kaffe. · Er der <b>mere</b> vand?"]},

/* ───────── ADVERBIER ───────── */
{g:"adv", src:"notes", ref:"Notes", title:"★ Lange og korte adverbier",
 rule:"Long form = where something <b>is</b> (static). Short form = where something is <b>going</b> (movement).",
 table:[["Lange · STATIC","oppe · nede · ude · inde · henne · hjemme"],["Korte · MOVEMENT","op · ned · ud · ind · hen · hjem"]],
 ex:["Hun er <b>nede</b> i kantinen. — Han er gået <b>ned</b> på 1. sal.","Han arbejder <b>hjemme</b>. — Hun er gået <b>hjem</b>.","Jeg går <b>ned</b> i kiosken. Jeg er <b>nede</b> i kiosken nu.","Jeg sidder <b>oppe</b> på loftet. Jeg løber <b>op</b> på loftet."],
 trap:"Verbs of position — sidde, ligge, sove, læse, være, bo, arbejde — take the long form. Verbs of motion — gå, løbe, køre, springe, tage, flytte — take the short one.",
 star:true},

{g:"adv", src:"notes", ref:"Notes", title:"Centraladverbier — how to spot one",
 rule:"It modifies the verb or the whole sentence: only, also, still, not, unfortunately, of course, usually. Its position is what the word-order rules are about.",
 table:[["The list","(heller) ikke · også · gerne · godt · kun · (næsten) aldrig · bare · lige · tit · ofte · snart · altid · måske · selvfølgelig"]],
 ex:["Han taler dansk. → Han taler <b>ikke</b> dansk. → Han taler <b>måske</b> dansk. → Han taler <b>kun</b> dansk."]},

{g:"adv", src:"notes", ref:"Notes", title:"Frie adverbier — can start the sentence",
 rule:"Free adverbs may sit in first position. When they do, the sentence inverts.",
 table:[["The list","faktisk · selvfølgelig · nu · måske · som regel · nogle gange · heldigvis · desværre"]],
 ex:["<b>Faktisk er</b> hun ret dygtig og inspirerende.","<b>Selvfølgelig skal</b> vi ud og se Den lille havfrue.","<b>Nu bor</b> jeg i Danmark."]},

/* ───────── BINDEORD ───────── */
{g:"conj", src:"notes", ref:"Notes", title:"★ Which conjunctions change the word order",
 rule:"Main-clause conjunctions join two equal clauses and change nothing. Subordinate conjunctions start a ledsætning — and then the adverb moves in front of the verb.",
 table:[["Hovedsætning","og · men · eller · for · så"],["Ledsætning","fordi · når · da · hvis · at · før · selvom · mens · som · der"]],
 ex:["Han taler ikke dansk, <b>men</b> han forstår det. — <i>no change</i>","Han lærer dansk, <b>fordi</b> han <b>ikke</b> vil føle sig fremmed. — <i>adverb before verb</i>"],
 star:true},

{g:"conj", src:"notes", ref:"Notes", title:"på grund af · for at · fordi",
 rule:"Three ways to give a reason, each with a different thing after it.",
 table:[["på grund af","+ <b>noun</b> — because of"],["for at","+ <b>infinitive</b> — in order to"],["fordi","+ <b>whole clause</b> — because"]],
 ex:["Jeg flyttede til Danmark <b>på grund af</b> min vejleder.","Jeg flyttede til Danmark <b>for at</b> arbejde.","Jeg flyttede til Danmark, <b>fordi</b> jeg gerne ville prøve at bo i et andet land."]},

{g:"conj", src:"book", ref:"Book p.58 · answers p.68", title:"før / for — and the rest of the gap-fill set",
 rule:"<b>før</b> = before (time). <b>for</b> = for, or \"because\" in writing. They sound close and the book tests them together with <i>der, når, så, at, selvom</i>.",
 ex:["<b>Før</b> Johannes mødte sin kæreste, troede han ikke, han ville blive far.","… han kan ikke få børn, <b>for</b> han har en medfødt genfejl.","… et barn, <b>der</b> biologisk set ikke var mit.","Men <b>når</b> jeg kigger på Otto i dag, kan jeg ikke forstå, hvorfor jeg tøvede.","… <b>selvom</b> de har samme biologiske forældre."]},

/* ───────── TIDSUDTRYK ───────── */
{g:"time", src:"both", ref:"Notes · Book p.34", title:"★ The three that decide your tense",
 rule:"Learn these as fixed pairs — expression plus the tense it forces.",
 table:[["for … siden","+ <b>datid</b> — a year ago"],["i + duration","+ <b>førnutid</b> if still true — for 2½ years"],["om + period","+ <b>nutid/futurum</b> — in 2 months"]],
 ex:["Jeg <b>flyttede</b> til Danmark <b>for et år siden</b>.","Jeg <b>har boet</b> her <b>i to et halvt år</b>.","Jeg <b>flytter</b> tilbage til Italien <b>om to måneder</b>.","Vi <b>gik</b> på skiskole <b>i tre dage</b>. — <i>finished, so datid</i>"],
 trap:"<i>i tre dage</i> can take either tense — it depends whether the three days are over. That is exactly the judgement the test is checking.",
 star:true},

{g:"time", src:"both", ref:"Notes · Book p.34", title:"★ da or når?",
 rule:"<b>da</b> = one single time in the past. <b>når</b> = repeatedly, or in the future.",
 table:[["da","one occasion, past only"],["når","every time · whenever · in future"]],
 ex:["Jeg lærte at spille violin, <b>da</b> jeg var barn.","<b>Da</b> de var i Peru, lærte de lidt spansk.","<b>Når</b> jeg besøgte min mormor, sad hun altid og strikkede. — <i>past but repeated</i>","Jeg rejser hjem, <b>når</b> min kontrakt udløber.","Jeg savner vejret, <b>når</b> det regner her."],
 trap:"„Når“ in the past is possible — but only for something that happened again and again. One time in the past is always <i>da</i>.",
 star:true},

{g:"time", src:"book", ref:"Book p.34", title:"Tidsadverbier",
 rule:"Words and phrases that place an action in time. They usually sit in the adverb slot, or first with inversion.",
 table:[["The set","siden · nu · hver dag · for … siden · i · aldrig · altid · om · snart · endnu · lige · efterhånden · med tiden · i begyndelsen · til sidst"]],
 ex:["Tove har gået til yoga <b>siden</b> 2021.","<b>I begyndelsen</b> syntes jeg, det var svært, men <b>nu</b> har jeg vænnet mig til det.","Ahmed har haft køretimer <b>hver dag</b> i denne uge, for han skal <b>snart</b> til køreprøve.","De har <b>aldrig</b> lært at svømme, men de skal begynde <b>om</b> en måned."]},

/* ───────── FORVEKSLINGER ───────── */
{g:"pairs", src:"both", ref:"Notes", title:"★ ved / kender — to know",
 rule:"<b>kender</b> = familiar with a person or thing. <b>ved</b> = know a fact.",
 ex:["Jeg <b>kender</b> ikke din vejleder.","<b>Kender</b> du Lars Løkke? — Ja, jeg kender ham personligt.","<b>Ved</b> du, om der bor over 1 million mennesker i København?","Det <b>ved</b> jeg ikke."],
 trap:"<i>ved</i> is nearly always followed by <b>om</b>, <b>at</b> or a question word. <i>kender</i> is followed by a noun.",
 star:true},

{g:"pairs", src:"both", ref:"Notes · used all through ch.1–2", title:"★ synes / tror — to think",
 rule:"<b>synes</b> = a personal opinion, debatable. <b>tror</b> = a guess about a fact, checkable.",
 ex:["Jeg <b>synes</b>, at filmen er god.","Det er hårdt, <b>synes</b> jeg.","Jeg <b>tror</b>, at der bor over en million mennesker i København.","Jeg <b>tror</b>, at Mette Frederiksen bliver statsminister igen."],
 trap:"Opinions about people and things → synes. Predictions and guesses → tror. <i>Jeg tror, filmen er god</i> means you haven't seen it.",
 star:true},

{g:"pairs", src:"notes", ref:"Notes", title:"bare / lige — just",
 rule:"<b>lige</b> is about <i>time</i> — a moment ago, or briefly. <b>bare</b> is about the <i>thing</i> — only that and nothing else.",
 ex:["Jeg har <b>lige</b> købt en ny bluse. — <i>a minute ago</i>","Jeg har <b>bare</b> købt en ny bluse. — <i>and nothing more</i>","Jeg skal <b>lige</b> tjekke min kalender.","Du skal <b>bare</b> øve dig lidt."]},

{g:"pairs", src:"book", ref:"Chapter 2", title:"ligne / minde om — to resemble",
 rule:"<b>ligne</b> = look like or be like, direct. <b>minde om</b> = remind of, less direct.",
 ex:["Vi <b>ligner</b> nok meget hinanden.","Der <b>minder</b> vi nok også meget <b>om</b> hinanden.","Hvem i din familie <b>ligner</b> du mest?"],
 trap:"<b>hinanden</b> = each other. <b>sig selv</b> = himself/herself. <i>De ligner hinanden</i> ≠ <i>han ligner sig selv</i>."},

{g:"pairs", src:"book", ref:"Chapter 2", title:"både … og · hverken … eller · begge",
 rule:"Fixed pairs, and they are all over chapter 2's speaking tasks.",
 ex:["<b>Både</b> Anne <b>og</b> Jane synes, de ligner hinanden.","… <b>hverken</b> jeres gamle forældre <b>eller</b> dig.","De er <b>begge to</b> ret kreative.","Vi har mange ting <b>tilfælles</b>."]},

{g:"pairs", src:"notes", ref:"Notes + usage", title:"gerne / hellere / helst",
 rule:"One family, three degrees — the -ere / -st pattern again.",
 table:[["gerne","would like to"],["hellere","would rather"],["helst","would most of all"]],
 ex:["Jeg vil <b>gerne</b> lære at dykke.","Min kæreste vil <b>hellere</b> bo i Danmark.","Pjotr vil <b>helst</b> lære sprog sammen med andre."]},

{g:"pairs", src:"book", ref:"Chapter 1", title:"at lære — learn or teach",
 rule:"Danish uses one verb for both. Which one it is depends on whether there's a person object.",
 ex:["Jeg <b>lærer</b> dansk. — <i>I'm learning</i>","Min farfar <b>lærte</b> mig at svømme. — <i>taught me</i>","Jeg <b>lærer</b> nye folk <b>at kende</b>. — <i>get to know</i>","Jeg skal <b>lære</b> alt <b>udenad</b>. — <i>memorise</i>"]},
];
