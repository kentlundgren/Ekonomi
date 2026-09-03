# PRD – Kommunicera min syn på hur ekonomi kan kommuniceras

**Projekt:** ekonomikommunikation
**Arbetsmapp:** `Ekonomi/ekonomikommunikation/260903/`
**Skapad:** 2026-09-03
**Senast ändrad:** 2026-09-03
**Status:** Under planering – HTML-sidan byggs först, blogginlägget (upplägg C) utgår från den
**Ägare:** Kent Lundgren

---

## 1. Kort om vad detta är

Kent vill formulera och sprida en egen ståndpunkt om hur ekonomi bör
kommuniceras i en verksamhet. Den här PRD:n planerar arbetet: vad som ska
sägas, i vilken form, i vilken ordning.

Fritidsprojekt. Inte ett uppdrag från Simrishamns kommun eller Poolia.

---

## 1b. Varför det här behöver sägas

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

Horisonten är alltså flera år, inte ett. Står vi i 2026 vill de ansvariga
kunna se 2026 och en bild av 2027, 2028 och 2029. Detaljerna långt fram går
inte att veta. Förutsättningarna måste man ändå ha grepp om, för att åtaganden
som sträcker sig förbi årsskiftet ska gå att fatta beslut om.

Tyngdpunkten ligger på **kommunikationshantverket**: hur ekonomen visar den
här bilden begripligt och ärligt för personer som inte är ekonomer, särskilt
när verksamheten lever på flera sorters pengar samtidigt (offentliga medel,
bidrag, projektmedel, egna intäkter) som var och en har sin egen säkerhet och
sin egen tidshorisont.

---

## 3. Modellen som ska visualiseras och beskrivas

### 3.1 Den rullande flerårshorisonten

Tänk ett rutnät. Raderna är årets tre nedslag (kalla dem T1, T2, T3/bokslut).
Kolumnerna är innevarande år plus tre år framåt.

```
             2026        2027        2028        2029
           (år 0)      (år 1)      (år 2)      (år 3)
T1     utfall+prognos  budget      ram         ram
T2     utfall+prognos  budget/prg  ram         ram
T3     bokslut         budget      tidig prg   ram
```

Fönstret flyttas fram ett steg varje år. Vid T1 2027 tittar man på
2027–2030. Bilden byggs om vid varje nedslag, den låses inte en gång per år.

### 3.2 Precisionen avtar med avståndet

- **År 0:** kronor, mot budget, med förklarade avvikelser.
- **År 1:** budgetnivå eller tidig prognos, huvudposter.
- **År 2–3:** intervall och förutsättningar. Frågan är inte "hur mycket"
  utan "har vi rimlig visshet om att finansieringen finns".

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
3. Den rullande horisonten som princip, med rutnätet som bild.
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
2. Kent berättar mer om modellen och vad HTML-sidan ska visa (pågår).
3. Skiss till HTML-sidan: rutnätet, intäktsmixen, säkerhetsgrad som färg,
   plus GitHub-hörna och teknik-modal (avsnitt 6.1).
4. Bygg HTML-sidan i Ekonomi-projektets struktur (nav, teman, jag-form).
   Aktivera skill `kent-bygg-sidor`.
5. README i den här mappen uppdateras med länk till live-sidan.
6. Utkast till blogginlägg (upplägg C), som utgår från den färdiga sidan,
   granskat mot humanizer-reglerna. Aktivera skill `kent-skrivstil`.
7. Kent läser, justerar, publicerar på Controller utan gränser.
8. Ev. kort LinkedIn-inlägg som länkar till bloggtexten.

Process-loggen för HTML-sidan (beslut och alternativ under bygget) förs enligt
minnet om vibe-coding-transparens, i en egen `process-logg.md` i den här mappen.

---

## 10. SPEC.md-checkpoint

Enligt Kents meta-regel 6 ska varje PRD ha en checkpoint mot en `SPEC.md`.
`SPEC.md` skapas när HTML-sidans innehåll är bestämt och arbetsplanen i
avsnitt 9 är bekräftad. Den listar de avprickningsbara leveranserna
(HTML-sida live, README uppdaterad, blogginlägg publicerat, LinkedIn-inlägg).

Tills dess: **ingen SPEC.md än.** PRD:n är i planeringsfas.

---

## 11. Öppna frågor

Om HTML-sidan (avgörs efter att Kent berättat mer):

- Vad ska sidan låta läsaren göra? Läsa en färdig bild, eller mata in egna
  siffror och se flerårshorisonten räknas om?
- Påhittad exempeldata, eller ett neutralt räkneexempel?
- Fyra år framåt fast, eller horisonten som inställning på sidan?
- Ska intäktsmixen (offentligt/bidrag/projekt/eget) vara en egen vy, eller
  vävas in i rutnätet?
- Var i Ekonomi-projektets struktur hör sidan hemma? Egen sektion, eller
  under ekonomistyrning?

Om blogginlägget (avgörs närmare publicering):

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
