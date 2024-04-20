import { expect } from "@jest/globals";

import { formatCurrency } from "../helpers/currency";

describe("currency", () => {
  it("currency accepted", () => {
    const expected = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0
    }).format(1000);

    expect(formatCurrency(1000, "ARS")).toBe(expected);
  });

  it("currency not supported", () => {
    const expected = new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0
    }).format(1000);

    expect(formatCurrency(1000, "COP")).toBe(expected);
  });
});
