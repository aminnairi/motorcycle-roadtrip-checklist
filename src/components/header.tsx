import { CSSProperties, FunctionComponent, memo, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Title } from './title';
import { Text } from "./text";
import { useScroll } from '../hooks/scroll';
import { useVibrationOf } from '../hooks/vibration';
import { Page } from '../pages';
import { useTranslate, useTranslation } from '../hooks/translation';

export const Header: FunctionComponent = memo(() => {
  const { isScrolling, smoothScrollToTop } = useScroll();
  const { withVibration } = useVibrationOf(25);
  const translate = useTranslate();

  const linkStyles: CSSProperties = useMemo(() => {
    return {
      textDecoration: "none",
      color: "inherit",
      marginRight: "15px",
      marginLeft: "15px",
    };
  }, []);

  const titleLinkStyles: CSSProperties = useMemo(() => {
    return {
      ...linkStyles,
      flex: 1
    };
  }, [linkStyles]);

  const titleColor = useMemo(() => {
    return isScrolling ? "white" : "black";
  }, [isScrolling]);

  const textColor = useMemo(() => {
    return isScrolling ? "white" : "black";
  }, [isScrolling]);

  const headerStyles: CSSProperties = useMemo(() => {
    return {
      display: "flex",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: "1px solid #ccc",
      boxShadow: isScrolling ? "5px 5px 10px #ccc" : "none",
      transition: "all 0.3s ease-in-out",
      backgroundColor: isScrolling ? "#000" : "#fff",
      position: "fixed",
      width: "100vw",
      top: 0,
      zIndex: 1
    };
  }, [isScrolling]);

  return (
    <header style={headerStyles}>
      <Link to={Page.Home} style={titleLinkStyles} onClick={withVibration(smoothScrollToTop)}>
        <Title variant="h1" color={titleColor}>
          MRC
        </Title>
      </Link>
      <Link to={Page.Hidden} style={linkStyles}>
        <Text color={textColor}>
          {translate("Cachés")}
        </Text>
      </Link>
    </header>
  );
});
