import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 10_000 },

  // Built-in report generation
  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "playwright-report" }]
  ],

  use: {
    baseURL: "https://local-gov-units.polandapi.com",
    extraHTTPHeaders: {
      Accept: "application/json"
    }
  }
});