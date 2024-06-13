import { useParams } from "react-router-dom";
import { cocktailsParams, TCocktailsTypes } from "../types.ts";
import { cocktailsTypes } from "../constants/constants.ts";
import { useMemo } from "react";

export const useCocktailParam = (): TCocktailsTypes => {
  const params: cocktailsParams = useParams();

  return useMemo(
    () => params?.cocktail || cocktailsTypes[0],
    [params?.cocktail],
  );
};
