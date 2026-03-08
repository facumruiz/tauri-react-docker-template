use tauri::command;

#[command]
fn sumar(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![sumar])
        .run(tauri::generate_context!())
        .expect("error while running tauri");
}
