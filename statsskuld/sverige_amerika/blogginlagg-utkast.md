# Vad ett beslutsträd om statsskuld lär oss om vibe-kodning

*Utkast, 2026-07-28. Variant 3 av tre upplägg. Klistra in på controllerutangranser.wordpress.com efter genomläsning.*

För ett år sedan skrev jag om hur jag byggde en interaktiv presentation av Sveriges och USA:s statsskuld med Gemini (Lundgren, 2025a). Den artikeln handlade nästan uteslutande om metoden. Jag var nyfiken på vad generativ AI kunde göra med data och presentation, inte på om siffrorna höll.

Den här gången ville jag testa något annat: kan jag bygga en uppföljare där själva processen är lika transparent som slutresultatet? Inte bara "jag använde AI för att göra det här", utan en faktisk logg över vilka val som gjordes, vilka alternativ som fanns, och varför jag valde som jag gjorde.

## Det första valet: vilken vinkel?

Innan någon kod skrevs fick jag två färdiga koncept att välja mellan.

Det första var en klassisk tidsseriejämförelse: skuld som andel av BNP, räntekostnad över tid, samma typ av diagram som förra året men med riktiga källor bakom siffrorna. Det andra var mer ovanligt: ett verktyg där man själv väljer vilken definition av "statsskuld" som ska visas, och ser hur siffran för samma land hoppar upp och ner beroende på val.

Jag valde det andra. Inte för att det första var fel, utan för att det ligger närmare hur jag faktiskt tänker som ekonom. I mitt arbete är frågan sällan "vad är rätt siffra". Den är "vilken redovisningsprincip ligger bakom siffran, och vad döljer den". Det gäller BAS-kontoplaner precis som statsskuld.

## Upptäckten som formade hela verktyget

Research-fasen gav ett resultat jag inte hade väntat mig: Sverige och USA mäter inte statsskuld på samma sätt, och det är inte en liten skillnad.

Riksgälden redovisar bara den skuld som staten själv lånar upp, utan kommuner och regioner. Samma avgränsning gäller för amerikanska Treasury, men deras rubriksiffra inkluderar även skuld staten är skyldig sig själv, till exempel via sociala trygghetsfonder. USA publicerar dessutom en tredje siffra, "skuld hållen av allmänheten", som Sverige inte har någon motsvarighet till som egen rubriksiffra. Den enda nivån som mäts på samma sätt i båda länderna är den konsoliderade offentliga sektorns skuld, enligt EU:s Maastrichtdefinition för Sverige och IMF/OECD:s motsvarande standard för USA. Enligt den måttstocken ligger USA:s skuld på drygt tre och en halv gånger Sveriges, som andel av BNP.

Det gjorde att verktyget fick tre lägen istället för ett: central-/federal statsskuld, skuld hållen av allmänheten, och den konsoliderade offentliga sektorn. Sverige saknar helt enkelt en officiell siffra för det mellersta läget, och jag har valt att visa det som en tom ruta i verktyget snarare än att gissa mig fram till ett tal. Det är själva poängen, inte ett misstag.

## Beslutsträdet

Kravet jag satte för mig själv, och som jag höll fast vid genom hela kvällen, var att varje vägval skulle vara synligt för besökaren i efterhand. Inte bara vad jag valde, utan vad jag valde bort.

Verktyget har därför en flik som heter "Så togs detta fram", med ett beslutsträd man kan klicka upp och ner i. Varje förgrening visar alternativen som fanns, vilket som valdes, och motiveringen. Paket A mot paket B. Textlogg mot beslutsträd som presentationsform. Vilka definitioner som skulle ingå i verktyget. Vilket upplägg den här texten skulle ha, det du läser just nu.

Det där sista är kanske det mest talande exemplet. Jag hade tre färdiga utkast till hur den här artikeln skulle inledas: en som utgick från min yrkesroll, en som öppnade med den skarpa sifferdiskrepansen som krok, och den du läser nu, som handlar om processen själv. Alla tre finns kvar i beslutsträdet, med en förklaring till varför den tredje vann.

## Vad det säger om vibe-kodning

"Vibe-kodning" beskrivs ofta som att man bara säger vad man vill ha och AI:n levererar. Det stämmer inte med hur den här kvällen faktiskt gick till. Varje steg, från vilken vinkel texten skulle ha till vilka källor som skulle användas, var ett val jag gjorde, ofta mellan flera fullt rimliga alternativ som Claude tog fram parallellt.

Det som skiljer den här processen från att bara skriva kod själv är inte att besluten försvinner. Det är att de blir snabbare att ta, och därför fler. Och om de blir fler, och om jag vill att andra ska kunna lita på resultatet, blir det viktigare att kunna visa dem i efterhand, inte bara stå bakom slutsatsen.

Verktyget och beslutsträdet finns på [kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika](https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/).

---

## Källor

Lundgren, K. (2025a) *Sverige och USA:s statsskuld*. Controller utan gränser, 11 juni. Tillgänglig: [controllerutangranser.wordpress.com](https://controllerutangranser.wordpress.com/2025/06/11/sverige-och-usas-statsskuld/) [Hämtad: 2026-07-28].

Riksgälden (2026) *Ökad statsskuld men lägre kostnad 2025*. Tillgänglig: [riksgalden.se](https://www.riksgalden.se/press-och-publicerat/pressmeddelanden-och-nyheter/nyheter/2026/okad-statsskuld-men-lagre-kostnad-2025/) [Hämtad: 2026-07-28].

SCB (2026) *Offentliga förvaltningens sparande och bruttoskuld enligt EU:s konvergenskriterier*. Tillgänglig: [scb.se](https://www.scb.se/hitta-statistik/statistik-efter-amne/nationalrakenskaper/nationalrakenskaper/offentliga-forvaltningens-sparande-och-bruttoskuld-enligt-eu-s-konvergenskriterier/) [Hämtad: 2026-07-28].

U.S. Department of the Treasury, Fiscal Data (2026) *Historical Debt Outstanding*. Tillgänglig: [fiscaldata.treasury.gov](https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/) [Hämtad: 2026-07-28].

Congressional Budget Office (2026) *The Budget and Economic Outlook: 2026 to 2036*. Tillgänglig: [cbo.gov](https://www.cbo.gov/publication/62105) [Hämtad: 2026-07-28].

International Monetary Fund (2026) *Global Debt Database – General Government Debt*. Tillgänglig: [imf.org](https://www.imf.org/external/datamapper/GG_DEBT_GDP@GDD/SWE) [Hämtad: 2026-07-28].

---

**Kvarstående val innan publicering:** länken till GitHub Pages ovan pekar på en sida som ännu inte är publicerad. Uppdatera eller ta bort länken beroende på när/om sidan går live. Se [process-logg.md](process-logg.md) för hela beslutshistoriken.
