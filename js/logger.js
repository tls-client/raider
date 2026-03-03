export function log(text){

 const logEl=document.getElementById("log");

 logEl.textContent+=
 `[${new Date().toLocaleTimeString()}] ${text}\n`;

 logEl.scrollTop=logEl.scrollHeight;
}
