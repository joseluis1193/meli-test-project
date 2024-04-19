import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Breadcrumb from "../components/Breadcrumb";

describe("Breadcrumb", () => {
  it("render categories", () => {
    const categories = ["test category 1", "test category 2", "test category 3"];

    render(<Breadcrumb categories={categories} />);

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});