// defineConfig to funkcja do definiowania konfiguracji testów

// Tu zachodzi typowanie kontekstowe ('contextual typing')
// funkcja defineConfig() nie jest jawnie typowana,
// ale podlega typowaniu bo już obiekt konfiguracyjny 
// przekazany do niej jest sprawdzany pod kątem typów
// dzięki czemu mamy podpowiedzi typów pól (testDir itd.) definiowanych poniżej

  import { defineConfig } from "@playwright/test";

  export default defineConfig({
    testDir: "./tests",
    timeout: 30_000,
    expect: { timeout: 10_000 },

    // wbudowany generator raportów
    // definiowana jest tablica - można dodać więcej niż jeden raport 
    reporter: [
      ["list"],
      ["html", { open: "never", outputFolder: "playwright-report" }]
    ],
    // sekcja globalnych ustawień dla testów
    // extraHTTPHeaders - nagłówki HTTP dodawane do każdego żądania
    use: {
      baseURL: "https://local-gov-units.polandapi.com",
      ignoreHTTPSErrors: true,
      extraHTTPHeaders: {
        Accept: "application/json"
      }
    }
  });