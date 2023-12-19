## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
const fs = require("fs");
fs.readFile("read.txt","utf-8",(err,data)=>{
  if(err) throw err.msg;
  console.log(data);
   let s = data.split(/\s+/);  // this symbol is used to split a string on basis of or more whitespace characters
   let temp = s.join(" ");
   fs.writeFile("read.txt",temp,(err)=>{
     if(err) throw err.message;
     fs.readFile("read.txt","utf-8",(err,data)=>{
       console.log(data);
     })
   })
});