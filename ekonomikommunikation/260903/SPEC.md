# SPEC – Interaktiv sida: fyra gruppers ekonomi fyra år fram

**Projekt:** ekonomikommunikation
**Arbetsmapp:** `Ekonomi/ekonomikommunikation/260903/`
**Skapad:** 2026-09-03
**Hör till:** [`PRD.md`](PRD.md), särskilt avsnitt 3.6–3.11
**Status:** Redo för bygge. Checkpoint enligt meta-regel 6.

---

## 1. Vad som ska byggas

En fristående interaktiv sida som visar fyra gruppers resultaträkning fyra år
framåt (grupp AA, BB, CC, DD) plus ett redigerbart läge (DD-ver2), sedd från
två tidsögonblick (år X och år X+1). Sidan ska få läsaren att se när
finansieringen tar slut, hur mycket sämre bilden blir ett år senare, och
reflektera kring hur illa det egentligen är för grupp DD. Prosan skriver inte
ut "forskargrupp"/"forskning" (PRD avsnitt 3.6).

Bygg med skill `kent-bygg-sidor`. Process-logg förs i `process-logg.md`.

---

## 2. Filer

| Fil | Innehåll |
|-----|----------|
| `index.html` | Sidans struktur, site-nav, GitHub-hörna, teknik-modal |
| `styles.css` | All CSS |
| `app.js` | Datamodell, beräkning, interaktion |
| `process-logg.md` | Beslut och alternativ under bygget |

Inget byggsteg. Öppnas direkt i webbläsare. Live-URL:
`https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/`.

---

## 3. Datamodell

Två explicita resultaträkningar per typfall, en per tidsögonblick (beslut
2026-09-03). Ingen framräkning ur en underliggande portfölj.

Varje resultaträkning har fem årskolumner och raderna: sju bidragsgivare,
TOT intäkter, Löner, Diverse, OH, Avskrivningar, TOT kostnader, RESULTAT.
Alla belopp i tkr. Tomma celler = inget bidrag det året.

### 3.1 Kostnader (samma struktur för alla fyra grupper)

Lönerna räknas upp ~3 % per år, OH är 22 % av lönerna (beslut 2026-09-03,
utökat till alla grupper från AA). Diverse och Avskrivningar ligger platt.

**Sett från X, kolumner X, X+1, X+2, X+3, X+4:**

| Rad | X | X+1 | X+2 | X+3 | X+4 |
|-----|---|-----|-----|-----|-----|
| Löner | −7 000 | −5 000 | −5 150 | −5 300 | −5 450 |
| Diverse | −1 000 | −1 000 | −1 000 | −1 000 | −1 000 |
| OH | −1 540 | −1 100 | −1 133 | −1 166 | −1 199 |
| Avskrivningar | −500 | −500 | −500 | −500 | −500 |
| **TOT kostnader** | −10 040 | −7 600 | −7 783 | −7 966 | −8 149 |

**Sett från X+1, kolumner X+1, X+2, X+3, X+4, X+5:**

| Rad | X+1 | X+2 | X+3 | X+4 | X+5 |
|-----|-----|-----|-----|-----|-----|
| Löner | −5 000 | −5 150 | −5 300 | −5 450 | −5 600 |
| Diverse | −1 000 | −1 000 | −1 000 | −1 000 | −1 000 |
| OH | −1 100 | −1 133 | −1 166 | −1 199 | −1 232 |
| Avskrivningar | −500 | −500 | −500 | −500 | −500 |
| **TOT kostnader** | −7 600 | −7 783 | −7 966 | −8 149 | −8 332 |

År X har en engångshög lönekostnad (−7 000) i "sett från X"-vyn.

### 3.2 Intäkter per typfall

Tom cell = bidraget löper inte det året.

Intäktsraderna nedan är oförändrade sedan tidigare. RESULTAT och Σ är
omräknade 2026-09-03 med den nya, gemensamma kostnadsstrukturen (löner +3 %/år).

**Grupp AA, sett från X** (X…X+4): VR 1000×5 · EU 2000×5 · Bidr. 3 1100×5 ·
Bidr. 4 3000×5 · Bidr. 5 500 / 400 / 700 / 900 / 1000 · Bidr. 6 700/–/–/–/– ·
Bidr. 7 1800/–/–/–/–.
TOT intäkter 10 100 / 7 500 / 7 800 / 8 000 / 8 100.
RESULTAT **60 / −100 / 17 / 34 / −49**. Σ = −38.
(Alla negativa år ligger under 2 %-toleransen, se 4.1, så cellerna är gröna
och banner grön.)

**Grupp AA, sett från X+1** (X+1…X+5): VR 1000×5 · EU 2000×5 · Bidr. 3 1100×5 ·
Bidr. 4 3000×5 · Bidr. 5 400 / 700 / 900 / 1000 / 1100 · Bidr. 6 – · Bidr. 7 –.
TOT intäkter 7 500 / 7 800 / 8 000 / 8 100 / 8 200.
RESULTAT **−100 / 17 / 34 / −49 / −132**. Σ = −230. Ett år senare: **−192**
(under 300, visas som "i praktiken oförändrat"). X+1…X+4 identiska med sett
från X, bara X+5 är nytt. AA:s bild är i stort sett oförändrad ett år senare.

**Grupp BB, sett från X**: Bidr. 4 3000/3000/3000/3000/– · Bidr. 5 500/500/500/–/– ·
Bidr. 6 700/–/–/–/– · Bidr. 7 3000/–/–/–/–.
TOT intäkter 11 300 / 7 600 / 7 600 / 7 100 / 4 100.
RESULTAT **1 260 / 0 / −183 / −866 / −4 049**. Σ = −3 838.
(X+2 och X+3 gula, X+4 röd. 1 rött år.)

**Grupp BB, sett från X+1**: Bidr. 4 3000/3000/3000/–/– · Bidr. 5 500/500/–/–/–.
TOT intäkter 7 600 / 7 600 / 7 100 / 4 100 / 4 100.
RESULTAT **0 / −183 / −866 / −4 049 / −4 232**. Σ = −9 330. Ett år senare: **−5 492**.
(X+2, X+3 gula, X+4 och X+5 röda. 2 röda år.)

**Grupp CC, sett från X**: Bidr. 3 1100/1100/1100/1100/– · Bidr. 4 3000/3000/3000/–/– ·
Bidr. 5 500/500/500/500/– · Bidr. 6 700/–/–/–/– · Bidr. 7 3000/–/–/–/–.
TOT intäkter 11 300 / 7 600 / 7 600 / 4 600 / 3 000.
RESULTAT **1 260 / 0 / −183 / −3 366 / −5 149**. Σ = −7 438.
(X+2 gul, X+3 och X+4 röda. 2 röda år.)

**Grupp CC, sett från X+1**: EU 2000/2000/2000/–/2000 · Bidr. 3 1100/1100/1100/–/– ·
Bidr. 4 3000/3000/–/–/– · Bidr. 5 500/500/500/–/–.
TOT intäkter 7 600 / 7 600 / 4 600 / 1 000 / 3 000.
RESULTAT **0 / −183 / −3 366 / −7 149 / −5 332**. Σ = −16 030. Ett år senare: **−8 592**.
(X+2 gul, X+3 till X+5 röda. 3 röda år.)
(EU har ett hoppår: tomt X+4, åter X+5. Behålls eller jämnas ut, se PRD avsnitt 11.)

**Grupp DD, sett från X**: VR 1000/1000/1000/1000/– · EU 2000/2000/2000/2000/– ·
Bidr. 3 1100/1100/–/–/– · Bidr. 4 3000/3000/–/–/– · Bidr. 5 500/–/–/–/– ·
Bidr. 6 700/–/–/–/– · Bidr. 7 3000/–/–/–/–.
TOT intäkter 11 300 / 7 100 / 3 000 / 3 000 / 0.
RESULTAT **1 260 / −500 / −4 783 / −4 966 / −8 149**. Σ = −17 138.
(X+1 gul, X+2 till X+4 röda. DD går minus redan X+1.)

**Grupp DD, sett från X+1**: VR 1000/1000/1000/–/– · EU 2000/2000/–/–/– ·
Bidr. 3 1100/–/–/–/– · Bidr. 4 3000/–/–/–/– · Bidr. 5 500/–/–/–/–.
TOT intäkter 7 600 / 3 000 / 1 000 / 0 / 0.
RESULTAT **0 / −4 783 / −6 966 / −8 149 / −8 332**. Σ = −28 230. Ett år senare: **−11 092**.
(X+2 till X+5 röda. 4 röda år.)

### 3.3 Härledda värden

- TOT intäkter[år] = summa av bidragsgivarraderna.
- TOT kostnader[år] = summa av kostnadsraderna.
- RESULTAT[år] = TOT intäkter[år] + TOT kostnader[år].
- Σ RESULTAT = summa över fönstrets fem år.
- Ett år senare = Σ RESULTAT (sett från X+1) − Σ RESULTAT (sett från X).

---

## 4. Färg och varning

### 4.1 Cellfärg på RESULTAT-raden

| Villkor | Färg |
|---------|------|
| RESULTAT ≥ 0 | grön / ingen markering |
| RESULTAT < 0 och \|RESULTAT\| / \|TOT kostnader\| < 2 % | grön (inom balanstoleransen) |
| kvoten ≥ 2 % och < tröskel | gul |
| kvoten ≥ tröskel | röd |

**Balanstolerans (beslut 2026-09-03):** en avvikelse under 2 % av årets
kostnad räknas som i balans och färgas grön. Det låter grupp AA:s små
årsvariationer läsas som "i fas", inte som varningar. Fast värde, inte
inställbart.

Tröskeln gul/röd är inställbar på sidan. Förval **15 %**. Rimligt intervall
5–40 %.

**"Ett år senare"-talet:** när det är mindre än 300 tkr visas det utan pil, i
neutral färg, med texten "i praktiken oförändrat". Σ-staplarna skalas mot minst
2 000 tkr, så ett litet tal ger en liten stapel.

### 4.2 Banner (räknas på fönstret)

| Läge | Banner |
|------|--------|
| 0 röda, 0 gula år | grön: "Går ihop alla år i fönstret." |
| 0 röda, ≥1 gult år | gul: "Mindre avvikelser. Håll uppsikt." |
| 1 rött år | röd: "Ett år i fönstret går klart inte ihop." |
| 2 röda år | röd: "Två år går inte ihop. Ta upp finansieringen nu." |
| ≥3 röda år | röd, kraftig: "Tre år eller fler går inte ihop. Åtgärd krävs nu." |

### 4.3 Gruppknappar

Grupperna heter **AA, BB, CC, DD** på sidan (planeringens A–D). AA grön,
BB gul, DD röd. CC växlar mellan gul och röd via CSS-animation.
DD-ver2-knappen är streckad tills vald.

---

## 5. Layout och komponenter

1. **Site-nav** högst upp, samma som övriga Ekonomi-sidor. Aktuell sida markerad.
2. Ingress i jag-form (Kents text): fyra grupper med olika framförhållning och
   olika lätt att få intäkter, utan att skriva ut "forskargrupp"/"forskning".
   Sista ingress-stycket förklarar den rullande fönsterjämförelsen (X till X+4
   mot X+1 till X+5), med analogin till rullande tolv månader.
3. **Gruppväljare:** knappar Grupp AA, BB, CC, DD (färgade enligt 4.3) plus
   **Grupp DD-ver2**.
4. **Tidsväljare:** egen avskild grupp, "I år (sett från X)" och
   "Nästa år (sett från X+1)".
5. **Ett år senare-kort:** talet (nedåtpil), plus Σ-staplar för i år och
   nästa år, visuellt åtskilda.
6. **Banner** enligt 4.2.
7. **Notrad** per grupp, kort text om vad läget innebär.
8. **Resultaträkningstabell.** Bidragsgivarrader visas som default, knapp för
   att fälla ihop. Negativa RESULTAT-celler färgas enligt 4.1. Tomma
   intäktsceller är skrafferade.
9. **Fråga vid tom cell.** Vid hover, fokus eller tryck på en tom intäktscell
   visas den **gruppspecifika** reflektionen (PRD 3.10) på två ställen: en
   liten fast-positionerad ruta vid cellen, och en större ruta under tabellen
   som byts och blinkar till. För DD står den utbyggda reflektionen framme
   även utan hover.
10. **Tröskelkontroll** (gul/röd), ett reglage med procentvärde, förval 15 %.
11. **GitHub-hörna** (enkel länk) nere till vänster, **teknik-modal** nere
    till höger.

12. **Avslutande analys** (`<h2>En avslutande analys</h2>`) sist i containern,
    under resultaträkningstabellen. Kents text (godkänd 2026-09-03): alla fyra
    grupperna får sämre samlat resultat ett år senare, AA försumbart, BB/CC/DD
    genuint. Slutsatsen är att det inte är en generell nedgång (AA opåverkad),
    utan att BB/CC/DD:s finansieringsmiljö har blivit hårdare.

Kan tillkomma: de två RESULTAT-raderna (sett från X och sett från X+1)
staplade år för år med förändringen per cell. Inte låst, se PRD avsnitt 11.

### 5.1 Grupp DD-ver2

- Utgår från grupp DD för valt tidsögonblick.
- Läsaren kan redigera bidragsgivarcellernas belopp, lägga till egna
  intäktsrader, och sänka kostnadsrader. Indatafält har gul bakgrund.
- Vid varje ny eller höjd intäkt visas en icke-blockerande påminnelse:
  "Är du säker på att den här intäkten kommer just det året?"
- RESULTAT, färger, banner och ett år senare-talet räknas om direkt.
- Knapp "Återställ till Fall D".

---

## 6. Projektkonventioner

- Separata `index.html`, `styles.css`, `app.js`. Inget ramverk, inget byggsteg.
- Site-nav, GitHub-hörna (`{ } GitHub` → `github.com/kentlundgren/Ekonomi`),
  teknik-modal, enligt `Ekonomi/CLAUDE.md`.
- Teknik-modalen nämner att bra prompter, kontext och harness krävs.
- Löptext i jag-form.
- Indatafält gul bakgrund.
- Responsiv. På mobil ersätts hover med tryck, frågerutan alltid synlig för D.
- Källor, om några anges, enligt `kent-referens-skill`.

---

## 7. Sajtkoppling

- Länk till sidan läggs på `Ekonomi/index.html` så den nås från
  `https://kentlundgren.github.io/Ekonomi/`.
- `Ekonomi/README.md` uppdateras: projektstruktur, Live-sidor-tabell,
  filbeskrivning med klickbar rubrik (enligt `Ekonomi/CLAUDE.md`).
- `ekonomikommunikation/260903/README.md` får klickbar länk till live-sidan.

---

## 8. Utanför scope

- Fler typfall än A–D och D-ver2.
- Att spara läsarens D-ver2-ändringar mellan besök.
- Riktig verksamhetsdata. Allt är påhittat räkneexempel.
- Blogginlägget. Egen leverans, skrivs efter sidan (PRD avsnitt 7).

---

## 9. Acceptanskriterier

Bockade = verifierade lokalt i webbläsare 2026-09-03. Kent verifierar även
live efter push.

- [x] Sidan öppnas fristående utan byggsteg, i `index.html` + `styles.css` + `app.js`.
- [x] Grupp AA, BB, CC, DD visar rätt RESULTAT-rad och Σ enligt avsnitt 3.2, för båda tidsögonblicken.
- [x] Ett år senare-talet: AA "−192 tkr, i praktiken oförändrat", BB −5 492, CC −8 592, DD −11 092.
- [x] Cellfärg följer 2 %-toleransen och tröskeln. AA:s små negativa år är gröna. Med 15 % är BB:s X+2/X+3 gula och X+4 röd.
- [x] Banner för AA är grön ("Går ihop alla år i fönstret") i båda vyerna. Ordningen AA « BB < CC < DD håller.
- [x] Tröskeln går att ändra på sidan och färgerna uppdateras direkt.
- [x] Gruppknapparna är färgade (AA grön, BB gul, DD röd), CC växlar gul/röd.
- [x] Bidragsgivarrader visas som default, går att fälla ihop.
- [x] Tomma intäktsceller är skrafferade. Hover, fokus eller tryck visar den gruppspecifika frågan i två rutor (vid cellen + under tabellen). DD:s utbyggda reflektion står framme även utan hover.
- [x] Tidsväljaren är visuellt åtskild från gruppknapparna.
- [x] DD-ver2 går att redigera, påminnelsen visas vid ny intäkt, allt räknas om, återställ fungerar.
- [x] Site-nav, GitHub-hörna och teknik-modal finns och ser ut som resten av projektet.
- [x] Fungerar på mobil, tryck ersätter hover. (Horisontell scroll i navet rättad, tooltip göms vid scroll/klick utanför.)
- [x] Länk finns på `Ekonomi/index.html`, och `Ekonomi/README.md` samt mappens `README.md` är uppdaterade.
- [x] `process-logg.md` är förd under bygget.

---

## 10. Beslut som låstes till denna SPEC

Se beslutsloggen i [`PRD.md`](PRD.md) avsnitt 12. Sammanfattning: två explicita
resultaträkningar per typfall och tidsögonblick, tröskel 15 % förval och
inställbar, färgade knappar, D-ver2 med enbart påminnelse, filer i `260903/`,
sidan nås från Ekonomi-sajten.
