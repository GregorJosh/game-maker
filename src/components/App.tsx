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
    this.setState({ projects });
  };

  deleteProject = (name: string): void => {
    const projects: string[] = this.state.projects.slice();

    projects.splice(projects.indexOf(name), 1);
    this.setState({ projects });
  };

  openProject = (name: string): void => {
    const project = {
      name: name,
    };

    this.setState({ project });
  };

  render(): ReactNode {
    const { project, projects } = this.state;

    return (
      <div className="app">
        {project ? (
          <ProjectWindow project={project} />
        ) : (
          <ProjectsWindow
            projects={projects}
            createProjectHandler={this.createNewProject}
            deleteProjectHandler={this.deleteProject}
            openProjectHandler={this.openProject}
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

  componentDidUpdate(): void {
    const projects: string[] = this.state.projects.slice();

    localStorage.setItem("projects", JSON.stringify(projects));
  }
}
