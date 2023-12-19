## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

console.log("Before async call line 1");
 const fs = require("fs");
fs.readFile("index.html","utf-8",(err,data)=>{
  console.log(data);
});

//busy waiting 
let num = 0;
for(let i=0;i<10000000000;i++){
  num++;
}

console.log('after busy waiting');

async call data will wait in callback queue untill our main thread/call stack not get idle and then event loop take and put it to stack