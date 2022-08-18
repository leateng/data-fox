import { invoke } from '@tauri-apps/api/tauri'
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
import * as THREE from 'three';
import VANTA_EFFECTS from 'vanta/dist/vanta.waves.min'

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