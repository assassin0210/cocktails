import { TCocktailsTypes } from "../types.ts";

export const baseUrl = "https://www.thecocktaildb.com/api/json/v1";

export const cocktailsTypes = ["margarita", "mojito", "a1", "kir"] as const;

export const cocktails: Record<
  TCocktailsTypes,
  { name: string; href: string }
> = {
  margarita: {
    name: "Margarita",
    href: "/",
  },
  mojito: {
    name: "Mojito",
    href: "/mojito",
  },
  a1: {
    name: "A1",
    href: "/a1",
  },
  kir: {
    name: "Kir",
    href: "/kir",
  },
};
