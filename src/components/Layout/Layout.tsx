import { ReactNode } from "react";

import "./Layout.scss";

type LayoutProps = {
  children: ReactNode;
  vertical?: boolean;
};

export default function Layout(props: LayoutProps) {
  const { children, vertical = false } = props;
  const className = vertical ? "vertical" : "layout";

  return <div className={className}>{children}</div>;
}
