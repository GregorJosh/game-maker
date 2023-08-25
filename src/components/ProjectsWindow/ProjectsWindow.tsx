import { FormEvent, MouseEvent } from "react";

import "./ProjectsWindow.scss";

import Window from "components/Window/Window";
import FormField from "components/FormField/FormField";
import Input from "components/Input/Input";
import Notification from "components/Notification/Notification";
import Form from "components/Form/Form";

type ProjectsWindowProps = {
  projects: string[];
  createProjectHandler: (name: string) => void;
  deleteProjectHandler: (name: string) => void;
  openProjectHandler: (name: string) => void;
};

interface FormElements extends HTMLCollection {
  name: HTMLInputElement;
}

function onCreateProject(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const elements = form.elements as FormElements;

  if (createProjectHandler) {
    createProjectHandler(elements.name.value);
  }

  form.reset();
}

function onDeleteProject(event: MouseEvent<HTMLButtonElement>) {
  if (deleteProjectHandler) {
    const btn = event.target as HTMLButtonElement;

    deleteProjectHandler(btn.getAttribute("data-value") as string);
  }
}

function onOpenProject(event: MouseEvent<HTMLButtonElement>) {
  if (openProjectHandler) {
    const btn = event.target as HTMLButtonElement;

    openProjectHandler(btn.getAttribute("data-value") as string);
  }
}

let createProjectHandler: (name: string) => void | undefined;
let deleteProjectHandler: (name: string) => void | undefined;
let openProjectHandler: (name: string) => void | undefined;

export default function ProjectsWindow(props: ProjectsWindowProps) {
  const projects: string[] = props.projects;
  const areAnyProjects: boolean = projects.length ? true : false;

  createProjectHandler = props.createProjectHandler;
  deleteProjectHandler = props.deleteProjectHandler;
  openProjectHandler = props.openProjectHandler;

  return (
    <Window>
      <h1>Game Maker</h1>
      <Window width={60} height={50}>
        {areAnyProjects ? (
          <>
            <h2>Open any recent project:</h2>
            <ul className="project-list">
              {projects.map((project) => (
                <li className="project-list__project" key={project}>
                  <button
                    className="project-list__link"
                    onClick={onOpenProject}
                    data-value={project}
                  >
                    {project}
                  </button>
                  <button
                    className="project-list__link"
                    onClick={onDeleteProject}
                    data-value={project}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <h2>or</h2>
          </>
        ) : (
          <Notification>You haven't created any projects</Notification>
        )}
        <Form
          submitHandler={onCreateProject}
          submitBtnLabel="Create new project"
        >
          <FormField label="Game name">
            <Input name="name" />
          </FormField>
        </Form>
      </Window>
    </Window>
  );
}
