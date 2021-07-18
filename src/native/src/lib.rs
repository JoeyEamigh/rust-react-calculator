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
pub fn add(x: f64, y: f64) -> f64 {
  return x + y;
}

#[wasm_bindgen]
pub fn subtract(x: f64, y: f64) -> f64 {
  return x - y;
}

#[wasm_bindgen]
pub fn multiply(x: f64, y: f64) -> f64 {
  return x * y;
}

#[wasm_bindgen]
pub fn divide(x: f64, y: f64) -> f64 {
  return x / y;
}

#[wasm_bindgen]
pub fn percent_decimal(percent: f64) -> f64 {
  return percent / 100.0;
}

// function to round to the nearest thousandth
#[wasm_bindgen]
pub fn round_for_calc(x: f64) -> f64 {
  return (x * 10000000.0).round() / 10000000.0;
}