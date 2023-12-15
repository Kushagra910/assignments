## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;
let id ;
function inCount(){
  count++;
  console.log(count);
  id = setTimeout(inCount,1000);
}
inCount();

setTimeout(()=>{
  clearTimeout(id);
},10*1000)

























































(Hint: setTimeout)