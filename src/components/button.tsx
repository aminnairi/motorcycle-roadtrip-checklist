import { CSSProperties, FunctionComponent, HTMLAttributes, PropsWithChildren, useMemo } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean,
  size?: "normal" | "big"
}

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ children, style, disabled, size, ...props }) => {
  const styles: CSSProperties = useMemo(() => {
    return {
      ...style,
      backgroundColor: disabled ? "white" : "black",
      color: disabled ? "grey" : "white",
      padding: size === "big" ? "10px 20px" : "5px 15px",
      border: disabled ? "1px solid lightgrey" : "1px solid black",
      borderRadius: "0px",
      cursor: disabled ? "not-allowed" : "pointer",
      whiteSpace: "nowrap",
      margin: 0
    };
  }, [style, disabled, size]);

  return (
    <button {...props} style={styles} disabled={disabled}>
      {children}
    </button>
  );
};
