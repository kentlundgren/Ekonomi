---
name: kent-linkedin-feedback
description: >
  Hjälper Kent att ge kvalificerad feedback, kommentarer och svar på LinkedIn-inlägg om
  ekonomi (ekonomistyrning, redovisning, avskrivningar, investeringar, kommunal ekonomi)
  och generativ AI. Aktivera när Kent delar en LinkedIn-länk (lnkd.in eller linkedin.com),
  skriver "svara på det här inlägget", "kommentera", "ge feedback på" eller ber om
  underlag inför en kommentar. Bygger på kunskapsbasen i ekonomistyrning/kunskap/ och
  avslutar alltid med ett LinkedIn-block: inlägget, vem som skrev det och vilket repo
  Kent arbetar i. Kompletterar kontoskillen kent-respons, som inte kan läsas från Claude Code.
metadata:
  type: process
---

# Feedback på LinkedIn-inlägg: ekonomi och generativ AI (version 1.0, 2026-11-13)

Versionsnumret står i rubriken och höjs vid varje ändring. Den här filen är den fullständiga versionen. En tunn pekare finns i `C:\Users\kentl\.claude\skills\kent-linkedin-feedback\SKILL.md`. Skillen synkas inte till Cowork eller kontot (claude.ai).

**Fullständig sökväg:** `C:\Users\kentl\OneDrive\AI\Claude\Ekonomi\.claude\skills\kent-linkedin-feedback\SKILL.md`
**Logg över inlägg:** [LOGG.md](LOGG.md) i samma mapp.
**Kunskapsbas:** `C:\Users\kentl\OneDrive\AI\Claude\Ekonomi\ekonomistyrning\kunskap\` ([README.md](../../../ekonomistyrning/kunskap/README.md) är index).

## Samspel med andra skills

- `kent-respons` (kontonivå, finns på claude.ai/Cowork) hanterar feedback på andras inlägg. Den kan inte läsas från Claude Code. Har Kent den, be honom klistra in den så att de två kan jämföras, och gör inget som motsäger den.
- `humanizer_ton` (och `humanizer.md`): kör på varje utkast till kommentar.
- `kent-referens-skill`: källor anges i Harvardform med verifierade länkar.
- `kent-meta-regler-for-code`: regel 3 (inga fabricerade fakta), regel 8 (svenska som standard, engelska om Kent ber om det eller inlägget är på engelska), regel 13 (skriv aldrig in en handling i Kents röst som Kent inte gjort), regel 15 (samma ämne i flera medier).

## Arbetsgång

1. **Läs inlägget.** Följ kortlänken med `curl -sIL` och läs den publika sidans metadata (`og:description`). Kan inlägget inte läsas (inloggning, tomt): säg det, visa felet och fråga hur vi går vidare. Gissa aldrig innehållet.
2. **Notera vem som är vem.** Fyra led: *kontot som postade*, *artikelns författare* (om inlägget länkar till en artikel), *de som citeras* och *inläggsdatum*. Språk och ämne (ekonomi, generativ AI eller båda).
3. **Läs underlaget.** Länkar inlägget till en artikel: försök läsa den. Kräver den inloggning: be Kent klistra in text eller bild. Logga inte in åt Kent.
4. **Slå upp i kunskapsbasen** och fyll på den med verifierade källor när något saknas (en fil per begrepp, se index). Märk vad som inte är verifierat.
5. **Skilj fakta, åsikt och fråga.** Vad påstår inlägget som fakta? Vad är författarens tolkning? Vad är oklart?
6. **Föreslå tre varianter av kommentar**, högst 3 till 6 meningar var: (a) ett tillägg som ger läsaren något nytt, (b) en genomtänkt fråga, (c) en invändning eller nyansering. Kent väljer. Skriv ingen egen erfarenhet i Kents namn som Kent inte har gett (regel 13).
7. **Verifiera siffror och citat** mot källan innan de används. Citera sparsamt.
8. **Avsluta med LinkedIn-blocket** (se nedan). Logga inlägget i [LOGG.md](LOGG.md).

## Vad en bra kommentar gör

Det här är arbetsregler, inte fakta om LinkedIn:

- Den tillför något: en källa, en distinktion, en fråga eller ett motexempel. Inte bara instämmande.
- Den hänvisar till det inlägget faktiskt säger och skriver inte om författarens avsikt.
- Den är kort, konkret och utan berömsord (se `humanizer.md`).
- Den nämner Kents roll bara när den är relevant och sann. Tjänsten på Simrishamns kommun och Poolia används inte i kommentarer på eget initiativ.
- Den är artig mot personerna och saklig mot argumenten.

## Kontrollfrågor för ekonomiinlägg

- Skiljer inlägget mellan **kostnad, utgift och utbetalning**? Avskrivning är en kostnad utan utbetalning.
- Är det en **redovisningsfråga** (när kostnaden syns) eller en **finansieringsfråga** (var pengarna kommer ifrån)?
- Är det ett **tidsproblem** (intäkter senare) eller ett **bestående gap** (inga intäkter)? Se `ekonomistyrning/kunskap/balanskravet.md` och `investering.md`.
- Nominellt eller reellt? Vilken period gäller siffrorna?
- Vilken källa bär siffran, och är det lag, rekommendation, myndighetsuppgift eller tidningens egen beräkning?

## Kontrollfrågor för inlägg om generativ AI

- Vilken modell och version, och när testades den? Modeller förändras snabbt.
- Är påståendet **testat** (och hur) eller **hävdat**? Finns en mätning, ett exempel eller en källa?
- Vad hände med data och sekretess? Vilka uppgifter skickades till tjänsten?
- Är det en demonstration eller något som fungerar i daglig drift?
- Vad är hype och vad är belagt? Be om det som skulle kunna upprepas av någon annan.

## Slutblock: LinkedIn-inlägget, vem som skrev det och repot

Ett svar som hör till ett LinkedIn-inlägg avslutas alltid med blocket nedan. Det står sist, efter allt annat, så att Kent hittar tillbaka till inlägget och personen utan att leta. Blocket ska också finnas i korta svar som rör samma inlägg.

```
---
**LinkedIn-inlägg att svara på:** <länken Kent gav, i klartext>
- Inlägget skrevs av: <konto eller person> (<organisation eller roll>)
- Artikel av: <författare>, <publikation, nr, sida> (om inlägget länkar till en artikel)
- Citerade: <namn och roll> (om några)
- Ren adress (utan spårning): <canonical URL> (om känd)

**Du arbetar i repot:** `<repo>`
- GitHub: <https://github.com/kentlundgren/<repo>>
- Lokalt: `<sökväg till repots rot>`
```

Regler för blocket:

- **Länken är den Kent gav,** oförändrad. Lägg inte till spårningsparametrar (`utm_*`, `rcm`) och skriv inte ut dem. Finns en ren adress får den stå som komplement.
- **"Skrevs av" är den som postade inlägget** på LinkedIn. Är det en organisation, ange organisationens namn och, om det går att belägga, vem som står bakom. Gissa inget. Länka inte till personers profiler Claude inte har hittat och verifierat.
- **Repot** tas ur `git remote -v` och repots rot (`git rev-parse --show-toplevel`), inte ur minnet. Visar remote ett annat namn än den lokala mappen: flagga det (regel 12 i `kent-meta-regler-for-code`). Finns inget repo: skriv det, och ange arbetsmappen.
- Flera inlägg i samma samtal: ett block per inlägg.

## Logg

Efter varje inlägg läggs en rad i [LOGG.md](LOGG.md): datum, länk, vem som skrev det, ämne och vilka kunskapsfiler som berördes. Logglinjen säger vad som gjordes, inte vad som varit fel.

## Uppdateringslogg

- 2026-11-13 (v1.0): skapad. Arbetsgång, kontrollfrågor för ekonomi och generativ AI, och slutblock med inlägg, avsändare och repo.
