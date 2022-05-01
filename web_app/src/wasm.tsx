import init from "../wasm/minimal_wasm_template";
import * as wasm from "../wasm/minimal_wasm_template";
import wasmData from "../wasm/minimal_wasm_template_bg.wasm";

await init(wasmData);

export default wasm;