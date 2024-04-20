import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import Header from "../components/Header";
import SearchContext from "../context/SearchContext";

const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

describe("Header", () => {
  it("render logo and search input", () => {
    const setSearch = jest.fn();

    render(
      <MemoryRouter>
        <SearchContext.Provider value={{ setSearch }}>
          <Header />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nunca dejes de buscar")).toBeInTheDocument();
  });

  it("update search input value", () => {
    const setSearch = jest.fn();

    render(
      <MemoryRouter>
        <SearchContext.Provider value={{ setSearch }}>
          <Header />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  it("search and navigate form submitted", async () => {
    const setSearch = jest.fn();

    render(
      <MemoryRouter>
        <SearchContext.Provider value={{ setSearch }}>
          <Header />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    const button = screen.getByRole("button", { type: "submit" });

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.submit(button);

    expect(setSearch).toHaveBeenCalledWith("test");
    expect(mockedNavigator).toHaveBeenCalledTimes(1);
  });

  it("behavior in navigation when input is empty", () => {
    const setSearch = jest.fn();

    render(
      <MemoryRouter>
        <SearchContext.Provider value={{ setSearch }}>
          <Header />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    const button = screen.getByAltText("icon-search");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(button);

    expect(input.value).toBe("");
    expect(mockedNavigator).not.toHaveBeenCalled();
  });
});
