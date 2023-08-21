import "./SelectProjectWindow.scss";

import Button from "components/Button/Button";
import Window from "components/Window/Window";
import FormField from "components/FormField/FormField";
import Input from "components/Input/Input";

export default function SelectProjectWindow() {
  return (
    <Window>
      <h1>Game Maker</h1>
      <Window width={60} height={50}>
        <h2>Open an recent project:</h2>
        <ul className="project-list">
          <li className="project-list__project">
            <a className="project-list__link" href="#">
              Project 1
            </a>
          </li>
        </ul>
        <h2>or</h2>
        <form className="form">
          <FormField label="Game name">
            <Input name="name" />
          </FormField>
          <Button type="submit">Create new project</Button>
        </form>
      </Window>
    </Window>
  );
}
