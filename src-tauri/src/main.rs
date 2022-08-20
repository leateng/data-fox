#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![close_splashscreen])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

// Create the command:
// This command must be async so that it doesn't run on the main thread.
#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
  // Close splashscreen
  if let Some(splashscreen) = window.get_window("splashscreen") {
    std::thread::sleep(std::time::Duration::from_secs(3));
    splashscreen.close().unwrap();
  }
  // Show main window
  if let Some(main_win) = window.get_window("main") {
    main_win.center().unwrap();
    main_win.show().unwrap();
  }
}
