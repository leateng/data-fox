import { invoke } from '@tauri-apps/api/tauri'
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
import * as THREE from 'three';
// import p5 from 'p5'
import VANTA_EFFECTS from 'vanta/dist/vanta.waves.min'


// console.log("hello")
//   console.log("world")
document.addEventListener('DOMContentLoaded', () => {

  VANTA_EFFECTS(
    {
      el: '#background', // element selector string or DOM object reference
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    }
  );

  appWindow.center();
  appWindow.show();
  invoke('close_splashscreen');
})