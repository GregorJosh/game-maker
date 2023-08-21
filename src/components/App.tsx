import "./App.scss";

import TitleBar from "./TitleBar/TitleBar";
import MenuBar from "./MenuBar/MenuBar";
import ToolBar from "./ToolBar/ToolBar";
import Layout from "./Layout/Layout";
import Window from "./Window/Window";

export default function App() {
  return (
    <div className="app">
      <TitleBar>Game Maker</TitleBar>
      <MenuBar />
      <ToolBar />
      <Layout>
        <Layout vertical>
          <Layout>
            <Window></Window>
            <Window></Window>
          </Layout>
          <Window></Window>
        </Layout>
        <Window></Window>
      </Layout>
    </div>
  );
}
