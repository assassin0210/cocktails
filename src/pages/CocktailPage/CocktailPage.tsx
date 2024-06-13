import { useGetExampleQuery } from "../../store/slices/coctails/coctails.api.ts";
import { useCocktailParam } from "../../shared/hooks/useCoctailParam.ts";
import { useAppSelector } from "../../store/store.ts";
import { cocktailSelector } from "../../store/slices/coctails/coctails.selectors.ts";
import styles from "./CocktailPage.module.scss";
import { Skeleton } from "antd";
import { DetailsInfo } from "../../entities/CocktailDetail/components/DetailsInfo/DetailsInfo.tsx";
import { PreviewCocktail } from "../../entities/CocktailDetail/components/PreviewCocktail/PreviewCocktail.tsx";
import { cocktailsTypes } from "../../shared/constants/constants.ts";
import { NotFound } from "../NotFound/NotFound.tsx";

export const CocktailPage = () => {
  const cocktail = useCocktailParam();
  const { data, isFetching, isError } = useGetExampleQuery(cocktail);

  const info = useAppSelector((state) => cocktailSelector(state, cocktail));
  //в next на стороне сервера удобно делать такие проверки
  if (
    !cocktailsTypes.includes(cocktail) ||
    isError ||
    !((data?.drinks ?? []).length > 0)
  ) {
    return <NotFound error={404} />;
  }

  return (
    <section className={styles.root}>
      <Skeleton
        paragraph={{
          rows: 12,
        }}
        loading={isFetching}
      >
        <DetailsInfo {...info} />
      </Skeleton>
      <PreviewCocktail
        cocktail={cocktail}
        strDrink={info.strDrink}
        strDrinkThumb={info.strDrinkThumb}
        isFetching={isFetching}
      />
    </section>
  );
};
