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

## 2026-09-03 – Leverans 3: mobil och sajtkoppling

**Mobil:** hittade och rättade en horisontell sidoscroll på smal skärm.
Orsaken var den fasta navigeringsraden, inte tabellen (tabellen scrollar redan
i sin egen behållare). Fix: på skärmar under 620 px döljs "Kent Lundgren" i
navet, navets marginaler krymper, "ett år senare"-kortets två delar går till
full bredd, och H1 blir mindre. Verifierat: `scrollWidth === clientWidth` vid
375 px. Teknik-modalen fäller till en kolumn och scrollar internt.

**Sajtkoppling:**

- `Ekonomi/index.html`: ny nav-grupp "Ekonomikommunikation" med dropdown, och
  ett section-card mellan Statsskuld och ekonomistyrning. Länk och kort
  testade, round-trip fungerar.
- `Ekonomi/README.md`: sidan tillagd i projektstrukturen, Live-sidor-tabellen
  och avsnittet Filer med klickbara rubriker (PRD, SPEC, process-logg, README).
- `260903/README.md`: Live-sida-sektionen har nu en klickbar länk och en
  innehållstabell över alla filer.

**Bugg hittad och rättad under verifieringen:** D-ver2-knapparna ("+ lägg
till egen intäkt", "Återställ") syntes även i vanliga typfall. Orsak: `.dver2-
verktyg` hade `display: flex` i CSS, vilket vinner över attributet `hidden`.
Fix: `.dver2-verktyg[hidden] { display: none; }`.

**Status leverans 3:** sidan klar och verifierad.

## 2026-09-03 – Leverans 4: grupper AA–DD och gruppspecifik hover

På Kents begäran.

**Namnbyte:** typfall A–D blev grupp AA, BB, CC, DD på sidan (plus grupp
DD-ver2). Knapparna, rubriken ("Fyra grupper") och den inledande texten
skrevs om. Interna nycklar i `app.js` (`state.fall` = "A".."Dver2") lämnades
orörda, bara etiketterna ändrades.

**Inledande texten:** skrevs om så att den inte skriver ut "forskargrupp"
eller "forskning". Nu: fyra grupper som skiljer sig i hur långt fram de har
säkrad finansiering och hur lätt de har att få in intäkter. Bidragsgivarnamnen
(VR, EU) står kvar i tabellen. Sidans `<title>` och section-card på
`Ekonomi/index.html` uppdaterade på samma sätt.

**Hover-frågan:** gjord gruppspecifik. Två maps i `app.js`: `HOVER` (längre
text, rutan under tabellen) och `TIP` (kort text, den lilla rutan vid cellen).
`VILA` är viloläget för AA/BB/CC. Rutan under tabellen bytte från röd till
gul, och blinkar till (`fragPuls`) när den byts. Den lilla rutan (`.celltip`)
är `position: fixed`, mörk, göms vid klick utanför, scroll eller resize.

**Grupp DD** har en utbyggd reflektion som står framme även utan hover, med
fokus på DD:s historik: har de alltid landat medel i tid förr, eller har de
strukturellt sämre möjligheter att säkra avtal i förväg?

**Verifierat i webbläsare:** namnen på knappar och i text, DD:s vilotext,
hover på AA (vila → gul + puls + liten ruta → tillbaka), tooltip-position,
D-ver2 oförändrad, ingen horisontell scroll, inga konsolfel.

**Inledningen skrevs om av Kent (samma dag).** Han lämnade en egen text med
tre stycken och bad om att den skulle in med hans formuleringar bevarade.
Budskapet flyttades: från "ekonomen ska rapportera framåt" till "grupperna
har olika förmåga att i god tid säkra medel, och en grupp kan gå från lätt
till svårt eller tvärtom, av tur eller läge, inte bara av skötsamhet". Jag
rättade bara tre entydiga språkfel: dubblerat "för för", "få i pengar" →
"få in pengar", och ett saknat "det" i sista meningen. Kvar: hans kommatecken
som pauser, hans citattecken, "precis, precis", meningsfragmenten i första
stycket. Rubriken "Fyra grupper" och en kort orienteringsrad ("Välj grupp och
tidpunkt") behölls efter ingressen.

## 2026-09-03 – Leverans 5: grupp AA putsad

Kent skickade en ny AA-tabell (Excel) och bad om att grupp AA ännu tydligare
ska ligga i fas varje år, med bara små variationer, och att lönerna räknas upp
~3 % per år.

**Gjort:**

- AA fick egna kostnads-arrayer (`KOST_AA_X`, `KOST_AA_X1`). Löner: −5 000,
  −5 150, −5 300, −5 450, (−5 600). OH = 22 % av lönerna. BB, CC, DD är orörda.
- AA:s intäkter: Bidragsgivare 5 varierar (500 / 400 / 700 / 900 / 1000),
  Bidragsgivare 6 = 700, Bidragsgivare 7 = 1 800, allt bara år X.
- "Sett från X+1" byggd i samma anda: samma resultat X+1…X+4 som "sett från X",
  plus ett nytt X+5. Bidragsgivare 5 fortsätter uppåt.
- RESULTAT AA sett från X: 60 / −100 / 17 / 34 / −49. Σ = −38.
- **Balanstolerans** tillagd i `niva()`: `kvot < 2 %` → grön. AA:s små negativa
  år blir gröna, banner grön ("Går ihop alla år i fönstret").
- **"Ett år senare"-kortet** justerat: tal under 300 tkr visas neutralt med
  "i praktiken oförändrat", ingen pil. Σ-staplarna skalas mot minst 2 000 tkr
  så ett litet tal ger en liten stapel.

**Kents fråga "är detta lätt?":** ja. Taldata är fyra arrayer i `app.js`.
Sidan räknar om allt annat. Den enda kod-touchen var AA:s egna kostnads-arrayer
plus toleransen och kort-justeringen.

**Verifierat i webbläsare:** AA:s tal båda vyerna mot Excel, gröna celler,
grön banner, "−192 tkr i praktiken oförändrat", att BB/CC/DD är oförändrade.
Inga konsolfel.

## 2026-09-03 – Leverans 6: löneuppräkning för alla grupper

Kent: platt lön år efter år ser konstlat ut. Vill ha samma 3 %-uppräkning för
BB, CC och DD som för AA.

**Gjort:** de gruppspecifika kostnads-arrayerna slogs ihop. `KOST_X` och
`KOST_X1` har nu AA:s struktur (löner +3 %/år, OH = 22 % av lönerna), och alla
fyra grupperna pekar på dem. Den gamla platta strukturen och den udda
X+5-spiken i "sett från X+1" är borta.

**Nya siffror** (intäkter oförändrade, bara kostnaderna växer):

| Grupp | Σ sett från X | Ett år senare | Röda år /X | Röda år /X+1 |
|-------|---------------|---------------|------------|--------------|
| AA | −38 | −192 (oförändrat) | 0 | 0 |
| BB | −3 838 | −5 492 | 1 | 2 |
| CC | −7 438 | −8 592 | 2 | 3 |
| DD | −17 138 | −11 092 | 3 | 4 |

Ordningen AA « BB < CC < DD håller. De negativa åren blev något djupare
eftersom lönerna nu växer medan bidragen fortfarande tar slut abrupt.

**Verifierat i webbläsare:** alla fyra grupperna, båda vyerna, TOT-rader,
RESULTAT, färger, banner, "ett år senare"-talen. Inga konsolfel.

**Status:** sidan klar. Nästa steg är blogginlägget (PRD avsnitt 7).

**Öppet, ej blockerande:** de två RESULTAT-raderna staplade (PRD avsnitt 11),
EU:s hoppår i grupp CC (behållet tills vidare).
