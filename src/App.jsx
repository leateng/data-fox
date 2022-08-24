import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import SQLEditor from './editor'
import { Icon, Button, Tree, Classes } from "@blueprintjs/core";
import { Resizable } from 're-resizable';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css'

function App() {
  // const style = {
  // };

  const resizeEnable = { top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }
  // Sample Tree Data
  var treeData = [
    {
      id: 0,
      hasCaret: true,
      icon: "database",
      label: "postgres",
      isExpanded: true,
      childNodes: [
        {
          id: 1,
          hasCaret: true,
          icon: "user",
          label: "Profile"
        },
        {
          id: 2,
          hasCaret: false,
          icon: "folder-close",
          label: "Documents"
        },
      ]
    },
    {
        id: 1,
        hasCaret: true,
        icon: "user",
        label: "Profile"
    },
    {
        id: 2,
        hasCaret: false,
        icon: "folder-close",
        label: "Documents"
    },
];

  return (
    <div className="App">
      <Resizable defaultSize={{ width: 120, height: "100vh"}} minWidth={200} maxWidth={600} enable={resizeEnable} className="sidebar-container">
        <div key="sidebar-container">
          <Tree
            contents={treeData}
            className={Classes.ELEVATION_0}
          />
        </div>
      </Resizable>
      <div className="editor-container">
        {/* <Button icon="play" intent="success" small={true}>Run</Button> */}
        <SQLEditor />
      </div>
    </div>
  )
}

export default App
