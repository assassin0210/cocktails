import { cocktailsTypes } from "./constants/constants.ts";

export interface cocktailsParams {
  cocktail?: TCocktailsTypes;
}

export type TCocktailsTypes = (typeof cocktailsTypes)[number];
