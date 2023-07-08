import { CSSProperties, FunctionComponent, HTMLAttributes, PropsWithChildren, useMemo } from "react";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "italic" | "bold" | "normal";
  align?: "left" | "center" | "right";
  underlined?: boolean;
  color?: string;
}

export const Text: FunctionComponent<PropsWithChildren<TextProps>> = ({ children, style, variant, align, color, underlined, ...props }) => {
  const styles: CSSProperties = useMemo(() => {
    return {
      ...style,
      fontFamily: "Roboto, sans-serif",
      margin: 0,
      padding: 0,
      fontStyle: variant === "italic" ? "italic" : "normal",
      fontWeight: variant === "bold" ? "bold" : "normal",
      textAlign: align,
      color: color || "black",
      textDecoration: underlined ? "underline" : "none",
      display: "inline-block",
      whiteSpace: "nowrap",
      width: "100%"
    };
  }, [style, variant, align, color, underlined]);

  return (
    <span {...props} style={styles}>
      {children}
    </span>
  );
};
