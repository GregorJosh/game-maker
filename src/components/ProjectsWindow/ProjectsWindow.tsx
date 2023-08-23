import { ReactEventHandler } from "react";

import "./ProjectsWindow.scss";

import Button from "components/Button/Button";
import Window from "components/Window/Window";
import FormField from "components/FormField/FormField";
import Input from "components/Input/Input";
import Notification from "components/Notification/Notification";
import Form from "components/Form/Form";

type ProjectsWindowProps = {
  projects: string[];
  createProjectHandler: ReactEventHandler<HTMLFormElement>;
  deleteProjectHandler?: () => void;
};

export default function ProjectsWindow(props: ProjectsWindowProps) {
  const {projects, createProjectHandler} = props;

  return (
    <Window>
      <h1>Game Maker</h1>
      <Window width={60} height={50}>
        {projects.length ? (
          <>
            <h2>Open any recent project:</h2>
            <ul className="project-list">
              <li className="project-list__project">
                <button className="project-list__link">Project 1</button>
              </li>
            </ul>
            <h2>or</h2>
          </>
        ) : (
          <Notification>You haven't created any projects</Notification>
        )}
        <Form submitHandler={createProjectHandler}>
          <FormField label="Game name">
            <Input name="name" />
          </FormField>
          <Button type="submit">Create new project</Button>
        </Form>
      </Window>
    </Window>
  );
}
