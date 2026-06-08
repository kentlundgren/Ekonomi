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

## Del 7 – Checklista innan commit

- [ ] Alla `[PLATSHÅLLARE]` är ersatta med verkliga värden
- [ ] `href`-nivåerna i breadcrumb stämmer (`../` vs `../../`)
- [ ] GitHub-hörnan finns och pekar på rätt repo
- [ ] Ny sida är länkad från sin föräldra-TOC
- [ ] Nav i rot-`index.html` är uppdaterad om ny sektion lagts till
- [ ] Inmatningsfält (om sådana finns) har gul bakgrund (`background: #ffffc0`)

---

## Relation till projekt_struktur/SKILL.md

`projekt_struktur/SKILL.md` är det **ifyllda exemplet** för just Ekonomi-projektet.
Det innehåller dessutom Harvard-regler och textstil-konventioner som är
specifika för det projektet.

Det här skillet (`webb_struktur/SKILL.md`) är den **generella mallen** –
anpassa den till ditt projekt genom Del 0 ovan.
