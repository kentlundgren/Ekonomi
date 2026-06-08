# Att få generativ AI att låta som en människa

## En akademisk reflektion kring epistemisk kalibrering, skrivröst och praktiska motåtgärder

*Senast uppdaterad: 2026-06-08*

---

## 1. Inledning

Den som arbetat med generativ AI under en tid känner igen känslan: texten är korrekt, välstrukturerad och komplett – och ändå låter den fel. Något i rytmen, i ordvalen, i hur meningarna avslutas signalerar att det är en maskin som skrivit, inte en människa. Frågan om *varför* det är så, och vad man kan göra åt det, är inte längre bara en stilistisk fråga. Den har blivit ett aktivt forskningsområde inom lingvistik och AI-säkerhet.

Det här dokumentet är en bakgrundsanalys till det praktiska skillet [`SKILL.md`](SKILL.md) – en procedurguide för att skriva text med mänsklig röst i Ekonomi-projektet. Analysen nedan förklarar de teoretiska grunderna till de regler som skillet innehåller.

---

## 2. Problemet: AI hedgar fel, inte bara mycket

En vanlig missuppfattning är att AI-genererad text låter AI-genererad för att den är för säker, för kategorisk. Det stämmer inte riktigt. Problemet är snarare att AI hedgar *fel* – på fel ställen, i fel mängd och med fel sorts fraser.

En studie presenterad vid ACL 2024, *Relying on the Unreliable: The Impact of Language Models' Reluctance to Express Uncertainty* (Jain m.fl., 2024), visar att språkmodeller är obenägna att uttrycka osäkerhet när de svarar på frågor – även när de svarar fel. Genomsnittsfelraten bland "säkra" AI-svar i studien låg på 47 procent. Modellerna är alltså övertygade när de borde tveka, och tveksamma (med utfyllnadsfraser) när de egentligen vet svaret.

En färsk artikel på arxiv från april 2026, *Saying More Than They Know* (Kovač m.fl., 2026), skärper analysen ytterligare. Forskarna introducerar distinktionen mellan:

- **Genuine epistemic markers** – äkta osäkerhetsmarkeringar förankrade i ett specifikt evidensunderlag, till exempel "vi replikerade inte experimentet, så generaliserbarhet är begränsad"
- **Performed hesitancy** – ytlig tveksamhet som antar formen av osäkerhet utan att kommunicera något reellt, till exempel "det är viktigt att notera att perspektiv kan variera"

AI-modeller använder den andra typen i stor utsträckning. Den första typen – den som faktiskt gör text trovärdig – förekommer mer sällan.

---

## 3. Varför det blev så: RLHF och belönat försiktighetsbeteende

Bakgrunden är hur moderna språkmodeller tränas. Efter den initiala förträningen finjusteras modellerna med *reinforcement learning from human feedback* (RLHF) – ett förfarande där mänskliga bedömare utvärderar svar och belönar de svar de föredrar. Problemet, som Leap AI beskriver i sin analys av hedging-mönster (Leap AI, 2026), är att mänskliga bedömare historiskt har föredragit försiktiga, icke-kommitterande svar. Det beteendet har kodats in i modellerna som ett standardbeteende.

Resultatet är en karaktäristisk AI-signatur: frekventa inledningsfraser som "det är viktigt att notera att", "det är värt att överväga", "å ena sidan... å andra sidan", och avslutande fraser som "sammantaget är detta ett komplext ämne". Dessa fraser är statistiskt sett starka markörer för AI-genererad text – inte för att de är ovanliga i mänskligt skrivande, utan för att de förekommer i *mönster* och *tätheter* som inte matchar mänskligt skrivande (Leap AI, 2026).

---

## 4. Två statistiska mått: burstiness och perplexity

Forskning kring AI-detektion har pekat ut två statistiska egenskaper som skiljer AI-text från mänsklig text (eyesift.com, 2026):

**Perplexity** mäter oförutsägbarhet i ordval. Mänskliga skribenter väljer oväntat, specifika ord – egennamn, dialektala uttryck, facktermer utanför sin normala kontext. AI-modeller väljer statistiskt sannolik text, vilket ger låg perplexity.

**Burstiness** mäter variation i meningslängd. Mänskligt skrivande är "bursty": korta hugg följt av långa resonemang, eller tvärtom. AI-text tenderar mot uniform meningslängd – lagom långa meningar, hela vägen igenom.

Att aktivt bryta dessa mönster – med oväntade ordval, specifika egennamn, variation mellan korta och långa meningar – är en av de mest effektiva teknikerna för att skapa text som upplevs som mänsklig (eyesift.com, 2026).

---

## 5. Hedging som retorik: skillnaden mellan klargörande och defensivt

T.J. Lythgoe (2026), skribent och redaktör, gör i en serie om meningsbyggnad en distinktion som är direkt relevant:

- **Clarifying hedging** – begränsar påståendets räckvidd och ökar precisionen. "I de flesta fall" är ett exempel. Det tillför information om gränserna för påståendet.
- **Defensive hedging** – skyddar skribenten mot kritik utan att tillföra information. "Det är viktigt att notera att" är ett exempel. Det tillför ingenting.

Testet är enkelt: *tillför hedgen information, eller är den utfyllnad?* San José State University Writing Center (2026) konstaterar i sitt handout om hedging att akademiskt skrivande kräver kalibrerad osäkerhet – men att absoluter ("alltid", "aldrig", "alla") och tomma försiktighetsfraser är lika problematiska, om än på motsatta sätt.

---

## 6. Kopplingen till SKILL.md

Skillet [`humanizer_ton/SKILL.md`](SKILL.md) operationaliserar dessa insikter i sju konkreta steg. Kopplingen till ovanstående analys är direkt:

| Teoretisk insikt | Praktisk motåtgärd i SKILL.md |
|-----------------|-------------------------------|
| AI använder *performed hesitancy* – utfyllnadsosäkerhet | Steg 1: identifiera och stryk förstärknings- och berömsord, AI-vokabulär |
| AI-text har låg *burstiness* – uniform meningslängd | Steg 4: rytmpasset – bryt jämna längder aktivt |
| AI-text har låg *perplexity* – förutsägbara ordval | Steg 5: specificeringspasset – byt vaga fraser mot konkreta namn, siffror, datum |
| Defensiv hedging: tar inte ställning | Steg 6: åsiktspasset – vad tycker Kent egentligen? |
| Genuine epistemic markers saknas | Steg 7: röstpasset – äkta tvivel är ok ("min bedömning är...") |

Skillet bygger dessutom på en analys av Kents egna blogginlägg (pre-2024) för att etablera ett konkret röstprov att matcha mot – vilket är i linje med vad GitHub-projektet `aihxp/humanizer` (2026) beskriver som "voice-first humanization": att skriva text som låter som en *specifik person*, inte som en neutral, optimerad maskin.

---

## 7. Avslutande reflektion

Det intressanta med den forskning som vuxit fram under 2024–2026 är att den inte primärt handlar om att lura AI-detektorer. Den handlar om *trovärdighet*. En text som inte tar ställning, inte visar genuint tvivel och inte innehåller specifika detaljer är inte bara igenkännlig som AI-genererad – den är också svagare som text. Den övertalar ingen, den berör ingen, och den förmedlar egentligen inget utöver sin egen struktur.

Det är i den meningen SKILL.md är tänkt att användas: inte som ett verktyg för att kringgå detektion, utan för att säkerställa att texten faktiskt har något att säga – och säger det med Kents röst.

---

## Källförteckning

eyesift.com (2026). *How to Humanize AI Text: 7 Proven Methods That Work*. Hämtad 2026-06-08 från https://www.eyesift.com/blog/humanize-ai-text/

Jain, N., m.fl. (2024). *Relying on the Unreliable: The Impact of Language Models' Reluctance to Express Uncertainty*. Proceedings of ACL 2024. Hämtad 2026-06-08 från https://aclanthology.org/2024.acl-long.198.pdf

Kovač, G., m.fl. (2026). *Saying More Than They Know: A Framework for Quantifying Epistemic-Rhetorical Miscalibration in Large Language Models*. arXiv:2604.19768. Hämtad 2026-06-08 från https://arxiv.org/html/2604.19768

Leap AI (2026). *Hedging Words in AI Text — Why 'It's Important to Note' Flags*. Hämtad 2026-06-08 från https://www.tryleap.ai/learn/hedging-words-in-ai-text

Lythgoe, T.J. (2026). *Better Sentences Part 7 (Continued): Hedging*. Substack. Hämtad 2026-06-08 från https://tjlythgoe.substack.com/p/better-sentences-part-7-continued

San José State University Writing Center (2026). *Hedging, Softening, and Writer's Distance*. Hämtad 2026-06-08 från https://www.sjsu.edu/writingcenter/docs/handouts/Hedging-Softening-Distance.pdf

aihxp (2026). *humanizer – Pure-prompt skill that de-slops AI-sounding prose*. GitHub. Hämtad 2026-06-08 från https://github.com/aihxp/humanizer
