# Process-logg – ekonomikommunikations-sidan

Kronologisk logg över beslut och alternativ under bygget. Kompletterar
beslutsloggen i [`PRD.md`](PRD.md) avsnitt 12, som täcker planeringsfasen.

Förd enligt regeln om vibe-coding-transparens: en färdig sida visar bara
resultatet, den här filen visar vägen dit.

---

## 2026-09-03 – Planering

Se PRD.md och SPEC.md. Kort: fyra typfall (A–D) för en forskargrupps
resultaträkning fyra år fram, sedd från år X och X+1, med grön/gul/röd
markering och en fråga som väcks av de tomma intäktscellerna. Plus ett
redigerbart läge D-ver2.

## 2026-09-03 – Leverans 1: kärnan

Byggt: `index.html`, `styles.css`, `app.js`.

**Val under bygget:**

- **Tre filer, inte en.** Kent bad om separata HTML-, CSS- och JS-filer.
  Avviker från Ekonomi-projektets vanliga en-fil-per-sida, medvetet.
- **Tema:** kopierat marinblått tema och site-nav från
  `statsskuld/sverige_amerika/index.html` så sidan sitter ihop med resten av
  sajten, trots att den ligger i en daterad arbetsmapp.
- **C-knappens gult/rött-växling:** CSS-animation (`@keyframes`), 1,8 s cykel.
  Stängs av vid `prefers-reduced-motion` och ersätts då med en delad
  gul/röd-bakgrund.
- **Tomma intäktsceller:** skrafferade med `repeating-linear-gradient`,
  `tabindex="0"` så de går att nå med tangentbord, och hover/fokus/klick
  visar frågan. På Fall D står frågan framme hela tiden.
- **Färgnivå:** `niva()` jämför årets negativa RESULTAT mot samma års
  TOT kostnader. Under tröskeln (förval 15 %) gult, över rött, noll eller
  positivt grönt.
- **Verifierat i webbläsare:** A, B, D och tidsväxlingen ger rätt
  RESULTAT-rad och rätt färg mot SPEC avsnitt 3. Teknik-modal öppnar och
  stänger. Tröskelreglaget räknar om.

## 2026-09-03 – Leverans 2: kort, banner, D-ver2

**Ändring i Typfall D (på Kents begäran):** Bidragsgivare 5:s 500 tkr år X+1
borttagen. D går nu minus redan X+1 (−500, gult), så att forskningsledaren
inte kan hävda att året går runt. D:s Σ sett från X blir −16 040, och
"ett år senare"-talet −12 360 (var −12 860). Bara "sett från X" ändrad,
"sett från X+1" oförändrad.

**Byggt:**

- **"Ett år senare"-kort:** talet med nedåtpil, Σ-övergången, och två staplar
  (sett från X / sett från X+1), där den aktiva tidpunkten är fylld och den
  andra nedtonad.
- **Banner:** grön / gul / röd, trappas upp med antalet röda år enligt
  SPEC 4.2.
- **Notrad** per typfall.
- **D-ver2:** femte knapp, streckad tills vald. Hela resultaträkningen blir
  redigerbara fält med gul bakgrund (bidragsgivare, kostnader). "+ lägg till
  egen intäkt" ger en ny namngiven rad. Varje höjd eller ny intäkt visar
  påminnelsen "är du säker på att den kommer just det året". "Återställ till
  Fall D" nollställer. Kortet visar då "din version jämfört med Fall D".
- Redigeringen räknar om TOT- och RESULTAT-raderna utan att bygga om hela
  tabellen, så fokus stannar i fältet man skriver i.

**Verifierat i webbläsare:** D:s nya siffror, kortet för alla fyra fallen,
banner-trappan, D-ver2 (redigera cell → påminnelse + omräkning, egen rad,
återställ). Inga konsolfel.

**Kvar till leverans 3:** mobilgenomgång, länk från `Ekonomi/index.html`,
uppdatera `Ekonomi/README.md`.

**Öppet:** de två RESULTAT-raderna staplade (PRD avsnitt 11), EU:s hoppår i
Fall C (behållet tills vidare).
