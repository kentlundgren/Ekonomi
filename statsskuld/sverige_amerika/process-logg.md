# Processlogg – Sveriges och USA:s statsskuld

Denna logg dokumenterar vägval under research- och planeringsfasen, i kronologisk ordning.
Innehållet är tänkt att bli underlag till en meta-flik i det färdiga programmet, där besökaren
kan se vilka alternativ som fanns och varför ett visst val gjordes.

## 2026-07-28

**Syfte**

Bygga en uppföljare till [Sverige och USAs statsskuld](https://controllerutangranser.wordpress.com/2025/06/11/sverige-och-usas-statsskuld/)
(publicerad juni 2025) – samma ämne, men mer faktabaserat, med verifierade källor i Harvardstil,
och en tydlig redovisning av hur programmet togs fram.

**Källor valda**

Nationella källor, Sverige:
- Riksgälden – Statistik om Sveriges statsskuld, https://www.riksgalden.se/statistik/statistik-om-sveriges-statsskuld/
- SCB – Offentliga förvaltningens sparande och bruttoskuld enligt EU:s konvergenskriterier (Maastrichtskulden), https://www.scb.se/hitta-statistik/statistik-efter-amne/nationalrakenskaper/nationalrakenskaper/offentliga-forvaltningens-sparande-och-bruttoskuld-enligt-eu-s-konvergenskriterier/

Nationella källor, USA:
- U.S. Department of the Treasury, Fiscal Data – Historical Debt Outstanding, https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/
- Federal Reserve Bank of St. Louis (FRED) – Federal Debt Held by the Public as Percent of GDP (FYGFGDQ188S), https://fred.stlouisfed.org/series/FYGFGDQ188S
- Congressional Budget Office – The Budget and Economic Outlook: 2026 to 2036, https://www.cbo.gov/publication/62105

Internationella källor (gemensam definition, används som jämförelseaxel):
- IMF – Global Debt Database, General Government Debt, Sverige, https://www.imf.org/external/datamapper/GG_DEBT_GDP@GDD/SWE
- OECD – General Government Debt, https://www.oecd.org/en/data/indicators/general-government-debt.html

Notering: Sverige och USA definierar och redovisar "statsskuld" på olika sätt (Riksgäldens
statsskuld ≠ SCB:s Maastrichtskuld ≠ Treasurys "debt to the penny" ≠ CBO:s "debt held by public").
Detta blev utgångspunkten för vägval 1 nedan.

**Vägval 1: Vilken vinkel ska texten och programmet ha?**

Två alternativ skissades:

- *Paket A – "Skulden och räntan"*: klassisk tidsseriejämförelse (skuld/BNP, räntekostnad/BNP)
  över tid, samma grundvinkel som originalversionen men kvalitetssäkrad med riktiga källor.
- *Paket B – "Två sätt att räkna skuld"*: fokus på att Sverige och USA definierar och redovisar
  statsskuld helt olika. Ett interaktivt verktyg där användaren själv väljer skulddefinition och
  ser hur siffran för samma land ändras beroende på val.

**Beslut:** Paket B valdes.

**Motivering:** Ligger närmare Kents yrkesroll som ekonom/controller – frågan blir inte "vem har
mest skuld" utan "vilka redovisningsprinciper ligger bakom siffran". Mer originellt än Paket A.
Kräver att definitionsskillnaderna är vattentäta innan någon kod skrivs.

**Nytt krav (samma dag):** Programmet ska ha en meta-flik/knapp där just detta vägval redovisas
för besökaren – att Paket A fanns som alternativ, att Paket B valdes, och varför. Syftet är att
synliggöra att vibe-kodning i grunden handlar om en serie val mellan alternativ, och att den som
vibekodar (Kent) aktivt gör dessa val snarare än att allt bara "kommer ut" av AI:n.

**Vägval 2: Hur ska meta-fliken presenteras?**

Tre alternativ skissades: (1) löpande textlogg, (2) interaktivt beslutsträd, (3) båda i separata
flikar.

**Beslut:** Interaktivt beslutsträd.

**Motivering:** Ligger tematiskt närmast syftet – visar vibe-kodningens förgreningar visuellt
snarare än att bara lista dem, vilket förstärker poängen att vibe-kodning är en serie aktiva val.
Innebär mer kod än en ren textlogg, men det accepteras.

**Vägval 3: Definitionsmappning för verktyget**

Tre "linser" (nivåer av skuldbegrepp) valdes ut, efter genomgång av vilka mått som faktiskt
publiceras officiellt för respektive land:

1. *Central-/federal statsskuld* (brutto, inkl. interna innehav) – Riksgälden (SE) vs U.S. Treasury
   Fiscal Data, Total Public Debt Outstanding (US). Mest citerade rubriksiffran, strukturellt
   jämförbar myndighetsnivå men olika sammansättning av "interna innehav".
2. *Skuld hållen av allmänheten* (netto, exkl. interna innehav) – CBO/FRED (US) har detta som
   officiell rubriksiffra. Sverige saknar en motsvarande officiell rubriksiffra – måste härledas
   (statsskuld minus AP-fondernas innehav) och flaggas i verktyget som ett härlett/uppskattat mått.
3. *Konsoliderad offentlig sektor* (Maastricht/general government) – SCB:s Maastrichtskuld (SE) vs
   IMF Global Debt Database / OECD General Government Gross Debt (US). Enda nivån med samma
   metodologi för båda länder → blir verktygets förvalda startvy.

**Beslut:** Alla tre linser tas med. Lins 3 är förvalt läge vid sidladdning, med lins 1 och 2 som
alternativ användaren själv väljer.

**Vägval 4: Bloggtextens upplägg**

Tre varianter presenterades:

1. *Yrkesroll-ingång* ("Det beror på hur man räknar") – utgår från Kents controller-vardag och
   redovisningsprinciper, zoomar ut till statsskuld.
2. *Nyhetskrok* ("Sveriges statsskuld är både 20 och 35 procent av BNP – samtidigt") – öppnar med
   sifferdiskrepansen som hook.
3. *Process/meta-ingång* ("Vad ett beslutsträd om statsskuld lär oss om vibe-kodning") – kopplar
   till förra årets artikel om AI-metodik, använder paket A/B-valet som konkret exempel.

**Beslut:** Variant 3 (Process/meta-ingång).

**Motivering:** Kent gav inget skäl utöver att den ligger närmast förra årets artikel – noteras
utan vidare tolkning.

**Krav från Kent (samma dag):** Beslutsträdet i programmet måste visa *alla tre bloggtexts-
varianter* som fanns att välja mellan, inte bara den valda (variant 3). Detta gäller generellt för
varje vägval som redovisas i trädet – alternativen ska synas, inte bara resultatet.

**Vägval 5: Handoff – Kent lämnade över resten av kvällens arbete utan godkännande per steg**

Kent bad Claude bygga klart verktyget, skriva bloggutkastet och logga processen, utan att
godkänna varje delsteg, eftersom det var sent på kvällen (2026-07-28).

**Beslut:** Claude byggde `index.html` (definitionsverktyg med tre linser + interaktivt
beslutsträd som `<details>/<summary>`-struktur) och `blogginlagg-utkast.md` (variant 3),
och testade sidan i webbläsaren (flikar, linsväljare, träd) innan den rapporterades klar.

**Vad Claude medvetet INTE gjorde, trots den öppna fullmakten:**
- Ingen `git add`/`commit`/`push`. Detta är en stående regel i projektets CLAUDE.md
  (Kent commitar och pushar normalt själv, som ett medvetet lärande) och tolkas som mer
  specifik än kvällens generella "gör allt"-tillstånd.
- Ingen publicering av bloggutkastet till WordPress.
- Ingen GitHub Pages-publicering (i linje med Kents tidigare besked: "så småningom, inte nu").
- Ingen ändring av `README.md`:s "Live-sidor"-tabell med en riktig URL, eftersom sidan
  inte är publicerad.

**Kvarstående, faktiska datafråga:** Lins 2 (skuld hållen av allmänheten) saknar en svensk
motsvarighet i tillgängligt källmaterial. Verktyget visar detta öppet som en tom ruta med
förklaring, istället för att en siffra räknas fram utan tillräckligt säkert underlag.

**Vägval 6: Publicering**

Kent bad explicit om commit och push ("nu skulle jag ju vilja se detta på GitHub").

**Beslut:** Claude körde `git add`, `git commit` och `git push` mot `main`
(commit `1c946cc`), och lade till raden för sidan i README.md:s Live-sidor-tabell,
eftersom den nu faktiskt blir publik via GitHub Pages.

**Motivering:** Ett explicit, aktuellt godkännande i chatten, i linje med
projektets stående regel om att Claude bara committar/pushar när Kent uttryckligen
ber om det.

**Vägval 7: Historisk tidsseriegraf (1970–2024)**

Efter publicering av bloggtexten efterfrågade Kent den historiska graf som fanns i 2025 års
Gemini-presentation, men saknades i det nya verktyget. Kent bad Claude ta fram, verifiera och
förtydliga en uppdaterad version, och lägga in den i `index.html`.

**Alternativ som övervägdes för datakälla:**
- IMF WEO-indikatorn GGXWDG_NGDP – täcker bara Sverige från 1993 och USA från 2001.
  <span>Valdes inte som huvudkälla</span> (för kort historik för en 1970–2024-graf).
- IMF Global Debt Database (GG_DEBT_GDP), hämtad via DataMapper-API. Täcker Sverige och USA
  1970–2024 med samma metodologi. <span>Valt.</span>

**Vad research faktiskt hittade:** den ursprungliga Gemini-grafen från 2025 innehöll två
konkreta sakfel jämfört med den verifierade IMF-serien: Sveriges topp på 1980-/90-talet var
överskattad (grafen visade ca 76–78 %, verifierat värde är 68,9 % år 1996), och USA:s stora
hopp i skuldkvoten låg fel i tid (grafen visade hoppet 2017–2018, det faktiska hoppet skedde
2019–2020 och beror på coronapandemins underskott).

**Beslut:** Byggde en handkodad SVG-linjegraf (ingen extern chart-bibliotek, i linje med
projektets princip om fristående HTML-filer) med exakta koordinater beräknade från
IMF-datan, lagd i Verktyget-fliken ovanför definitionsverktyget. Källor och metodikreferens
(Mbaye, Moreno Badia och Chae, 2018) tillagda i källförteckningen. Testat i webbläsaren
(scroll genom hela grafen, verifierat att linjer, etiketter och toppmarkeringar renderas
korrekt).

**Publicering:** Kent committade och pushade själv via Cursors Source Control-panel
(commit `7cd36a9`), inte Claude. Det är den normala arbetsformen i det här projektet
(se CLAUDE.md) och skedde alltså utan att Kent bad Claude göra det.

**Vägval 9: Var i sidan ska tidsseriegrafen ligga?**

Kent påpekade att grafen låg som en egen sektion ovanför lins-väljaren, vilket gjorde det
otydligt att den bygger på just Lins 3:s definition (den syntes ovanför alla tre lins-
knapparna, inte inuti någon av dem).

**Beslut:** Flyttade hela grafsektionen (rubrik, graf, källnot, korrigeringsruta) in i
`lens-panel#lens-3`, direkt efter Lins 3:s statiska tabell. Grafen är nu strukturellt
omöjlig att blanda ihop med Lins 1 eller 2, eftersom den bara finns i markupen för Lins 3:s
panel och därför aldrig visas när Lins 1 eller 2 är aktiva.

**Även rättat samtidigt:** Lins 1:s USA-rad saknade en %BNP-siffra. Det var ett eget fel,
inte en verklig lucka i statistiken. FRED (Federal Reserve Bank of St. Louis) publicerar
den som serien GFDEGDQ188S. Fyllt i: ca 122,6 % av BNP, första kvartalet 2026.

**Vägval 10: Synlighet i sitens huvudnavigering**

Kent påpekade att statsskuldsarbetet inte syntes i Ekonomi-projektets toppnavigering
("uppe till vänster"), bara på sin egen sida. Det var en lucka, inte ett medvetet val,
CLAUDE.md:s stående regel säger att nya HTML-filer ska länkas in i navet på alla
befintliga sidor, vilket missades när `index.html` skapades.

**Åtgärdat, enligt `skills/projekt_struktur/SKILL.md`:**
- Ny fil `statsskuld/index.html` – sektion-TOC med samma mall som `redovisning/index.html`,
  ett section-card som länkar vidare till Sverige/USA-sidan.
- `Ekonomi/index.html` (rot-nav) – ny dropdown-grupp "Statsskuld" (samma mönster som
  "Redovisning") plus ett section-card i sidans body.
- `statsskuld/sverige_amerika/index.html` – breadcrumb utökad från en fristående text-crumb
  till en klickbar kedja `{ E } Ekonomi / Statsskuld`, enligt innehållssidemallen.
- `README.md` – strukturträd, Live-sidor-tabell och filbeskrivningar uppdaterade.

**Verifiering:** Kunde bara visuellt bekräfta ändringen i webbläsaren för
`sverige_amerika/index.html` (breadcrumb syns korrekt). Förhandsgranskningsverktyget kunde
inte rendera filer utanför den ursprungliga projektmappen (`Ekonomi/index.html` och
`statsskuld/index.html` visade tomma/inaktuella sidor i verktyget), så de två filerna är
verifierade genom att läsa källkoden och jämföra den rad för rad med det redan fungerande
mönstret i `redovisning/index.html`, inte genom en skärmdump. Kent bör göra en snabb egen
koll i webbläsaren.

## Öppna frågor / kommande vägval

- [ ] Hitta en bättre källa för lins 2:s svenska sida (AP-fondernas innehav av
      statsobligationer, aktuell period) om Kent vill fylla i den tomma rutan.
- [ ] Läs igenom `blogginlagg-utkast.md` och godkänn/redigera innan publicering på WordPress.
- [ ] Bestäm om/när `index.html` ska committas, pushas och läggas till i Ekonomi-projektets
      `README.md` och site-nav (medvetet inte gjort automatiskt, se Vägval 5).
- [ ] Verifiera siffrorna i verktyget mot primärkällorna direkt (de är ögonblicksbilder från
      sökningar 2026-07-28, inte en levande datakoppling).
