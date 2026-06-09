---
name: linkedin_pulse
description: >-
  Skriver LinkedIn Pulse-artiklar i Kents röst: professionell, personlig och
  analytisk. Aktivera när Kent vill publicera en längre artikel på LinkedIn
  (inte ett kort feed-inlägg). Alla regler i humanizer.md och
  humanizer_ton/SKILL.md gäller parallellt.
metadata:
  projekt: Ekonomi (Kent Lundgrens redovisningsreflektioner)
  format: LinkedIn Pulse (artikel, inte feed post)
  röst-referens: controllerutangranser.wordpress.com, humanizer_ton/SKILL.md
  målgrupp: controllers, ekonomer, offentlig sektor, AI-intresserade yrkesverksamma
  senast uppdaterad: 2026-06-09
---

## När ska skillet aktiveras?

Aktivera när Kent vill skriva en **LinkedIn Pulse-artikel** – inte ett kortare feed-inlägg.

| Egenskap | Feed-inlägg | Pulse-artikel |
|----------|-------------|---------------|
| Längd | 150–300 ord | 600–1 500 ord |
| Livslängd | Försvinner ur flödet snabbt | Ligger kvar på profilen permanent |
| Struktur | Löpande text, inga rubriker | H2-rubriker, korta stycken, inline-länkar |
| Syfte | Engagemang, snabb diskussion | Djup, trovärdighet, AI-sökning |
| Källhänvisningar | Undvik (begränsar räckvidd) | Inline-länkar uppmuntras |
| Hashtags | 3–5 | 3–5 |

---

## Del 0 – LinkedIn Pulse-format

### Obligatorisk struktur

1. **Hook (rad 1–3)**
   Det enda som syns i förhandsgranskningen i flödet. Ska fungera som en
   fristående mening – provokativ, konkret eller oväntad. Läsaren ska vilja
   klicka utan att ha sett resten.

2. **Öppningsstycke (4–8 rader)**
   Situationen, problemet eller observationen. Konkret och personlig, aldrig
   generell. Öppna med det ögonblick som faktiskt hände – inte med en definition.

3. **Brödtext med H2-rubriker**
   2–4 sektioner. Varje sektion håller ett fokus. Korta stycken: 2–3 meningar,
   sedan radbrytning. Inga stycken längre än 4 meningar.

4. **Avslut med fråga eller ställningstagande**
   Aldrig en sammanfattning. Antingen en öppen fråga som bjuder in till
   kommentarer, eller ett tydligt "det här är min slutsats."

5. **CTA + länk**
   Länk till blogginlägg, GitHub-projekt eller annan resurs. Skriv vad läsaren
   hittar där – inte bara "läs mer här."

6. **Hashtags**
   3–5 stycken. Inte fler – det ser spammigt ut.

### Vad som inte fungerar i Pulse

- Stycken längre än 4–5 meningar
- Generiska avslutningar ("spännande tider väntar", "framtiden ser ljus ut")
- Mer än 6 hashtags
- Akademisk jargong utan förklaring direkt i texten

**OBS – källförteckning:** Kent använder Harvard-källförteckning i slutet av
sina Pulse-artiklar. Det avviker från typiska LinkedIn-råd om inline-länkar,
men signalerar seriositet för hans publik (controllers, ekonomer). Behåll
Harvardformatet – det är en del av Kents röst på LinkedIn.

---

## Del 1 – Kents röst på LinkedIn

LinkedIn-publiken är professionell men scrollar fort. Kents röst ska vara
densamma som i bloggen – personlig, analytisk, specifik – men med kortare
meningar och tydligare struktur.

### Titelregel – kort slår långt

Kents mest lästa artikel heter "Karaktär" (ett ord, 1 300+ visningar).
Hans näst publicerade har en lång frågetitel. Lärdomen:

- **1–3 ord** skapar ett nyfikenhetsgap – läsaren måste klicka för att förstå
- **Lång beskrivande titel** berättar för mycket, minskar klickmotivationen
- Ge alltid ett alternativ med kort titel (1–3 ord) i rubrikförslagen

### Hook-formler som fungerar för Kent

**Provokativt påstående:**
> "AI skriver bättre än de flesta av oss. Det är inte problemet."

**Konkret observation:**
> "En budgetkommentar jag lät AI skriva om blev korrekt och välformulerad.
> Den sa inte längre vad jag tyckte om avvikelsen."

**Retorisk fråga:**
> "Vad händer med din yrkesroll när alla i din bransch skriver likadant?"

**Personligt ögonblick:**
> "En vän skickade ett mejl och undrade om jag skrivit mitt senaste inlägg
> själv. Det hade jag. Nästan."

### Skillnad blogg → Pulse

| Blogg | Pulse |
|-------|-------|
| Utrymme för djupa resonemang | Snabbare, mer direkt |
| Formell källförteckning | Inline-länkar |
| Akademisk förankring synlig | Forskning nämns men förklaras enkelt |
| Kan avslutas öppet | CTA och länk i slutet |

### Vad Kents LinkedIn-publik förväntar sig

- Perspektiv från kommunal/offentlig sektor (ovanligt på LinkedIn)
- Koppling mellan AI och yrkesrollen som controller/ekonom
- Ärliga reflektioner: vad AI klarar och inte klarar
- Praktiska grepp som läsaren kan ta med sig direkt

---

## Del 2 – Custom instructions och röstprofil (förklaring för LinkedIn-publiken)

En central del av Kents arbete med AI-text är att bygga upp en röstprofil –
att lära AI:n hur han skriver, vad han brukar ta ställning till och var hans
kunskapsgränser faktiskt går. LinkedIn-publiken kan förstå detta som:

| Fil i projektet | Vad det är på vanlig svenska |
|-----------------|------------------------------|
| `CLAUDE.md` | Kontextfil – berättar för AI:n vem Kent är, vad projektet handlar om och vilka regler som gäller |
| `humanizer.md` | Katalog med 14 mönster att undvika, med konkreta före/efter-exempel |
| `humanizer_ton/SKILL.md` | Procedur i 7 steg som AI kör på varje text |
| Samlingen | En "röstprofil" – AI:ns minne av hur Kent skriver |

**Nyckelinsikt för LinkedIn-publiken:** Att bygga röstprofilen tar tid. Det
lönar sig på fritiden när man arbetar ensam. Frågan är om det är möjligt på
jobbet, där hela arbetsplatsen delar samma modell och ingen har tid att ge
AI:n all bakgrundsinformation.

---

## Procedur – skriv Pulse-artikeln i ordning

### Steg 1 – Förslag på upplägg
Ge alltid 3 förslag på rubrik + stolpar om Kent inte angett det (per regeln i
CLAUDE.md). Fråga vilket han väljer innan utkastet skrivs.

### Steg 2 – Skriv utkast
Följ strukturen: hook → öppning → 2–4 H2-sektioner → avslut → CTA + länk →
hashtags. Max 1 500 ord.

### Steg 3 – Kör humanizer-passen
Rytmpasset, specificeringspasset och åsiktspasset (se humanizer_ton/SKILL.md).
LinkedIn-text är extra känslig för uniform meningslängd – variera aktivt.

### Steg 4 – Ingress till publiceringsflödet
Fråga alltid om tre förslag på **ingress** innan artikeln publiceras.
Ingressen är det korta stycke LinkedIn visar i flödet under rubriken
"Berätta för ditt nätverk vad artikeln handlar om" – det som avgör om
folk klickar.

Ingressen ska:
- Vara några meningar, max ~300 tecken
- Fungera fristående utan att avslöja hela artikeln
- Ha samma ton som artikelns hook

Ge alltid tre alternativ med olika känsla:
- Ett **provokativt/korthuggit** (börjar med ett starkt påstående)
- Ett **personligt/berättande** (öppnar med ett konkret ögonblick)
- Ett **frågebaserat/yrkesriktat** (riktar sig direkt till yrkeskåren)

**Exempel på godkänd ingress (Kents första Pulse-artikel, juni 2026):**

> AI skriver bättre än de flesta av oss. Det är inte problemet. Problemet
> är att din text förlorar dig – och att det snart gäller hela din yrkeskår.
>
> Vad händer när alla controllers, revisorer och läkare börjar skriva med
> samma AI-modell? Rösten försvinner ur texten – och med den en del av vad
> yrkesrollen faktiskt är värd. Mina tankar om vad det innebär, och ett
> praktiskt svar.

Notera: kombinationen av ett korthuggit påstående (rad 1–2) och en
yrkesriktad fråga (rad 3–4) fungerade bra. Använd som mall för framtida
ingress-förslag.

### Steg 5 – Kontrollera LinkedIn-specifikt

- ✅ Hook fungerar som fristående mening (syns i förhandsgranskning)
- ✅ Inga stycken längre än 3–4 meningar
- ✅ Minst en inline-länk i texten
- ✅ CTA och länk i slutet
- ✅ 3–5 hashtags, inte fler
- ✅ Ingen formell källförteckning – allt löst med inline-länkar

---

## Exempel på välstrukturerade Pulse-artiklar

*(Fyll på med konkreta exempel allteftersom du hittar bra sådana. Skriv en
mening om vad som är bra med just den artikeln – hook, struktur, avslut.)*

**Exempel 1 – Pedagogisk artikel med tydlig hook och inline-källhänvisningar:**
Madhav Mistry (2026). *Why LinkedIn Pulse Articles Matter More Than Ever in the AI Search Era*.
https://www.linkedin.com/pulse/why-linkedin-pulse-articles-matter-more-than-ever-ai-search-mistry-2ayve/
Bra: tydlig tes direkt i inledningen, strukturerade H2-rubriker, avslutar med
en framåtblickande poäng snarare än en sammanfattning.

**Exempel 2 – Platshållare (pedagogisk yrkesrollsreflektion):**
[Lägg in länk + en mening om vad som är bra med strukturen]

**Exempel 3 – Platshållare (personlig historia som öppnar till generell insikt):**
[Lägg in länk + en mening om vad som är bra]

**Kents egna publicerade Pulse-artiklar:**

1. Lundgren, K. (2026-06-01). *Karaktär.*
   https://www.linkedin.com/pulse/karakt%C3%A4r-kent-lundgren-5onde/
   **Resultat: 1 300+ visningar** – Kents mest lästa Pulse-artikel.

   Lärdomar från denna artikel:

   - **Ettords-titel skapar nyfikenhetsgap.** "Karaktär" avslöjar ingenting – läsaren måste klicka för att förstå. En lång beskrivande titel berättar för mycket. Regel: testa titlar på 1–3 ord när ämnet tillåter det.
   - **Haka på ett viralt/trendande ämne.** Artikeln refererade till Huang-intervjun (Nvidia, maj 2026) som cirkulerade brett i just den veckan. Timing + känd avsändare = räckvidd. Fråga alltid: finns det ett aktuellt ämne eller person att koppla texten till?
   - **Öppna med en direkt fråga till yrkeskåren.** "Är karaktär den nya hårdvalutan för oss ekomer/controllers?" identifierar läsaren omedelbart. Hen känner sig sedd.
   - **Konkreta siffror tidigt.** "32 miljarder kronor (SKR, 2026)" i andra stycket signalerar att detta är förankrat i verkligheten, inte spekulation.
   - **Avsluta med en explicit kommentarsfråga.** "Vad tror du? Kommer vår karaktär betyda mer än våra Excel-kunskaper i framtiden?" – inte bara en öppen tanke, utan en direkt inbjudan. Det driver kommentarer.
   - **Harvard-källförteckning i slutet fungerar.** Trots att det är ovanligt på LinkedIn signalerar det seriositet för Kents publik. Behåll det.
   - **Korslänka till egen blogg** i källförteckningen – driver trafik mellan plattformarna.

2. Lundgren, K. (2026-06-09). *Vad händer med din yrkesroll när din text låter som alla andras?*
   https://www.linkedin.com/pulse/vad-h%C3%A4nder-med-din-yrkesroll-n%C3%A4r-text-l%C3%A5ter-som-alla-andras-lundgren-fx0ie/

   Vad som fungerade bra i denna artikel:
   - Hook i två rader: påstående + tystnad. "AI skriver bättre än de flesta av oss. Det är inte problemet." Läsaren stannar kvar för att förstå vad problemet faktiskt är.
   - Kent lade till eget konkret exempel som inte fanns i AI-utkastet: "bränsle- och underhållskostnaderna för våra badanläggningar har ökat med 50 % under de tre sista månaderna" – det är specificeringspasset i praktiken.
   - Avslut med öppen fråga ("vem på arbetsplatsen ska ta ansvar?") genererade kommentarspotential.
   - Ingress: kombination av korthuggit påstående + yrkesriktad fråga (se Steg 4).

---

## Relaterade filer i projektet

- [`humanizer.md`](../../humanizer.md) – 14 mönster att undvika
- [`skills/humanizer_ton/SKILL.md`](../humanizer_ton/SKILL.md) – humanizer-proceduren i 7 steg
- [`skills/humanizer_ton/humanizer_bakgrund.md`](../humanizer_ton/humanizer_bakgrund.md) – akademisk bakgrund
- [`CLAUDE.md`](../../CLAUDE.md) – projektregler inkl. regel om 3 upplägg vid längre texter
