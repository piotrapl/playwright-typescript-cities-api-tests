### Testy serwisu RESTful API dla polskich jednostek samorządu terytorialnego

Projekt prezentuje lekki, ale profesjonalny projekt do automatycznych testów API oparty o Playwright + TypeScript.

# English abstract:
_Projekt prezentuje lekki, a jednocześnie profesjonalny projekt do automatycznych testów API, oparty na Playwright + TypeScript._
## Tech stack

- Playwright Test – testy API (bez UI)

- TypeScript – typowanie i czytelność

- Node.js / npm

- HTML Report (Playwright)

## Dobre praktyki (Good practice)

- testy data-driven

- zasada DRY /don'repeat yourself/

- separacja danych testowych od logiki testów

- czytelne asercje kontraktu API

- raportowanie wyników testów

- gotowe pod CI/CD

## Co robi ten projekt? (Purpose of the project)

- Projekt automatycznie testuje endpoint REST API:

GET /api/v1/municipalities/name/{name}

## Testy (Tests)

- wyszukują dane o miastach po nazwie (Lodz, Lublin)

- weryfikują poprawność odpowiedzi API

## Asercje (Assertions)

- body zawiera pole "success", o wartości: true

- pole data istnieje i nie jest puste

## Wymagania wstępne (Requirements)

- Node.js 18+

- npm

## Jak uruchomić projekt?
1. Instalacja zależności
npm install

2. Uruchomienie testów
npm test

3. Raport HTML

- Po wykonaniu testów raport znajduje się w:

playwright-report/index.html

- Można go otworzyć komendą:

npm run test:report

## Dlaczego TypeScript, a nie JavaScript?

- Mniej błędów – typy wychwytują problemy już na etapie pisania kodu.

- Lepsze wsparcie IDE – podpowiedzi, refaktoryzacja i czytelniejszy kod testów.

- Czytelne kontrakty API – typy jasno opisują dane request/response.

- Naturalny wybór dla Playwrighta – pełne wsparcie i typowanie „out of the box”.