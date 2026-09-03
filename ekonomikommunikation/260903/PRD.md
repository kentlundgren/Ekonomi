# PRD – Kommunicera min syn på hur ekonomi kan kommuniceras

**Projekt:** ekonomikommunikation
**Arbetsmapp:** `Ekonomi/ekonomikommunikation/260903/`
**Skapad:** 2026-09-03
**Senast ändrad:** 2026-09-03
**Status:** HTML-sidan byggd och verifierad (tre leveranser, se `process-logg.md`). Nästa: blogginlägget (upplägg C).
**Ägare:** Kent Lundgren

---

## 1. Kort om vad detta är

Kent vill formulera och sprida en egen ståndpunkt om hur ekonomi bör
kommuniceras i en verksamhet. Den här PRD:n planerar arbetet: vad som ska
sägas, i vilken form, i vilken ordning.

Fritidsprojekt. Inte ett uppdrag från Simrishamns kommun eller Poolia.

---

## 1.1 Varför det här behöver sägas

Kent har mött chefer och ansvariga som blivit förvånade över hur lite
finansiering som faktiskt är säkrad framåt. Förvåningen kommer sent, ofta när
ett beslut om personal redan är på väg att fattas. En rapportering som bara
visar året som varit och året som är släpper igenom den luckan.

En konkret orsak till projektet: Kent vill att rapporteringen tydligt ska visa
hur mycket medel som finns för att eventuellt anställa personer framåt. Det är
inte en detalj i marginalen, det är ofta den fråga chefen faktiskt sitter med.

---

## 2. Ståndpunkten som ska kommuniceras

Ekonomen i en verksamhet rapporterar hur det går, normalt tre gånger om året.
Vid varje sådant nedslag räcker det inte att visa utfallet mot budget för det
som varit. Samtalet med de ansvariga bör svara på tre frågor i följd:

1. Hur landar innevarande år? Utfall hittills plus prognos för resten.
2. Hur ser nästa år ut? Budget eller en tidig prognos.
3. Hur ser åren efter ut? Ram, riktning och förutsättningar, i grövre drag.

Horisonten är alltså flera år, inte ett. Står vi i år X vill de ansvariga
kunna se X och en bild av de fyra åren efter. Detaljerna långt fram går inte
att veta. Förutsättningarna måste man ändå ha grepp om, för att åtaganden som
sträcker sig förbi årsskiftet ska gå att fatta beslut om.

Tyngdpunkten ligger på **kommunikationshantverket**: hur ekonomen visar den
här bilden begripligt och ärligt för personer som inte är ekonomer, särskilt
när verksamheten lever på flera sorters pengar samtidigt (offentliga medel,
bidrag, projektmedel, egna intäkter) som var och en har sin egen säkerhet och
sin egen tidshorisont.

---

## 3. Modellen som ska visualiseras och beskrivas

### 3.1 Den rullande flerårshorisonten

Grundtanken: vid varje rapporttillfälle tittar man på innevarande år plus
fyra år framåt, och fönstret flyttas fram ett steg för varje år som går.
Bilden byggs om vid varje nedslag, den låses inte en gång per år.

I verkligheten sker nedslagen tre gånger om året (T1, T2, bokslut), se
avsnitt 2. HTML-sidan förenklar och visar utkikspunkten per år i stället för
per tertial: "sett från år X" och "sett från år X+1" (avsnitt 3.9). Poängen är
densamma, att blicken framåt ska finnas med vid varje tillfälle.

### 3.2 Precisionen avtar med avståndet

- **År X:** kronor, mot budget, med förklarade avvikelser.
- **År X+1:** budgetnivå eller tidig prognos, huvudposter.
- **År X+2 till X+4:** intervall och förutsättningar. Frågan är inte "hur
  mycket" utan "har vi rimlig visshet om att finansieringen finns".

### 3.3 Varför flera år

Åtaganden är längre än ett budgetår. Anställer verksamheten någon på ett
treårigt projekt måste den veta att projektet troligen är finansierat i tre
år. En ettårshorisont döljer den risken tills den blir akut.

### 3.4 Intäktsmixen

Verksamheter som den här handlar om lever på pengar från flera håll. Varje
källa redovisas för sig, med sin egen tidshorisont och säkerhetsgrad:

| Källa | Typisk säkerhet | Typisk horisont |
|-------|-----------------|-----------------|
| Offentligt anslag / ram | Hög nära i tid, politiskt beslut längre fram | 1–2 år tydligt |
| Bidrag | Ansökan per omgång | 1 år, ofta kortare |
| Projektmedel | Beviljat belopp, bestämd period | Projektets längd |
| Egna intäkter | Beror på verksamheten | Löpande |

### 3.5 Kommunikationshantverket (tyngdpunkten)

- Skilja tydligt på vad man vet, vad man tror och vad som är antagande.
- Visa osäkerhet utan att tappa trovärdighet.
- Koppla varje siffra till beslutet den ska stödja (kan tjänsten förlängas,
  kan projektet starta, håller ramen).
- Presentera så att en icke-ekonom kan följa med och fatta beslut på det.

### 3.6 Mekanismen: en portfölj bidrag som löper ut

Exemplet på sidan är fyra grupper, AA, BB, CC och DD. Var och en lever på
flera tidsbegränsade bidrag samtidigt (VR, EU och några till). Varje bidrag
täcker en bestämd period och tar sedan slut.

**Skrivsätt (beslut 2026-09-03):** den publicerade sidan skriver inte ut
"forskargrupp" eller "forskning". Bidragsgivarnamnen (VR, EU) står kvar i
tabellen och läsaren kan ana sammanhanget, men prosan säger "grupp" och
"verksamhet". Grupperna skiljer sig åt i hur långt fram de har säkrad
finansiering och hur lätt de har att få in nya intäkter. DD är den grupp
sidan vill få läsaren att reflektera kring: hur illa är det egentligen?

Kostnaderna, till största delen löner, ligger nästan platt. Personerna är kvar
även när ett enskilt bidrag upphör. Ju längre fram man tittar, desto färre
bidrag är fortfarande aktiva. Intäktstrappan faller, kostnaderna gör det inte,
och resultatet vänder neråt.

Innevarande år ser bra ut, ofta med överskott, delvis på grund av engångsbidrag
som bara finns det året. Risken syns först när rapporten sträcker sig fyra år
fram och ställer de utlöpande bidragen mot de fortsatta kostnaderna.

### 3.7 Formatet: en resultaträkning fyra år fram

Sidan visar en resultaträkning i tkr med kolumnerna innevarande år X och X+1
till X+4. Raderna:

- Bidragsgivare, en rad per finansiär, med belopp per år så länge bidraget löper.
- TOT intäkter.
- Löner, Diverse, OH (påslag), Avskrivningar.
- TOT kostnader.
- RESULTAT.

Alla bidragsgivarrader visas som default (beslut 2026-09-03). Poängen är att
läsaren direkt ska se de tomma cellerna längre fram, alltså att bidrag saknas
för de kommande åren. En knapp kan fälla ihop raderna, men utgångsläget är
utfällt.

**Filer och placering (beslut 2026-09-03):** sidan ligger i den här mappen,
`ekonomikommunikation/260903/`, som separata filer: `index.html`, en CSS-fil
och en JS-fil. Live-URL blir
`https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/`.

Filplaceringen (daterad arbetsmapp, egna CSS- och JS-filer) avviker från
Ekonomi-projektets vanliga mönster med en fristående HTML-fil per
sektionsmapp. Det är medvetet.

Sidan ska ändå följa projektets konventioner i övrigt: den gemensamma
site-nav-raden längst upp, GitHub-hörnan nere till vänster och teknik-modalen
nere till höger. Och den ska gå att nå från Ekonomi-sajten (beslut
2026-09-03): en länk läggs in på startsidan `index.html`, och sidan tas upp i
`Ekonomi/README.md` (projektstruktur, Live-sidor, filbeskrivning). Exakt var i
menyn avgörs vid bygget.

### 3.8 Fyra grupper och hur varningen trappas upp

Samma resultaträkning för fyra grupper. Innevarande år X är oproblematiskt i
alla fyra. Skillnaden ligger i hur tidigt och hur djupt RESULTAT vänder
negativt under åren efter.

I planeringen kallades de typfall A–D. På den byggda sidan heter de **grupp
AA, BB, CC och DD** (beslut 2026-09-03). Nedan används A–D som kortform, men
A = AA, B = BB, C = CC, D = DD, och D-ver2 = DD-ver2.

Bannertexterna anges i [`SPEC.md`](SPEC.md) avsnitt 4.2.

| Fall | RESULTAT X+1 → X+4 (exempel, tkr) | Röda år | Varning |
|------|----------------------------------|---------|---------|
| **A** | −100, 17, 34, −49 | inga | Grön. Små årsvariationer, alla under 2 %-toleransen. |
| **B** | 0, 0, −500, −3 500 | X+4 (X+3 gult) | Mild. Gul cell X+3, röd X+4. |
| **C** | 0, 0, −3 000, −4 600 | X+3, X+4 | Tydlig. Två röda celler. |
| **D** | −500, −4 600, −4 600, −7 600 | X+2, X+3, X+4 (X+1 gult) | Kraftig. Redan X+1 avviker. Tre röda celler, framträdande banner. |

**Färgskala (beslut 2026-09-03), tre steg:**

- **Grönt:** resultatet är noll eller positivt, eller ett underskott som är
  mindre än 2 % av årets kostnad (balanstoleransen, tillagd 2026-09-03 för att
  grupp AA:s små årsvariationer ska läsas som "i fas").
- **Gult:** en mindre avvikelse, mellan 2 % och tröskeln.
- **Rött:** en kraftig avvikelse, över tröskeln.

Ingen separat grå "inom marginal"-nivå. Banner-varningen trappas upp med
antalet **röda** år, inte de gula. Därför är B ett fall med ett rött år (X+4),
medan X+3 bara får en gul markering.

**Tröskeln gul/röd (beslut 2026-09-03):** inställbar på sidan, med 15 % av
årets kostnad som förval. En avvikelse under tröskeln är gul, över den är röd.

**Typfallsknapparna är färgade** efter hur läget ser ut framåt:

- **A** grön knapp.
- **B** gul knapp.
- **C** knapp som växlar mellan gult och rött, eftersom C ligger på gränsen.
- **D** röd knapp.

Poängen: varningen växer med hur nära i tid problemet ligger och hur många år
som inte går ihop. Ett underskott om fyra år är en signal att bevaka. Ett
underskott redan om två år är ett beslutsläge nu.

### 3.9 Två tidsögonblick per typfall (dynamiken)

Varje typfall ska gå att se från två utkikspunkter. De två kontrollerna ska
vara tydligt avskilda från typfallsknapparna (A/B/C/D) och benämnda så att
innebörden framgår:

- **Sett från år X, "så här ser det ut i år":** resultaträkningen för X och
  X+1 till X+4.
- **Sett från år X+1, "så här ser det ut nästa år":** samma grupp ett år
  senare. Fönstret har flyttats fram, kolumnerna är X+1 till X+5. Ett nytt år,
  X+5, kommer in i bilden.

Mellan de två ögonblicken hinner saker ändras. Ett nytt bidrag kan ha landat
för ett år långt fram. Lönekostnaden kan ha tagit ett steg upp.

**Fall A** går ihop från båda utkikspunkterna. Sett från X är X+1 till X+4
nollresultat. Sett från X+1 är även X+5 i balans, för ett nytt bidrag (givare
6) landar för det året och både intäkter och kostnader stiger till samma nivå.
A är gruppen som håller portföljen påfylld. Nya bidrag kommer in i takt med att
gamla löper ut.

**B, C och D** ser värre ut sett från X+1 än sett från X. Portföljen fylls
inte på. Glappet har rullat ett steg närmare, det nya året X+5 saknar
täckning, och utrymmet att hinna agera har krympt med ett år.

Sidan låter läsaren växla mellan de två ögonblicken för varje typfall och se
hur RESULTAT-raden och varningen förändras.

#### Måttet: hur mycket sämre ett år senare

Försämringen mäts som **summan av alla årens RESULTAT i fönstret**, jämfört
mellan de två utkikspunkterna. Två saker slår igenom samtidigt: överskottsåret
X rullar ur bild, och ett nytt år X+5 kommer in, oftast med underskott.

| Fall | Σ RESULTAT sett från X | Σ RESULTAT sett från X+1 | Ett år senare (exempel, tkr) |
|------|-----------------------|--------------------------|------------------------------|
| A | −38 | −230 | −192 ("i praktiken oförändrat") |
| B | −2 740 | −9 500 | −6 760 |
| C | −6 340 | −16 200 | −9 860 |
| D | −16 040 | −28 400 | −12 360 |

D:s tal ändrat 2026-09-03 (Bidragsgivare 5:s 500 tkr år X+1 borttagen). A:s
tal ändrat 2026-09-03 (ny AA-tabell: löner +3 %/år, små årsvariationer). AA
ligger nu nära balans varje år, och bilden är i stort sett oförändrad ett år
senare.

Alla fyra blir sämre på det här måttet, även A, fast A inte visar underskott
något enskilt år. Bufferten är borta. Det är själva poängen: att stå still ett
år kostar, i varje läge.

**Så visas det:**

1. Ett "ett år senare"-tal per typfall, en siffra med nedåtpil (t.ex.
   `−6 760 tkr`), som växer från A till D.
2. Två staplar: Σ RESULTAT sett från X mot sett från X+1, visuellt åtskilda.
3. Växlingen mellan de två ögonblicken, där tabellen, talet och banner räknas
   om när man byter.

Ett fjärde lager, de två RESULTAT-raderna staplade år för år med förändringen
per cell, är en möjlighet men inte låst. Se avsnitt 11.

**Modellval (beslut 2026-09-03):** två explicita resultaträkningar per typfall
och tidsögonblick. Ingen framräkning ur en underliggande portfölj. Det matchar
Kents exempelflikar, är enklare att bygga och granska, och gör tydligt att
informationen faktiskt ändras mellan åren. Se [`SPEC.md`](SPEC.md) avsnitt 3.

### 3.10 Den tomma ytan: frågan sidan ska väcka

De tomma cellerna längre fram i intäktsdelen är sidans viktigaste
kommunikativa yta, särskilt för grupp DD och särskilt sett från X+1.

När läsaren för pekaren över, eller trycker på, en tom cell ska en fråga komma
fram, ungefär: *kommer det troligen in nya bidrag eller intäkter under de här
åren?* Frågan är **gruppspecifik** (beslut 2026-09-03) och visas på två ställen
samtidigt: en liten ruta vid cellen, och en större ruta under tabellen som
byts ut och blinkar till.

För grupp DD är reflektionen mer utbyggd, och den är den enda som står framme
även utan hover. Den leder läsaren till att fråga:

- Har DD strukturellt sämre möjligheter att i förtid säkra avtal om framtida
  medel, eller är det bara så det ser ut just nu?
- Hur har det sett ut tidigare år? Har DD alltid landat medel när åren
  närmat sig, eller kommer avtalen sent?
- Finns avtal på gång som ännu inte är signerade, inlagda eller kommunicerade?
- Ska interna medel bära medarbetarna, eller håller verksamheten på att fasas
  ut?

Poängen är inte att avgöra vilket. Poängen är att frågan måste ställas tydligt
till gruppen: **hur ser det ut just nu, kommer ni att få ihop budgeten den här
gången också, så att intäkterna matchar kostnaderna?**

Sidan ska alltså inte bara varna. Den ska få läsaren att fråga sig hur illa
det egentligen är för DD.

**På mobil (beslut 2026-09-03):** ingen pekare finns, så hover ersätts med
tryck. Den lilla rutan vid cellen är fast positionerad och göms vid nästa
tryck utanför eller vid scroll. Rutan under tabellen fungerar likadant som på
desktop. CC-knappens växling mellan gult och rött är en animation som inte
kräver interaktion.

### 3.11 Typfall D-ver2: läsaren fyller på

Ett femte läge, "D-ver2", utgår från Typfall D men är redigerbart. Läsaren
kan lägga in egna intäkter (nya bidrag, projektinkomster) och sänka kostnader.
RESULTAT, färger och banner räknas om direkt.

Syftet: visa att D kanske inte är så illa om finansieringen faktiskt fylls på.
Läsaren gör själv den övning ekonomen bör göra tillsammans med gruppen, och
ser hur mycket ny finansiering som krävs för att komma tillbaka till grönt.

**Friktion mot önsketänkande:** varje gång läsaren lägger in en ny intäkt
kommer en notis upp, ungefär: *är du säker på att den här intäkten, det här
bidraget, kommer just det året?* Notisen är bara en påminnelse (beslut
2026-09-03). Den blockerar inte och kräver inget aktivt val. Poängen är att
sidan inte ska bli ett verktyg för att räkna hem osannolika antaganden, utan
tvinga fram samma prövning som ett hederligt budgetsamtal gör.

---

## 4. Mål

- **Huvudmål:** en formulerad ståndpunkt som andra kan reagera på.
- **Delmål 1:** en interaktiv HTML-sida i Ekonomi-projektet som visar modellen.
- **Delmål 2:** ett blogginlägg på Controller utan gränser som utgår från sidan.
- Ordningen är HTML-sida först, blogginlägg sedan (ändrat 2026-09-03). Sidan
  blir tänkredskapet, texten hänvisar till den och bygger vidare på den.

---

## 5. Målgrupp

- Ekonomer och controllers i verksamheter som lever på blandad finansiering.
- Verksamhetsansvariga och chefer som tar emot ekonomirapporter.
- Förtroendevalda och styrelser som ska besluta om fleråriga åtaganden.
- AI- och ekonomiintresserade som följer Kents bloggar.

Modellen ska beskrivas så att den inte hänger på en viss sektor. Kommunal
förvaltning, ideell förening, stiftelse, projektorganisation: vilken
verksamhet som helst som synar sitt läge tre gånger om året.

---

## 6. Kanaler och format

| Steg | Kanal | Format | Roll |
|------|-------|--------|------|
| 1 | Ekonomi-sajten (GitHub Pages) | Interaktiv HTML-sida | Tänkredskapet, visar modellen konkret |
| 2 | Controller utan gränser | Blogginlägg | Ståndpunkten, utgår från sidan och länkar till den |
| ev. 3 | LinkedIn | Kort inlägg som länkar vidare | Spridning |

### 6.1 AI-signalering på HTML-sidan

Sidan ska inte argumentera för AI. Den ska bara bära de två diskreta element
som Ekonomi-projektet redan använder, likt Claude-kompassen
(<https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/>):

- **Nedre vänstra hörnet:** `{ } GitHub`-länk till Ekonomi-repot (modal eller
  direktlänk enligt projektets mönster).
- **Nedre högra hörnet:** en teknik-modal som kort beskriver hur sidan togs
  fram.

Läsaren förstår då implicit att sidan troligen är AI-genererad. Teknik-modalen
ska ändå vara tydlig med att resultatet kräver bra prompter, bra kontext och
en bra harness. Verktyget gör inte jobbet av sig självt.

---

## 7. Upplägg för blogginlägget

**Valt: Upplägg C – "Kan vi anställa henne i tre år?"** (beslut 2026-09-03).
Blogginlägget skrivs efter HTML-sidan och utgår från den: sidan är exemplet
texten pekar på. A och B står kvar som möjliga senare texter i en serie,
se avsnitt 11.

### Upplägg C – "Kan vi anställa henne i tre år?" (VALT)
1. Scenen: en chef vill förlänga eller tillsätta en projekttjänst och frågar
   ekonomen rakt ut om pengarna räcker flera år framåt.
2. Det vanliga svaret: en budget för innevarande år, kanske nästa. Chefen blir
   förvånad över hur lite som egentligen är säkrat därefter.
3. Varför förvåningen uppstår: rapporteringen visar året som varit och året
   som är, inte medlen som finns kvar att räkna med framåt.
4. Den rullande flerårsbilden som svarar på frågan, med intäktsmixen uppdelad
   efter säkerhet och horisont.
5. Att kommunicera "rimlig visshet" utan att låtsas veta detaljer, och att
   göra det tidigt nog att beslutet går att fatta i lugn och ro.
6. Vad som händer i en verksamhet när ingen vågar ge den bilden.

### Upplägg A – "Ekonomen som också pratar om nästa år" (sparat)
1. Vanan: rapportera utfall mot budget för det som varit.
2. Vad som saknas: blicken framåt vid varje nedslag, inte bara i budgetarbetet.
3. Den rullande horisonten som princip, med flerårsbilden som illustration.
4. Intäktsmixen och varför olika pengar har olika tidshorisont.
5. Vad de ansvariga faktiskt behöver för att kunna besluta.

### Upplägg B – "Tre gånger om året, fyra år i taget" (sparat)
1. Nedslaget: vad ett bra tertialsamtal innehåller.
2. Fråga 1, hur landar året.
3. Fråga 2, hur ser nästa år ut.
4. Fråga 3, vad vet vi om åren efter, och hur säger man det ärligt.
5. Hantverket: att visa osäkerhet utan att tappa förtroende.

---

## 8. Avgränsningar

- Inte en lärobok i budgetteknik eller prognosmetod.
- Inte en färdig mall som ska passa alla. En princip och ett synsätt.
- Inte kopplat till någon arbetsgivare eller något faktiskt bokslut.
- HTML-sidan ska illustrera modellen, inte vara ett produktionsverktyg för
  någon specifik verksamhet.

---

## 9. Arbetsplan / milstolpar

1. ~~Kent väljer upplägg för blogginlägget (avsnitt 7).~~ Klart: Upplägg C.
2. ~~Kent berättar mer om modellen och vad HTML-sidan ska visa.~~ Klart, se
   avsnitt 3.6–3.11.
3. ~~Skiss till sidan (inline, engångsskiss).~~ Klart, itererad flera varv.
4. ~~Sista öppna frågorna i avsnitt 11 stängs.~~ Klart, en fråga (3.9) avgjord
   i SPEC: två explicita resultaträkningar per typfall.
5. ~~`SPEC.md` skapas.~~ Klart 2026-09-03.
6. ~~Bygg sidan i `ekonomikommunikation/260903/` som `index.html` + CSS + JS.~~
   Klart 2026-09-03, tre leveranser. Se `process-logg.md`.
7. ~~README-uppdateringar (mappens README, `Ekonomi/README.md`, länk från
   `Ekonomi/index.html`).~~ Klart 2026-09-03.
8. Kent committar och pushar. Verifierar live-sidan.
9. Utkast till blogginlägg (upplägg C), som utgår från den färdiga sidan,
   granskat mot humanizer-reglerna. Aktivera skill `kent-skrivstil`.
10. Kent läser, justerar, publicerar på Controller utan gränser.
11. Ev. kort LinkedIn-inlägg som länkar till bloggtexten.

Process-loggen för HTML-sidan (beslut och alternativ under bygget) förs enligt
minnet om vibe-coding-transparens, i en egen `process-logg.md` i den här mappen.

---

## 10. SPEC.md-checkpoint

Enligt Kents meta-regel 6 ska varje PRD ha en checkpoint mot en `SPEC.md`.

[`SPEC.md`](SPEC.md) skapades 2026-09-03. Den låser datamodellen (de åtta
resultaträkningarna), färg- och varningsreglerna, komponentlistan, D-ver2,
projektkonventionerna och sajtkopplingen, och avslutas med en acceptanslista
att pricka av bygget mot.

---

## 11. Öppna frågor

**Kvar, avgörs vid bygget:**

- Ska de två RESULTAT-raderna (sett från X och sett från X+1) också visas
  staplade år för år, utöver talet och staplarna? (Avsnitt 3.9)
- GitHub-hörnan nere till vänster: en enkel länk (som övriga Ekonomi-sidor)
  eller en liten modal? (Avsnitt 6.1)
- Fall C sett från X+1 har EU med ett hoppår (X+4 tomt, X+5 åter). Behålla som
  ett realistiskt exempel på bidrag som förnyas med glapp, eller jämna ut?

**Besvarade 2026-09-03:**

- Modellval: två explicita resultaträkningar per typfall och tidsögonblick.
- Tröskeln gul/röd är inställbar, förval 15 % av årets kostnad.
- Läsaren växlar mellan A/B/C/D som färgade knappar (grön, gul, gul/röd, röd).
- Egna siffror hanteras via det redigerbara läget D-ver2.
- D-ver2-notisen är bara en påminnelse, inget aktivt val.
- Mobil: hover ersätts med tryck, frågerutan visas alltid för D, C-knappens
  växling är en animation.
- Sidan ska nås från Ekonomi-sajten: länk på startsidan och rader i
  `Ekonomi/README.md`.
- Sidans filer ligger i `ekonomikommunikation/260903/`.

**Om blogginlägget (avgörs närmare publicering):**

- **Persongalleri:** namngiven scen, generiska roller, eller Kents jag-form?
- **Serie:** publiceras C ensam först, med A och B som möjliga uppföljare?

## 12. Beslutslogg

| Datum | Beslut |
|-------|--------|
| 2026-09-03 | Scope satt: ståndpunkt om ekonomikommunikation. |
| 2026-09-03 | Tyngdpunkt: kommunikationshantverket vid blandad finansiering. |
| 2026-09-03 | Rytm: tre nedslag per år, sektorsoberoende. |
| 2026-09-03 | Upplägg C valt för blogginlägget. Konkret orsak: chefer blir förvånade över hur lite finansiering som är säkrad framåt. |
| 2026-09-03 | Ordningen omvänd: HTML-sidan byggs först, blogginlägget utgår från den. |
| 2026-09-03 | AI-vinkeln hålls implicit: GitHub-hörna + teknik-modal på sidan, ingen AI-argumentation i texten. Teknik-modalen nämner att bra prompter, kontext och harness krävs. |
| 2026-09-03 | Sidan bärs av fyra typfall (A–D) för en forskare NN, med visuell varning som trappas upp: A ingen, B mild, C tydlig, D kraftig. |
| 2026-09-03 | Mekanismen: portfölj av tidsbegränsade bidrag som löper ut medan lönekostnaderna ligger platt. Kent skickade fyra exempelresultaträkningar (X, X+1…X+4). |
| 2026-09-03 | Format: full resultaträkning. Alla bidragsgivarrader visas som default, så att de tomma cellerna längre fram syns direkt. Knapp för att fälla ihop. |
| 2026-09-03 | Varning: färg på negativ RESULTAT-cell plus sammanfattande banner som trappas upp med antalet röda år. |
| 2026-09-03 | Dynamik tillagd: varje typfall ses från två tidsögonblick (år X och år X+1). Fall A balanserar varje enskilt år från båda. Tidsknapparna avskilda från A/B/C/D och benämnda "i år" / "nästa år". |
| 2026-09-03 | Försämringsmått: Σ RESULTAT i fönstret, sett från X+1 minus sett från X. Alla fyra fallen blir sämre (A −1 260, B −6 760, C −9 860, D −12 360 tkr i exemplet). Visas som ett tal per fall + en stapel. |
| 2026-09-03 (bygge) | Typfall D: Bidragsgivare 5:s 500 tkr år X+1 borttagen. D går nu minus (−500, gult) redan X+1, så forskningsledaren inte kan hävda att året går runt. D:s Σ sett från X: −16 040. Ett år senare: −12 360. |
| 2026-09-03 (bygge) | Leverans 1: index.html + styles.css + app.js. Kärnan: typfall, tidsväxling, färglogik, tröskel, GitHub-hörna + teknik-modal. |
| 2026-09-03 (bygge) | Leverans 2: "ett år senare"-kort med tal och staplar, banner, samt D-ver2 (redigerbart, påminnelse vid ny intäkt, återställ, egna intäktsrader). |
| 2026-09-03 (bygge) | Leverans 3: mobilfix (horisontell scroll i navet, inte tabellen), länk och section-card i `Ekonomi/index.html`, uppdaterad `Ekonomi/README.md` och mappens README. |
| 2026-09-03 (bygge) | Nav-crumben pekar mot Ekonomi-startsidan (ingen egen index på `ekonomikommunikation/`-nivån). Sidan ligger i den daterade mappen `260903/`. |
| 2026-09-03 | Färgskala: tre steg, grönt / gult (mindre avvikelse) / rött (kraftig avvikelse). Ingen separat grå nivå. |
| 2026-09-03 | Den tomma intäktsytan (avsnitt 3.10) är sidans viktigaste kommunikativa yta. Hover, särskilt i Fall D sett från X+1, väcker frågan om nya bidrag är på väg och leder läsaren till samtalet med gruppen. |
| 2026-09-03 | Tröskeln gul/röd är inställbar, förval 15 % av årets kostnad. |
| 2026-09-03 | Typfallsknapparna färgas: A grön, B gul, C växlar gult/rött, D röd. |
| 2026-09-03 | Nytt läge D-ver2: redigerbart, läsaren lägger in egna intäkter och sänker kostnader. Varje ny intäkt utlöser en notis som frågar om intäkten verkligen kommer det året. |
| 2026-09-03 | Filplacering: sidan byggs i `ekonomikommunikation/260903/` som index.html + CSS + JS. Avviker från projektets en-fil-per-sektion-mönster, medvetet. |
| 2026-09-03 | D-ver2-notisen är bara en påminnelse, blockerar inte. |
| 2026-09-03 | Mobil: hover ersätts med tryck, frågerutan alltid synlig för D. |
| 2026-09-03 | Sidan nås från Ekonomi-sajten: länk på startsidan, rader i Ekonomi/README.md. Sidan bär site-nav, GitHub-hörna och teknik-modal som resten av projektet. |
| 2026-09-03 | Alla öppna frågor om sidan stängda utom modellvalet i 3.9, som avgörs när SPEC.md skrivs. |
| 2026-09-03 | Modellvalet (3.9) avgjort: två explicita resultaträkningar per typfall och tidsögonblick, inte framräkning ur en portfölj. |
| 2026-09-03 | SPEC.md skapad. Datamodell, färgregler, komponenter, D-ver2, sajtkoppling och acceptanslista låsta. Redo för bygge. |
| 2026-09-03 (bygge) | Leverans 4: typfallen döptes om till grupp AA/BB/CC/DD (+ DD-ver2) på sidan. Inledande texten skrevs om: fyra grupper med olika framförhållning och olika lätt att få intäkter, ingen text som skriver ut "forskargrupp"/"forskning". |
| 2026-09-03 (bygge) | Hover-frågan gjord gruppspecifik och visas på två ställen: liten ruta vid cellen (fast position) plus rutan under tabellen som byts och blinkar till. För grupp DD är reflektionen utbyggd och står framme även utan hover, med fokus på DD:s historik och strukturella möjligheter att säkra avtal i förtid. |
| 2026-09-03 (bygge) | Inledningen omskriven av Kent, med hans formuleringar bevarade. Budskapet: grupperna har olika förmåga att i god tid säkra medel, och en grupp kan gå från lätt till svårt eller tvärtom, av tur eller läge, inte bara av skötsamhet. Claude rättade tre entydiga språkfel. |
| 2026-09-03 (bygge) | Grupp AA fick ny taldata (Kents Excel): egen kostnadsstruktur med löner +3 %/år och OH = 22 % av lönerna, samt Bidragsgivare 5–7 med små variationer. AA ligger nu nära balans varje år, RESULTAT ±100-tals kr. Även "sett från X+1" byggd i samma anda. Σ sett från X −38, ett år senare −192. |
| 2026-09-03 (bygge) | Balanstolerans tillagd: underskott under 2 % av årets kostnad färgas grönt och räknas inte i banner. "Ett år senare"-tal under 300 tkr visas neutralt som "i praktiken oförändrat", och Σ-staplarna skalas mot minst 2 000 tkr. Så att AA:s småvariationer inte läser som varningar. |
