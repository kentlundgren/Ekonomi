# CLAUDE.md – Ekonomi-projektet

**Mapp:** `C:\Users\kentl\OneDrive\AI\Claude\Ekonomi`
**Senast uppdaterad:** 2026-06-08

---

## 📌 Viktig regel – Commit och push gör Kent själv

**Kent commitar och pushar normalt själv** – via Cursors GUI eller terminalen.

Det är ett medvetet val: Kent vill känna och förstå processen när filer
uppdateras och förs över till GitHub. Det ger kunskap och kontroll.

Claudes roll:
- Göra ändringar i filer när Kent ber om det
- Påminna när en commit bör göras (t.ex. efter att filer uppdaterats)
- Föreslå ett färdigt commit-meddelande att kopiera rakt av
- Committa och pusha **endast om Kent uttryckligen ber om det**

**Kent commitar via Cursors Source Control-panel (GUI) eller via terminalen.**

Via GUI (efter att `.vscode/settings.json` är på plats):
1. Klicka på Source Control-ikonen i vänster sidopanel (Ctrl+Shift+G)
2. Skriv commit-meddelandet i textrutan överst
3. Klicka "✓ Commit" – sedan "Sync Changes" (eller "Push")

Via terminalen (om GUI:t krånglar):
```powershell
cd "C:\Users\kentl\OneDrive\AI\Claude\Ekonomi"
git add .
git commit -m "Kort beskrivning av vad som ändrades"
git push
```

---

## ✅ Löst: Cursor visar nu rätt repo i Source Control

### Hur det är löst (två åtgärder gjorda 2026-06-08)

**Åtgärd 1 – `.vscode/settings.json`** (inne i Ekonomi-mappen):
```json
{
  "git.ignoredRepositories": [
    "C:\\Users\\kentl\\OneDrive\\AI\\Claude"
  ]
}
```
Den inställningen säger åt Cursor: *"När du arbetar i Ekonomi-workspacet –
ignorera föräldramappens git-repo helt."*

**Åtgärd 2 – föräldramappens `.gitignore`**
`Ekonomi/` är tillagd i `C:\Users\kentl\OneDrive\AI\Claude\.gitignore` så att
föräldra-repot slutar spåra filer i Ekonomi-mappen.

**Effekt:** Source Control-panelen i Cursor visar *enbart* Ekonomi-repots
ändringar. Knappen "✓ Commit" och "Push" i GUI:t arbetar mot
`github.com/kentlundgren/Ekonomi` – precis som det ska vara.

### Om det ändå skulle visa fel (backup-check)

Starta om Cursor, eller kontrollera via terminalen:
```powershell
cd "C:\Users\kentl\OneDrive\AI\Claude\Ekonomi"
git remote -v
```
Rätt svar:
```
origin  https://github.com/kentlundgren/Ekonomi.git (fetch)
origin  https://github.com/kentlundgren/Ekonomi.git (push)
```

### Har föräldra-repot (`AI\Claude`) någon nytta?

Föräldra-repot (`AI\Claude` → remote: `Ovrigt`) spårar de övriga projekten:
`ArbetenSokta`, `ClaudeCowork` och `Ovrigt`. Det är användbart för dem.
**Ekonomi ska däremot inte spåras där** – det har ett eget dedikerat
GitHub-repo och sköter sig helt självständigt.

---

## Kents bakgrund och roller

Dessa utgångspunkter ska Claude känna till och ha som underlag när text skrivs
eller granskas inom projektet.

**Yrkesroll (betald tjänst, 50 %):**
Kent Lundgren arbetar som ekonom/controller på konsultbasis (via **Poolia**) vid
**Kultur och Fritidsförvaltningen, Simrishamns kommun** – på 50 % av heltid.
- Simrishamns kommun är en *kommunal myndighet* och tillämpar **Kommun-BAS** och
  lagen om kommunal bokföring och redovisning (LKR)
- **Privat BAS gäller inte** för Kents dagliga arbete i kommunen
- BAS 2026:s 272 ändringar (K2/K3-drivna) berör inte hans yrkesroll direkt
- Det är Poolia som är formell arbetsgivare; Kent är uthyrd konsult till kommunen

**Generativ AI (övriga 50 % av vardagarna):**
Den tid som inte går till konsultuppdraget ägnar Kent åt att testa, lära och
bygga med generativ AI – bl.a. detta Ekonomi-projekt.
- AI-arbetet är *inte* kopplat till konsultuppdraget och sker på eget initiativ
- Lärandet är gradvist: vad Kent bygger på fritiden ger insikter som smittar
  av sig på jobbet – han ser alltmer poäng med AI även i kommunal verksamhet
- Projekten här (Ekonomi, detta webb-arbete) är alltså *fritidsprojekt*, inte
  uppdrag från Simrishamns kommun eller Poolia

**Ideell revision (fritidsuppdrag):**
Kent är **lekmannarevisor** i ideella föreningar, bl.a. Kalmar Nation.
- Ideella föreningar som Kalmar Nation använder ofta **privat BAS** i sin bokföring
  (t.ex. via Fortnox)
- Privat BAS-ändringar, t.ex. borttagandet av konto 6410, är därför relevanta
  för hans revisionsuppdrag

**LinkedIn:** https://www.linkedin.com/in/kentlundgren/

**Viktigt – tre begrepp att hålla isär:**

| Begrepp | Vad det är | Kents koppling |
|---------|-----------|----------------|
| **Kommunal förvaltning** | Kommunen som myndighet, t.ex. en förvaltning | ✅ Här arbetar Kent 50 % (Kultur och Fritids­förvaltningen) |
| **Kommunalt bolag** | Aktiebolag *ägt* av kommunen, t.ex. VA-bolag | ❌ Kent jobbar inte här |
| **Ideell förening** | T.ex. Kalmar Nation | ✅ Här är Kent lekmannarevisor |
| **AI-fritidsprojekt** | Eget lärande och byggande med generativ AI | ✅ Kents övriga 50 % av vardagarna |

**Praktisk konsekvens för Claude:**
- Kent arbetar i *kommunal förvaltning* – inte i kommunala bolag
- "Jag som controller i ett kommunalt bolag" är alltid fel om det avser Kent
- BAS-analys i jag-form gäller hans *revisionsroll*, inte hans dagliga tjänst
- Skriver Claude om kommunal redovisning i Kents dagliga arbete → Kommun-BAS och LKR gäller
- AI-projekten (t.ex. detta) är *fritidsprojekt* – inte beställda av kommunen eller Poolia

---

## Projektöversikt

| Fil | Beskrivning |
|-----|-------------|
| `index.html` | Rot-omdirigering → redovisning/BAS/index.html |
| `redovisning/BAS/index.html` | Startsida – tack till Peter Berg + länk till analys |
| `redovisning/BAS/analys.html` | BAS 2026-analys, skriven i jag-form |
| `README.md` | Projektdokumentation inkl. nested repo-analys |
| `.gitignore` | Ignorerar node_modules, dist, .env m.m. |

### GitHub Pages (live-sidor)

| Sida | URL |
|------|-----|
| Startsidan | https://kentlundgren.github.io/Ekonomi/ |
| BAS-analysen | https://kentlundgren.github.io/Ekonomi/redovisning/BAS/analys.html |

Sidorna uppdateras automatiskt inom ~1 minut efter varje push.
För att aktivera Pages: [github.com/kentlundgren/Ekonomi/settings/pages](https://github.com/kentlundgren/Ekonomi/settings/pages)

---

## Kodprinciper för detta projekt

- HTML-filer är fristående (ingen build-steg) – öppnas direkt i webbläsare
- Skriv i **jag-form** (första person) – analysen är Kents egna reflektioner
- Indatafält ska ha **gul bakgrund** för tydlighet
- Kommentera viktiga funktioner och uppdateringar i koden
- Vid uppdatering av befintlig fil: fråga om ny version ska skapas (`_verX`)
  eller om befintlig fil ska uppdateras

### Skills – aktivera vid behov

| Situation | Skill |
|-----------|-------|
| Skriva, granska eller redigera löpande text | [`skills/humanizer_ton/SKILL.md`](skills/humanizer_ton/SKILL.md) |
| Skapa ny sida, sektion, nav eller CSS-tema | [`skills/projekt_struktur/SKILL.md`](skills/projekt_struktur/SKILL.md) |
| Starta ett helt nytt projekt med samma struktur | [`skills/webb_struktur/SKILL.md`](skills/webb_struktur/SKILL.md) |

---

### Skriv mänskligt – följ humanizer.md och humanizer_skill.md

All löpande text ska följa reglerna i [`humanizer.md`](humanizer.md).
När text skrivs eller granskas: följ proceduren i [`skills/humanizer_ton/SKILL.md`](skills/humanizer_ton/SKILL.md).
Kortversion av de viktigaste:

- Inga tankestrecket (–) som satsavgränsare – använd punkt eller komma
- Inga uppblåsta ord: *understryker*, *belyser*, *säkerställa*, *möjliggöra*
- Inga förstärkningsord om andras arbete: *utmärkt*, *exemplarisk*, *generös*, *lättillgänglig*
  → Beskriv vad personen faktiskt gjorde, inte hur bra det var
- Inga generiska avslutningar ("framtiden ser ljus ut")
- Variera meningslängd – blanda korta och långa
- Var specifik: datum, kontonummer, namn – inte "nyligen" eller "en aktör"
- Jag-form är rätt i detta projekt – använd den
- Kör "rytmpasset", "specificeringspasset" och "åsiktspasset" på färdig text

### GitHub-corner-länk på alla HTML-sidor

Varje HTML-fil ska ha en diskret `{ } GitHub`-länk fixerad i nedre vänstra hörnet.
Den pekar alltid mot `https://github.com/kentlundgren/Ekonomi`.

CSS att lägga i `<style>`:
```css
.github-corner {
  position: fixed; bottom: 14px; left: 14px;
  font-family: "Courier New", monospace; font-size: 0.78em;
  color: #aaa; text-decoration: none; opacity: 0.55;
  transition: opacity 0.2s, color 0.2s; z-index: 999;
}
.github-corner:hover { opacity: 1; color: #1a3a5c; }
```
HTML precis före `</body>`:
```html
<a class="github-corner" href="https://github.com/kentlundgren/Ekonomi" target="_blank">{ } GitHub</a>
```

### Gemensam navigationsrad – site-nav

Alla HTML-filer ska ha en gemensam navigationsrad längst upp (före sidans
`<header>`). Den visar projektnamnet och länkar till alla sidor i projektet.
Aktuell sida markeras med `class="active"`.

Lägg till CSS i `<style>` och HTML direkt efter `<body>`. Se befintliga
filer som mall. När en ny HTML-fil skapas: lägg till nav-länken i
**alla** befintliga filer också.

### Källhänvisningar i löpande text – klickbarhetsprincip

När en källa anges i löpande text (in-text citation) ska den vara **klickbar
första gången** den förekommer i texten. Därefter räcker det att källan finns
i referenslistan längst ner.

**Om källan anges med Harvardformat `(Namn, år)`:**
```html
<!-- Första gången – gör (Namn, år)-parentesen klickbar -->
(<a href="https://källans-url" target="_blank">Berg, 2026a</a>)

<!-- Efterföljande gånger – vanlig text, ingen länk -->
(Berg, 2026a)
```

> ⚠️ **Länka ALDRIG författarnamnet i löptexten** – t.ex. `<a href="...">Peter Berg</a>`.
> Det följer inte Harvardformatet. Länken ska alltid ligga på `(Berg, 2026a)`-citatet,
> inte på personnamnet. Fetstil på författarnamn används inte heller.

**Om samma författare har flera källor samma år – använd a/b-suffix:**
```
En och samma källförteckning kan aldrig ha två poster med identisk (Namn, år).
Lägg till a, b, c ... i kronologisk ordning:
  Berg, P. (2026a) – artikel
  Berg, P. (2026b) – LinkedIn-inlägg
Suffixen ska vara konsekventa i löptext, källparagraf och källförteckning.
```

**Om källan anges med titeln i löptext:**
```html
<!-- Första gången – gör titeln klickbar -->
<a href="https://källans-url" target="_blank">BAS – Nyheter 2026</a>

<!-- Efterföljande gånger – vanlig text eller kursiv -->
<em>BAS – Nyheter 2026</em>
```

Länken ska öppnas i ny flik (`target="_blank"`).
Regeln gäller per HTML-fil – varje fil räknas för sig.

---

## Git-hantering – påminnelse

När Claude har gjort ändringar som bör committas, föreslå:

```powershell
cd "C:\Users\kentl\OneDrive\AI\Claude\Ekonomi"
git add .
git commit -m "[beskrivning av ändringarna]"
git push
```

Claude commitar **aldrig** utan att Kent uttryckligen ber om det.
