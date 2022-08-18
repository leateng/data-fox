import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { appWindow } from '@tauri-apps/api/window';

// appWindow.setDecorations(false);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
