# Ekonomi

Kent Lundgrens redovisningsreflektioner – analyser kring redovisning, BAS-kontoplan
och revision av ideella föreningar.

Kent arbetar 50 % som ekonom/controller (via Poolia) vid Kultur och Fritidsförvaltningen,
Simrishamns kommun, och ägnar övriga vardagstimmar åt generativ AI och egna projekt.
Det här är ett av dem.

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
├── ekonomistyrning/
│   └── index.html                    # Platshållare – under uppbyggnad
│
├── skills/
│   ├── humanizer_ton/
│   │   └── SKILL.md                  # Procedur: skriv mänsklig text
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

### `index.html`
Projektets rotsida med dropdown-navigering. Listar sektionerna Redovisning och
ekonomistyrning som klickbara kort.

### `rattgit.html`
Dokumenterar det nested repo-problem som uppstod 2026-06-08 och hur det löstes.
Förklarar varför Cursor visade fel git-repo och de två åtgärder som gjordes.

### `redovisning/BAS/BAS2026.html`
Utgångspunkten för BAS-avsnittet: tackar Peter Berg för hans artikel om BAS-nyheter
2026 och presenterar reflektionerna. Innehåller fullständig källförteckning.

### `redovisning/BAS/analys.html`
Djupgående analys i jag-form. Besvarar fyra frågor: skillnad privat BAS vs Kommun-BAS,
vad BAS 2026 innebär för controllers i kommunala bolag (analys av andras situation),
vad som är relevant för lekmannarevision av Kalmar Nation, samt varför löner placeras
i kontogrupp 5 (Kommun-BAS) respektive klass 7 (privat BAS).

### `redovisning/BAS/generell_revision.html`
Guide om hur BAS 2026-ändringarna påverkar en generell revision av ideella föreningar.
Checklista och konkreta granskningspunkter för lekmannarevisorer.

### `redovisning/revision/index.html`
Om lekmannarevision i ideella föreningar. Länk till generell revisionsguide samt
diskret information om att Kent tar revisionsuppdrag på arvodesbasis.

### `skills/`
Tre AI-skills (procedurdokument för Claude):
- `humanizer_ton` – regler för mänsklig, analytisk skrivstil
- `projekt_struktur` – detta projekts nav, CSS och konventioner
- `webb_struktur` – generellt återanvändbart skill för hierarkiska webbplatser

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
