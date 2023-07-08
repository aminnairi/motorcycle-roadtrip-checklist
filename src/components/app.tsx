import { Suspense, Fragment, FunctionComponent, useEffect, lazy, memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "../store";
import { Header } from "./header";
import { PageLoader } from "./page-loader";
import { Container } from "./container";
import { Page } from "../pages";

const HomePage = lazy(() => import("../pages/home").then(({ HomePage }) => ({ default: HomePage })));
const HiddenPage = lazy(() => import("../pages/hidden").then(({ HiddenPage }) => ({ default: HiddenPage })));

export const App: FunctionComponent = memo(() => {
  const state = useSelector(state => state);

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <Fragment>
      <Header />
      <Container style={{ marginBottom: "50px" }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path={Page.Home} element={<HomePage />} />
            <Route path={Page.Hidden} element={<HiddenPage />} />
            <Route path={Page.Any} element={<Navigate to={Page.Home} />} />
          </Routes>
        </Suspense>
      </Container>
    </Fragment>
  );
});
