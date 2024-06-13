import { IDrink } from "./coctails.types.ts";
import { ingredientsConfig } from "./coctails.selectors.ts";

const mockCocktail: Partial<IDrink> = {
  strIngredient1: "Tequila",
  strIngredient2: "Triple sec",
  strIngredient3: "Lime juice",
  strMeasure1: "1 1/2 oz",
  strMeasure2: "1/2 oz",
  strMeasure3: "1 oz",
};
describe("ingredientsConfig", () => {
  it("should return the correct list of ingredients", () => {
    const result = ingredientsConfig("strIngredient", mockCocktail);
    expect(result).toEqual(["Tequila", "Triple sec", "Lime juice"]);
  });

  it("should return the correct list of measures", () => {
    const result = ingredientsConfig("strMeasure", mockCocktail);
    expect(result).toEqual(["1 1/2 oz", "1/2 oz", "1 oz"]);
  });

  it("should return an empty array if the cocktail is undefined", () => {
    const result = ingredientsConfig("strIngredient");
    expect(result).toEqual([]);
  });

  it("should return an empty array if no matching keys are found", () => {
    const result = ingredientsConfig("strIngredient", {});
    expect(result).toEqual([]);
  });

  it("should ignore keys that do not match the type", () => {
    const cocktailWithExtraKeys = {
      ...mockCocktail,
      otherKey: "some value",
    };
    const result = ingredientsConfig("strIngredient", cocktailWithExtraKeys);
    expect(result).toEqual(["Tequila", "Triple sec", "Lime juice"]);
  });

  it("should ignore empty or undefined values", () => {
    const cocktailWithEmptyValues = {
      strIngredient1: "Tequila",
      strIngredient2: "",
      strIngredient3: undefined,
      strMeasure1: "1 1/2 oz",
      strMeasure2: "",
      strMeasure3: undefined,
    };
    const resultIngredients = ingredientsConfig(
      "strIngredient",
      cocktailWithEmptyValues,
    );
    expect(resultIngredients).toEqual(["Tequila"]);

    const resultMeasures = ingredientsConfig(
      "strMeasure",
      cocktailWithEmptyValues,
    );
    expect(resultMeasures).toEqual(["1 1/2 oz"]);
  });
});
