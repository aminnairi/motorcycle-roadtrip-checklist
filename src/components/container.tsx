import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CSSProperties, FunctionComponent, HTMLAttributes, PropsWithChildren, useMemo } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> { }

export const Container: FunctionComponent<PropsWithChildren<ContainerProps>> = ({ children, style, ...props }) => {
  const [containerRef] = useAutoAnimate();

  const styles: CSSProperties = useMemo(() => {
    return {
      ...style,
      maxWidth: "500px",
      padding: "0 10px",
      margin: "100px auto 50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px"
    };
  }, [style]);

  return (
    <div {...props} style={styles} ref={containerRef}>
      {children}
    </div>
  );
};
