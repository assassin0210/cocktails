import { Route, Routes } from "react-router-dom";
import { Layout } from "./features/Layout/Layout.tsx";
import { CocktailPage } from "./pages/CocktailPage/CocktailPage.tsx";
import { NotFound } from "./pages/NotFound/NotFound.tsx";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary.tsx";

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CocktailPage />} />
          <Route path=":cocktail" element={<CocktailPage />} />
          <Route path="*" element={<NotFound error={404} />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
