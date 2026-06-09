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

- Formell källförteckning i slutet → ersätt med inline-länkar i texten
- Stycken längre än 4–5 meningar
- Generiska avslutningar ("spännande tider väntar", "framtiden ser ljus ut")
- Mer än 5 hashtags
- Akademisk jargong utan förklaring direkt i texten

---

## Del 1 – Kents röst på LinkedIn

LinkedIn-publiken är professionell men scrollar fort. Kents röst ska vara
densamma som i bloggen – personlig, analytisk, specifik – men med kortare
meningar och tydligare struktur.

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

### Steg 4 – Kontrollera LinkedIn-specifikt

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
- [Lägg till länk när första Pulse-artikeln är publicerad]

---

## Relaterade filer i projektet

- [`humanizer.md`](../../humanizer.md) – 14 mönster att undvika
- [`skills/humanizer_ton/SKILL.md`](../humanizer_ton/SKILL.md) – humanizer-proceduren i 7 steg
- [`skills/humanizer_ton/humanizer_bakgrund.md`](../humanizer_ton/humanizer_bakgrund.md) – akademisk bakgrund
- [`CLAUDE.md`](../../CLAUDE.md) – projektregler inkl. regel om 3 upplägg vid längre texter
