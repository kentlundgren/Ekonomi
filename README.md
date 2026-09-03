# Ekonomi

Kent Lundgrens redovisningsreflektioner – analyser kring redovisning, BAS-kontoplan
och revision av ideella föreningar.

Kent arbetar 50 % som ekonom/controller (via Poolia) vid Kultur och Fritidsförvaltningen,
Simrishamns kommun, och ägnar övriga vardagstimmar åt generativ AI och egna projekt.
Det här är ett av dem.

---

## 🗂️ Lokalt repo

`C:\Users\kentl\OneDrive\AI\Claude\Ekonomi`

⚠️ Ligger nästlat inuti föräldramappen `...\AI\Claude\`, som också är ett eget
git-repo (remote: `Ovrigt`) — se avsnittet [Nested Git-repo](#-nested-git-repo)
längre ner för vad det innebär i praktiken.

---

## Projektstruktur

```
Ekonomi/
├── index.html                        # Rot-TOC: startsida med länk till sektioner
├── rattgit.html                      # Guide: nested repo och Cursor-git
├── CLAUDE.md                         # Regler och kontext för Claude (AI-assistent)
├── humanizer.md                      # Regler för mänsklig skrivstil
├── README.md
│
├── redovisning/
│   ├── index.html                    # Sektion-TOC: redovisning
│   ├── BAS/
│   │   ├── index.html                # Sub-TOC: BAS-avsnittets innehåll
│   │   ├── BAS2026.html              # "Tack Peter Berg!" + källförteckning
│   │   ├── analys.html               # BAS 2026 – Analys och reflektion
│   │   └── generell_revision.html    # Hur BAS 2026 påverkar generell revision
│   └── revision/
│       └── index.html                # Lekmannarevision i ideella föreningar
│
├── ekonomikommunikation/
│   └── 260903/
│       ├── index.html                # Interaktiv sida: fyra gruppers ekonomi fyra år fram
│       ├── styles.css                # CSS för sidan
│       ├── app.js                    # Datamodell, beräkning, interaktion
│       ├── PRD.md                    # Planering: ståndpunkt, modell, beslutslogg
│       ├── SPEC.md                   # Låst bygg-spec: datamodell, färgregler, acceptanslista
│       ├── process-logg.md           # Kronologisk logg över beslut under bygget
│       ├── README.md                 # Mappöversikt, lokalt repo, live-sida
│       └── ekonomikommunikation.xlsx # Kents exempelresultaträkningar
│
├── ekonomistyrning/
│   └── index.html                    # Platshållare – under uppbyggnad
│
├── statsskuld/
│   ├── index.html                    # Sektion-TOC: statsskuldsjämförelser mellan länder
│   └── sverige_amerika/
│       ├── index.html                # Definitionsverktyg: Sveriges/USA:s statsskuld
│       ├── process-logg.md           # Kronologisk logg över research- och designval
│       └── blogginlagg-utkast.md     # Utkast till publicerat blogginlägg, se beskrivning nedan
│
├── skills/
│   ├── humanizer_ton/
│   │   ├── SKILL.md                  # Procedur: sju steg för mänsklig text
│   │   └── humanizer_bakgrund.md     # Teori: varför AI-text låter som AI
│   ├── linkedin_pulse/
│   │   └── SKILL.md                  # Skill: LinkedIn Pulse-artiklar i Kents röst
│   ├── projekt_struktur/
│   │   └── SKILL.md                  # Ekonomi-projektets nav- och CSS-konventioner
│   └── webb_struktur/
│       └── SKILL.md                  # Generellt skill: hierarkisk webbplats (återanvändbart)
│
└── .vscode/
    └── settings.json                 # Cursor: visar rätt git-repo
```

---

## Live-sidor (GitHub Pages)

| Sida | URL |
|------|-----|
| Startsida | https://kentlundgren.github.io/Ekonomi/ |
| Redovisning (TOC) | https://kentlundgren.github.io/Ekonomi/redovisning/ |
| BAS (TOC) | https://kentlundgren.github.io/Ekonomi/redovisning/BAS/ |
| BAS2026 – Peter Berg | https://kentlundgren.github.io/Ekonomi/redovisning/BAS/BAS2026.html |
| BAS 2026 – Analys | https://kentlundgren.github.io/Ekonomi/redovisning/BAS/analys.html |
| BAS och revision | https://kentlundgren.github.io/Ekonomi/redovisning/BAS/generell_revision.html |
| Revision | https://kentlundgren.github.io/Ekonomi/redovisning/revision/ |
| ekonomistyrning | https://kentlundgren.github.io/Ekonomi/ekonomistyrning/ |
| Git-guide | https://kentlundgren.github.io/Ekonomi/rattgit.html |
| Statsskuld (TOC) | https://kentlundgren.github.io/Ekonomi/statsskuld/ |
| Statsskuld: Sverige/USA | https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/ |
| Ekonomikommunikation: Anställa i tre år? | https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/ |

Live-sidorna uppdateras automatiskt inom ~1 minut efter varje push till `main`.

---

## Navigering

Webbplatsen har en hierarkisk navigering i tre nivåer:

```
{ E } Ekonomi  ←  rotsidan, dropdown-meny för sektioner
    └── Redovisning ▾
            ├── BAS 2026
            └── Revision
    └── ekonomistyrning
```

- **Rotsidan** (`index.html`): dropdown-nav som visar alla sektioner
- **Sektions- och sub-TOC-sidor**: breadcrumb-navigering (t.ex. `{ E } Ekonomi / Redovisning / BAS`)
- **Innehållssidor**: samma breadcrumb, navigerar tillbaka uppåt i hierarkin

Tre CSS-teman finns dokumenterade i `skills/webb_struktur/SKILL.md` (nuvarande: Marin/Blå).

---

## Filer – kort beskrivning

### [`index.html`](https://kentlundgren.github.io/Ekonomi/)
Projektets rotsida med dropdown-navigering. Listar sektionerna Redovisning och
ekonomistyrning som klickbara kort.

### [`rattgit.html`](https://kentlundgren.github.io/Ekonomi/rattgit.html)
Dokumenterar det nested repo-problem som uppstod 2026-06-08 och hur det löstes.
Förklarar varför Cursor visade fel git-repo och de två åtgärder som gjordes.

### [`redovisning/BAS/BAS2026.html`](https://kentlundgren.github.io/Ekonomi/redovisning/BAS/BAS2026.html)
Utgångspunkten för BAS-avsnittet: tackar Peter Berg för hans artikel om BAS-nyheter
2026 och presenterar reflektionerna. Innehåller fullständig källförteckning.

### [`redovisning/BAS/analys.html`](https://kentlundgren.github.io/Ekonomi/redovisning/BAS/analys.html)
Djupgående analys i jag-form. Besvarar fyra frågor: skillnad privat BAS vs Kommun-BAS,
vad BAS 2026 innebär för controllers i kommunala bolag (analys av andras situation),
vad som är relevant för lekmannarevision av Kalmar Nation, samt varför löner placeras
i kontogrupp 5 (Kommun-BAS) respektive klass 7 (privat BAS).

### [`redovisning/BAS/generell_revision.html`](https://kentlundgren.github.io/Ekonomi/redovisning/BAS/generell_revision.html)
Guide om hur BAS 2026-ändringarna påverkar en generell revision av ideella föreningar.
Checklista och konkreta granskningspunkter för lekmannarevisorer.

### [`redovisning/revision/index.html`](https://kentlundgren.github.io/Ekonomi/redovisning/revision/)
Om lekmannarevision i ideella föreningar. Länk till generell revisionsguide samt
diskret information om att Kent tar revisionsuppdrag på arvodesbasis.

### [`statsskuld/index.html`](https://kentlundgren.github.io/Ekonomi/statsskuld/)
Sektion-TOC för statsskuldsjämförelser mellan länder. Just nu ett kort som länkar
till Sverige/USA-jämförelsen. Tänkt att växa om fler länderjämförelser tillkommer.

### [`statsskuld/sverige_amerika/index.html`](https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/)
Uppföljare till 2025 års Gemini-presentation om Sveriges och USA:s statsskuld. Ett
definitionsverktyg som visar hur skuldsiffran ändras beroende på vilket av tre
skuldbegrepp (central-/federal statsskuld, skuld hållen av allmänheten, konsoliderad
offentlig sektor) som används, plus en flik med ett interaktivt beslutsträd som
redovisar hur sidan själv togs fram.

### [`statsskuld/sverige_amerika/blogginlagg-utkast.md`](statsskuld/sverige_amerika/blogginlagg-utkast.md)
Utkastversionen av bloggtexten om verktyget. Publicerad på Controller utan gränser:
[Vad ett beslutsträd om statsskuld lär oss om vibe-kodning](https://controllerutangranser.wordpress.com/2026/07/28/vad-ett-beslutstrad-om-statsskuld-lar-oss-om-vibe-kodning/)
(28 juli 2026).

### [`ekonomikommunikation/260903/index.html`](https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/)
Interaktiv sida om hur ekonomi kan kommuniceras när en verksamhet lever på flera
tidsbegränsade bidrag. Visar fyra gruppers resultaträkning fyra år fram (grupp
AA, BB, CC, DD) plus ett redigerbart läge, sedd från år X och år X+1. Grön, gul
och röd markering på RESULTAT-raden, ett mått på hur mycket sämre bilden blir ett
år senare, och en gruppspecifik fråga som väcks av de tomma intäktscellerna.
Byggd i tre filer (`index.html`, `styles.css`, `app.js`), ingen data lämnar
webbläsaren.

### [`ekonomikommunikation/260903/PRD.md`](ekonomikommunikation/260903/PRD.md)
Planeringen bakom sidan: Kents ståndpunkt om ekonomikommunikation, flerårsmodellen,
de fyra typfallen, och en daterad beslutslogg. Blogginlägget (upplägg C, "Kan vi
anställa henne i tre år?") skrivs efter sidan och utgår från den.

### [`ekonomikommunikation/260903/SPEC.md`](ekonomikommunikation/260903/SPEC.md)
Låst bygg-spec: de åtta resultaträkningarna med exakta tal, färg- och
varningsreglerna, komponentlistan, D-ver2, och en acceptanslista att pricka av
bygget mot.

### [`ekonomikommunikation/260903/process-logg.md`](ekonomikommunikation/260903/process-logg.md)
Kronologisk logg över besluten under själva bygget, i tre leveranser. Kompletterar
beslutsloggen i PRD:n, som täcker planeringsfasen.

### [`ekonomikommunikation/260903/README.md`](ekonomikommunikation/260903/README.md)
Mappöversikt med lokal sökväg, live-sida och status.

### [`humanizer.md`](humanizer.md)
Praktisk katalog med 14 konkreta mönster att undvika för att text ska låta
mänsklig, inte AI-genererad. Svenska exempel hämtade ur redovisningskontext.
Innehåller även tre snabbpass att köra på färdig text. Se även
[`skills/humanizer_ton/humanizer_bakgrund.md`](skills/humanizer_ton/humanizer_bakgrund.md) för den teoretiska bakgrunden.

### [`skills/`](skills/)
Fem AI-skills (procedurdokument för Claude):
- [`humanizer_ton/SKILL.md`](skills/humanizer_ton/SKILL.md) – sju procedursteg för mänsklig, analytisk skrivstil
- [`humanizer_ton/humanizer_bakgrund.md`](skills/humanizer_ton/humanizer_bakgrund.md) – akademisk analys (se nedan)
- [`linkedin_pulse/SKILL.md`](skills/linkedin_pulse/SKILL.md) – format, röst och procedur för LinkedIn Pulse-artiklar
- [`projekt_struktur/SKILL.md`](skills/projekt_struktur/SKILL.md) – detta projekts nav, CSS och konventioner
- [`webb_struktur/SKILL.md`](skills/webb_struktur/SKILL.md) – generellt återanvändbart skill för hierarkiska webbplatser

---

## Humanizer – att skriva med mänsklig röst

Ett löpande tema i projektet är att texter ska låta som Kent – inte som en
AI-assistent. Det arbetet är dokumenterat i tre lager:

| Fil | Roll | Innehåll |
|-----|------|----------|
| [`skills/humanizer_ton/humanizer_bakgrund.md`](skills/humanizer_ton/humanizer_bakgrund.md) | Teori | Akademisk analys: varför AI-text låter som AI (RLHF, epistemisk kalibrering, perplexity, burstiness). Refererar forskning från ACL 2024 och arxiv 2026. |
| [`skills/humanizer_ton/SKILL.md`](skills/humanizer_ton/SKILL.md) | Procedur | Sju steg att köra i ordning: från att identifiera berömsord till ett röstpass mot Kents egna bloggar. |
| [`humanizer.md`](humanizer.md) | Katalog | 14 konkreta mönster med svenska före/efter-exempel. Baserat på [blader/humanizer](https://github.com/blader/humanizer) och [aihxp/humanizer](https://github.com/aihxp/humanizer) på GitHub. |
| [\skills/linkedin_pulse/SKILL.md\](skills/linkedin_pulse/SKILL.md) | LinkedIn | Format, röst och procedur för LinkedIn Pulse-artiklar. Checklista, custom instructions-förklaring och platshållare för exempelartiklar. |

Arbetet med humanisering dokumenteras också i ett blogginlägg:
[Att skriva med sin egen röst när AI skriver åt dig](https://controllerutangranser.wordpress.com/2026/06/09/skriva-med-sin-egen-rost/)
(controllerutangranser.wordpress.com, publicerat 9 juni 2026).

Grundinsikten, hämtad ur forskningen: AI-text avslöjas inte primärt av
enskilda ord utan av *uniformitet* – jämna meningslängder, förutsägbara
ordval, hedging på fel ställen. Motmedlet är specifika egennamn, varierad
rytm och äkta ståndpunkter – det som SKILL.md kallar "stance mode".

---

## ⚠️ Nested Git-repo

Mappen `Ekonomi` har ett eget git-repo inuti en föräldramapp som också är ett repo:

```
C:\Users\kentl\OneDrive\AI\Claude\     ← Föräldra-repo (remote: Ovrigt)
    ├── ArbetenSokta/
    ├── ClaudeCowork/
    ├── Ekonomi/                        ← DETTA repo (remote: Ekonomi)
    │   └── .git/
    └── Ovrigt/
```

**Regel:** Öppna alltid `Ekonomi`-mappen direkt i Cursor – aldrig föräldramappen.
Verifiera remote med `git remote -v` om du är osäker.

| Situation | Risk | Åtgärd |
|-----------|------|---------|
| Öppnar `AI\Claude` i Cursor | Arbetar mot fel repo | Öppna `Ekonomi`-mappen separat |
| Glömmer committa efter redigering | Ändringar saknas i git-historik | Committa manuellt i Cursor |
| Föräldra-repot visar `Ekonomi` som modified | Förvirring | Normalt – ignorera det där |

---

## Git-hantering

**Kent commitar alltid själv** – via Cursors Source Control-panel (GUI) eller terminal.

```powershell
cd "C:\Users\kentl\OneDrive\AI\Claude\Ekonomi"
git add .
git commit -m "Kort beskrivning av vad som ändrades"
git push
```
