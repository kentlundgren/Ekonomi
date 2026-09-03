# SPEC – Interaktiv sida: forskargruppens ekonomi fyra år fram

**Projekt:** ekonomikommunikation
**Arbetsmapp:** `Ekonomi/ekonomikommunikation/260903/`
**Skapad:** 2026-09-03
**Hör till:** [`PRD.md`](PRD.md), särskilt avsnitt 3.6–3.11
**Status:** Redo för bygge. Checkpoint enligt meta-regel 6.

---

## 1. Vad som ska byggas

En fristående interaktiv sida som visar en forskargrupps resultaträkning fyra
år framåt, i fyra typfall (A–D) plus ett redigerbart läge (D-ver2), sedd från
två tidsögonblick (år X och år X+1). Sidan ska få läsaren att se när
finansieringen tar slut, hur mycket sämre bilden blir ett år senare, och
ställa frågan om nya bidrag är på väg.

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

### 3.1 Kostnader (samma för alla typfall)

**Sett från X, kolumner X, X+1, X+2, X+3, X+4:**

| Rad | X | X+1 | X+2 | X+3 | X+4 |
|-----|---|-----|-----|-----|-----|
| Löner | −7 000 | −5 000 | −5 000 | −5 000 | −5 000 |
| Diverse | −1 000 | −1 000 | −1 000 | −1 000 | −1 000 |
| OH | −1 540 | −1 100 | −1 100 | −1 100 | −1 100 |
| Avskrivningar | −500 | −500 | −500 | −500 | −500 |
| **TOT kostnader** | −10 040 | −7 600 | −7 600 | −7 600 | −7 600 |

**Sett från X+1, kolumner X+1, X+2, X+3, X+4, X+5:**

| Rad | X+1 | X+2 | X+3 | X+4 | X+5 |
|-----|-----|-----|-----|-----|-----|
| Löner | −5 000 | −5 000 | −5 000 | −5 000 | −7 000 |
| Diverse | −1 000 | −1 000 | −1 000 | −1 000 | −560 |
| OH | −1 100 | −1 100 | −1 100 | −1 100 | −1 540 |
| Avskrivningar | −500 | −500 | −500 | −500 | −500 |
| **TOT kostnader** | −7 600 | −7 600 | −7 600 | −7 600 | −9 600 |

### 3.2 Intäkter per typfall

Tom cell = bidraget löper inte det året.

**Fall A, sett från X** (X…X+4): VR 1000/1000/1000/1000/1000 · EU 2000×5 ·
Bidragsgivare 3 1100×5 · Bidragsgivare 4 3000×5 · Bidragsgivare 5 500×5 ·
Bidragsgivare 6 700/–/–/–/– · Bidragsgivare 7 3000/–/–/–/–.
TOT intäkter 11 300 / 7 600 / 7 600 / 7 600 / 7 600.
RESULTAT **1 260 / 0 / 0 / 0 / 0**. Σ = +1 260.

**Fall A, sett från X+1** (X+1…X+5): VR 1000×5 · EU 2000×5 · Bidr. 3 1100×5 ·
Bidr. 4 3000×5 · Bidr. 5 500×5 · Bidr. 6 –/–/–/–/2000 · Bidr. 7 –.
TOT intäkter 7 600 / 7 600 / 7 600 / 7 600 / 9 600.
RESULTAT **0 / 0 / 0 / 0 / 0**. Σ = 0. Ett år senare: **−1 260**.

**Fall B, sett från X**: VR 1000×5 · EU 2000×5 · Bidr. 3 1100×5 ·
Bidr. 4 3000/3000/3000/3000/– · Bidr. 5 500/500/500/–/– · Bidr. 6 700/–/–/–/– ·
Bidr. 7 3000/–/–/–/–.
TOT intäkter 11 300 / 7 600 / 7 600 / 7 100 / 4 100.
RESULTAT **1 260 / 0 / 0 / −500 / −3 500**. Σ = −2 740.

**Fall B, sett från X+1**: VR 1000×5 · EU 2000×5 · Bidr. 3 1100×5 ·
Bidr. 4 3000/3000/3000/–/– · Bidr. 5 500/500/–/–/–.
TOT intäkter 7 600 / 7 600 / 7 100 / 4 100 / 4 100.
RESULTAT **0 / 0 / −500 / −3 500 / −5 500**. Σ = −9 500. Ett år senare: **−6 760**.

**Fall C, sett från X**: VR 1000×5 · EU 2000×5 ·
Bidr. 3 1100/1100/1100/1100/– · Bidr. 4 3000/3000/3000/–/– ·
Bidr. 5 500/500/500/500/– · Bidr. 6 700/–/–/–/– · Bidr. 7 3000/–/–/–/–.
TOT intäkter 11 300 / 7 600 / 7 600 / 4 600 / 3 000.
RESULTAT **1 260 / 0 / 0 / −3 000 / −4 600**. Σ = −6 340.

**Fall C, sett från X+1**: VR 1000×5 · EU 2000/2000/2000/–/2000 ·
Bidr. 3 1100/1100/1100/–/– · Bidr. 4 3000/3000/–/–/– · Bidr. 5 500/500/500/–/–.
TOT intäkter 7 600 / 7 600 / 4 600 / 1 000 / 3 000.
RESULTAT **0 / 0 / −3 000 / −6 600 / −6 600**. Σ = −16 200. Ett år senare: **−9 860**.

**Fall D, sett från X**: VR 1000/1000/1000/1000/– · EU 2000/2000/2000/2000/– ·
Bidr. 3 1100/1100/–/–/– · Bidr. 4 3000/3000/–/–/– · Bidr. 5 500/500/–/–/– ·
Bidr. 6 700/–/–/–/– · Bidr. 7 3000/–/–/–/–.
TOT intäkter 11 300 / 7 600 / 3 000 / 3 000 / 0.
RESULTAT **1 260 / 0 / −4 600 / −4 600 / −7 600**. Σ = −15 540.

**Fall D, sett från X+1**: VR 1000/1000/1000/–/– · EU 2000/2000/–/–/– ·
Bidr. 3 1100/–/–/–/– · Bidr. 4 3000/–/–/–/– · Bidr. 5 500/–/–/–/–.
TOT intäkter 7 600 / 3 000 / 1 000 / 0 / 0.
RESULTAT **0 / −4 600 / −6 600 / −7 600 / −9 600**. Σ = −28 400. Ett år senare: **−12 860**.

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
| RESULTAT < 0 och \|RESULTAT\| / \|TOT kostnader\| < tröskel | gul |
| RESULTAT < 0 och kvoten ≥ tröskel | röd |

Tröskeln är inställbar på sidan. Förval **15 %**. Rimligt intervall 5–40 %.

### 4.2 Banner (räknas på fönstret)

| Läge | Banner |
|------|--------|
| 0 röda, 0 gula år | grön: "Går ihop alla år i fönstret." |
| 0 röda, ≥1 gult år | gul: "Mindre avvikelser. Håll uppsikt." |
| 1 rött år | röd: "Ett år i fönstret går klart inte ihop." |
| 2 röda år | röd: "Två år går inte ihop. Ta upp finansieringen nu." |
| ≥3 röda år | röd, kraftig: "Tre år eller fler går inte ihop. Åtgärd krävs nu." |

### 4.3 Typfallsknappar

A grön, B gul, D röd. C växlar mellan gul och röd via CSS-animation.

---

## 5. Layout och komponenter

1. **Site-nav** högst upp, samma som övriga Ekonomi-sidor. Aktuell sida markerad.
2. Kort ingress i jag-form som säger vad sidan visar och varför.
3. **Typfallsväljare:** knappar A, B, C, D (färgade enligt 4.3) plus **D-ver2**.
4. **Tidsväljare:** egen avskild grupp, "I år (sett från X)" och
   "Nästa år (sett från X+1)".
5. **Ett år senare-kort:** talet (nedåtpil), plus Σ-staplar för i år och
   nästa år, visuellt åtskilda.
6. **Banner** enligt 4.2.
7. **Notrad** per typfall, kort text om vad läget innebär.
8. **Resultaträkningstabell.** Bidragsgivarrader visas som default, knapp för
   att fälla ihop. Negativa RESULTAT-celler färgas enligt 4.1. Tomma
   intäktsceller är skrafferade.
9. **Frågeruta** under tabellen. Vid hover eller tryck på en tom intäktscell
   visas frågan om nya bidrag (text i PRD 3.10). Visas alltid för Fall D.
10. **Tröskelkontroll** (gul/röd), t.ex. ett reglage med procentvärde.
11. **GitHub-hörna** nere till vänster, **teknik-modal** nere till höger.

### 5.1 D-ver2

- Utgår från Fall D för valt tidsögonblick.
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

- [ ] Sidan öppnas fristående utan byggsteg, i `index.html` + `styles.css` + `app.js`.
- [ ] A, B, C, D visar rätt RESULTAT-rad och Σ enligt avsnitt 3.2, för båda tidsögonblicken.
- [ ] Ett år senare-talet visar −1 260 (A), −6 760 (B), −9 860 (C), −12 860 (D).
- [ ] Cellfärg följer tröskeln. Med 15 % är B:s X+3 gul och X+4 röd.
- [ ] Tröskeln går att ändra på sidan och färgerna uppdateras direkt.
- [ ] Typfallsknapparna är färgade, C växlar gul/röd.
- [ ] Bidragsgivarrader visas som default, går att fälla ihop.
- [ ] Tomma intäktsceller är skrafferade. Hover eller tryck visar frågan. Frågerutan står alltid framme för D.
- [ ] Tidsväljaren är visuellt åtskild från typfallsknapparna.
- [ ] D-ver2 går att redigera, påminnelsen visas vid ny intäkt, allt räknas om, återställ fungerar.
- [ ] Site-nav, GitHub-hörna och teknik-modal finns och ser ut som resten av projektet.
- [ ] Fungerar på mobil, tryck ersätter hover.
- [ ] Länk finns på `Ekonomi/index.html`, och `Ekonomi/README.md` samt mappens `README.md` är uppdaterade.
- [ ] `process-logg.md` är förd under bygget.

---

## 10. Beslut som låstes till denna SPEC

Se beslutsloggen i [`PRD.md`](PRD.md) avsnitt 12. Sammanfattning: två explicita
resultaträkningar per typfall och tidsögonblick, tröskel 15 % förval och
inställbar, färgade knappar, D-ver2 med enbart påminnelse, filer i `260903/`,
sidan nås från Ekonomi-sajten.
