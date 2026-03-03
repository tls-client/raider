import {state} from "./state.js";
import {start,stop} from "./engine.js";
import {log} from "./logger.js";

function readConfig(){

 state.config={
  token:token.value,
  guild:guild.value,
  channels:channels.value,
  message:message.value,
  delay:Number(delay.value),
  limit:Number(limit.value)
 };

}

start.onclick=()=>{
 readConfig();
 start();
};

stop.onclick=stop;

join.onclick=()=>{
 log("サーバー参加処理");
};

leave.onclick=()=>{
 log("サーバー退出処理");
};

fetchChannels.onclick=()=>{
 log("チャンネル取得");
};

fetchUsers.onclick=()=>{
 log("ユーザー取得");
};

endPoll.onclick=()=>{
 log("投票終了");
};
