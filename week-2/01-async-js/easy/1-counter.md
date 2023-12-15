## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

answer - 

let count = 0;

function increment(){
  count++;
  console.log(count);
}

let intervalId = setInterval(increment,1000);

// this stops the counter after 10 secs requires an id from setInterval
setTimeout(()=>{
  clearInterval(intervalId);
},11*1000); 