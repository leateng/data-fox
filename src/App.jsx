import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SQLEditor from './editor'
import { Icon, Button } from "@blueprintjs/core";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Button variant="contained" size="small">Hello World</Button> */}
      {/* <SideBar / > */}
      {/* <Icon icon="play" size={20} intent="success" /> */}
      <Button icon="play" intent="success" small={true}>Run</Button>
      <SQLEditor />
    </div>
  )
}

export default App
