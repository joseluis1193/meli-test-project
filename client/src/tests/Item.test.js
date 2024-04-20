import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Item from "../components/Item";
import SearchContext from "../context/SearchContext";

const searchResults = {
  author: {
    name: "Test name",
    lastname: "Test lastname"
  },
  categories: ["Test category 1", "Test category 2"],
  items: [
    {
      id: "1",
      title: "Test item 1",
      price: {
        currency: "ARS",
        amount: 1000,
        decimals: 99,
      },
      picture: "test.jpg",
      condition: "new",
      free_shipping: true,
      seller_address: "Test address"
    },
  ],
};

describe("Item", () => {
  it("render results data", () => {
    render(
      <MemoryRouter>
        <SearchContext.Provider value={{ searchResults }}>
          <Item />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Test item 1 Igual a Nuevo")).toBeInTheDocument();
    expect(screen.getByText("$ 1.000")).toBeInTheDocument();
    expect(screen.getByAltText("Test item 1")).toBeInTheDocument();
    expect(screen.getByAltText("icon-free-shipping")).toBeInTheDocument();
    expect(screen.getByText("Test address")).toBeInTheDocument();
  });
});
