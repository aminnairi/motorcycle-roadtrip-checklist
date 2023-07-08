import { CSSProperties, FunctionComponent, HTMLAttributes, PropsWithChildren, useMemo } from "react";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  align?: "left" | "center" | "right";
}

export const Title: FunctionComponent<PropsWithChildren<TitleProps>> = ({ variant, children, color, style, align, ...props }) => {
  const styles: CSSProperties = useMemo(() => {
    return {
      fontFamily: "Roboto, sans-serif",
      margin: 0,
      padding: 0,
      fontWeight: "300",
      color: color || "inherit",
      width: "100%",
      textAlign: align || "inherit",
      ...style
    };
  }, [style, color, align]);

  switch (variant) {
    case "h1":
      return <h1 {...props} style={styles}>{children}</h1>;
    case "h2":
      return <h2 {...props} style={styles}>{children}</h2>;
    case "h3":
      return <h3 {...props} style={styles}>{children}</h3>;
    case "h4":
      return <h4 {...props} style={styles}>{children}</h4>;
    case "h5":
      return <h5 {...props} style={styles}>{children}</h5>;
    case "h6":
      return <h6 {...props} style={styles}>{children}</h6>;
  }
};
