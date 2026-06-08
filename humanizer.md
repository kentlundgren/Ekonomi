# Humanizer – Skriv mänskligt, inte AI-genererat

**Projekt:** Ekonomi (Kent Lundgrens redovisningsreflektioner)
**Baserat på:** [humanizer v2.8.0](https://github.com/blader/humanizer/blob/main/SKILL.md) av blader,
[Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing),
och [voicemoat.com](https://voicemoat.com/blog/avoid-ai-tells-writers-checklist-2026)
**Gäller:** All löpande text i HTML-filerna i detta projekt
**Teoretisk bakgrund:** Se [`skills/humanizer_ton/humanizer_bakgrund.md`](skills/humanizer_ton/humanizer_bakgrund.md) för en akademisk analys av varför AI-text låter som AI – om epistemisk kalibrering, RLHF-träning, perplexity och burstiness.

---

## Vad problemet är

AI-genererad text har igenkännbara mönster. Läsare uppfattar dem – ofta utan att
kunna sätta ord på varför texten känns "platt". Det gäller både på svenska och
engelska. Det här dokumentet listar de vanligaste mönstren och hur de byts ut, med
fokus på Kents skrivsätt: personlig analys i jag-form, redovisningsfacit, källstödd.

---

## Kents röst – vad som ska bevaras

Texterna i detta projekt är Kents egna reflektioner. Det innebär:

- **Jag-form är rätt** – "Jag reviderar Kalmar Nation" är mer ärligt än "Man bör granska"
- **Osäkerhet är tillåten** – "Jag vet inte riktigt hur jag ska tolka detta" är mänskligare än ett neutralt konstaterande
- **Specifika detaljer trumfar** – "konto 6410" är bättre än "ett konto i klass 6"
- **Korta meningar är ok** – bryt gärna en lång mening i två

---

## 14 mönster att undvika

### 1. Uppblåst betydelsemarkering

**Ord att stryka:** *understryker*, *belyser*, *vittnar om*, *markerar en vändpunkt*,
*bidrar till*, *speglar en bredare*, *är ett bevis på*, *är av avgörande betydelse*

**Före:**
> Bergs artikel understryker vikten av att hålla sig uppdaterad och belyser de
> utmaningar som BAS 2026 innebär för redovisningsprofessionen.

**Efter:**
> Berg listar 272 ändringar och förklarar varför de flesta berör anläggningstillgångar.

---

### 2. Reklamspråk och överord

**Ord att stryka:** *banbrytande*, *gedigen*, *ovärderlig*, *exemplarisk*,
*heltäckande*, *unikt*, *robust*, *sömlös*

**Före:**
> Bergs genomgång är exemplariskt pedagogisk och utgör ett ovärderligt stöd.

**Efter:**
> Bergs genomgång är tydlig. Han tar 272 ändringar och grupperar dem i sju områden.

---

### 3. Participfraser som låtsas fördjupa (–ing-fällan)

**Ord att se upp med:** *framhävande...*, *säkerställande...*, *reflekterande...*,
*bidragande till...*, *möjliggörande...*

**Före:**
> BAS 2026 innehåller stora förändringar i klass 10–13, reflekterande BFN:s
> revidering av K2 och K3, säkerställande korrekt rubricering i årsredovisningen.

**Efter:**
> BAS 2026 ändrar klass 10–13 för att följa BFN:s nya K2- och K3-regler.

---

### 4. AI-vokabulär – ord som avslöjar roboten

**Svenska AI-ord att byta ut:**

| Undvik | Skriv istället |
|--------|----------------|
| viktigt att notera | — (stryk eller formulera om) |
| det är värt att påpeka | — (stryk) |
| i detta sammanhang | — (stryk) |
| inte minst | (var specifik om vad) |
| framförallt | (ange exakt vad) |
| dessutom | (och / plus att) |
| i grunden | — (stryk) |
| i praktiken | (ge ett konkret exempel) |
| tydliggöra | klargöra / visa / förklara |
| möjliggöra | göra möjligt / tillåta |
| säkerställa | kontrollera / verifiera |
| tillhandahålla | ge / erbjuda |

---

### 5. Tankestrecket (–) som AI-signal

Tankestrecket (–) är ett av de mest tillförlitliga AI-tecknen. Undvik det som
satsavgränsare. Använd komma, punkt eller parentes istället.

**Före:**
> Ekonomisystemet bör uppdateras – annars kan felaktiga rapportkopplingar uppstå.

**Efter:**
> Ekonomisystemet bör uppdateras. Annars kan felaktiga rapportkopplingar uppstå.

---

### 6. Trippelregeln – AI älskar treor

AI paketerar instinktivt saker i grupper om tre: "effektivitet, noggrannhet och
transparens". Om listan inte är tre naturliga delar, skriv två eller fyra.

**Före:**
> Granskningen täcker verifikationer, bankavstämning och förvaltningsfrågor.

**Efter:**
> Granskningen täcker verifikationer och bankavstämning. Förvaltningsfrågor hanteras separat.

*(eller behåll trean om den faktiskt är tre naturliga delar)*

---

### 7. Passiv form utan aktör

AI döljer gärna vem som gör vad.

**Före:**
> Det rekommenderas att kontoplanen uppdateras inför bokslut 2026.

**Efter:**
> Jag bör uppdatera kontoplanen inför bokslut 2026.

---

### 8. Vaga källattribueringar

**Före:**
> Experter menar att BAS-kontoplanen bör ses som ett levande dokument.

**Efter:**
> Berg (2026) skriver att BAS uppdateras varje år för att spegla ändringar i
> K2, K3 och SCB:s statistikkrav.

---

### 9. Generiska positiva avslutningar

**Före:**
> Sammanfattningsvis ser framtiden ljus ut för den som håller sig uppdaterad.
> Spännande tider väntar!

**Efter:**
> Det viktigaste för 2026 är att kolla konto 6410 och verifiera att Fortnox
> är uppdaterat.

---

### 10. Onödiga inledningsfraser

**Stryk direkt:**
- "Det är viktigt att notera att..."
- "I detta avseende bör man..."
- "Låt oss nu titta på..."
- "Nedan följer en genomgång av..."
- "Det bör i sammanhanget påpekas att..."

**Starta direkt med saken.**

---

### 11. Förstärkningsord och beröm riktade mot andra

AI-text berömmer gärna andras arbete med adjektiv som inte kan falsifieras.
Resultatet låter som smicker, inte analys.

**Ord att stryka när de beskriver andras arbete:**
*utmärkt*, *exemplarisk*, *gedigen*, *generös*, *lättillgänglig*,
*imponerande*, *välskriven*, *insiktsfull*, *värdefull*

**Principen:** Beskriv vad personen *faktiskt gjorde*, inte hur bra det var.
Läsaren avgör om det är bra.

**Före:**
> Bergs genomgång är exemplariskt pedagogisk.
> Tack för att du delar din sakkunskap så generöst och lättillgängligt!

**Efter:**
> Berg tar 272 ändringar och grupperar dem i sju prioriterade områden.
> Tack, Peter, för att du delar det här.

Kortare, äkta, och faktabaserat.

---

### 12. Performativ tveksamhet (performed hesitancy)

Det som forskningen kallar *performed hesitancy* (Kovač m.fl., 2026) är fraser
som *ser ut* som äkta osäkerhet men inte tillför någon faktisk information.
AI-modeller är tränade att verka försiktiga och icke-kommitterande – inte för
att de är osäkra, utan för att det beteendet belönades under träningen.

**Skilj på:**
- **Äkta osäkerhet** – grundad i ett specifikt faktaunderlag: "Jag vet inte hur Fortnox hanterar detta, jag har inte testat det."
- **Performativ tveksamhet** – tom försiktighet utan informationsinnehåll: "Det är värt att notera att synsätten kan variera."

**Före:**
> Det bör påpekas att BAS 2026 kan uppfattas på olika sätt beroende på
> organisationens specifika förutsättningar.

**Efter:**
> BAS 2026 skiljer sig på en punkt som kan slå olika beroende på om
> föreningen tillämpar K2 eller K3.

*(Den andra versionen är fortfarande nyanserad – men nyansen är förankrad i
ett konkret faktum, inte i luften.)*

---

### 13. Aforismformel – "X är Y:s Z"

AI-modeller omvandlar gärna vanliga påståenden till minnesvärda aforismer som
låter djupsinnade men egentligen är tomma. Mönstret identifieras av blader (2026)
som ett av de mer subtila AI-tecknen.

**Formeln:** *X är Y:s Z*, *X blir en fälla*, *X är inte ett verktyg, utan en spegel*

**Före:**
> Källkritik är revisionsarbetets valuta.
> Transparens är inte en policy, det är en kultur.

**Efter:**
> Källkritik avgör om granskningen håller.
> Transparens kräver att styrelsen faktiskt delar underlagen – inte bara lovar det.

---

### 14. Synonymrotation – AI:s rädsla för att upprepa ord

AI-modeller har inbyggda mekanismer som undviker ordupprepning. Resultatet är
att samma sak benämns med olika synonymer i varje mening, vilket skapar en
märklig rörelse utan förflyttning.

**Före:**
> Kalmar Nation genomgick en revision. Studentföreningen granskades noggrant.
> Organisationen hade hanterat sin ekonomi väl. Det ideella bolaget visade
> ett positivt resultat.

**Efter:**
> Kalmar Nation genomgick revision 2025. Resultatet var positivt, och
> ekonomin välskött.

*(En mänsklig skribent upprepar "Kalmar Nation" utan problem. Det är
tydligare, inte sämre.)*

---

## Tre snabba pass att köra på färdig text

**Pass 1 – Rytmpasset**
Läs texten högt. Tre meningar i rad med liknande längd? Förkorta en rejält (6–8 ord)
eller slå ihop två till en lång. Mänsklig text varierar.

**Pass 2 – Specificeringspasset**
Hitta varje vag formulering. "En ledande aktör" → namnge aktören. "Nyligen" →
ange datum. "Många förändringar" → ange antal.

**Pass 3 – Åsiktspasset**
Hitta varje "det beror på" och "bägge perspektiv är relevanta". Fråga: vad
tycker *jag* egentligen? Skriv det. Osäkerhet är ok ("Jag vet inte riktigt, men..."),
men ett intetsägande "det varierar" är inte det.

---

## Vad som är tillåtet

Dessa är *inte* AI-tecken i Kents personliga analystext:

- ✅ Jag-form genomgående
- ✅ Formellt fackspråk (BAS, ÅRL, K2, BFNAR)
- ✅ Specifika kontonummer och lagrum
- ✅ Källhänvisningar i Harvardstil
- ✅ Tabeller för strukturerad information
- ✅ Korta meningar för betoning (en i taget, inte tre i rad)
- ✅ Erkända osäkerheter ("detta är min bedömning, inte säker fakta")

---

## Källor till detta dokument

- blader (2026) *humanizer v2.8.0*. GitHub.
  Tillgänglig: https://github.com/blader/humanizer/blob/main/SKILL.md
- Kovač, G., m.fl. (2026). *Saying More Than They Know: A Framework for Quantifying
  Epistemic-Rhetorical Miscalibration in Large Language Models*. arXiv:2604.19768.
  Tillgänglig: https://arxiv.org/html/2604.19768
- Wikipedia (2026) *Signs of AI writing*. WikiProject AI Cleanup.
  Tillgänglig: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- VoiceMoat (2026) *How to avoid the AI tells: a writer's checklist for 2026*.
  Tillgänglig: https://voicemoat.com/blog/avoid-ai-tells-writers-checklist-2026
- SEO Francisco (2026) *AI Writing Tells*.
  Tillgänglig: https://seofrancisco.com/insights/ai-writing-tells-sound-human-again/

## Relaterade filer i projektet

- [`skills/humanizer_ton/SKILL.md`](skills/humanizer_ton/SKILL.md) – procedurstyrning för AI (sju steg att köra i ordning)
- [`skills/humanizer_ton/humanizer_bakgrund.md`](skills/humanizer_ton/humanizer_bakgrund.md) – akademisk analys av varför problemet uppstår (RLHF, perplexity, burstiness, epistemisk kalibrering)
