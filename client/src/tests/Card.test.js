import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "../components/Card";
import DetailContext from "../context/DetailContext";

const item = {
  id: "1",
  title: "Test item 1",
  category: ["Test category 1"],
  price: {
    currency: "ARS",
    amount: 1000,
    decimals: 99,
  },
  picture: "test.jpg",
  condition: "new",
  free_shipping: true,
  sold_quantity: 10,
  description: "Test description item"
};

describe("Card", () => {
  render(
    <MemoryRouter>
      <DetailContext.Provider value={{ item }}>
        <Card />
      </DetailContext.Provider>
    </MemoryRouter>
  );

  it("render item data", () => {
    expect(screen.getByAltText(item.title)).toBeInTheDocument();
    expect(screen.getByText("Nuevo")).toBeInTheDocument();
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(`- ${item.sold_quantity} vendidos`)).toBeInTheDocument();
    expect(screen.getByText("$ 1.000")).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
  });
});
