import { CSSProperties, forwardRef, HTMLAttributes, useMemo } from "react";

export interface ListProps extends HTMLAttributes<HTMLUListElement> { }

export const List = forwardRef<HTMLUListElement, ListProps>(({ children, style, ...props }, ref) => {
  const styles: CSSProperties = useMemo(() => {
    return {
      ...style,
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    };
  }, [style]);

  return (
    <ul {...props} style={styles} ref={ref}>
      {children}
    </ul>
  );
});
