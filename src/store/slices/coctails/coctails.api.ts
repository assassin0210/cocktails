import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../helpers.ts";
import { IDrink } from "./coctails.types.ts";

export const cocktailsApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    getExample: builder.query<{ drinks: IDrink[] }, string>({
      query: (cocktail) => {
        return {
          url: `/1/search.php?s=${cocktail}`,
        };
      },
    }),
  }),
});

export const { useGetExampleQuery } = cocktailsApi;
