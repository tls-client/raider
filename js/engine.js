import {state} from "./state.js";
import {log} from "./logger.js";

const sleep=ms=>new Promise(r=>setTimeout(r,ms));

export async function start(){

 if(state.running)return;

 state.running=true;
 log("実行開始");

 let count=0;

 while(state.running){

  log("処理ループ実行");

  count++;

  if(
   state.config.limit &&
   count>=state.config.limit
  ){
   break;
  }

  await sleep(
   state.config.delay*1000
  );
 }

 state.running=false;
 log("停止");
}

export function stop(){
 state.running=false;
}
