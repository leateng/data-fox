import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './welcome.css'
// import { appWindow } from '@tauri-apps/api/window';

function Welcome() {
  return (
    <div className="welcome">
      <div className="info">
        side
      </div>
      <div className="connections">
        content
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
)
