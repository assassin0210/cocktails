import styles from "./PreviewCocktail.module.scss";
import { Image } from "../../../Image/Image.tsx";
import { TCocktailsSelector } from "../../../../store/slices/coctails/coctails.selectors.ts";
import { memo } from "react";
import { Skeleton } from "antd";

interface IProps
  extends Pick<TCocktailsSelector, "strDrink" | "strDrinkThumb"> {
  cocktail: string;
  isFetching: boolean;
}

export const PreviewCocktail = memo(
  ({ cocktail, strDrink, strDrinkThumb, isFetching }: IProps) => {
    return (
      <div className={styles.root}>
        <Skeleton
          className={styles.title}
          loading={isFetching}
          active={isFetching}
          paragraph={{
            rows: 0,
            className: styles.title,
          }}
        >
          <h1>{strDrink}</h1>
        </Skeleton>
        <Image key={cocktail} src={strDrinkThumb} alt={cocktail} />
      </div>
    );
  },
);
