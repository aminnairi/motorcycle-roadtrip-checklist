import { Fragment, memo } from "react";
import { useTranslate } from "../hooks/translation";
import { Title } from "./title";

export const PageLoader = memo(() => {
  const translate = useTranslate();

  return (
    <Fragment>
      <Title align="center" variant="h2">
        {translate("Chargement de votre page...")}
      </Title>
      <span className="loader"></span>
    </Fragment>
  );
});
