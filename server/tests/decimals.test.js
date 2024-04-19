const { getDecimals, removeDecimals } = require("../helpers/decimals");

describe("getDecimals", () => {
  it("return two decimals", () => {
    expect(getDecimals(10.25)).toBe("25");
    expect(getDecimals(20.50)).toBe("50");
    expect(getDecimals(30.7)).toBe("70");
  });

  it("return zeros if no has decimals", () => {
    expect(getDecimals(10)).toBe("00");
    expect(getDecimals(25)).toBe("00");
    expect(getDecimals(30.0)).toBe("00");
  });
});

describe("removeDecimals", () => {
  it("remove decimals from number", () => {
    expect(removeDecimals(10.25)).toBe(10);
    expect(removeDecimals(20.50)).toBe(20);
    expect(removeDecimals(30.7)).toBe(30);
  });

  it("return the integer of number if no has decimals", () => {
    expect(removeDecimals(10)).toBe(10);
    expect(removeDecimals(20)).toBe(20);
    expect(removeDecimals(30.0)).toBe(30);
  });
});
