import { readConfig } from "./ui.js";
import { startEngine, stopEngine } from "./engine.js";

document
  .getElementById("startBtn")
  .onclick = () => {
    readConfig();
    startEngine();
  };

document
  .getElementById("stopBtn")
  .onclick = stopEngine;
