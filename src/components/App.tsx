import { Component, FormEvent } from "react";

import "components/App.scss";

import ProjectWindow from "components/ProjectWindow/ProjectWindow";
import ProjectsWindow from "components/ProjectsWindow/ProjectsWindow";

type AppState = {
  project: {
    name: string;
  } | null;
  projects: string[];
};

interface FormElements extends HTMLCollection {
  name: HTMLInputElement;
}

export default class App extends Component<{}, AppState> {
  static defaultProps = {};

  state = {
    project: null,
    projects: [],
  };

  createNewProject(event: FormEvent<HTMLFormElement>) {
    const form = event.target as HTMLFormElement;
    const elements = form.elements as FormElements;

    console.log(elements.name.value);

    event.preventDefault();
  }

  render() {
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
}
