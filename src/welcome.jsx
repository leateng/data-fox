import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Welcome from './welcome'
import './index.css'
import { appWindow } from '@tauri-apps/api/window';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
)
