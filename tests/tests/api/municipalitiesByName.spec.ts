// tests/tests/api/municipalitiesByName.spec.ts
// importujemy niezbędne moduły z Playwright Test
// czyli: test i expect
// plus municipalitiesByNameCases z pliku z danymi testowymi

import { test, expect } from "@playwright/test";
import { municipalitiesByNameCases } from "../data/municipalitiesByName.cases";

// typ dla response API
type ApiResponse = {
  success?: boolean;
  data?: unknown;
  [k: string]: unknown;
};

// funkcje asercji dla kontraktu API
function assertApiContract(body: ApiResponse) {
  // Asercja 1: success === true
  expect(body).toHaveProperty("success", true);

  // Asercja 2: pole data istnieje i nie jest puste
  expect(body).toHaveProperty("data");
  const data = body.data;

// W pętli sprawdzamy różne możliwe typy danych w polu data
  if (Array.isArray(data)) {
    expect(data.length).toBeGreaterThan(0);
  } else if (data && typeof data === "object") {
    expect(Object.keys(data as Record<string, unknown>).length).toBeGreaterThan(0);
  } else {
    // If API returns a scalar here, treat as empty/invalid for this requirement
    expect(data).not.toBeNull();
    expect(data).not.toBeUndefined();
    expect(String(data).trim().length).toBeGreaterThan(0);
  }
}

// w pętli definiujemy testy dla każdego przypadku z municipalitiesByNameCases

test.describe("GET /api/v1/municipalities/name/{name}", () => {
  for (const tc of municipalitiesByNameCases) {
    test(`find municipality by name: ${tc.name}`, async ({ request, baseURL }) => {
      const url = `${baseURL}/api/v1/municipalities/name/${encodeURIComponent(tc.name)}`;

      const res = await request.get(url);
      expect(res.ok(), `HTTP status: ${res.status()}`).toBeTruthy();

      const body = (await res.json()) as ApiResponse;
      assertApiContract(body);
    });
  }
});