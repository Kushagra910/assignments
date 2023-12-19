## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

 const fs = require("fs");
fs.appendFile("index.html","Ram ram bhai","utf-8",(err)=>{
  if(err) throw err.msg;
  // again readFile call will be required if want to log it 
  fs.readFile("index.html","utf-8",(err,data)=>{
    if(err) throw err.message;
    console.log(data);
  })
});
 console.log("call after async function call");                  

 output = call after async function call
          some data of index.html
          Ram ram bhai (appended at last of html structure)