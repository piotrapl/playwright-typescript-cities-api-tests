import { test, expect } from "@playwright/test";
import { municipalitiesByNameCases } from "../data/municipalitiesByName.cases";

type ApiResponse = {
  success?: boolean;
  data?: unknown;
  [k: string]: unknown;
};

function assertApiContract(body: ApiResponse) {
  // Assertion 1: success === true
  expect(body).toHaveProperty("success", true);

  // Assertion 2: data exists and is non-empty
  expect(body).toHaveProperty("data");
  const data = body.data;

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