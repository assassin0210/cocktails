import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { cocktails, cocktailsTypes } from "../../shared/constants/constants.ts";
import { Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { TCocktailsTypes } from "../../shared/types.ts";
import styles from "./Layout.module.scss";
import { useCocktailParam } from "../../shared/hooks/useCoctailParam.ts";
import { useEffect, useState } from "react";
import { useScreenSize } from "../../shared/hooks/useScreenSize.ts";
import classnames from "classnames";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.tsx";

export const Layout = () => {
  const cocktail = useCocktailParam();

  const [active, setActive] = useState<TCocktailsTypes>(cocktail);
  const navigate = useNavigate();

  useEffect(() => {
    setActive(cocktail);
  }, [cocktail]);

  const onClick = (key: TCocktailsTypes) => {
    navigate(cocktails[key].href);
  };

  const menu: ItemType<MenuItemType>[] = cocktailsTypes.map((cocktail) => ({
    key: cocktail,
    label: cocktails[cocktail].name,
  }));

  const size = useScreenSize();

  const isCollapsed = [0, 1].includes(size);

  return (
    <section className={styles.root}>
      <div className={styles.menuWrapper}>
        <Menu
          selectedKeys={[active]}
          className={classnames(styles.menu)}
          inlineCollapsed={isCollapsed}
          onClick={(e) => onClick(e.key as TCocktailsTypes)}
          items={menu}
        />
      </div>

      <div className={styles.content}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </section>
  );
};
