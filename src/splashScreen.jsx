// With the Tauri API npm package:
import { invoke } from '@tauri-apps/api/tauri'
import BIRDS from 'vanta/dist/vanta.birds.min'
// With the Tauri global script:
// const invoke = window.__TAURI__.invoke

document.addEventListener('DOMContentLoaded', () => {
  // This will wait for the window to load, but you could
  // run this function on whatever trigger you want
  VANTA.WAVES({
    el: '#background', // element selector string or DOM object reference
    color: 0x000000,
    waveHeight: 20,
    shininess: 50,
    waveSpeed: 1.5,
    zoom: 0.75
  })

  invoke('close_splashscreen')
})
