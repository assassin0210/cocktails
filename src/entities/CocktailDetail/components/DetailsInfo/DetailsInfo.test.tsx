import { render, screen } from "@testing-library/react";
import { DetailsInfo } from "./DetailsInfo";
import { TCocktailsSelector } from "../../../../store/slices/coctails/coctails.selectors.ts";
import "@testing-library/jest-dom";

const mockData: TCocktailsSelector = {
  ingredients: ["Tequila", "Triple sec", "Lime juice", "Salt"],
  strInstructions:
    "Rub the rim of the glass with the lime slice to make the salt stick to it.",
  strDrink: "Margarita",
  strGlass: "Cocktail glass",
  measures: ["1 1/2 oz ", "1/2 oz ", "1 oz ", ""],
  strCategory: "Ordinary Drink",
  strAlcoholic: "Alcoholic",
  strDrinkThumb: "",
};

describe("DetailsInfo", () => {
  it("renders the drink name, category, and alcoholic type", () => {
    render(<DetailsInfo {...mockData} />);

    expect(screen.getByText(mockData.strDrink)).toBeInTheDocument();
    expect(screen.getByText(mockData.strCategory)).toBeInTheDocument();
    expect(screen.getByText(mockData.strAlcoholic)).toBeInTheDocument();
  });

  it("renders the glass type", () => {
    render(<DetailsInfo {...mockData} />);

    expect(screen.getByText(mockData.strGlass)).toBeInTheDocument();
  });

  it("renders the instructions if they are present", () => {
    render(<DetailsInfo {...mockData} />);

    expect(screen.getByText("Instructions")).toBeInTheDocument();
    expect(screen.getByText(mockData.strInstructions)).toBeInTheDocument();
  });

  it("renders the list of ingredients and measures if they are present", () => {
    render(<DetailsInfo {...mockData} />);

    expect(screen.getByText("List of ingredients:")).toBeInTheDocument();
    mockData.ingredients.forEach((ingredient) => {
      expect(
        screen.getByText(
          (content, element) =>
            content === ingredient && element?.tagName.toLowerCase() === "p",
        ),
      ).toBeInTheDocument();
    });
    mockData.measures.forEach((measure) => {
      if (measure) {
        expect(
          screen.getByText(
            (content, element) =>
              content.trim() === measure.trim() &&
              element?.tagName.toLowerCase() === "p",
          ),
        ).toBeInTheDocument();
      }
    });
  });

  it("does not render instructions section if instructions are not present", () => {
    render(<DetailsInfo {...mockData} strInstructions={""} />);

    expect(screen.queryByText("Instructions")).not.toBeInTheDocument();
  });

  it("does not render ingredients section if ingredients or measures are empty", () => {
    const dataWithoutIngredients = {
      ...mockData,
      ingredients: [],
      measures: [],
    };
    render(<DetailsInfo {...dataWithoutIngredients} />);

    expect(screen.queryByText("List of ingredients:")).not.toBeInTheDocument();
  });
});
