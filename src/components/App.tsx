import { Component, ReactNode } from "react";

import "components/App.scss";

import ProjectWindow from "components/ProjectWindow/ProjectWindow";
import ProjectsWindow from "components/ProjectsWindow/ProjectsWindow";

type AppState = {
  project: {
    name: string;
  } | null;
  projects: string[];
};

export default class App extends Component<{}, AppState> {
  static defaultProps: Readonly<{}> = {};

  state: Readonly<AppState> = {
    project: null,
    projects: [],
  };

  createNewProject = (name: string): void => {
    const projects: string[] = this.state.projects.slice();

    projects.push(name);
    localStorage.setItem("projects", JSON.stringify(projects));
    this.setState({ projects }, () => console.log(this.state));
  };

  render(): ReactNode {
    return (
      <div className="app">
        {this.state.project ? (
          <ProjectWindow />
        ) : (
          <ProjectsWindow
            projects={this.state.projects}
            createProjectHandler={this.createNewProject}
          />
        )}
      </div>
    );
  }

  componentDidMount(): void {
    const projects: string[] =
      JSON.parse(localStorage.getItem("projects") as string) || [];

    this.setState({ projects });
  }
}
