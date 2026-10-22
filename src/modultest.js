/* ═══ MODULTEST ═══
   Practice in the formats of the real DU3 modul 3 test (danskogproever.dk).
   Every text here is original, written on the book's themes for this page —
   the official samples in source/modultest/ are format reference only and
   never copied in.

   READ_T   reading tasks: cloze (opgave 1), chat (2A/2B), insert (3), match (4)
   WRITE_T  writing prompts: klage (opgave 1) and mail (opgave 2), each with a model answer
   ORAL_T   oral task 1 topics with keywords and follow-ups, task 2 picture
            topics, and the phrase kits used by both the writing editor and
            the oral practice

   Shapes:
   cloze  {id, type, title, sub, text:"… {0} … {9} …", gaps:[{o:[3 options], a, w}]}
   chat   {id, type, title, x, y, sit, m:[5 messages from x], ex:"example reply after m[0]",
           opts:[6 replies], key:[option index after m[1], m[2], m[3]], w:[3]}
   insert {id, type, title, paras:[{t:"… ___ …", o:[4 sentences], a, w}]}
   match  {id, type, title, people:[{n, t}×3], qs:[{q:"Hvem …?", a:0–2, w}]}
   klage  {id, kind:"klage", title, sit, task, points:[4], model}
   mail   {id, kind:"mail", title, sit, from, mail, qs:[questions to answer], model}
   `w` is English and names the clue in the text.

   Progress is keyed by id (dtg3-test-v1). Renaming an id orphans its best
   score or draft, the same rule as everywhere else on the page. */

const READ_T = [
{id:"cl-loeb", type:"cloze", title:"Mit nye liv med løb", sub:"A personal blog post about starting to run",
 text:"Sidste forår {0} jeg at løbe. Jeg havde haft ondt i ryggen i lang tid, og min læge sagde, at jeg skulle bevæge mig {1} i hverdagen. I starten var det hårdt, {2} jeg kun kunne løbe fem minutter ad gangen.\n\nNu løber jeg tre gange om ugen sammen {3} en løbeklub. Vi mødes {4} parken klokken halv syv om morgenen. Det er hyggeligt at løbe sammen med de andre i klubben, og {5} har lært mig meget om træning og kost.\n\nJeg har aldrig været i så {6} form, som jeg er nu. Jeg sover bedre, og jeg har mere energi, {7} jeg kommer hjem fra arbejde. Min kone synes også, at jeg er blevet gladere. Hun har faktisk {8}, at hun vil starte i klubben i næste måned.\n\nHvis du gerne vil i gang, er mit bedste råd: Start langsomt, og find nogle søde mennesker, du kan løbe {9}.",
 gaps:[
  {o:["begynder","begyndte","begyndt"], a:1, w:"datid: 'sidste forår' is a finished time in the past."},
  {o:["flere","mange","mere"], a:2, w:"'bevæge sig' is not countable, so it is mere (more), not flere."},
  {o:["fordi","selvom","hvis"], a:0, w:"The second clause gives the reason it was hard, so fordi."},
  {o:["af","med","til"], a:1, w:"The fixed phrase is sammen med."},
  {o:["på","til","i"], a:2, w:"You are i a park; til would need movement (gå til parken)."},
  {o:["dem","de","deres"], a:1, w:"Subject of 'har lært' refers to 'de andre', so the subject form de."},
  {o:["godt","god","gode"], a:1, w:"'form' is an en-word, indefinite after 'så': god form."},
  {o:["da","som","når"], a:2, w:"A repeated, everyday situation in the present takes når."},
  {o:["besluttet","beslutter","beslutte"], a:0, w:"førnutid: 'har' + past participle besluttet."},
  {o:["for","med","af"], a:1, w:"'løbe med nogen' – the preposition stays at the end of the relative clause."}
 ]},
{id:"cl-arbejdsdag", type:"cloze", title:"Arbejdsdag i boligforeningen", sub:"A notice from the residents' board of a housing association",
 text:"Kære beboere\n\nLørdag den 14. maj holder vi arbejdsdag i boligforeningen, og vi håber, at mange har lyst {0} at være med. Vi vil plante nye blomster, male bænkene i gården og gøre cykelkælderen ren. Sidste år {1} der over 40 beboere, og det blev en rigtig {2} dag.\n\nVi starter klokken 10 med kaffe og rundstykker i fælleshuset. Alle kan være med – også børnene. Hvis du har haveredskaber, må du meget gerne tage {3} med.\n\nCykler, {4} ikke er blevet brugt i lang tid, bliver fjernet fra kælderen. Hvis du vil beholde din cykel, skal du sætte en seddel på {5} med dit navn og dit lejlighedsnummer senest den 10. maj.\n\nOm eftermiddagen {6} vi grillen, og bestyrelsen giver pølser og sodavand. Vi holder arbejdsdagen, {7} det regner – så rykker vi bare ind i fælleshuset.\n\nVi glæder os {8} at se jer!\n\nMed venlig hilsen\nBestyrelsen\n\nPS: Skriv til os {9} mail, hvis du har spørgsmål.",
 gaps:[
  {o:["for","på","til"], a:2, w:"The fixed phrase is have lyst til (at)."},
  {o:["kom","kommer","kommet"], a:0, w:"datid: 'sidste år' is a finished time in the past."},
  {o:["gode","god","godt"], a:1, w:"'dag' is an en-word, indefinite: en god dag."},
  {o:["den","dem","de"], a:1, w:"Object form, plural – it refers to 'haveredskaber'."},
  {o:["hvor","hvem","der"], a:2, w:"der is the subject of the relative clause about things (cykler); hvem is only for people."},
  {o:["dem","det","den"], a:2, w:"It refers to 'din cykel', an en-word, so den."},
  {o:["tænder","tændte","tændt"], a:0, w:"The barbecue is a future plan, so nutid (present with future meaning)."},
  {o:["fordi","selvom","da"], a:1, w:"The rain does not stop the plan – 'even if it rains', so selvom."},
  {o:["til","på","for"], a:0, w:"glæde sig til = look forward to something in the future."},
  {o:["med","i","på"], a:2, w:"Danish says på mail (by email)."}
 ]},
{id:"cl-frivillig", type:"cloze", title:"Frivillig i genbrugsbutikken", sub:"An email offering to volunteer in a second-hand shop",
 text:"Kære Lone\n\nJeg skriver til dig, {0} jeg har set jeres opslag om frivillige til genbrugsbutikken. Jeg vil meget gerne arbejde {1} jer et par timer om ugen.\n\nJeg hedder Ana, er 34 år og kommer fra Portugal. Jeg {2} i Danmark i tre år, og jeg arbejder som sygeplejerske på sygehuset. For fem år siden {3} jeg i en tøjbutik i Lissabon, så jeg har erfaring {4} kunder og kasseapparat.\n\nJeg er glad for at møde nye mennesker, og jeg synes, at frivilligt arbejde er en god måde at blive bedre {5} dansk på. Mine kolleger siger, at jeg er rolig og {6} – jeg kommer aldrig for sent!\n\nJeg har fri {7} tirsdagen og torsdagen, men jeg kan også arbejde i weekenden, {8} I mangler folk.\n\nJeg håber at høre fra {9}.\n\nVenlig hilsen\nAna Costa",
 gaps:[
  {o:["selvom","fordi","hvis"], a:1, w:"Seeing the notice is the reason she writes, so fordi."},
  {o:["til","af","for"], a:2, w:"arbejde for nogen = work for someone."},
  {o:["bor","har boet","boede"], a:1, w:"førnutid: she came three years ago and still lives here ('i tre år' up to now)."},
  {o:["arbejder","arbejdede","arbejdet"], a:1, w:"datid: 'for fem år siden' is a finished time in the past."},
  {o:["med","af","i"], a:0, w:"The fixed phrase is erfaring med."},
  {o:["for","til","af"], a:1, w:"være/blive god til noget – bedre til dansk."},
  {o:["stabile","stabilt","stabil"], a:2, w:"Describes 'jeg' (one person, en-form), like 'rolig' before it: stabil."},
  {o:["i","til","om"], a:2, w:"Something that happens every Tuesday and Thursday: om tirsdagen."},
  {o:["hvis","fordi","selvom"], a:0, w:"A condition – only if they need people – so hvis."},
  {o:["din","du","dig"], a:2, w:"Object form after a preposition: fra dig."}
 ]},
{id:"cl-sankthans", type:"cloze", title:"Min første sankthansaften", sub:"A short blog post about celebrating Midsummer Eve",
 text:"I går var jeg til sankthans for første gang. Min nabo Birthe {0} mig med ned til stranden, hvor der var bål og mange mennesker. Hun havde taget et tæppe og en kurv {1} mad med.\n\nFørst sang alle en gammel sang. Jeg kendte {2} ikke, men Birthe gav mig et papir med teksten. Bagefter tændte de bålet. Øverst på bålet sad en heks af papir og halm. Birthe fortalte, at {3} bedstemor også fejrede sankthans på den samme strand, da hun var barn.\n\nDet var en {4} aften. Solen gik først ned klokken ti, og børnene legede {5} stranden hele aftenen. Jeg talte med {6} af naboerne, som jeg aldrig havde mødt før.\n\nDa vi gik hjem, var klokken næsten midnat. Jeg var træt, {7} jeg var også meget glad. Næste år vil jeg gerne {8} min mand og vores børn med, {9} de var hjemme i Spanien i år.",
 gaps:[
  {o:["tager","tog","taget"], a:1, w:"datid: the story is about 'i går'."},
  {o:["af","om","med"], a:2, w:"en kurv med mad = a basket containing food."},
  {o:["dem","de","den"], a:2, w:"It refers to 'en gammel sang', an en-word, as object: den."},
  {o:["sin","hendes","hans"], a:1, w:"'bedstemor' is the subject of the at-clause, so sin is impossible; Birthe is a woman, so hendes."},
  {o:["dejlige","dejlig","dejligt"], a:1, w:"'aften' is an en-word, indefinite: en dejlig aften."},
  {o:["på","i","til"], a:0, w:"You are på stranden."},
  {o:["meget","mange","noget"], a:1, w:"'naboerne' can be counted, so mange."},
  {o:["fordi","eller","men"], a:2, w:"Tired but happy – a contrast, so men."},
  {o:["tage","tager","tog"], a:0, w:"After a modal verb (vil) comes the infinitive: tage."},
  {o:["når","hvis","fordi"], a:2, w:"It gives the reason they were not there, so fordi."}
 ]},

{id:"ch-personalefest", type:"chat", title:"Personalefesten", x:"Sofie", y:"Ahmed", sit:"Sofie skriver til sin kollega Ahmed.",
 m:["Hej Ahmed! Har du set, at der er personalefest på fredag?",
    "Ja, men jeg ved ikke, hvad jeg skal have på. Står der noget om det i mailen?",
    "Jeg har en ny kjole, som jeg aldrig har brugt. Den tager jeg på. Skal vi følges derhen?",
    "Jeg bor på Vestergade 12, lige ved siden af bageren. Men drikker du så ikke noget til festen?",
    "Nej, det passer mig fint. Så ses vi på fredag!"],
 ex:"Ja, jeg har lige læst mailen. Skal du med?",
 opts:["Nej tak, jeg tager cyklen. Det er kun ti minutter fra mit hus.",
       "Ja, det er en god idé. Jeg kan hente dig i bil, hvis du vil. Hvor bor du egentlig?",
       "Det ved jeg ikke. Jeg har desværre ikke tid til at komme, for min søn har fødselsdag.",
       "Nej, det gør jeg ikke. Jeg skal tidligt op på lørdag, så jeg kører hjem ved ellevetiden. Er det for tidligt for dig?",
       "Ja, der står, at vi skal have pænt tøj på. Jeg tager nok en skjorte på. Hvad med dig?",
       "Jo, men kun et enkelt glas vin. Hvad tid starter festen egentlig?"],
 key:[4,1,3],
 w:["Ahmed answers the question about clothes and asks 'Hvad med dig?' – Sofie then says what she will wear.",
    "Ahmed offers a lift and asks where she lives – Sofie answers with her address.",
    "Ahmed says he will not drink and asks if eleven is too early – Sofie answers 'Nej, det passer mig fint'."]},

{id:"ch-fyrre-aar", type:"chat", title:"Fødselsdagsfesten", x:"Mikkel", y:"Laura", sit:"Mikkel skriver til sin veninde Laura.",
 m:["Hej Laura! Jeg fylder 40 den 3. juni og holder fest i haven. Har du lyst til at komme?",
    "Vi starter klokken 15 med kaffe og kage, og senere griller vi. Må jeg bede dig om en tjeneste?",
    "Kunne du bage en kage? Du laver jo verdens bedste chokoladekage.",
    "Vi bliver cirka 30, men min mor bager også. Så én kage er nok.",
    "Ingenting! Jeg er bare glad for, at du kommer. Men en god flaske vin siger jeg aldrig nej til."],
 ex:"Tillykke på forhånd! Selvfølgelig vil jeg det. Hvad tid starter festen?",
 opts:["Perfekt. Hvad ønsker du dig egentlig i fødselsdagsgave?",
       "Nej, desværre. Jeg har ikke tid til at hjælpe, for jeg arbejder hele weekenden.",
       "Ja, selvfølgelig. Hvad skal du have hjælp til?",
       "Det kan jeg desværre ikke, for min ovn er gået i stykker. Kan jeg tage en salat med i stedet?",
       "Ja, det kan jeg godt. Skal den være med jordbær eller chokolade?",
       "Det vil jeg gerne. Hvor mange gæster kommer der?"],
 key:[2,5,0],
 w:["Laura agrees and asks what he needs help with – Mikkel then asks for a cake.",
    "Laura asks how many guests are coming – Mikkel answers 'Vi bliver cirka 30'.",
    "Laura asks what he wants as a present – Mikkel answers 'Ingenting!'."]},

{id:"ch-naboens-planter", type:"chat", title:"Planterne", x:"Karin", y:"Omar", sit:"Karin skriver til sin nabo Omar.",
 m:["Hej Omar. Det er Karin fra 2. sal. Er du hjemme i næste uge?",
    "Vi skal på ferie i Italien fra mandag til søndag. Vil du vande vores planter, mens vi er væk?",
    "Kun seks i stuen og et citrontræ på altanen. Det skal have meget vand, når det er varmt.",
    "Jeg lægger en nøgle i din postkasse søndag aften. Kan du også tage vores post ind?",
    "Bare læg den på køkkenbordet. Tusind tak, Omar! Vi tager noget god olivenolie med hjem til dig."],
 ex:"Hej Karin. Ja, jeg er hjemme hele ugen. Hvorfor spørger du?",
 opts:["Nej, jeg er desværre ikke god til planter. Kan du ikke spørge en anden nabo?",
       "Det er ikke noget problem. Hvordan kommer jeg ind i lejligheden?",
       "Det kan jeg desværre ikke, for jeg har ikke en nøgle til jeres postkasse.",
       "Ja, det vil jeg gerne. Hvor mange planter har I?",
       "Selvfølgelig. Hvor skal jeg lægge den?",
       "Okay. Skal jeg også vande citrontræet på altanen?"],
 key:[3,1,4],
 w:["Omar says yes and asks how many plants there are – Karin answers 'Kun seks …'.",
    "Omar asks how he gets into the flat – Karin answers that she will leave a key.",
    "Omar agrees to take in the post and asks where to put it – Karin says 'på køkkenbordet'."]},

{id:"ch-radiatoren", type:"chat", title:"Radiatoren", x:"Nadia", y:"Henrik", sit:"Nadia skriver til sin udlejer, Henrik.",
 m:["Hej Henrik. Det er Nadia fra lejligheden på Nørregade. Radiatoren i soveværelset virker ikke.",
    "Siden i fredags. Vi har prøvet at lukke luften ud af den, men det hjalp ikke.",
    "Nej, vi arbejder begge to. Men min mand har fri på torsdag.",
    "Ja, det kan han godt. Skal vi betale for reparationen?",
    "Ja, vi har lånt en af min søster. Tak for hjælpen!"],
 ex:"Hej Nadia. Det er jeg ked af at høre. Hvor længe har den været kold?",
 opts:["Torsdag passer fint. Kan han være hjemme mellem klokken 8 og 12?",
       "Har I prøvet at lukke luften ud af radiatoren?",
       "Nej, det betaler jeg. Har I en elradiator, I kan bruge indtil da?",
       "Det er fint. Så sender jeg ham på fredag i stedet.",
       "Nej, det skal I ikke. Det er min opgave som udlejer.",
       "Okay, så sender jeg en VVS-mand. Er I hjemme i morgen formiddag?"],
 key:[5,0,2],
 w:["Henrik asks if they are home tomorrow morning – Nadia answers 'Nej, vi arbejder begge to'.",
    "Henrik accepts Thursday and asks if the husband can be home 8–12 – Nadia answers 'Ja, det kan han godt'.",
    "Henrik will pay and asks about an electric heater – Nadia answers that they borrowed one."]},

{id:"ch-badminton", type:"chat", title:"Badmintonklubben", x:"Ali", y:"Hanne", sit:"Ali skriver til Hanne fra den lokale badmintonklub.",
 m:["Hej Hanne. Jeg vil gerne begynde at spille badminton i jeres klub. Er der stadig ledige pladser?",
    "Kun lidt, da jeg var barn. Hvornår træner begynderholdet?",
    "Ja, mandag er perfekt. Hvad koster det at være medlem?",
    "Nej, jeg har ikke noget udstyr endnu. Skal jeg købe det, før jeg starter?",
    "Ja, gerne! Jeg glæder mig. Vi ses i hallen på mandag."],
 ex:"Hej Ali. Ja, der er plads på vores hold for begyndere. Har du spillet før?",
 opts:["Ja, du skal have dine egne sko og en ketsjer. Hvilken størrelse sko bruger du?",
       "Hver mandag fra klokken 19 til 20.30 i hallen ved skolen. Passer det dig?",
       "Det er gratis for begyndere. Hvilken dag passer dig bedst?",
       "Nej, det behøver du ikke. Du kan låne en ketsjer de første par gange. Vil du komme allerede på mandag?",
       "Velkommen! Har du nogensinde prøvet at spille badminton?",
       "Det koster 900 kroner for et halvt år. Har du selv en ketsjer?"],
 key:[1,5,3],
 w:["Hanne gives the training time and asks 'Passer det dig?' – Ali answers 'Ja, mandag er perfekt'.",
    "Hanne gives the price and asks if he has a racket – Ali answers that he has no equipment.",
    "Hanne says he can borrow a racket and asks if he will come on Monday – Ali answers 'Ja, gerne!'."]},

{id:"ch-dansklaereren", type:"chat", title:"Til danskundervisningen", x:"Elena", y:"Morten", sit:"Elena skriver til sin dansklærer, Morten.",
 m:["Hej Morten. Jeg kan desværre ikke komme til undervisningen på onsdag.",
    "Min datter er syg, så jeg skal blive hjemme med hende. Hvad skal I lave i timen?",
    "Ja, den har jeg. Hvilke sider skal jeg læse?",
    "Ja, det gør jeg. Men jeg forstår ikke helt forskellen på datid og førnutid.",
    "Ja tak, det vil jeg gerne. Jeg kan godt blive til klokken 16."],
 ex:"Hej Elena. Det er en skam. Er der sket noget?",
 opts:["Læs side 6 til 9, og lav opgave B. Kan du sende den til mig på mail bagefter?",
       "Det er ikke så svært. Kan du sende mig dine spørgsmål på mail?",
       "Vi skal arbejde med datid og førnutid. Har du bogen derhjemme?",
       "God bedring til hende! Vil du have, at jeg sender dig lektierne?",
       "Det er der mange, der synes er svært. Skal vi tale om det efter timen på mandag?",
       "Ja, der er mange opgaver i bogen. Har du lavet dem fra sidste uge?"],
 key:[2,0,4],
 w:["Morten says what the class will do and asks if she has the book – Elena answers 'Ja, den har jeg'.",
    "Morten gives the pages and asks her to email the exercise – Elena answers 'Ja, det gør jeg'.",
    "Morten offers to talk after Monday's class – Elena answers 'Ja tak' and says how long she can stay."]},

{id:"in-mariams-nye-hjem", type:"insert", title:"Mariams nye hjem",
 paras:[
  {t:"Mariam er 34 år og har boet i en lille lejlighed midt i København i otte år. Hun har altid været glad for livet i storbyen, men sidste år fik hun og hendes kæreste, Anders, en datter. ___ For lejligheden ligger på fjerde sal uden elevator, og der er hverken altan eller have. Mariam ville gerne have mere plads og et sted, hvor datteren kunne lege udenfor.",
   o:["Derfor vil hun aldrig flytte fra lejligheden.","Så begyndte lejligheden pludselig at føles alt for lille.","Og lejligheden er perfekt til en lille familie.","Men de har aldrig manglet plads."],
   a:1, w:"The next sentence starts with 'For' and lists problems (fourth floor, no lift, no garden), so the gap must be a complaint about the flat; A, C and D all say the flat is fine."},
  {t:"Mariam og Anders begyndte at kigge efter en bolig uden for byen. Huse i København var alt for dyre, og de havde ikke råd til at købe et. ___ Det var et gammelt rækkehus med tre værelser og en stor have i en lille by på Sjælland. Prisen var halvt så høj som for en lejlighed i København.",
   o:["Derfor besluttede de at blive boende i lejligheden.","Men de fandt aldrig noget, der var billigt nok.","De fandt en større lejlighed midt i byen.","Efter et halvt år fandt de endelig et hus, de kunne lide."],
   a:3, w:"'Det var et gammelt rækkehus' needs a house to point back to, and 'halvt så høj' shows they found something cheap. B says they never found anything cheap, C says a flat in the city, A says they stayed."},
  {t:"Flytningen var hård, men nu har familien boet i huset i et år. Anders arbejder stadig i København og pendler hver dag med toget. ___ Til gengæld kan han læse eller arbejde på sin computer, mens han sidder i toget. Og han synes, det er dejligt at komme hjem til ro og frisk luft om aftenen.",
   o:["Det tager næsten to timer om dagen.","Derfor har han fået et nyt job tæt på huset.","Han kører altid i bil, fordi der ikke går noget tog.","Turen er kort, så han er hjemme ved firetiden."],
   a:0, w:"'Til gengæld' (on the other hand) needs a drawback before it: the long journey. B contradicts 'arbejder stadig i København', C contradicts 'med toget', and D is not a drawback."},
  {t:"Mariam var lidt nervøs for, om hun kunne få nye venner i den lille by. ___ Allerede den første uge kom naboerne forbi med blomster og en kage, og de inviterede familien til grillaften i rækkehusenes fælles have. Nu mødes de tit, og børnene leger sammen næsten hver dag.",
   o:["Og det er stadig svært for hende at lære nogen at kende.","Hun kender nemlig ingen af naboerne endnu.","Men det viste sig at være meget nemmere, end hun troede.","Naboerne er nemlig ældre mennesker, som helst vil have ro."],
   a:2, w:"'Men' turns her worry around, and the rest of the paragraph proves it was easy (grillaften, 'mødes de tit'). A and B say she still has no contacts, D clashes with the neighbours' children and the party."},
  {t:"Der er kun én ting, Mariam savner fra København. ___ I den lille by er der kun et supermarked, et pizzeria og en café, som lukker klokken fem. Men hun fortryder ikke, at de flyttede. 'Jeg bytter gerne caféerne ud med haven og naboerne,' siger hun.",
   o:["Det er hendes gamle naboer i opgangen.","Det er de mange caféer og restauranter i hendes gamle kvarter.","Det er roen og den friske luft i hendes gamle kvarter.","Derfor vil hun gerne flytte tilbage til byen."],
   a:1, w:"The next sentence describes how few cafés the small town has, and she would 'bytte caféerne ud' for the garden. A clashes with her happiness about the new neighbours, C makes no sense for a flat in the middle of the city, and D contradicts 'fortryder ikke'."}
 ]},

{id:"in-tomas-kommer-i-form", type:"insert", title:"Tomas kommer i form",
 paras:[
  {t:"Tomas er 45 år og arbejder som buschauffør. Han sidder ned hele dagen, og om aftenen ser han tit fjernsyn på sofaen. I mange år tænkte han ikke over sin sundhed. ___ Lægen fortalte ham, at hans blodtryk var for højt, og at han burde begynde at dyrke motion.",
   o:["Han har nemlig altid trænet tre gange om ugen.","Og det gør han stadig ikke i dag.","Derfor gik han til lægen hvert år.","Men sidste forår fik han ondt i ryggen og måtte gå til lægen."],
   a:3, w:"'Lægen' (the doctor) in the next sentence needs a visit to point back to, and 'Men' marks the change after years of not caring. A contradicts the sofa life, B ignores the doctor's advice, and 'Derfor' in C makes no sense after 'tænkte ikke over sin sundhed'."},
  {t:"Tomas havde ikke lyst til at gå i fitnesscenter, for han synes, det er kedeligt at træne indenfor. ___ Hans nabo, Lars, løber hver morgen, og han tilbød at tage Tomas med. Den første tur var kun to kilometer, men Tomas var helt færdig bagefter.",
   o:["I stedet besluttede han at begynde at løbe.","Derfor meldte han sig ind i et fitnesscenter tæt på.","Så han købte en motionscykel til stuen.","Han ville hellere spille fodbold på et hold."],
   a:0, w:"The rest of the paragraph is about running with Lars ('Den første tur'). B contradicts 'ikke lyst til at gå i fitnesscenter', C is training indoors, D is football, not running."},
  {t:"De første uger var hårde. Tomas havde ondt i benene, og flere gange havde han lyst til at give op. ___ For han ville ikke skuffe Lars, som stod og ventede på ham ude på gaden hver morgen klokken seks. Efter en måned kunne han løbe fem kilometer uden at stoppe.",
   o:["Derfor holdt han op med at løbe efter to uger.","Så han løb kun, når han havde lyst.","Men han stod alligevel op hver morgen.","Og Lars løb tit alene, mens Tomas sov."],
   a:2, w:"'For han ville ikke skuffe Lars' explains why he kept going despite the pain, and after a month he runs 5 km. A says he stopped, B and D clash with 'hver morgen klokken seks'."},
  {t:"I dag løber Tomas fire gange om ugen, og han har tabt otte kilo. Han har også fået mere energi og sover bedre om natten. ___ Han spiser nu frugt i stedet for slik i pauserne, og han drikker vand i stedet for sodavand. Hans kone siger, at han er i meget bedre humør end før.",
   o:["Men hans madvaner er de samme som før.","Løbeturene har også fået ham til at spise sundere.","Til gengæld spiser han stadig meget slik.","Men han er blevet mere træt end før."],
   a:1, w:"The next sentence gives examples of healthier eating (frugt instead of slik). A and C say his diet has not changed, D contradicts 'mere energi'."},
  {t:"Til foråret vil Tomas og Lars løbe et halvmaraton sammen. Tomas er lidt nervøs, for 21 kilometer er langt. ___ Lars har nemlig lavet et træningsprogram til ham, og indtil nu har han fulgt det hver uge. 'Hvis nogen havde sagt det til mig for et år siden, havde jeg grinet,' siger Tomas.",
   o:["Derfor har han meldt fra igen.","Han har nemlig aldrig trænet efter et program.","Og Lars tror heller ikke, at han kan klare det.","Men han tror på, at han kan klare det."],
   a:3, w:"'Men' turns his nerves around, and 'nemlig' then gives the reason for his confidence: the training plan. A clashes with following the plan every week, B contradicts the plan, and Lars would not write a plan for a race he thinks Tomas cannot finish (C)."}
 ]},

{id:"in-hannes-frivillige-arbejde", type:"insert", title:"Hannes frivillige arbejde",
 paras:[
  {t:"Hanne er 67 år og gik på pension sidste år efter 40 år som sygeplejerske. I starten nød hun at have fri og sove længe om morgenen. ___ Hun savnede at have noget at stå op til og at være sammen med andre mennesker. Hendes mand spillede golf næsten hver dag, så hun var meget alene.",
   o:["Men efter nogle måneder begyndte hun at kede sig.","Og sådan har hun det stadig i dag.","Hun havde nemlig travlt med mange nye venner.","Derfor ville hun aldrig arbejde igen."],
   a:0, w:"'Men' marks the change from enjoying free time to missing something ('Hun savnede…'). B says she still enjoys it, C contradicts 'meget alene', D clashes with her missing something to get up for."},
  {t:"En dag så Hanne et opslag på biblioteket. En organisation søgte frivillige, som ville hjælpe flygtninge med at lære dansk. ___ For hun havde aldrig undervist før, og hun vidste ikke, om hun var god nok. Men hendes datter sagde, at hun skulle prøve.",
   o:["Hanne ringede med det samme og var slet ikke nervøs.","Men Hanne havde ikke tid til at hjælpe.","Hanne var interesseret, men også lidt usikker.","Hanne har undervist i mange år, så det passede perfekt."],
   a:2, w:"'For' explains a doubt: she had never taught and did not know if she was good enough. A says she was not nervous, D contradicts 'aldrig undervist', and the 'For' sentence does not explain B (no time)."},
  {t:"Nu hjælper Hanne en gruppe kvinder med deres dansk hver tirsdag og torsdag. De læser aviser, taler om nyheder og øver de ord, de skal bruge, når de går til lægen eller handler ind. ___ For de fleste af kvinderne arbejder om dagen, og de har ikke tid til at gå på sprogskole.",
   o:["De mødes klokken ti om formiddagen på biblioteket.","Undervisningen er om aftenen, så alle kan komme.","Kvinderne går også på sprogskole hver dag.","Men ingen af kvinderne har et arbejde."],
   a:1, w:"'For de fleste … arbejder om dagen' explains why the lessons are in the evening. A puts them in the morning, C contradicts 'ikke tid til at gå på sprogskole', D contradicts 'arbejder om dagen'."},
  {t:"Hanne får ingen løn for arbejdet, men hun synes, hun får noget, der er vigtigere. ___ En af kvinderne, Amina, fik for nylig sit første job i Danmark, og hun kom med blomster til Hanne for at sige tak. Det var en dag, Hanne aldrig glemmer.",
   o:["Derfor vil hun gerne have penge for det i fremtiden.","Men hun synes tit, at arbejdet er meningsløst.","Hun får nemlig 200 kroner i timen.","Hun føler, at hun gør en forskel for andre mennesker."],
   a:3, w:"The gap names the 'noget, der er vigtigere' than money, and Amina's new job and flowers prove it. A asks for money, B says it is meaningless, C contradicts 'ingen løn'."},
  {t:"Hanne har også selv lært meget. Hun ved nu meget mere om andre lande og kulturer, og hun har fået nye venner. ___ Hun var nemlig bange for at være for gammel til at lære nye ting. Nu anbefaler hun andre pensionister at prøve frivilligt arbejde.",
   o:["Det havde hun ikke regnet med, da hun startede.","Det vidste hun allerede, før hun startede.","Men hun har ikke lært noget nyt.","Derfor vil hun stoppe til sommer."],
   a:0, w:"'Hun var nemlig bange for at være for gammel' explains a surprise, so she did not expect to learn so much. B is the opposite, C contradicts 'lært meget', D contradicts 'anbefaler'."}
 ]},

{id:"in-ingers-store-dag", type:"insert", title:"Ingers store dag",
 paras:[
  {t:"Inger fylder 80 år i juni. Hun har tre børn og syv børnebørn, men de bor spredt over hele landet, og de ses kun til jul. ___ De vil holde en stor fest for hende i hendes have, men Inger må ikke vide noget om det. Det skal være en overraskelse.",
   o:["Inger har selv planlagt en stor fest.","Men i år kan ingen af dem komme.","Derfor har hendes børn fået en idé.","Og det har de ikke tænkt sig at ændre på."],
   a:2, w:"'De vil holde en stor fest' is the idea, and 'De' points back to her children. A contradicts 'må ikke vide noget', B clashes with the party, D says nothing will change although they plan to meet."},
  {t:"Ingers søn, Peter, står for planlægningen. Han har lejet et stort telt og bestilt mad til 40 gæster. ___ Inger har nemlig bagt den samme lagkage til alle familiens fødselsdage i 50 år, og nu vil familien bage den for hende. Peters datter, Sofie, har fundet opskriften i Ingers gamle kogebog.",
   o:["Men kagen vil familien lave selv.","Han har også bestilt en lagkage hos bageren.","Kagen køber de i supermarkedet på dagen.","Inger skal selv bage kagen, som hun plejer."],
   a:0, w:"'Men' sets the cake apart from what Peter ordered, and 'nemlig' explains why: the family will bake her own recipe. B and C say it is bought, and D says Inger bakes it herself."},
  {t:"Det svære er at få Inger hjem til festen, uden at hun opdager noget. ___ Hun vil tage Inger med i biografen om eftermiddagen, mens de andre gør klar i haven. Når de kommer hjem klokken seks, står hele familien og venter på dem.",
   o:["Derfor har de fortalt hende om festen.","Inger skal nemlig være hjemme hele dagen.","Men ingen i familien har en idé.","Ingers datter, Mette, har heldigvis en plan."],
   a:3, w:"'Hun vil tage Inger med i biografen' needs a woman with a plan to point back to: Mette. A ruins the surprise, B contradicts the trip to the cinema, C contradicts the plan that follows."},
  {t:"Dagen kommer, og alt går efter planen. Da Inger åbner havelågen, råber alle 'Tillykke!' og synger fødselsdagssang. ___ Hun havde slet ikke regnet med, at hele familien ville komme, og hun bliver så glad, at hun begynder at græde. 'Det er den bedste gave, I kunne give mig,' siger hun.",
   o:["Inger smiler og siger, at hun godt vidste det.","Men Inger er sur, fordi hun ikke kan lide overraskelser.","Inger bliver helt stille og ser overrasket på dem.","Inger bliver flov og beder alle om at gå hjem igen."],
   a:2, w:"The next sentence says she had not expected it at all, so she is surprised. A contradicts 'slet ikke regnet med', B contradicts 'så glad', and D contradicts 'så glad' and 'Det er den bedste gave'."},
  {t:"Festen varer til langt ud på natten. Der bliver holdt taler, og børnebørnene har lavet en film med gamle billeder af Inger. ___ Derfor har de besluttet at mødes hver sommer i Ingers have fra nu af. Inger glæder sig allerede til næste år.",
   o:["Men alle synes, at det er nok at ses til jul.","Alle er enige om, at de ses alt for sjældent.","Inger synes, at festen var alt for lang.","Næste dag er alle trætte og vil ikke ses foreløbig."],
   a:1, w:"'Derfor … mødes hver sommer' needs a reason: they see each other too seldom. A and D give the opposite reason, and C does not explain a new summer tradition."}
 ]},

{id:"mt-nyt-job", type:"match", title:"Tre personer fortæller om deres nye job",
 people:[
  {n:"Fatima", t:"Jeg har arbejdet som kok i restauranter i femten år, men i marts fik jeg et nyt job i kantinen på et stort kontor. I restauranten arbejdede jeg tit om aftenen og i weekenden, men nu møder jeg klokken seks og har fri klokken to. For første gang i mange år har jeg fri både lørdag og søndag, så jeg kan være sammen med mine børn. Lønnen er også lidt højere. Min chef, Bente, er den bedste chef, jeg har haft. Hun lytter til mine idéer og har givet mig ansvaret for menuen. Mange af gæsterne arbejder hjemmefra om fredagen, men det kan man jo ikke som kok. Jeg har altid drømt om at åbne min egen restaurant, men det er alt for dyrt. Heldigvis cykler jeg kun ti minutter til arbejde."},
  {n:"Mikkel", t:"Jeg er ingeniør og startede i en stor virksomhed for tre måneder siden. Jeg arbejder med bæredygtig energi, og opgaverne er meget spændende. Kontoret ligger i en anden by, så jeg bruger næsten en time hver vej i toget. Derfor arbejder jeg hjemmefra om mandagen og fredagen. Det er praktisk, men det betyder også, at jeg ikke kender mine kolleger så godt endnu. Mange af dem er kun på kontoret, når jeg er hjemme. Min chef sidder i Aarhus, og jeg ser hende kun en gang om måneden. Hun svarer heller ikke altid på mine mails, så må jeg tit selv finde ud af tingene. Lønnen er den samme som på mit gamle job, men jeg lærer meget mere. Nogle gange skal jeg arbejde om lørdagen, når et projekt skal være færdigt."},
  {n:"Rosa", t:"I otte år sad jeg på et kontor og svarede på mails fra kunder. Jeg arbejdede hjemmefra tre dage om ugen, og jeg kedede mig. Jeg har altid været god til at reparere ting, så sidste år sagde jeg op og åbnede mit eget cykelværksted. Det ligger i gården bag min lejlighed, så jeg skal kun gå 30 sekunder til arbejde. Jeg tjener ikke nær så meget som før, og jeg arbejder meget mere. Lørdag er min travleste dag, for så har folk tid til at hente deres cykler. Men jeg har ikke savnet min gamle chef et eneste sekund. Nu bestemmer jeg selv. Det eneste, jeg savner, er kolleger at drikke kaffe og snakke med. Til gengæld snakker jeg med mange søde kunder hver dag."}
 ],
 qs:[
  {q:"Hvem arbejder hjemme et par dage om ugen?", a:1, w:"Mikkel: 'arbejder jeg hjemmefra om mandagen og fredagen'. Fatima says 'det kan man jo ikke som kok', and Rosa only did it in her old job ('arbejdede hjemmefra')."},
  {q:"Hvem tjener mindre nu end i sit gamle job?", a:2, w:"Rosa: 'Jeg tjener ikke nær så meget som før'. Fatima's pay is 'lidt højere', and Mikkel's is 'den samme'."},
  {q:"Hvem har fri hver weekend?", a:0, w:"Fatima: 'fri både lørdag og søndag'. Mikkel sometimes works Saturdays, and Saturday is Rosa's busiest day."},
  {q:"Hvem kender endnu ikke sine kolleger særlig godt?", a:1, w:"Mikkel: 'jeg ikke kender mine kolleger så godt endnu'. Rosa has no colleagues at all, she misses having them, and Fatima says nothing like this."},
  {q:"Hvem har startet sin egen virksomhed?", a:2, w:"Rosa 'åbnede mit eget cykelværksted'. Fatima only dreams of her own restaurant ('det er alt for dyrt'), and Mikkel works for a big company."},
  {q:"Hvem har lang vej til arbejde?", a:1, w:"Mikkel: 'næsten en time hver vej i toget'. Fatima cycles ten minutes, and Rosa walks 30 seconds."},
  {q:"Hvem er glad for sin chef?", a:0, w:"Fatima: 'den bedste chef, jeg har haft'. Mikkel's boss rarely answers his mails, and Rosa has not missed her old boss 'et eneste sekund'."}
 ]},

{id:"mt-kollektiv", type:"match", title:"Tre personer fortæller om at bo i kollektiv",
 people:[
  {n:"Line", t:"Jeg bor i et stort, gammelt hus på landet sammen med ni andre mennesker. Den yngste er tre år, og den ældste er 71. Det handler ikke om penge for mig. Jeg kunne godt have råd til min egen lejlighed, men jeg vil ikke bo alene. Næsten hver aften spiser vi sammen i det store køkken, og vi skiftes til at lave mad. Vi har også en rengøringsplan, og alle følger den uden at brokke sig. Mine bofæller er blevet mine bedste venner, og vi holder fester og tager på ferie sammen. Når jeg har brug for at være alene, lukker jeg bare døren til mit værelse, og det respekterer de andre. Jeg kan ikke forestille mig at flytte herfra."},
  {n:"Omar", t:"Jeg flyttede ind i et kollektiv i byen for et år siden. Vi er fire studerende omkring 25 år, og vi deler køkken, stue og badeværelse. Huslejen er faktisk ikke billigere end i min gamle lejlighed, men jeg ville gerne bo sammen med andre. I starten prøvede vi at spise sammen, men nu laver alle deres egen mad. Det største problem er rengøringen. En af mine bofæller vasker aldrig op, og det irriterer mig meget. Jeg har sagt det til ham mange gange. Jeg savner også at have lidt ro. Der er altid nogen i stuen, og væggene er så tynde, at jeg hører alt. Vi er ikke rigtig venner, mere naboer. Men jeg har ikke tænkt mig at flytte. Det er trods alt hyggeligt at komme hjem til et hus med liv i."},
  {n:"Kasper", t:"Jeg bor i et kollektiv med tre andre fyre, som alle er på samme alder som mig. Jeg flyttede hertil, fordi huslejen er meget lav, og jeg har ikke råd til andet, mens jeg studerer. Om søndagen spiser vi sammen, men resten af ugen er vi sjældent hjemme samtidig. Jeg ser mest mine venner fra studiet. Jeg må indrømme, at det er mig, der roder mest. Mit tøj ligger overalt, men de andre er heldigvis ret afslappede og siger ikke noget. Jeg har ikke svært ved at få fred, for jeg har et stort værelse helt for mig selv øverst i huset. Til sommer flytter jeg sammen med min kæreste, så det er mit sidste halve år i kollektivet. Det bliver lidt mærkeligt."}
 ],
 qs:[
  {q:"Hvem bor i kollektiv, fordi det er billigt?", a:2, w:"Kasper: 'fordi huslejen er meget lav'. Omar's rent is 'ikke billigere', and Line says 'Det handler ikke om penge for mig'."},
  {q:"Hvem spiser sammen med de andre næsten hver dag?", a:0, w:"Line: 'Næsten hver aften spiser vi sammen'. Omar's house stopped eating together, and Kasper's only eats together on Sundays."},
  {q:"Hvem har svært ved at få ro derhjemme?", a:1, w:"Omar: 'Jeg savner også at have lidt ro … væggene er så tynde'. Line just closes her door, and Kasper says 'Jeg har ikke svært ved at få fred'."},
  {q:"Hvem bor sammen med både børn og ældre mennesker?", a:0, w:"Line: 'Den yngste er tre år, og den ældste er 71'. Omar lives with students of about 25, and Kasper with men his own age."},
  {q:"Hvem er irriteret over en bofælle, der ikke gør sin del af rengøringen?", a:1, w:"Omar: 'En af mine bofæller vasker aldrig op, og det irriterer mig'. Kasper is the messy one himself and is not irritated, and in Line's house 'alle følger den'."},
  {q:"Hvem skal snart flytte fra kollektivet?", a:2, w:"Kasper: 'Til sommer flytter jeg sammen med min kæreste'. Omar has 'ikke tænkt mig at flytte', and Line 'kan ikke forestille mig at flytte herfra'."},
  {q:"Hvem er blevet gode venner med sine bofæller?", a:0, w:"Line: 'Mine bofæller er blevet mine bedste venner'. Omar: 'Vi er ikke rigtig venner', and Kasper sees 'mest mine venner fra studiet'."}
 ]},

{id:"mt-laere-dansk", type:"match", title:"Tre personer fortæller om at lære dansk",
 people:[
  {n:"Elena", t:"Jeg kom til Danmark for to år siden, fordi min kæreste er dansk. Vi taler stadig engelsk sammen, og det er nok en fejl. Jeg arbejder i et internationalt firma, hvor alle taler engelsk, så jeg hører ikke ret meget dansk i løbet af dagen. Derfor går jeg på sprogskole to aftener om ugen, og jeg laver lektier hver dag i toget på vej hjem. Grammatikken går fint, men udtalen er virkelig svær for mig, især det bløde d. Jeg har prøvet at se danske serier, men de taler alt for hurtigt, så jeg gav op. Til gengæld er folk her søde og taler langsomt med mig. I sommer bestod jeg min første prøve, og det var jeg meget stolt af."},
  {n:"Raj", t:"Jeg er sygeplejerske og arbejder på et plejehjem. Det er det bedste sted at lære dansk, for de ældre taler ikke engelsk, og de har god tid til at snakke. Mine kolleger er også meget tålmodige og retter mig, når jeg siger noget forkert. Jeg går på sprogskole om formiddagen, men jeg har sjældent tid til at lave lektier, fordi jeg arbejder om aftenen. Udtalen er faktisk ikke så svær for mig, men grammatikken er et mareridt. Det, der gør mig ked af det, er, når jeg taler dansk i en butik, og de svarer på engelsk. Så føler jeg, at jeg ikke er god nok. Jeg har heller ikke tid til at se tv, men jeg lytter til danske podcasts i bussen. I december skal jeg op til modultest, og jeg er lidt nervøs."},
  {n:"Tom", t:"Jeg er fra Polen og har boet i Danmark i et år. Min kone er dansk, og vi har besluttet kun at tale dansk derhjemme, selvom det var svært i starten. Jeg har ikke fundet arbejde endnu, så jeg går på et dagkursus fem dage om ugen. Lektierne laver jeg mest i weekenden. Folk siger, at min udtale er god, og de forstår mig fint. Det svære er at forstå dem, især når de taler hurtigt. Derfor ser jeg danske tv-serier hver aften med danske undertekster, og det hjælper meget. Ingen skifter til engelsk med mig, for mit engelsk er endnu dårligere end mit dansk! Jeg har ikke tænkt mig at tage en prøve lige nu. Jeg lærer dansk for at kunne snakke med min kones familie."}
 ],
 qs:[
  {q:"Hvem øver sig meget på dansk på arbejdet?", a:1, w:"Raj: the plejehjem is 'det bedste sted at lære dansk', and colleagues correct him. At Elena's firm 'alle taler engelsk', and Tom has no job yet."},
  {q:"Hvem synes, det er sværest at udtale danske ord?", a:0, w:"Elena: 'udtalen er virkelig svær for mig'. Raj says pronunciation is 'ikke så svær', and people tell Tom 'min udtale er god'."},
  {q:"Hvem taler dansk med sin partner?", a:2, w:"Tom and his wife 'kun tale dansk derhjemme'. Elena and her Danish boyfriend 'taler stadig engelsk sammen', and Raj mentions no partner."},
  {q:"Hvem bliver ked af det, når danskerne svarer på engelsk?", a:1, w:"Raj: 'Det, der gør mig ked af det, er, når … de svarer på engelsk'. Nobody switches to English with Tom, and people speak slowly with Elena."},
  {q:"Hvem lærer dansk ved at se tv?", a:2, w:"Tom: 'ser jeg danske tv-serier hver aften'. Elena tried and 'gav op', and Raj has no time for tv (he uses podcasts)."},
  {q:"Hvem laver lektier hver dag?", a:0, w:"Elena: 'jeg laver lektier hver dag i toget'. Raj rarely has time, and Tom does his 'mest i weekenden'."},
  {q:"Hvem skal snart op til en prøve i dansk?", a:1, w:"Raj: 'I december skal jeg op til modultest'. Elena already passed hers last summer, and Tom has 'ikke tænkt mig at tage en prøve'."}
 ]},

{id:"mt-motionsvaner", type:"match", title:"Tre personer fortæller om deres motionsvaner",
 people:[
  {n:"Birgitte", t:"Jeg har spillet håndbold, siden jeg var otte år, og nu er jeg 52. I dag spiller jeg på et damehold i min lokale klub, og vi træner tirsdag og torsdag aften. Det bedste ved håndbold er fællesskabet. Vi er tolv kvinder på holdet, og efter træningen drikker vi tit en øl og spiser kage sammen. Jeg tænker ikke så meget over kosten. Jeg spiser det, jeg har lyst til. Det koster 1.500 kroner om året at være medlem af klubben, men det er pengene værd. Mange tror, at man slapper af, når man dyrker sport, men vores kampe kan faktisk være ret stressende. Jeg er heldig, for jeg har aldrig haft en alvorlig skade, selvom håndbold er en hård sport."},
  {n:"Yusuf", t:"Jeg spillede fodbold, fra jeg var lille, men for to år siden fik jeg en slem skade i knæet. Jeg kunne ikke gå ordentligt i flere måneder, og jeg måtte holde op med at spille. Det var en hård tid, men den fik mig til at tænke over min sundhed. Nu går jeg i fitnesscenter fire gange om ugen for at gøre mine muskler stærkere. Jeg træner klokken seks om morgenen, før jeg tager på arbejde, for så er der næsten ingen mennesker. Jeg træner altid alene med musik i ørerne. Jeg har også lavet om på min kost og spiser flere grøntsager og meget mindre slik end før. Det koster 299 kroner om måneden at være medlem. Det er ikke billigt, men jeg har fået mere energi og er i bedre humør."},
  {n:"Nanna", t:"Jeg begyndte først at løbe, da jeg fyldte 40. Før det havde jeg aldrig dyrket motion. Jeg har et stressende job som leder, og for mig handler løb om at få ro i hovedet. Når jeg løber, tænker jeg ikke på arbejdet. Jeg løber tre gange om ugen i skoven tæt på mit hus, og det koster ikke noget. Jeg plejede at løbe sammen med en veninde, men hun flyttede til Jylland sidste år, så nu løber jeg alene. Jeg er ikke et morgenmenneske, så jeg løber altid om aftenen, når jeg kommer hjem. Mange siger, at man får ondt i knæene af at løbe, men det har jeg aldrig haft. Jeg burde nok spise sundere, men jeg elsker chokolade."}
 ],
 qs:[
  {q:"Hvem træner sammen med andre?", a:0, w:"Birgitte plays on a team: 'Vi er tolv kvinder på holdet'. Yusuf 'træner altid alene', and Nanna's running friend moved away, so 'nu løber jeg alene'."},
  {q:"Hvem dyrker motion for at slappe af fra stress?", a:2, w:"Nanna: 'for mig handler løb om at få ro i hovedet'. Birgitte says her matches 'kan faktisk være ret stressende', and Yusuf trains to get stronger."},
  {q:"Hvem har været skadet?", a:1, w:"Yusuf: 'fik jeg en slem skade i knæet'. Birgitte has 'aldrig haft en alvorlig skade', and Nanna has never had sore knees."},
  {q:"Hvem træner, før arbejdsdagen begynder?", a:1, w:"Yusuf trains 'klokken seks om morgenen, før jeg tager på arbejde'. Birgitte trains in the evening, and Nanna is 'ikke et morgenmenneske'."},
  {q:"Hvem betaler ikke noget for at træne?", a:2, w:"Nanna runs in the forest, and 'det koster ikke noget'. Birgitte pays 1.500 kroner a year, and Yusuf 299 kroner a month."},
  {q:"Hvem har dyrket den samme sport siden barndommen?", a:0, w:"Birgitte has played handball 'siden jeg var otte år'. Yusuf had to stop football after his injury, and Nanna only started at 40."},
  {q:"Hvem spiser sundere nu end før?", a:1, w:"Yusuf: 'flere grøntsager og meget mindre slik end før'. Birgitte eats what she likes, and Nanna 'burde nok spise sundere' but does not."}
 ]}
];

const WRITE_T = [
{id:"kl-varme", kind:"klage", title:"Klage over varmen i lejligheden",
 sit:"Du bor i en lejlighed i Boligselskabet Lindegården. Varmen i din lejlighed har ikke virket i to uger, og der er stadig ingen, der er kommet for at reparere den.",
 task:"Skriv en klage til Boligselskabet Lindegården. Du skal fortælle:",
 points:["hvor du bor","hvad problemet er, og hvor længe det har varet","hvad du allerede har gjort for at løse problemet","hvad du forventer, at boligselskabet gør nu"],
 model:"Til Boligselskabet Lindegården\n\nJeg bor på Birkevej 12, 2. th., og jeg vil gerne klage over varmen i min lejlighed.\n\nDen 3. november holdt radiatorerne op med at virke, og siden da har det været meget koldt i lejligheden. Om morgenen er der kun 15 grader i stuen, så vi må sove med to dyner. Det er også et problem, fordi min datter på fire år er blevet forkølet.\n\nJeg ringede til ejendomskontoret den 4. november, og jeg har også skrevet to e-mails. Man lovede mig, at viceværten ville komme, men der er ikke kommet nogen endnu.\n\nJeg forventer, at I sender en håndværker i løbet af denne uge. Hvis det ikke sker, vil jeg bede om nedslag i huslejen.\n\nMed venlig hilsen\nAmira Hassan"},

{id:"kl-restaurant", kind:"klage", title:"Klage til restaurant Havnekøkkenet",
 sit:"Du har været på restaurant Havnekøkkenet for at fejre din kærestes fødselsdag. Aftenen blev en stor skuffelse.",
 task:"Skriv en klage til restauranten. Du skal fortælle:",
 points:["hvornår du var der, og hvorfor","hvad I bestilte","hvad der gik galt","hvad du forventer, at restauranten gør"],
 model:"Til Havnekøkkenet\n\nLørdag den 14. september var jeg på jeres restaurant sammen med min kæreste, fordi vi ville fejre hendes fødselsdag. Vi havde bestilt bord til kl. 19 en uge før.\n\nVi bestilte begge fiskesuppe som forret og bøf med pommes frites som hovedret. Desværre blev aftenen ikke, som vi havde håbet. Vi ventede over en time på hovedretten, og da den endelig kom, var bøffen kold. Da jeg sagde det til tjeneren, svarede han, at køkkenet havde travlt, og han gjorde ikke noget ved det.\n\nVi betalte 840 kr. for en dårlig oplevelse. Jeg håber, at I vil betale en del af pengene tilbage eller invitere os på en ny middag.\n\nMed venlig hilsen\nDaniel Moreno"},

{id:"kl-webshop", kind:"klage", title:"Klage over et spisebord fra en webshop",
 sit:"Du har købt et spisebord i webshoppen Nordisk Møbel. Bordet kom for sent, og det var i stykker.",
 task:"Skriv en klage til Nordisk Møbel. Du skal fortælle:",
 points:["hvad du købte, og hvornår","hvad der var galt med bordet og leveringen","hvad du har gjort for at kontakte firmaet","hvad du vil have, at webshoppen gør"],
 model:"Til Nordisk Møbel\n\nDen 2. oktober bestilte jeg et spisebord i eg på jeres hjemmeside. Det kostede 4.200 kr., og på hjemmesiden stod der, at leveringen ville tage tre til fem dage.\n\nBordet kom først efter tre uger, og da jeg pakkede det ud, så jeg, at der var en stor ridse i bordpladen. Et af benene var også knækket, så vi kan ikke bruge bordet.\n\nJeg har ringet til jeres kundeservice to gange, men jeg har ventet i telefonkø i over en halv time hver gang. Jeg har også sendt billeder af skaden, men jeg har ikke fået noget svar.\n\nJeg vil gerne have et nyt bord, og I skal hente det gamle hos mig. Hvis det ikke er muligt, forventer jeg at få pengene tilbage.\n\nMed venlig hilsen\nLinh Nguyen"},

{id:"kl-fitness", kind:"klage", title:"Klage til fitnesscentret PulsCenter",
 sit:"Du er medlem af fitnesscentret PulsCenter. I den sidste tid har du været meget utilfreds med centret.",
 task:"Skriv en klage til PulsCenter. Du skal fortælle:",
 points:["hvor længe du har været medlem","hvad du er utilfreds med","hvorfor det er et problem for dig","hvad du ønsker, at fitnesscentret gør"],
 model:"Til PulsCenter\n\nJeg har været medlem af jeres center på Nørregade i et år, og jeg betaler 299 kr. om måneden.\n\nDe sidste to måneder har jeg været meget utilfreds. Mange af holdene er blevet aflyst, og det er ofte sket med kun en times varsel. Desuden har tre af løbebåndene været i stykker siden august, og omklædningsrummet er tit beskidt.\n\nDet er et problem for mig, fordi jeg arbejder om dagen og kun kan træne om aftenen. Flere gange har jeg cyklet derhen forgæves, fordi holdet var blevet aflyst. Jeg vil gerne træne, fordi min læge har sagt, at jeg skal have mere motion.\n\nJeg ønsker, at I reparerer maskinerne og giver mig en gratis måned. Ellers vil jeg melde mig ud.\n\nMed venlig hilsen\nTomasz Nowak"},

{id:"kl-hotel", kind:"klage", title:"Klage til Hotel Fjordgården",
 sit:"Du har boet to nætter på Hotel Fjordgården i Vejle sammen med din familie. Opholdet var ikke, som det blev beskrevet på hotellets hjemmeside.",
 task:"Skriv en klage til hotellet. Du skal fortælle:",
 points:["hvornår du boede på hotellet","hvad du havde bestilt","hvad der ikke var i orden","hvad du forventer af hotellet"],
 model:"Til Hotel Fjordgården\n\nJeg boede på jeres hotel fra den 8. til den 10. august sammen med min mand og vores to børn.\n\nJeg havde bestilt et familieværelse med udsigt over fjorden og morgenmad inkluderet. Da vi kom, fik vi i stedet et lille værelse ud til parkeringspladsen. Badeværelset var ikke gjort rent, og der lå hår i bruseren. Om natten kunne vi ikke sove, fordi der var larm fra baren nedenunder. Om morgenen var der næsten ingen mad tilbage, selvom vi kom ned kl. 9.\n\nVi betalte 3.600 kr. for to nætter, og det er meget for sådan et ophold. Jeg forventer, at I betaler mindst halvdelen af pengene tilbage.\n\nMed venlig hilsen\nFatima Ali"},

{id:"kl-flyttefirma", kind:"klage", title:"Klage til flyttefirmaet Hurtig Flyt",
 sit:"Du er lige flyttet, og du brugte flyttefirmaet Hurtig Flyt. Der var mange problemer på flyttedagen.",
 task:"Skriv en klage til Hurtig Flyt. Du skal fortælle:",
 points:["hvornår du flyttede, og hvorfra og hvortil","hvad I havde aftalt","hvad der gik galt","hvad du forventer, at firmaet gør"],
 model:"Til Hurtig Flyt\n\nDen 1. juni flyttede jeg fra en lejlighed i Valby til et rækkehus i Glostrup, og jeg brugte jeres firma til flytningen.\n\nVi havde aftalt, at I ville komme kl. 8 med to flyttemænd, og at det ville koste 5.000 kr. Men flyttemændene kom først kl. 11, og de havde meget travlt. De pakkede ikke tingene ordentligt ind, og derfor gik et stort spejl i stykker. Min sofa fik også en stor plet. Fordi de kom for sent, skulle jeg desuden betale for to ekstra timer.\n\nJeg synes ikke, at det er rimeligt. Jeg forventer, at I betaler for et nyt spejl, og at jeg ikke skal betale for de ekstra timer.\n\nMed venlig hilsen\nAli Rezaei"},

{id:"ml-flytning", kind:"mail", title:"Svar til Sofie om din flytning",
 sit:"Du har fået en e-mail fra din veninde Sofie.",
 from:"Sofie",
 mail:"Hej!\n\nJeg har hørt fra Maja, at du er flyttet. Det er jo spændende! Hvor bor du nu, og hvorfor flyttede du? Hvordan er din nye bolig – er den større end den gamle? Og hvordan er området? Har du mødt nogle af dine naboer endnu?\n\nJeg vil meget gerne se det hele. Hvornår må jeg komme på besøg?\n\nKærlig hilsen\nSofie",
 qs:["hvor du bor nu","hvorfor du flyttede","hvordan din nye bolig er","hvordan området er","om du har mødt dine naboer","hvornår Sofie kan komme på besøg"],
 model:"Hej Sofie\n\nTak for din mail! Ja, jeg er flyttet til Aarhus. Jeg bor nu i en lejlighed med to værelser tæt på havnen.\n\nVi flyttede, fordi min kæreste har fået nyt arbejde her, og den gamle lejlighed var også for lille. Den nye lejlighed er større og meget lys, og vi har en altan, hvor vi kan spise om sommeren.\n\nOmrådet er dejligt. Der er en park og et supermarked lige om hjørnet, og jeg kan cykle til sprogskolen på ti minutter.\n\nJeg har mødt et par af naboerne. En uge efter at vi var flyttet ind, inviterede ægteparret ved siden af os på kaffe. De var meget søde!\n\nDu er altid velkommen. Kan du komme i weekenden den 15. november?\n\nKærlig hilsen\nAna"},

{id:"ml-nytjob", kind:"mail", title:"Svar til Jonas om dit nye job",
 sit:"Du har fået en e-mail fra din ven Jonas.",
 from:"Jonas",
 mail:"Hej!\n\nTillykke med det nye job! Din søster fortalte mig om det i går, og jeg er så glad på dine vegne. Hvad er det for et arbejde, og hvordan fandt du det? Hvordan er dine kolleger? Hvad laver du på en almindelig arbejdsdag? Og bruger du meget dansk på arbejdet?\n\nJeg har selv søgt nyt arbejde i et halvt år, så jeg er meget nysgerrig.\n\nSkriv snart og fortæl!\n\nMange hilsner\nJonas",
 qs:["hvad det er for et arbejde","hvordan du fandt jobbet","hvordan dine kolleger er","hvad du laver på en almindelig arbejdsdag","om du bruger meget dansk på arbejdet"],
 model:"Hej Jonas\n\nMange tak for din mail! Jeg er rigtig glad for det nye job. Jeg arbejder som lagermedarbejder i et firma, der sælger cykler.\n\nJeg fandt jobbet på Jobindex. Jeg sendte en ansøgning og mit CV, og en uge senere blev jeg kaldt til jobsamtale. Jeg var meget nervøs, men det gik godt.\n\nMine kolleger er søde og hjælpsomme. Vi spiser frokost sammen hver dag, og om fredagen spiller vi bordtennis efter arbejde.\n\nPå en almindelig dag møder jeg kl. 7. Først tjekker jeg ordrerne, og så pakker jeg varerne og gør dem klar til levering.\n\nJeg taler dansk hele dagen, fordi de fleste af mine kolleger er danske. Det er svært, men jeg lærer meget!\n\nMange hilsner\nOmar"},

{id:"ml-loeb", kind:"mail", title:"Svar til Line om at løbe",
 sit:"Du har fået en e-mail fra din veninde Line.",
 from:"Line",
 mail:"Kære …\n\nJeg så på Instagram, at du er begyndt at løbe! Det havde jeg ikke regnet med, for du plejede at sige, at du hadede sport. Hvad fik dig til at begynde? Hvor tit løber du, og hvor langt kan du løbe nu? Har du det bedre, efter at du er begyndt?\n\nJeg har også tænkt på at komme i gang. Måske kunne vi løbe sammen en dag?\n\nMange hilsner\nLine",
 qs:["hvorfor du begyndte at løbe","hvor tit du løber","hvor langt du kan løbe nu","om du har det bedre nu","om I kan løbe sammen"],
 model:"Hej Line\n\nTak for din søde mail! Ja, det er rigtigt. Jeg er faktisk begyndt at løbe.\n\nI foråret var jeg tit træt og stresset, og min læge sagde, at jeg skulle bevæge mig mere. Derfor meldte jeg mig ind i en løbeklub i august.\n\nNu løber jeg tre gange om ugen, to gange med klubben og en gang alene. I begyndelsen kunne jeg kun løbe to kilometer, men i sidste uge løb jeg syv kilometer uden at stoppe!\n\nJeg har det meget bedre nu. Jeg sover bedre om natten, og jeg har mere energi, når jeg kommer hjem fra arbejde.\n\nSelvfølgelig skal vi løbe sammen! Hvad med søndag formiddag i parken?\n\nMange hilsner\nYuki"},

{id:"ml-frivillig", kind:"mail", title:"Svar til Kasper om dit frivillige arbejde",
 sit:"Du har fået en e-mail fra din ven Kasper.",
 from:"Kasper",
 mail:"Hej!\n\nPå Facebook skrev du, at du er begyndt at arbejde frivilligt. Det lyder spændende! Hvor arbejder du, og hvad laver du der? Hvor mange timer bruger du på det om ugen? Hvorfor har du valgt at gøre det? Og har du lært noget nyt?\n\nJeg har selv tænkt på at blive frivillig, så jeg er meget nysgerrig.\n\nHilsen\nKasper",
 qs:["hvor du arbejder frivilligt","hvad du laver","hvor mange timer du bruger på det om ugen","hvorfor du har valgt at gøre det","om du har lært noget nyt"],
 model:"Hej Kasper\n\nTak for din mail. Hvor er det sjovt, at du spørger, for jeg er rigtig glad for mit frivillige arbejde.\n\nJeg arbejder i en genbrugsbutik, som Røde Kors har i mit kvarter. Jeg sorterer tøj, sætter priser på varerne og står nogle gange ved kassen. Jeg arbejder fire timer hver lørdag formiddag.\n\nJeg har valgt det, fordi jeg gerne ville tale mere dansk og møde nye mennesker. Da jeg kom til Danmark, kendte jeg ingen, men nu har jeg fået flere gode venner i butikken.\n\nJeg har lært mange nye ord, og jeg er blevet bedre til at tale med kunderne. Jeg har også lært, hvordan en butik fungerer.\n\nDu skal bare prøve det! Vi mangler faktisk flere frivillige.\n\nMange hilsner\nPriya"},

{id:"ml-kursus", kind:"mail", title:"Svar til Maria om dit madlavningskursus",
 sit:"Du har fået en e-mail fra din kollega Maria.",
 from:"Maria",
 mail:"Hej!\n\nHvordan går det med dit madlavningskursus? Du fortalte mig, at du skulle begynde i september. Hvor foregår det, og hvor tit mødes I? Hvordan er læreren og de andre på holdet? Hvad har I lavet indtil nu? Og ville du anbefale mig at tage det samme kursus?\n\nJeg har selv tænkt på at gå på et kursus til foråret, men jeg ved ikke, hvad jeg skal vælge.\n\nKærlig hilsen\nMaria",
 qs:["hvor kurset foregår, og hvor tit I mødes","hvordan læreren og holdet er","hvad I har lavet indtil nu","om du vil anbefale kurset"],
 model:"Kære Maria\n\nTak for din mail! Kurset går rigtig godt, og jeg glæder mig hver uge.\n\nKurset foregår på en aftenskole i centrum, og vi mødes hver tirsdag fra kl. 18 til 21.\n\nLæreren hedder Bente, og hun er meget sød og tålmodig. Vi er tolv på holdet, og de fleste er danskere, så jeg taler en masse dansk. Når vi har lavet maden, spiser vi alle sammen, og det er meget hyggeligt.\n\nIndtil nu har vi lavet frikadeller, rugbrød og æblekage. I sidste uge lavede vi flæskesteg, selvom det ikke er jul endnu. Jeg har lavet frikadeller derhjemme to gange siden.\n\nJa, jeg vil helt sikkert anbefale kurset, hvis du kan lide at lave mad. Der starter et nyt hold i januar.\n\nKærlig hilsen\nElena"},

{id:"ml-sommerhus", kind:"mail", title:"Svar til Henrik om din ferie",
 sit:"Du har fået en e-mail fra din kollega Henrik.",
 from:"Henrik",
 mail:"Hej!\n\nVelkommen tilbage fra ferie! Jeg håber, at du har haft nogle dejlige uger. Hvor holdt du ferie, og hvem var du sammen med? Hvad lavede I? Var I heldige med vejret? Og har du lyst til at tage derhen igen?\n\nHer på kontoret har der været meget stille, fordi halvdelen af afdelingen også har haft ferie. Jeg glæder mig til at høre om det hele.\n\nVi ses på mandag!\n\nHilsen\nHenrik",
 qs:["hvor du holdt ferie","hvem du var sammen med","hvad I lavede","hvordan vejret var","om du vil tage derhen igen"],
 model:"Hej Henrik\n\nTak for din mail! Ja, jeg har haft en dejlig ferie.\n\nVi lejede et sommerhus på Bornholm i en uge. Jeg var der sammen med min kone, vores søn og min svigermor.\n\nVi cyklede meget rundt på øen, og en dag sejlede vi til Christiansø. Om eftermiddagen badede vi i havet eller slappede af i haven, og om aftenen grillede vi tit. Min søn syntes, at det var sjovest at lede efter sten og muslinger på stranden.\n\nVi var heldige med vejret. Det regnede kun én dag, og da så vi en film og spillede kort.\n\nJeg vil gerne tilbage til Bornholm, fordi naturen er så smuk. Næste gang vil jeg også besøge Hammershus.\n\nVi ses på mandag!\n\nHilsen\nRavi"}
];

const ORAL_T = {
 topics:[
  {id:"arbejde", name:"Mit arbejde",
   keys:["arbejdsplads","stilling","arbejdstider","kolleger","arbejdsopgaver","arbejdsmiljø","løn","transport","fordele","ulemper","fremtiden"],
   follow:["Vil du fortælle lidt mere om dine arbejdsopgaver?","Hvordan fik du dit job?","Hvordan er en almindelig arbejdsdag for dig?","Hvad kan du bedst lide ved dit arbejde? Hvorfor?","Er der noget, du ikke kan lide ved dit arbejde? Hvorfor?","Hvordan er samarbejdet med dine kolleger?","Bruger du dansk på arbejdet? Kan du give et eksempel?","Er der forskel på at arbejde i Danmark og i dit hjemland?","Hvad vil du gerne arbejde med om fem år?"],
   starters:["Jeg vil fortælle om mit arbejde som …","Jeg har arbejdet som … i … år.","En almindelig arbejdsdag starter med, at …","Det, jeg bedst kan lide ved mit arbejde, er …","I fremtiden vil jeg gerne …"]},
  {id:"frivillig", name:"Mit frivillige arbejde",
   keys:["organisation","opgaver","ugentlige timer","andre frivillige","brugere","motivation","netværk","dansk","erfaring","glæde"],
   follow:["Hvordan fandt du dit frivillige arbejde?","Vil du fortælle lidt mere om, hvad du laver?","Hvorfor valgte du at blive frivillig?","Hvem møder du, når du arbejder frivilligt?","Kan du give et eksempel på en god oplevelse?","Hvad har du lært af det frivillige arbejde?","Arbejder man også frivilligt i dit hjemland? Hvordan?","Synes du, at alle burde arbejde frivilligt? Hvorfor? / Hvorfor ikke?"],
   starters:["Jeg arbejder frivilligt hos …","Jeg blev frivillig, fordi …","Hver uge bruger jeg … timer på …","Det bedste ved det er, at …","Jeg har lært, at …"]},
  {id:"jobsoegning", name:"Min jobsøgning",
   keys:["drømmejob","jobopslag","ansøgning","CV","jobsamtale","netværk","jobcenter","praktik","afslag","kvalifikationer","LinkedIn"],
   follow:["Hvilket job søger du? Hvorfor?","Hvordan finder du ledige stillinger?","Vil du fortælle lidt om, hvordan du skriver en ansøgning?","Har du været til jobsamtale? Hvordan gik det?","Hvad er det sværeste ved at søge job i Danmark?","Hvordan kan dit netværk hjælpe dig?","Hvad gør du, når du får et afslag?","Er det anderledes at søge job i dit hjemland? Hvordan?"],
   starters:["Jeg søger arbejde som …","Jeg har søgt job i … måneder.","Først læser jeg jobopslaget, og så …","Det sværeste er …, fordi …","Jeg håber, at jeg snart …"]},
  {id:"uddannelse", name:"Min uddannelse",
   keys:["fag","uddannelsessted","varighed","undervisning","eksamen","praktik","studiekammerater","SU","anerkendelse","fremtid"],
   follow:["Hvad er du uddannet som, eller hvad uddanner du dig til?","Hvorfor valgte du den uddannelse?","Hvor lang tid tager uddannelsen?","Vil du fortælle lidt mere om, hvordan undervisningen foregår?","Hvad var det sværeste ved uddannelsen?","Kan du bruge din uddannelse i Danmark?","Hvad vil du gerne bruge uddannelsen til i fremtiden?","Hvis du skulle vælge igen, ville du så vælge den samme uddannelse? Hvorfor?"],
   starters:["Jeg er uddannet … fra …","Jeg læser … på …","Jeg valgte uddannelsen, fordi …","Uddannelsen tog … år, og …","Efter uddannelsen vil jeg gerne …"]},
  {id:"laere-dansk", name:"Mine erfaringer med at lære dansk",
   keys:["sprogskole","udtale","grammatik","ordforråd","lektier","apps","danske venner","arbejdsplads","dansk tv","fremskridt","motivation"],
   follow:["Hvornår begyndte du at lære dansk?","Hvad synes du er sværest ved dansk? Hvorfor?","Hvad gør du for at øve dig uden for skolen?","Kan du give et eksempel på en sjov eller svær situation med sproget?","Hvem taler du dansk med i hverdagen?","Hvordan lærer du bedst nye ord?","Har du lært andre sprog før? Var det nemmere?","Hvad vil du bruge dansk til i fremtiden?"],
   starters:["Jeg har lært dansk i … år.","Jeg begyndte på sprogskolen, da …","Det sværeste ved dansk er …","For at blive bedre plejer jeg at …","Nu kan jeg …, men jeg vil gerne …"]},
  {id:"vaner", name:"Mine sunde og usunde vaner",
   keys:["kost","motion","søvn","rygning","alkohol","sukker","stress","skærmtid","morgenmad","gode intentioner"],
   follow:["Vil du fortælle lidt mere om, hvad du spiser i løbet af en dag?","Hvilken motion dyrker du? Hvor tit?","Hvad er din mest usunde vane? Hvorfor er den svær at stoppe?","Har du ændret dine vaner, efter at du kom til Danmark?","Hvordan har du det, når du ikke har sovet nok?","Er der forskel på, hvad man spiser i Danmark og i dit hjemland?","Hvad gør du, når du er stresset?","Hvad vil du gerne ændre i fremtiden? Hvorfor?"],
   starters:["Jeg prøver at leve sundt, men …","En af mine sunde vaner er, at jeg …","Min værste vane er nok …","Før i tiden …, men nu …","Jeg vil gerne blive bedre til at …"]},
  {id:"groenne-vaner", name:"Mine grønne vaner",
   keys:["affaldssortering","genbrug","cykel","offentlig transport","energiforbrug","madspild","kød","brugt tøj","plastik","klima"],
   follow:["Hvordan sorterer I affald, hvor du bor?","Vil du fortælle lidt mere om, hvordan du kommer rundt i hverdagen?","Køber du brugte ting? Hvorfor? / Hvorfor ikke?","Hvad gør du for at undgå madspild?","Hvordan sparer du på strøm og vand derhjemme?","Er der forskel på grønne vaner i Danmark og i dit hjemland?","Er der noget, du synes er svært at gøre grønt? Hvorfor?","Synes du, at politikerne skal gøre mere for klimaet?"],
   starters:["Jeg prøver at passe på miljøet ved at …","Hjemme hos os sorterer vi …","I stedet for at tage bilen …","Da jeg boede i …, …, men i Danmark …","Noget, jeg gerne vil blive bedre til, er …"]},
  {id:"arbejdsdeling", name:"Arbejdsdeling i min familie",
   keys:["husarbejde","madlavning","rengøring","indkøb","vasketøj","børnenes pligter","ligestilling","aftaler","uenighed","hjemland"],
   follow:["Hvem laver mad hjemme hos jer? Hvorfor?","Vil du fortælle lidt mere om, hvordan I deler rengøringen?","Har børnene nogen pligter? Hvilke?","Hvad kan du bedst og mindst lide at lave derhjemme?","Er I nogle gange uenige om husarbejdet? Kan du give et eksempel?","Hvordan var arbejdsdelingen i din familie, da du var barn?","Er der forskel på mænd og kvinder i dit hjemland, når det gælder husarbejde?","Synes du, at arbejdsdelingen hos jer er retfærdig? Hvorfor?"],
   starters:["Hjemme hos os deler vi arbejdet sådan her: …","Det er som regel min …, der …","Jeg står for …, og min … står for …","Da jeg var barn, …","Jeg synes, at det er vigtigt, at …"]},
  {id:"fritid", name:"Min fritidsinteresse",
   keys:["interesse","klub","træning","udstyr","pris","venner","konkurrence","begyndelse","glæde","dansk"],
   follow:["Hvornår og hvordan begyndte du med din interesse?","Vil du fortælle lidt mere om, hvad du laver, når du dyrker din interesse?","Hvor tit og hvor dyrker du den?","Er det dyrt? Hvad skal man have af udstyr?","Hvorfor er interessen vigtig for dig?","Har du fået nye venner gennem din fritidsinteresse?","Kan du give et eksempel på en særlig god oplevelse?","Vil du anbefale andre at prøve det? Hvorfor?"],
   starters:["I min fritid kan jeg godt lide at …","Jeg begyndte at …, da jeg …","Jeg … cirka … gange om ugen.","Det, jeg bedst kan lide ved …, er …","Hvis man vil prøve det, skal man …"]},
  {id:"digitale-vaner", name:"Mine digitale vaner",
   keys:["mobiltelefon","sociale medier","nethandel","MitID","netbank","digital post","streaming","skærmtid","nyheder","privatliv"],
   follow:["Hvor mange timer om dagen bruger du på din telefon?","Hvilke sociale medier bruger du? Hvorfor?","Køber du tit ting på nettet? Kan du give et eksempel?","Hvordan bruger du MitID og digital post i hverdagen?","Hvad er fordelene og ulemperne ved at gøre så meget digitalt?","Har du nogensinde prøvet at holde pause fra mobilen? Hvordan var det?","Bruger man internettet på samme måde i dit hjemland?","Hvad synes du om, at børn bruger mobiler og tablets?"],
   starters:["Jeg bruger min mobil til …","Det første, jeg gør om morgenen, er at …","I Danmark gør man meget digitalt, fx …","Fordelen ved … er, at …, men ulempen er, at …","Jeg prøver at bruge mindre tid på …"]},
  {id:"skole", name:"Min skole i mit hjemland",
   keys:["skolestart","skolevej","klasse","fag","lærere","skoleuniform","lektier","eksamener","frikvarter","disciplin","forskelle"],
   follow:["Hvor gammel var du, da du begyndte i skole?","Vil du fortælle lidt mere om en almindelig skoledag?","Hvilke fag kunne du bedst lide? Hvorfor?","Hvordan var forholdet mellem lærerne og eleverne?","Kan du give et eksempel på en god oplevelse fra skolen?","Hvad er den største forskel på din skole og en dansk skole?","Hvilket skolesystem synes du er bedst? Hvorfor?","Hvad husker du bedst fra din skoletid?"],
   starters:["Jeg gik i skole i …, fra jeg var … år, til jeg var …","Min skole lå …, og jeg gik derhen hver dag.","Mit yndlingsfag var …, fordi …","Dengang var det almindeligt, at …","Sammenlignet med danske skoler …"]}
 ],
 pics:[
  {id:"motion", emne:"Motion",
   intro:"Emnet er 'Motion'. Her er nogle billeder, der viser forskellige måder at dyrke motion på. I skal tale med hinanden om, hvad I synes om de forskellige måder at dyrke motion på, og hvorfor. I skal stille spørgsmål til hinanden og svare på hinandens spørgsmål.",
   scenes:[{da:"at løbe en tur alene i skoven",en:"going for a run alone in the woods",icon:"🏃"},{da:"at træne i et fitnesscenter",en:"working out in a gym",icon:"🏋️"},{da:"at spille fodbold på et hold",en:"playing football on a team",icon:"⚽"},{da:"at svømme i en svømmehal",en:"swimming in an indoor pool",icon:"🏊"}],
   probe:"Kan I lide at løbe alene i skoven / træne i et fitnesscenter / spille fodbold på et hold / svømme i en svømmehal? Hvorfor? / Hvorfor ikke?",
   qs:["Hvilken slags motion kan du bedst lide? Hvorfor?","Hvor tit dyrker du motion, og hvor gør du det?","Kan du fortælle lidt om, hvordan du dyrkede motion, da du var barn?"]},
  {id:"ferie", emne:"Ferie",
   intro:"Emnet er 'Ferie'. Her er nogle billeder, der viser forskellige måder at holde ferie på. I skal tale med hinanden om, hvad I synes om de forskellige måder at holde ferie på, og hvorfor. I skal stille spørgsmål til hinanden og svare på hinandens spørgsmål.",
   scenes:[{da:"at ligge på stranden i et varmt land",en:"lying on the beach in a warm country",icon:"🏖️"},{da:"at tage på storbyferie",en:"going on a city break",icon:"🏙️"},{da:"at campere i telt i naturen",en:"camping in a tent in nature",icon:"🏕️"},{da:"at blive hjemme og slappe af",en:"staying at home and relaxing",icon:"🛋️"}],
   probe:"Kan I lide at ligge på stranden / tage på storbyferie / campere i telt / blive hjemme i ferien? Hvorfor? / Hvorfor ikke?",
   qs:["Hvordan kan du bedst lide at holde ferie? Hvorfor?","Hvad lavede du i din sidste ferie?","Hvor vil du gerne rejse hen i fremtiden? Hvorfor?"]},
  {id:"bolig", emne:"At bo",
   intro:"Emnet er 'At bo'. Her er nogle billeder, der viser forskellige måder at bo på. I skal tale med hinanden om, hvad I synes om de forskellige måder at bo på, og hvorfor. I skal stille spørgsmål til hinanden og svare på hinandens spørgsmål.",
   scenes:[{da:"at bo i en lejlighed midt i byen",en:"living in a flat in the city centre",icon:"🏢"},{da:"at bo i et hus med have på landet",en:"living in a house with a garden in the countryside",icon:"🏡"},{da:"at bo i et rækkehus i en forstad",en:"living in a terraced house in a suburb",icon:"🏘️"},{da:"at bo i et kollektiv sammen med andre",en:"living in a shared house with other people",icon:"👥"}],
   probe:"Kan I lide at bo i en lejlighed i byen / i et hus på landet / i et rækkehus i en forstad / i et kollektiv? Hvorfor? / Hvorfor ikke?",
   qs:["Hvordan bor du nu? Hvad kan du lide og ikke lide ved det?","Hvordan boede du, da du var barn?","Hvordan vil du gerne bo om ti år? Hvorfor?"]},
  {id:"fester", emne:"Fester",
   intro:"Emnet er 'Fester'. Her er nogle billeder, der viser forskellige slags fester. I skal tale med hinanden om, hvad I synes om de forskellige slags fester, og hvorfor. I skal stille spørgsmål til hinanden og svare på hinandens spørgsmål.",
   scenes:[{da:"at være med til et stort bryllup",en:"attending a big wedding",icon:"💒"},{da:"at holde fødselsdag hjemme med familien",en:"having a birthday at home with the family",icon:"🎂"},{da:"at tage til julefrokost med kollegerne",en:"going to the Christmas party with colleagues",icon:"🎄"},{da:"at gå i byen og danse med vennerne",en:"going out dancing with friends",icon:"💃"}],
   probe:"Kan I lide at gå til bryllup / holde fødselsdag med familien / tage til julefrokost / gå i byen og danse? Hvorfor? / Hvorfor ikke?",
   qs:["Hvilken slags fester kan du bedst lide? Hvorfor?","Kan du fortælle om en fest, som du har været til for nylig?","Hvordan fejrer man fødselsdage i dit hjemland?"]},
  {id:"transport", emne:"Transport",
   intro:"Emnet er 'Transport'. Her er nogle billeder, der viser forskellige måder at komme rundt på. I skal tale med hinanden om, hvad I synes om de forskellige måder at komme rundt på, og hvorfor. I skal stille spørgsmål til hinanden og svare på hinandens spørgsmål.",
   scenes:[{da:"at cykle på arbejde",en:"cycling to work",icon:"🚲"},{da:"at tage toget eller bussen",en:"taking the train or the bus",icon:"🚆"},{da:"at køre i sin egen bil",en:"driving your own car",icon:"🚗"},{da:"at gå til fods",en:"walking",icon:"🚶"}],
   probe:"Kan I lide at cykle / tage toget eller bussen / køre bil / gå til fods? Hvorfor? / Hvorfor ikke?",
   qs:["Hvordan kommer du på arbejde eller i skole? Hvorfor?","Hvad synes du om at cykle i Danmark?","Hvordan kom du rundt, da du boede i dit hjemland?"]},
  {id:"aftensmad", emne:"Aftensmad",
   intro:"Emnet er 'Aftensmad'. Her er nogle billeder, der viser forskellige måder at spise aftensmad på. I skal tale med hinanden om, hvad I synes om de forskellige måder at spise aftensmad på, og hvorfor. I skal stille spørgsmål til hinanden og svare på hinandens spørgsmål.",
   scenes:[{da:"at lave mad fra bunden derhjemme",en:"cooking from scratch at home",icon:"🍲"},{da:"at spise ude på en restaurant",en:"eating out at a restaurant",icon:"🍽️"},{da:"at bestille takeaway og spise foran fjernsynet",en:"ordering takeaway and eating in front of the TV",icon:"🥡"},{da:"at gå til fællesspisning med naboerne",en:"eating a communal dinner with the neighbours",icon:"👨‍👩‍👧‍👦"}],
   probe:"Kan I lide at lave mad fra bunden / spise på restaurant / bestille takeaway / spise sammen med naboerne? Hvorfor? / Hvorfor ikke?",
   qs:["Hvad spiser du typisk til aftensmad?","Hvem laver mad hjemme hos dig? Hvorfor?","Hvad er forskellen på dansk mad og mad fra dit hjemland?"]}
 ],
 kit:{
  klage:{
   open:["Kære …","Til …","Jeg skriver til jer, fordi …","Jeg vil gerne klage over …","Jeg er meget utilfreds med …","Den … var jeg …"],
   close:["Jeg håber at høre fra jer snart.","Jeg ser frem til jeres svar.","På forhånd tak.","Med venlig hilsen","Venlig hilsen"],
   useful:["Desværre var …","Jeg havde forventet, at …","Det er ikke i orden, at …","Jeg har allerede prøvet at …","Jeg har ringet til jer, men …","Jeg håber, at I vil …","Jeg forventer at få pengene tilbage.","Hvis det ikke sker, vil jeg …"]},
  mail:{
   open:["Hej …","Kære …","Tak for din mail!","Hvor var det dejligt at høre fra dig!","Undskyld, at jeg først svarer nu.","Det går godt her."],
   close:["Skriv snart igen!","Jeg glæder mig til at se dig.","Hils din familie fra mig.","Kærlig hilsen","Mange hilsner","Knus"],
   useful:["Du spørger, om …","Du spørger også, hvordan …","Det var rigtig hyggeligt.","Det var lidt svært i starten, men nu …","Jeg glæder mig til …","Hvad med dig?","Det må du komme og se!"]},
  pref:{
   pref:["Jeg kan bedst lide …","Jeg foretrækker at …","Jeg vil hellere … end …","Jeg kan godt lide at …, men …","Det er ikke lige mig.","Det ville jeg aldrig gøre.","Billede nummer to ser mest spændende ud."],
   why:["… fordi det er …","Det er godt, fordi man kan …","Fordelen ved det er, at …","Ulempen er, at …","Det er for dyrt / kedeligt / anstrengende.","Da jeg boede i …, …","For mig er det vigtigt, at …"],
   ask:["Hvad med dig?","Hvad synes du om …?","Kan du lide at …?","Hvorfor det?","Har du prøvet det?","Hvilket billede kan du bedst lide?","Hvordan gør man i dit hjemland?"],
   react:["Det er jeg enig i.","Det synes jeg også.","Det er jeg ikke helt enig i.","Det forstår jeg godt, men …","Nå, det er interessant!","Ja, det har du ret i.","Er det rigtigt?","Det har jeg aldrig tænkt på."]}
 }
};
