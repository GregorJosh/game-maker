import { ReactNode } from "react";

import "./Container.scss";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props)  {
  return <div className="container">{children}</div>;
}
