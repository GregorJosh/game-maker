import { ReactNode, Component } from "react";

import "./Window.scss";

type WindowProps = {
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
};

export default class Window extends Component<WindowProps, {}> {
  static defaultProps = {
    children: "Window",
    width: "100%",
    height: "100%",
  };

  render() {
    const { width, height, children } = this.props;

    const window = {
      width: typeof width === "string" ? width : `${width}%`,
      height: typeof height === "string" ? height : `${height}%`,
    };

    return (
      <div style={window} className="window">
        {children}
      </div>
    );
  }
}
