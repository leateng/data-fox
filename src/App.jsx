import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import SQLEditor from './editor'
import { Icon, Button, Tree, Classes } from "@blueprintjs/core";
import { Resizable } from 're-resizable';
import { useSpring, animated } from 'react-spring'

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css'

import { Icon as IconifyIcon} from '@iconify/react';
import postgresqlIcon from '@iconify/icons-logos/postgresql';

function App() {
  // const style = {
  // };

  const resizeEnable = { top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }

  const spring_fadein = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
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
          icon: "th",
          label: "tables"
        },
        {
          id: 2,
          hasCaret: true,
          icon: "grid",
          label: "views"
        },
        {
          id: 3,
          hasCaret: true,
          icon: "function",
          label: "functions"
        },
        {
          id: 4,
          hasCaret: true,
          icon: "flow-linear",
          label: "procedures"
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
      <animated.div style={spring_fadein}>
      <Resizable defaultSize={{ width: 300, height: "100vh"}} minWidth={200} maxWidth={600} enable={resizeEnable} className="sidebar-container">
        <div key="sidebar-container">
          <Tree
            contents={treeData}
            className={Classes.ELEVATION_0}
          />
          <IconifyIcon icon={postgresqlIcon} width="24" height="24" />
        </div>
      </Resizable>
      </animated.div>
      <div className="editor-container">
        {/* <Button icon="play" intent="success" small={true}>Run</Button> */}
        <SQLEditor />
      </div>
    </div>
  )
}

export default App
