import { Component } from "react";

import "./App.scss";

import ProjectWindow from "./ProjectWindow/ProjectWindow";
import SelectProjectWindow from "./SelectProjectWindow/SelectProjectWindow";

type AppState = {
  project: {
    name: string;
  } | null;
};

export default class App extends Component<{}, AppState> {
  static defaultProps = {};

  state = {
    project: null,
  };

  render() {
    return (
      <div className="app">
        {this.state.project ? <ProjectWindow /> : <SelectProjectWindow />}
      </div>
    );
  }
}
