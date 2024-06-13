import styles from "./DetailsInfo.module.scss";
import { TCocktailsSelector } from "../../../../store/slices/coctails/coctails.selectors.ts";
import { memo } from "react";

export const DetailsInfo = memo(
  ({
    ingredients,
    strInstructions,
    strDrink,
    strGlass,
    measures,
    strCategory,
    strAlcoholic,
  }: TCocktailsSelector) => {
    return (
      <div className={styles.root}>
        <h1>{strDrink}</h1>
        <div>
          <p>{strCategory}</p>
          <p>{strAlcoholic}</p>
          <p>{strGlass}</p>
        </div>
        {strInstructions && (
          <div>
            <h3>Instructions</h3>
            <p>{strInstructions}</p>
          </div>
        )}

        {!!ingredients.length && !!measures.length && (
          <div>
            <h3>List of ingredients:</h3>
            <div className={styles.ingredients}>
              <div>
                {ingredients.map((ingredient) => (
                  <p key={ingredient}>{ingredient}</p>
                ))}
              </div>
              <div>
                {measures.map((measure) => (
                  <p key={measure}>{measure}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
);
