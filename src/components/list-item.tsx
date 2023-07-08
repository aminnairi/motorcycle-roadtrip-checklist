import { CSSProperties, FunctionComponent, HTMLAttributes, PropsWithChildren, useMemo } from "react";

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> { }

export const ListItem: FunctionComponent<PropsWithChildren<ListItemProps>> = ({ children, style, ...props }) => {
  const styles: CSSProperties = useMemo(() => {
    return {
      ...style,
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "row",
      gap: "10px"
    };
  }, [style]);

  return (
    <li {...props} style={styles}>
      {children}
    </li>
  );
};
