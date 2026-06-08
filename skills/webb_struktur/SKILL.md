---
name: webb_struktur
description: >-
  Generellt skill för att skapa hierarkiska webbplatser med konsekvent
  navigering, CSS-teman, TOC-sidor och GitHub Pages-struktur.
  Appliceras på vilket ämne som helst – fyll i projektkonfigurationen
  i Del 0 innan du börjar.
metadata:
  version: 1.0
  ursprung: skills/projekt_struktur/SKILL.md (Ekonomi-projektet)
  exempel: Se skills/projekt_struktur/SKILL.md för ett ifyllt exempel
---

## När ska skillet aktiveras?

Aktivera när du:
- Startar ett nytt webbprojekt med liknande hierarkisk struktur
- Skapar ny sida eller sektion i ett befintligt projekt av denna typ
- Vill kontrollera att navigering, filstruktur och stil är konsekvent

---

## Del 0 – Projektkonfiguration (fyll i innan du börjar)

Ersätt alla `[PLATSHÅLLARE]` nedan med projektets faktiska värden
**innan** du använder mallarna i Del 2–8.

```
[INITIAL]         = Ett enkelt tecken, t.ex. E, F, S …
[PROJEKT_NAMN]    = Projektets visningsnamn, t.ex. Ekonomi / Fritid / Sport
[GITHUB_USER]     = GitHub-användarnamn, t.ex. kentlundgren
[GITHUB_REPO]     = Repo-namn, t.ex. Ekonomi / Fritid
[TOPNIVÅ_URL]     = https://[GITHUB_USER].github.io/[GITHUB_REPO]

Hierarki – tre nivåer (utöka vid behov):
[SEKTION_1]       = Första sektionens visningsnamn, t.ex. Redovisning / Segling
[SEKTION_1_SLUG]  = Mappnamn (gemener, inga mellanslag), t.ex. redovisning / segling
[SEKTION_1_SUB_1] = Första undersidans namn, t.ex. BAS / Scampi
[SEKTION_1_SUB_1_SLUG] = Undermappens namn, t.ex. BAS / scampi
[SEKTION_1_SUB_2] = Andra undersidans namn (om den finns)
[SEKTION_1_SUB_2_SLUG] = …

[SEKTION_2]       = Andra sektionens namn (om den finns)
[SEKTION_2_SLUG]  = …
```

### Ifyllt Ekonomi-exempel

```
[INITIAL]         = E
[PROJEKT_NAMN]    = Ekonomi
[GITHUB_USER]     = kentlundgren
[GITHUB_REPO]     = Ekonomi
[TOPNIVÅ_URL]     = https://kentlundgren.github.io/Ekonomi

[SEKTION_1]       = Redovisning
[SEKTION_1_SLUG]  = redovisning
[SEKTION_1_SUB_1] = BAS
[SEKTION_1_SUB_1_SLUG] = BAS
[SEKTION_1_SUB_2] = Revision
[SEKTION_1_SUB_2_SLUG] = revision

[SEKTION_2]       = ekonomistyrning
[SEKTION_2_SLUG]  = ekonomistyrning
```

### Ifyllt Fritid-exempel

```
[INITIAL]         = F
[PROJEKT_NAMN]    = Fritid
[GITHUB_USER]     = kentlundgren
[GITHUB_REPO]     = Fritid
[TOPNIVÅ_URL]     = https://kentlundgren.github.io/Fritid

[SEKTION_1]       = Segling
[SEKTION_1_SLUG]  = segling
[SEKTION_1_SUB_1] = Scampi
[SEKTION_1_SUB_1_SLUG] = scampi
[SEKTION_1_SUB_2] = (inte aktuellt ännu)
[SEKTION_1_SUB_2_SLUG] = …

[SEKTION_2]       = (inte aktuellt ännu)
[SEKTION_2_SLUG]  = …
```

---

## Del 0b – Vad är brödsmulor (breadcrumbs)?

### Begreppet

Brödsmulor är en navigeringsteknik som visar **var du befinner dig i webbplatsens hierarki**
– som en stig av klickbara steg från roten till den sida du är på just nu.

Namnet kommer från sagan om Hansel och Gretel, som lade brödsmulor längs vägen
för att hitta tillbaka hem.

### Hur det ser ut i praktiken

På sidan `redovisning/BAS/analys.html` ser du längst upp:

```
{ E } Ekonomi  /  Redovisning  /  BAS
```

- `{ E } Ekonomi` – klickbar – tar dig till roten
- `Redovisning` – klickbar – tar dig upp en nivå
- `BAS` – klickbar – tar dig till BAS-innehållsförteckningen
- Du är just nu på `analys.html`, som inte syns i brödsmulan
  (den aktiva sidan visas ibland i vit/fet text som sista segment)

På sidan `segling/scampi/index.html` skulle det se ut:

```
{ F } Fritid  /  Segling  /  Scampi
```

### Varför brödsmulor?

| Problem utan brödsmulor | Lösning med brödsmulor |
|-------------------------|------------------------|
| Besökaren vet inte var hen är | Hela sökvägen syns alltid |
| Svårt att backa upp en nivå | Varje steg är klickbart |
| Djupa hierarkier blir förvirrande | Hierarkin visualiseras direkt |
| Bakåtknappen i webbläsaren räcker inte | Man kan hoppa flera nivåer |

### Sambandet med filstrukturen

Brödsmule-stegen speglar **exakt** mappstrukturen på disk:

```
Mapp:      Ekonomi / redovisning / BAS / analys.html
Brödsmsla: Ekonomi  /  Redovisning  /  BAS
```

Det är därför konsekvent namngivning av mappar är viktig –
brödsmulans text hämtas från mappens visningsnamn, länken från mappens sökväg.

### Tekniken i HTML

Brödsmulorna byggs av tre enkla element:

```html
<a class="nav-brand" href="../../index.html">{ E } Ekonomi</a>  ← länk till rot
<span class="nav-sep">/</span>                                   ← separator
<a class="nav-crumb" href="../index.html">Redovisning</a>        ← länk uppåt
<span class="nav-sep">/</span>
<span class="nav-crumb active">BAS</span>                        ← aktiv sida (ej länk)
```

Antalet `../` i href bestämmer hur många nivåer uppåt länken går:
- `../index.html` = en nivå upp (föräldramappen)
- `../../index.html` = två nivåer upp (rot)

### Jämförelse: brödsmula vs. dropdown

Båda används i detta projekt, men i olika situationer:

| | Brödsmula | Dropdown |
|-|-----------|----------|
| **Var** | Undersidor och innehållssidor | Enbart rotsidan |
| **Visar** | Var du *är* | Vad som *finns* |
| **Riktning** | Bakåt/uppåt i hierarkin | Framåt/nedåt i hierarkin |
| **Aktiveras** | Alltid synlig | Vid hover |

Rotsidan behöver inte brödsmulor (det finns inget "ovanför" roten),
så där används istället en dropdown för att visa vad som finns nedanför.

---

## Del 1 – Mapp- och filstruktur

```
[PROJEKT_NAMN]/                         ← rot-TOC
  index.html
  [SEKTION_1_SLUG]/
    index.html                          ← sektion-TOC
    [SEKTION_1_SUB_1_SLUG]/
      index.html                        ← sub-TOC
      [INNEHÅLLSSIDA].html              ← innehållssida
    [SEKTION_1_SUB_2_SLUG]/
      index.html
  [SEKTION_2_SLUG]/
    index.html                          ← platshållare / sektion-TOC
  skills/
    webb_struktur/SKILL.md
    [eventuella projektspecifika skills]/
```

### Tre sidtyper

| Typ | Exempel | Nav | Syfte |
|-----|---------|-----|-------|
| **Rot-TOC** | `index.html` | Brand + dropdown-grupper | Listarsektioner |
| **Sektion/sub-TOC** | `[SEKTION_1_SLUG]/index.html` | Breadcrumb | Listar undersidor |
| **Innehållssida** | `[SEKTION_1_SUB_1_SLUG]/analys.html` | Breadcrumb | Faktiskt innehåll |

---

## Del 2 – Navigeringsmallar

### 2a. Rot-nav med dropdown

```html
<nav class="site-nav">
  <a class="nav-brand" href="index.html">{ [INITIAL] } [PROJEKT_NAMN]</a>

  <!-- Sektion 1 med dropdown -->
  <div class="nav-group">
    <a href="[SEKTION_1_SLUG]/index.html">[SEKTION_1] <span class="arrow">▾</span></a>
    <div class="nav-dropdown">
      <a href="[SEKTION_1_SLUG]/[SEKTION_1_SUB_1_SLUG]/index.html">[SEKTION_1_SUB_1]</a>
      <!-- Lägg till fler rader här när nya undersidor skapas -->
    </div>
  </div>

  <!-- Sektion 2 (inga undersidor ännu – ta bort ▾ och dropdown) -->
  <div class="nav-group">
    <a href="[SEKTION_2_SLUG]/index.html">[SEKTION_2]</a>
  </div>

  <div class="nav-right">
    <span style="color:#566e88; font-size:0.82em;">[DITT NAMN]</span>
  </div>
</nav>
```

### 2b. Breadcrumb-nav – tre djupnivåer

```html
<!-- Nivå 1: [SEKTION_1_SLUG]/index.html -->
<nav class="site-nav">
  <a class="nav-brand" href="../index.html">{ [INITIAL] } [PROJEKT_NAMN]</a>
  <span class="nav-sep">/</span>
  <span class="nav-crumb active">[SEKTION_1]</span>
  <span class="nav-author">[DITT NAMN]</span>
</nav>

<!-- Nivå 2: [SEKTION_1_SLUG]/[SEKTION_1_SUB_1_SLUG]/index.html -->
<nav class="site-nav">
  <a class="nav-brand" href="../../index.html">{ [INITIAL] } [PROJEKT_NAMN]</a>
  <span class="nav-sep">/</span>
  <a class="nav-crumb" href="../index.html">[SEKTION_1]</a>
  <span class="nav-sep">/</span>
  <span class="nav-crumb active">[SEKTION_1_SUB_1]</span>
  <span class="nav-author">[DITT NAMN]</span>
</nav>

<!-- Innehållssida: [SEKTION_1_SLUG]/[SEKTION_1_SUB_1_SLUG]/sida.html -->
<nav class="site-nav">
  <a class="nav-brand" href="../../index.html">{ [INITIAL] } [PROJEKT_NAMN]</a>
  <span class="nav-sep">/</span>
  <a class="nav-crumb" href="../index.html">[SEKTION_1]</a>
  <span class="nav-sep">/</span>
  <a class="nav-crumb" href="index.html">[SEKTION_1_SUB_1]</a>
  <span class="nav-author">[DITT NAMN]</span>
</nav>
```

**Regel:** Klickbara noder → `<a class="nav-crumb">`. Nuvarande sida → `<span class="nav-crumb active">`.

---

## Del 3 – CSS-teman

Välj ett tema. **Tema A är default.**

### Tema A – Marin/Blå

```css
:root {
  --nav-bg:        #1a3a5c;
  --nav-brand:     #ffffff;
  --nav-crumb:     #9ab4cc;
  --nav-crumb-act: #ffffff;
  --nav-sep:       #7a9bbf;
  --nav-author:    #566e88;
  --nav-hover-bg:  #1e3a5f;
  --drop-bg:       #14304f;
  --drop-border:   #2d5278;
  --accent:        #1a6eb5;
  --page-bg:       #fafaf8;
  --card-border:   #d0dce8;
  --card-hover-bg: #f0f6ff;
  --h-color:       #1a3a5c;
  --text:          #222222;
}
```

### Tema B – Grafitgrå

```css
:root {
  --nav-bg:        #2a2d30;
  --nav-brand:     #e8e8e8;
  --nav-crumb:     #a0a8b0;
  --nav-crumb-act: #ffffff;
  --nav-sep:       #666c74;
  --nav-author:    #5a6068;
  --nav-hover-bg:  #3a3d42;
  --drop-bg:       #1e2124;
  --drop-border:   #444850;
  --accent:        #5b8fcc;
  --page-bg:       #f5f5f3;
  --card-border:   #d4d6d8;
  --card-hover-bg: #edf1f7;
  --h-color:       #2a2d30;
  --text:          #1e2020;
}
```

### Tema C – Skogsgrönt

```css
:root {
  --nav-bg:        #1a3d2a;
  --nav-brand:     #e0f0e6;
  --nav-crumb:     #7abf95;
  --nav-crumb-act: #ffffff;
  --nav-sep:       #4a8a65;
  --nav-author:    #4a6e56;
  --nav-hover-bg:  #1e4a32;
  --drop-bg:       #14301e;
  --drop-border:   #2a5a3a;
  --accent:        #2a7a4e;
  --page-bg:       #f7faf8;
  --card-border:   #c0daca;
  --card-hover-bg: #edf7f1;
  --h-color:       #1a3d2a;
  --text:          #1a2020;
}
```

### Nav- och layout-CSS (gemensam – klistra in efter temat)

```css
*, *::before, *::after { box-sizing: border-box; }
body { font-family: Georgia, "Times New Roman", serif; font-size: 1.05em; line-height: 1.75; color: var(--text); background: var(--page-bg); margin: 0; padding: 0; }
.site-nav { display: flex; align-items: center; background: var(--nav-bg); padding: 0 20px; height: 44px; position: sticky; top: 0; z-index: 100; gap: 0; }
.site-nav .nav-brand { font-family: "Courier New", monospace; font-weight: bold; font-size: 1.05em; color: var(--nav-brand); text-decoration: none; margin-right: 16px; white-space: nowrap; }
.site-nav .nav-brand:hover { opacity: 0.85; }
.nav-sep   { color: var(--nav-sep); margin: 0 5px; font-family: "Courier New", monospace; }
.nav-crumb { color: var(--nav-crumb); text-decoration: none; font-family: "Courier New", monospace; font-size: 0.95em; white-space: nowrap; }
.nav-crumb:hover { color: var(--nav-crumb-act); }
.nav-crumb.active { color: var(--nav-crumb-act); font-weight: 600; }
.nav-author { color: var(--nav-author); font-size: 0.9em; white-space: nowrap; margin-left: auto; }
.nav-group { position: relative; border-left: 1px solid var(--drop-border); padding-left: 10px; margin-left: 4px; }
.nav-group > a { color: var(--nav-crumb); text-decoration: none; padding: 4px 10px; border-radius: 4px; font-family: "Courier New", monospace; font-size: 0.88em; white-space: nowrap; display: inline-block; line-height: 44px; }
.nav-group > a:hover { color: var(--nav-crumb-act); }
.nav-group > a .arrow { font-size: 0.7em; margin-left: 3px; opacity: 0.6; }
.nav-dropdown { display: none; position: absolute; top: 100%; left: 0; background: var(--drop-bg); border: 1px solid var(--drop-border); border-top: none; border-radius: 0 0 6px 6px; min-width: 140px; z-index: 200; padding: 4px 0; box-shadow: 0 6px 16px rgba(0,0,0,0.25); }
.nav-group:hover .nav-dropdown { display: block; }
.nav-dropdown a { display: block; padding: 7px 16px; color: var(--nav-crumb); text-decoration: none; font-family: "Courier New", monospace; font-size: 0.84em; white-space: nowrap; }
.nav-dropdown a:hover { background: var(--nav-hover-bg); color: var(--nav-crumb-act); }
.nav-right { display: flex; align-items: center; gap: 6px; margin-left: auto; }
.nav-right a { color: var(--nav-author); text-decoration: none; font-family: "Courier New", monospace; font-size: 0.82em; padding: 3px 8px; border-radius: 4px; }
.nav-right a:hover { color: var(--nav-crumb); }
.container { max-width: 700px; margin: 0 auto; padding: 40px 24px 80px; }
h1 { font-size: 1.5em; color: var(--h-color); margin-bottom: 4px; }
h2 { font-size: 1.15em; color: var(--h-color); margin-top: 36px; margin-bottom: 8px; }
.meta { color: #888; font-size: 0.88em; margin-bottom: 32px; }
p { margin: 0 0 16px; }
.section-card { display: block; border: 1px solid var(--card-border); border-left: 4px solid var(--accent); border-radius: 6px; padding: 18px 22px; margin: 14px 0; text-decoration: none; color: inherit; background: #fff; transition: border-color 0.15s, background 0.15s; }
.section-card:hover { background: var(--card-hover-bg); }
.section-card h2 { font-size: 1.05em; color: var(--h-color); margin: 0 0 4px; }
.section-card p { margin: 0; font-size: 0.93em; color: #555; }
.section-card .url-hint { font-family: "Courier New", monospace; font-size: 0.78em; color: #999; display: block; margin-top: 6px; }
.github-corner { position: fixed; bottom: 14px; left: 14px; font-family: "Courier New", monospace; font-size: 0.78em; color: #aaa; text-decoration: none; opacity: 0.55; transition: opacity 0.2s; z-index: 999; }
.github-corner:hover { opacity: 1; color: var(--h-color); }
```

---

## Del 4 – GitHub-hörna

Klistra in precis **före** `</body>` på varje sida.

```html
<a class="github-corner"
   href="https://github.com/[GITHUB_USER]/[GITHUB_REPO]"
   target="_blank">{ } GitHub</a>
```

---

## Del 5 – Sektion-kort (TOC-mall)

```html
<a class="section-card" href="[RELATIV_LÄNK]/index.html">
  <h2>[Sidans titel]</h2>
  <p>[Kort beskrivning – 1–2 meningar, saklig ton]</p>
  <span class="url-hint">[SEKTION_SLUG]/[UNDERSIDA_SLUG]/</span>
</a>
```

Platshållare för kommande sidor:
```html
<div style="border:1px dashed #ccc; border-radius:6px; padding:18px 22px;
            margin:14px 0; color:#aaa; font-size:0.92em;">
  Fler avsnitt planeras …
</div>
```

---

## Del 6 – Steg-för-steg: ny sida

### Ny innehållssida

1. Välj tema (A/B/C) och klistra in CSS (Del 3)
2. Välj rätt breadcrumb-mall (Del 2b) och justera `href`-nivåerna
3. Lägg till `<div class="container">` med `<h1>`, `.meta`, stycken
4. Klistra in GitHub-hörnan (Del 4) före `</body>`
5. Lägg till section-card i föräldra-TOC:n (Del 5)

### Ny sektion

1. Skapa `[SEKTION_SLUG]/index.html` som sektion-TOC
2. Lägg till `<div class="nav-group">` i rot-`index.html` nav
3. Om sektionen har undersidor: lägg till `▾` och `<div class="nav-dropdown">`
4. Lägg till section-card i rot-`index.html` body

---

## Del 7 – Källhänvisningar (Harvardformat)

### Vad är Harvardformat?

Harvard är en **parentescitationsstil**: källan anges som `(Efternamn, År)`
direkt i löptexten, inte som fotnot. En fullständig källförteckning samlas
sist på sidan eller dokumentet.

Det är en av de vanligaste akademiska och journalistiska referensstilarna
i Sverige och internationellt.

---

### Regler för citat i löpande text

#### Regel 1 – Parentesformat

Citat skrivs alltid inom parentes med efternamn och år:

```
(Berg, 2026)
```

Aldrig enbart efternamnet utan parentes, aldrig enbart årtalet.

#### Regel 2 – Första omnämnandet är en länk

**Första gången** en källa nämns i löptexten ska hela parentesen vara
en klickbar länk till källan:

```html
(<a href="https://käll-url.se" target="_blank">Berg, 2026</a>)
```

**Alla efterföljande** omnämnanden av samma källa skrivs som vanlig text:

```html
(Berg, 2026)
```

#### Regel 3 – Länka parentesen, inte författarnamnet

Länken ska ligga på **parentesen** `(Berg, 2026)`, inte på författarnamnet
i den löpande texten.

```html
<!-- ✅ Rätt -->
Peter Berg publicerade en artikel om ämnet (<a href="URL">Berg, 2026</a>).

<!-- ❌ Fel – länken på namnet -->
<a href="URL">Peter Berg</a> publicerade en artikel (Berg, 2026).

<!-- ❌ Fel – namnet fetstilat -->
<strong>Peter Berg</strong> publicerade en artikel (Berg, 2026).
```

#### Regel 4 – Flera källor av samma upphovsman samma år

Lägg till bokstavsuffix `a`, `b`, `c` … i kronologisk ordning:

```html
(Berg, 2026a)   ← artikel publicerad 7 juni
(Berg, 2026b)   ← LinkedIn-inlägg publicerat 7 juni
```

Samma suffix används konsekvent i källförteckningen.

#### Regel 5 – Flera källor i samma parentes

Separera med semikolon:

```html
(Berg, 2026a; SKR, 2026)
```

---

### Källförteckning – format

Källförteckningen placeras **längst ned** på sidan, synligt separerad.
Poster sorteras alfabetiskt på efternamn.

**Tryckt bok:**
```
Efternamn, F. (År) Titel i kursiv. Ort: Förlag.
```

**Artikel / bloggpost:**
```
Efternamn, F. (År) 'Artikelns titel'. Publikation, datum.
Tillgänglig: URL [Hämtad: ÅÅÅÅ-MM-DD].
```

**LinkedIn-inlägg:**
```
Efternamn, F. (År) [LinkedIn-inlägg om ämne]. LinkedIn, datum.
Tillgänglig: linkedin.com/... [Hämtad: ÅÅÅÅ-MM-DD].
```

**Myndighet / organisation (utan namngiven författare):**
```
Organisationsnamn (År) Dokumenttitel. Tillgänglig: URL [Hämtad: ÅÅÅÅ-MM-DD].
```

### HTML-mall för källförteckning

```html
<div class="sources">
  <h2>Källor (Harvardstil)</h2>
  <ol>
    <li>
      Efternamn, F. (År) <em>Titel</em>. Utgivare, datum.
      Tillgänglig: <a href="URL" target="_blank">URL</a> [Hämtad: ÅÅÅÅ-MM-DD].
    </li>
    <!-- Upprepa <li> per källa, sorterat A–Ö på efternamn -->
  </ol>
</div>
```

CSS för källförteckningen:
```css
.sources {
  background: #fff;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  padding: 24px 32px;
  margin-top: 40px;
  font-size: 0.92em;
}
.sources h2 {
  font-size: 1.0em;
  color: #444;
  margin: 0 0 12px;
  border-bottom: 1px solid var(--card-border);
  padding-bottom: 8px;
}
.sources ol { margin: 0; padding-left: 22px; }
.sources li { margin-bottom: 8px; color: #555; }
.sources a { color: var(--accent); }
```

---

## Del 8 – Textstil och mänsklig ton

### Humanizer – ett obligatoriskt komplement

Källstruktur och navigering är det tekniska skelettet.
Texten är det som läsaren faktiskt möter.

**Varje projekt som använder detta skill bör ha ett eget
`humanizer_ton`-skill** som definierar projektets skrivstil.
Utan det riskerar texten att låta generisk och AI-genererad.

### Vad är humanizer_ton?

Ett `humanizer_ton`-skill är en procedur för att kontrollera att
löpande text låter mänsklig, specifik och ärlig – inte polerad och
innehållslös. Det täcker typiska AI-mönster att undvika och hur
man skriver i rätt röst för just det projektet.

### Skapa projektets humanizer_ton

Om projektet saknar ett sådant skill – skapa `skills/humanizer_ton/SKILL.md`
med följande avsnitt:

```
1. Projektets röst – vem skriver, för vem, i vilken ton?
   Exempel: "Första person, analytisk, inga säljfraser"

2. Mönster att undvika (minst 5–8 exempel)
   Exempel: förstärkningsord, vaga formuleringar, AI-vokabulär

3. Procedur – steg att köra på ny text
   Exempel: identifiera berömsord → bryt trippelregeln → rytmpass

4. Snabbreferens – byt-ut-tabell
   Undvik | Skriv istället
```

### Ekonomi-projektets humanizer

Se `skills/humanizer_ton/SKILL.md` för ett färdigt exempel.
Reglerna där är specifika för Kent Lundgrens skrivstil och
det ekonomi/revisionsrelaterade innehållet.

### Kortversion – universella regler

Oavsett projekt gäller alltid:

| Undvik | Skriv istället |
|--------|---------------|
| "Det är viktigt att notera att…" | Börja med saken direkt |
| "Spännande tider väntar!" | (Stryk – tom avslutning) |
| Tre adjektiv i rad | Välj ett, stryk de andra |
| "nyligen", "snart", "många" | Ange datum, antal, namn |
| Förstärkningsord om andras arbete | Beskriv vad de faktiskt gjorde |
| Meningar med likadan längd i rad | Variera – kort, lång, kort |

---

## Del 9 – Checklista innan commit

- [ ] Alla `[PLATSHÅLLARE]` är ersatta med verkliga värden
- [ ] `href`-nivåerna i breadcrumb stämmer (`../` vs `../../`)
- [ ] GitHub-hörnan finns och pekar på rätt repo
- [ ] Ny sida är länkad från sin föräldra-TOC
- [ ] Nav i rot-`index.html` är uppdaterad om ny sektion lagts till
- [ ] Inmatningsfält (om sådana finns) har gul bakgrund (`background: #ffffc0`)
- [ ] Harvard: första omnämnandet av varje källa är en länk
- [ ] Harvard: parentesen är länkad, inte författarnamnet
- [ ] Harvard: flera verk av samma upphovsman samma år har a/b-suffix
- [ ] Källförteckning finns om sidan refererar till externa källor
- [ ] Textstilen är granskad mot projektets `humanizer_ton`-skill

---

## Relation till projekt_struktur/SKILL.md

`projekt_struktur/SKILL.md` är det **ifyllda exemplet** för just Ekonomi-projektet.
Det innehåller Ekonomi-specifika konventioner utöver det som finns här.

Det här skillet (`webb_struktur/SKILL.md`) är den **generella mallen** –
fyll i Del 0 för ditt projekt, komplettera med ett eget `humanizer_ton`-skill,
och strukturen är redo att användas.
