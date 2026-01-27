## Testy serwisu RESTful API dla polskich jednostek samorządu terytorialnego

Ten projekt prezentuje lekki, ale profesjonalny setup do automatycznych testów API oparty o Playwright + TypeScript.

## Tech stack

Playwright Test – testy API (bez UI)

TypeScript – typowanie i czytelność

Node.js / npm

HTML Report (Playwright)

## Dobre praktyki

testy data-driven

zasada DRY /don'repeat yourself/

separacja danych testowych od logiki testów

czytelne asercje kontraktu API

raportowanie wyników testów

gotowe pod CI/CD

## Struktura projektu
pwrt.ts.API_miasta/
├─ package.json
├─ playwright.config.ts
├─ tests/
│  ├─ data/
│  │  └─ municipalitiesByName.cases.ts
│  └─ api/
│     └─ municipalitiesByName.spec.ts
├─ playwright-report/   (generowany automatycznie)
└─ README.md

## Co robi ten projekt?

Projekt automatycznie testuje endpoint REST API:

GET /api/v1/municipalities/name/{name}

# Testy:

wyszukują dane o miastach po nazwie (Lodz, Lublin)

weryfikują poprawność odpowiedzi API

# Asercje

success === true

pole data istnieje i nie jest puste

## Wymagania wstępne

Node.js 18+

npm

Dostęp do internetu (API zewnętrzne)

## Jak uruchomić projekt?
1. Instalacja zależności
npm install

2. Uruchomienie testów
npm test

3. Raport HTML

Po wykonaniu testów raport znajduje się w:

playwright-report/index.html

Można go otworzyć komendą:

npm run test:report

## Dlaczego TypeScript, a nie JavaScript?

- Mniej błędów – typy wychwytują problemy już na etapie pisania kodu.

- Lepsze wsparcie IDE – podpowiedzi, refaktoryzacja i czytelniejszy kod testów.

- Czytelne kontrakty API – typy jasno opisują dane request/response.

- Naturalny wybór dla Playwrighta – pełne wsparcie i typowanie „out of the box”.