import { state } from "./state.js";

const logEl = document.getElementById("log");

export function readConfig() {
  state.config.target =
    document.getElementById("target").value;

  state.config.message =
    document.getElementById("message").value;

  state.config.delay =
    Number(document.getElementById("delay").value);
}

export function log(text) {
  logEl.textContent += text + "\n";
  logEl.scrollTop = logEl.scrollHeight;
}
