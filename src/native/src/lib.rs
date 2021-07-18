mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
  fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
  alert("Hello, native!");
}

#[wasm_bindgen]
pub fn add(x: i32, y: i32) -> i32 {
  return x + y;
}

#[wasm_bindgen]
pub fn sub(x: i32, y: i32) -> i32 {
  return x - y;
}

#[wasm_bindgen]
pub fn mul(x: i32, y: i32) -> i32 {
  return x * y;
}

#[wasm_bindgen]
pub fn div(x: i32, y: i32) -> i32 {
  return x / y;
}