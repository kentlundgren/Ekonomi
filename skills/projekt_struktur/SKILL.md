---
name: projekt_struktur
description: >-
  Skapar nya sidor och sektioner i Ekonomi-projektet med korrekt
  navigering, CSS-tema, sidtyp, GitHub-hörna och Harvard-referenser.
  Innehåller mallar, tre valfria färgteman och projektets alla konventioner.
metadata:
  projekt: Ekonomi (Kent Lundgrens redovisningsreflektioner)
  referens: CLAUDE.md (regler), humanizer_ton/SKILL.md (textstil)
  gäller: alla HTML-filer i projektet
---

## När ska skillet aktiveras?

Aktivera **alltid** när du:
- Skapar en ny sektion (t.ex. `ekonomistyrning/index.html`)
- Skapar en ny innehållssida (t.ex. `redovisning/revision/ny_sida.html`)
- Lägger till en sektion i nav-baren
- Är osäker på hur navigering, CSS-tema eller sidtyp ska sättas upp

---

## Del 1 – Mapp- och filstruktur

```
Ekonomi/                          ← rot-TOC
  index.html
  rattgit.html                    ← fristående guide
  ekonomistyrning/
    index.html                    ← sektion-TOC (platshållare)
  redovisning/
    index.html                    ← sektion-TOC
    BAS/
      index.html                  ← sub-sektion-TOC
      BAS2026.html                ← innehållssida
      analys.html                 ← innehållssida
      generell_revision.html      ← innehållssida
    revision/
      index.html                  ← innehållssida (+ kontaktavsnitt)
  skills/
    humanizer_ton/SKILL.md
    projekt_struktur/SKILL.md
```

### Tre sidtyper

| Typ | Exempel | Nav-mönster | Syfte |
|-----|---------|-------------|-------|
| **Rot-TOC** | `index.html` | Brand + dropdown-grupper | Lista alla sektioner |
| **Sektion/sub-TOC** | `redovisning/index.html` | Breadcrumb | Lista undersidor |
| **Innehållssida** | `analys.html` | Breadcrumb | Faktiskt innehåll |

---

## Del 2 – Navigeringsmönster

### 2a. Rot-nav (med dropdown)

Används **bara** på `index.html` (rotnivån).

```html
<nav class="site-nav">
  <a class="nav-brand" href="index.html">{ E } Ekonomi</a>

  <div class="nav-group">
    <a href="redovisning/index.html">Redovisning <span class="arrow">▾</span></a>
    <div class="nav-dropdown">
      <a href="redovisning/BAS/index.html">BAS 2026</a>
      <a href="redovisning/revision/index.html">Revision</a>
    </div>
  </div>

  <div class="nav-group">
    <a href="ekonomistyrning/index.html">ekonomistyrning</a>
  </div>

  <div class="nav-right">
    <a href="rattgit.html">Git-guide</a>
    <span style="color:#566e88; font-size:0.82em;">Kent Lundgren</span>
  </div>
</nav>
```

**Ny sektion i dropdown:** Lägg till `<div class="nav-group">` med länk.
**Ny undersida:** Lägg till `<a href="...">Namn</a>` inuti rätt `<div class="nav-dropdown">`.

---

### 2b. Breadcrumb-nav (sektion/innehåll)

Nivåerna byggs upp från vänster. Sista segmentet är alltid det aktiva.

```html
<!-- Sektion-TOC: redovisning/index.html -->
<nav class="site-nav">
  <a class="nav-brand" href="../index.html">{ E } Ekonomi</a>
  <span class="nav-sep">/</span>
  <span class="nav-crumb active">Redovisning</span>
  <span class="nav-author">Kent Lundgren</span>
</nav>

<!-- Sub-TOC: redovisning/BAS/index.html -->
<nav class="site-nav">
  <a class="nav-brand" href="../../index.html">{ E } Ekonomi</a>
  <span class="nav-sep">/</span>
  <a class="nav-crumb" href="../index.html">Redovisning</a>
  <span class="nav-sep">/</span>
  <span class="nav-crumb active">BAS</span>
  <span class="nav-author">Kent Lundgren</span>
</nav>

<!-- Innehållssida: redovisning/BAS/analys.html -->
<nav class="site-nav">
  <a class="nav-brand" href="../../index.html">{ E } Ekonomi</a>
  <span class="nav-sep">/</span>
  <a class="nav-crumb" href="../index.html">Redovisning</a>
  <span class="nav-sep">/</span>
  <a class="nav-crumb" href="index.html">BAS</a>
  <span class="nav-author">Kent Lundgren</span>
</nav>
```

**Regel:** Klickbara segment → `<a class="nav-crumb" href="...">`. Nuvarande sida → `<span class="nav-crumb active">`.

---

## Del 3 – CSS-teman

Välj ett tema. **Tema A är default.** Klistra in hela blocket i `<style>`.

---

### Tema A – Marin/Blå (nuvarande projekt-default)

```css
/* ── TEMA A: Marin/Blå ── */
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
/* ── TEMA B: Grafitgrå ── */
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
/* ── TEMA C: Skogsgrönt ── */
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

---

### CSS-klasser för nav (gemensamma för alla teman)

Klistra in **efter** temat.

```css
.site-nav {
  display: flex;
  align-items: center;
  background: var(--nav-bg);
  padding: 0 20px;
  height: 44px;
  position: sticky;
  top: 0;
  z-index: 100;
  gap: 0;
}
.site-nav .nav-brand {
  font-family: "Courier New", monospace;
  font-weight: bold;
  font-size: 1.05em;
  color: var(--nav-brand);
  text-decoration: none;
  margin-right: 16px;
  white-space: nowrap;
}
.site-nav .nav-brand:hover { opacity: 0.85; }
/* Breadcrumb */
.nav-sep   { color: var(--nav-sep); margin: 0 5px; font-family: "Courier New", monospace; }
.nav-crumb { color: var(--nav-crumb); text-decoration: none; font-family: "Courier New", monospace; font-size: 0.95em; white-space: nowrap; }
.nav-crumb:hover { color: var(--nav-crumb-act); }
.nav-crumb.active { color: var(--nav-crumb-act); font-weight: 600; }
.nav-author { color: var(--nav-author); font-size: 0.9em; white-space: nowrap; margin-left: auto; }
/* Dropdown-grupp (rot-nav) */
.nav-group { position: relative; border-left: 1px solid var(--drop-border); padding-left: 10px; margin-left: 4px; }
.nav-group > a { color: var(--nav-crumb); text-decoration: none; padding: 4px 10px; border-radius: 4px; font-family: "Courier New", monospace; font-size: 0.88em; white-space: nowrap; display: inline-block; line-height: 44px; }
.nav-group > a:hover { color: var(--nav-crumb-act); }
.nav-group > a .arrow { font-size: 0.7em; margin-left: 3px; opacity: 0.6; }
.nav-dropdown { display: none; position: absolute; top: 100%; left: 0; background: var(--drop-bg); border: 1px solid var(--drop-border); border-top: none; border-radius: 0 0 6px 6px; min-width: 140px; z-index: 200; padding: 4px 0; box-shadow: 0 6px 16px rgba(0,0,0,0.25); }
.nav-group:hover .nav-dropdown { display: block; }
.nav-dropdown a { display: block; padding: 7px 16px; color: var(--nav-crumb); text-decoration: none; font-family: "Courier New", monospace; font-size: 0.84em; white-space: nowrap; }
.nav-dropdown a:hover { background: var(--nav-hover-bg); color: var(--nav-crumb-act); }
/* Högergrupp (rot-nav) */
.nav-right { display: flex; align-items: center; gap: 6px; margin-left: auto; }
.nav-right a { color: var(--nav-author); text-decoration: none; font-family: "Courier New", monospace; font-size: 0.82em; padding: 3px 8px; border-radius: 4px; }
.nav-right a:hover { color: var(--nav-crumb); }
```

---

### CSS för innehållslayout (gemensam)

```css
*, *::before, *::after { box-sizing: border-box; }
body { font-family: Georgia, "Times New Roman", serif; font-size: 1.05em; line-height: 1.75; color: var(--text); background: var(--page-bg); margin: 0; padding: 0; }
.container { max-width: 700px; margin: 0 auto; padding: 40px 24px 80px; }
h1 { font-size: 1.5em; color: var(--h-color); margin-bottom: 4px; }
h2 { font-size: 1.15em; color: var(--h-color); margin-top: 36px; margin-bottom: 8px; }
.meta { color: #888; font-size: 0.88em; margin-bottom: 32px; }
p { margin: 0 0 16px; }
/* Sektion-kort (TOC-sidor) */
.section-card { display: block; border: 1px solid var(--card-border); border-left: 4px solid var(--accent); border-radius: 6px; padding: 18px 22px; margin: 14px 0; text-decoration: none; color: inherit; background: #fff; transition: border-color 0.15s, background 0.15s; }
.section-card:hover { background: var(--card-hover-bg); }
.section-card h2 { font-size: 1.05em; color: var(--h-color); margin: 0 0 4px; }
.section-card p { margin: 0; font-size: 0.93em; color: #555; }
.section-card .url-hint { font-family: "Courier New", monospace; font-size: 0.78em; color: #999; display: block; margin-top: 6px; }
/* GitHub-hörna */
.github-corner { position: fixed; bottom: 14px; left: 14px; font-family: "Courier New", monospace; font-size: 0.78em; color: #aaa; text-decoration: none; opacity: 0.55; transition: opacity 0.2s; z-index: 999; }
.github-corner:hover { opacity: 1; color: var(--h-color); }
```

---

## Del 4 – GitHub-hörna

Klistra in precis **före** `</body>` på varje sida.

```html
<a class="github-corner"
   href="https://github.com/kentlundgren/Ekonomi"
   target="_blank">{ } GitHub</a>
```

---

## Del 5 – Sektion-kort (TOC-mall)

Varje nivå-TOC listar sina undersidor med section-card. Mall:

```html
<a class="section-card" href="RELATIV_LÄNK/index.html">
  <h2>Sidans titel</h2>
  <p>
    Kort beskrivning (1–2 meningar, analytisk ton, ingen säljjargong).
  </p>
  <span class="url-hint">relativ/sökväg/</span>
</a>
```

Platshållare för planerade sidor:
```html
<div style="border:1px dashed #ccc; border-radius:6px; padding:18px 22px; margin:14px 0; color:#aaa; font-size:0.92em;">
  Fler avsnitt planeras …
</div>
```

---

## Del 6 – Harvard-referenser

### Format för källförteckning

```html
<div class="sources">
  <h2>Källor (Harvardstil)</h2>
  <ol>
    <li>
      Efternamn, F. (ÅR) <em>Titel</em>. Utgivare, datum.
      Tillgänglig: <a href="URL">URL</a> [Hämtad: ÅÅÅÅ-MM-DD].
    </li>
  </ol>
</div>
```

CSS för `.sources`:
```css
.sources { background: #fff; border-radius: 10px; box-shadow: 0 2px 14px rgba(0,0,0,0.07); padding: 28px 36px; margin-top: 36px; font-size: 0.92em; }
.sources h2 { font-size: 1.05em; color: #444; margin: 0 0 14px; border-bottom: 1px solid #dde4ec; padding-bottom: 8px; }
.sources ol { margin: 0; padding-left: 22px; }
.sources li { margin-bottom: 8px; color: #444; }
.sources a { color: var(--accent); }
```

### Regler för Harvard-citat i löptext

1. **Format:** `(Efternamn, År)` – alltid inom parentes
2. **Klickbarhet:** Första gången en källa nämns i löptexten ska parentesen vara en länk:
   ```html
   (<a href="URL" target="_blank">Berg, 2026a</a>)
   ```
3. **Andra gången:** Vanlig text utan länk: `(Berg, 2026a)`
4. **Aldrig:** Länka eller fetstila författarens *namn* – bara parentesen länkas
5. **Flera källor, samma år:** Använd suffix `a`, `b`, `c`:
   - `(Berg, 2026a)` = artikel, `(Berg, 2026b)` = LinkedIn-inlägg
6. **LinkedIn-inlägg:**
   ```
   Efternamn, F. (År) [LinkedIn-inlägg om ämne]. LinkedIn, datum.
   Tillgänglig: linkedin.com/... [Hämtad: ÅÅÅÅ-MM-DD].
   ```

---

## Del 7 – Textstil (påminnelse)

Se `skills/humanizer_ton/SKILL.md` för fullständigt procedur. Kortversion:

- Skriv i **jag-form** när det är Kents egna reflektioner
- Ange **specifika detaljer**: kontonummer, datum, namn, belopp
- **Stryk** förstärkningsord: *utmärkt*, *gedigen*, *exemplarisk*
- Beskriv **vad** någon gjorde – inte hur bra det var
- Undvik AI-vokabulär: *understryker*, *möjliggöra*, *säkerställa*

---

## Del 8 – Steg-för-steg: skapa ny sida

### Ny innehållssida (t.ex. `redovisning/revision/ny_analys.html`)

1. Välj tema (A/B/C) – default är A
2. Kopiera CSS: tema-block + nav-klasser + layout-klasser + `.github-corner`
3. Klistra in breadcrumb-nav (2b ovan), justera `href`-nivåerna
4. Lägg till `<div class="container">` med `<h1>`, `.meta`, stycken
5. Klistra in GitHub-hörnan före `</body>`
6. Lägg till länkkort för sidan i föräldra-TOC:n

### Ny sektion (t.ex. `ekonomistyrning/`)

1. Skapa `ekonomistyrning/index.html` som sektion-TOC (breadcrumb ett nivå djup)
2. Lägg till `<div class="nav-group">` i rot-`index.html` nav
3. Om sektionen ska ha undersidor: lägg till `▾` och `<div class="nav-dropdown">` med undersidlänkar
4. Lägg till sektion-kort i rot-`index.html` body

---

## Del 9 – Checklista innan commit

- [ ] Breadcrumb/nav pekar rätt (`../index.html` vs `../../index.html`)
- [ ] GitHub-hörnan finns på sidan
- [ ] Nya sidor är länkade från sin föräldra-TOC
- [ ] Nav i rot-`index.html` är uppdaterad om ny sektion lagts till
- [ ] Harvard-citat: parentesen länkad vid *första* omnämnande
- [ ] Humanizer-kontrollen körd på ny löptext
- [ ] Inmatningsfält (om sådana finns) har gul bakgrund (`background: #ffffc0`)
