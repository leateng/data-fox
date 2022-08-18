import { useState } from 'react'
import Button from '@mui/material/Button';
import reactLogo from './assets/react.svg'
import SQLEditor from './editor'

// import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Button variant="contained" size="small">Hello World</Button> */}
      {/* <SideBar / > */}
      <SQLEditor />
    </div>
  )
}

export default App
