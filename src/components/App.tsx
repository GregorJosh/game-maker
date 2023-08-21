import TitleBar from "./TitleBar/TitleBar";
import MenuBar from "./MenuBar/MenuBar";
import Button from "./Button/Button";
import FormField from "./FormField/FormField";
import Input from "./Input/Input";

export default function App() {
  return (
    <>
      <TitleBar />
      <MenuBar />
      <Button>Button</Button>
      <FormField label="Name"><Input name="Name" /></FormField>
    </>
  );
}
