import { cocktailsApi } from "./coctails.api.ts";
import { createSelector } from "@reduxjs/toolkit";
import { cocktails } from "../../../shared/constants/constants.ts";
import { TCocktailsTypes } from "../../../shared/types.ts";
import { IDrink } from "./coctails.types.ts";
const cocktailsResponse = cocktailsApi.endpoints?.getExample.select;

export const cocktailSelector = createSelector(
  [(state) => state, (_, cocktail: TCocktailsTypes) => cocktail],
  (state, cocktail) => {
    const data = cocktailsResponse(cocktail)(state);

    const currentCocktail = data?.data?.drinks?.find(
      (item) => item.strDrink === cocktails[cocktail].name,
    );

    return {
      strDrinkThumb: currentCocktail?.strDrinkThumb ?? "",
      strInstructions: currentCocktail?.strInstructions ?? "",
      strDrink: currentCocktail?.strDrink ?? "",
      strCategory: currentCocktail?.strCategory ?? "",
      strAlcoholic: currentCocktail?.strAlcoholic ?? "",
      strGlass: currentCocktail?.strGlass ?? "",
      ingredients: ingredientsConfig("strIngredient", currentCocktail),

      measures: ingredientsConfig("strMeasure", currentCocktail),
    };
  },
);

export const ingredientsConfig = (
  type: "strIngredient" | "strMeasure",

  currentCocktail?: Partial<IDrink>,
) =>
  Object.keys(currentCocktail ?? {})
    .filter(
      (key) =>
        key.includes(type) &&
        !!currentCocktail?.[key as keyof typeof currentCocktail],
    )
    .map((key) => currentCocktail?.[key as keyof typeof currentCocktail]) ?? [];

export type TCocktailsSelector = ReturnType<typeof cocktailSelector>;
