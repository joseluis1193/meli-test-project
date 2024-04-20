const request = require("supertest");
const axios = require("axios");

const {
  SEARCH_WITH_CATEGORIES,
  SEARCH_WITHOUT_CATEGORIES,
  SEARCH_WITHOUT_SELLER,
  CITY_DATA,
  SELLER_DATA,
  ITEM_DATA
} = require("../mock/constants");

const app = require("../index");

jest.mock("axios");

describe("GET /api/items", () => {
  afterEach(() => {
    axios.get.mockRestore();
  });

  it("correct response", async () => {
    axios.get.mockResolvedValueOnce(SEARCH_WITH_CATEGORIES);

    axios.get.mockResolvedValueOnce(CITY_DATA);

    const response = await request(app)
      .get("/api/items")
      .query({ query: "test" });

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.categories.length).toBeGreaterThan(0);
  });

  it("response without categories", async () => {
    axios.get.mockResolvedValueOnce(SEARCH_WITHOUT_CATEGORIES);

    axios.get.mockResolvedValueOnce(SELLER_DATA);

    axios.get.mockResolvedValueOnce(CITY_DATA);

    const response = await request(app)
      .get("/api/items")
      .query({ query: "test" });

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.categories.length).toBe(1);
  });

  it("response without seller data", async () => {
    axios.get.mockResolvedValueOnce(SEARCH_WITHOUT_SELLER);

    axios.get.mockResolvedValueOnce(SELLER_DATA);

    axios.get.mockResolvedValueOnce(CITY_DATA);

    const response = await request(app)
      .get("/api/items")
      .query({ query: "test" });

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.categories.length).toBeGreaterThan(0);
    expect(response.body.items[0].seller_address).toBe(null);
  });
});

describe("GET /api/items/:id", () => {
  it("correct response", async () => {
    axios.get
      .mockResolvedValueOnce(ITEM_DATA)
      .mockResolvedValueOnce({ data: { plain_text: "Product description" } })
      .mockResolvedValueOnce({ data: { name: "Category 1" } });

    const response = await request(app)
      .get("/api/items/1");

    expect(response.status).toBe(200);
  });
});
