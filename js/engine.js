import { state } from "./state.js";
import { log } from "./ui.js";

const sleep = ms =>
  new Promise(r => setTimeout(r, ms));

export async function startEngine() {

  if (state.running) return;

  state.running = true;
  log("Started");

  while (state.running) {

    await executeTask();

    await sleep(state.config.delay);
  }

  log("Stopped");
}

export function stopEngine() {
  state.running = false;
}

async function executeTask() {

  // 🔥 ここが拡張ポイント
  log(
    `Running → ${state.config.target} : ${state.config.message}`
  );

}
