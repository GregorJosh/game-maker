import { Component } from "react";

import TitleBar from "../TitleBar/TitleBar";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";
import Layout from "../Layout/Layout";
import Window from "../Window/Window";

type ProjectWindowProps = {
  project: {
    name: string;
  };
};

export default class ProjectWindow extends Component<ProjectWindowProps> {
  render() {
    return (
      <>
        <TitleBar>{'Project ' + this.props.project.name + ' - Game Maker'}</TitleBar>
        <MenuBar />
        <ToolBar />
        <Layout>
          <Layout vertical>
            <Layout>
              <Window width={35}>Hierarchy</Window>
              <Window>Scene</Window>
            </Layout>
            <Window height={55}>Project</Window>
          </Layout>
          <Window width={30}>Inspector</Window>
        </Layout>
      </>
    );
  }
}
