
const express = require('express');

const app = express();

  // //server handeller
  // app.use((req,res)=>{
  //   res.send("hello worled") //when we go to port 3000 on web,it will respond this message
  // })

  //server handeller
  app.use("/hello",(req,res)=>{
    res.send("hello 1") //when we go to port 3000 on web,it will respond this message
  })

  //server handeller
  app.use("/test",(req,res)=>{
    res.send("hello 2") //when we go to port 3000 on web,it will respond this message
  })

  //server handeller
  app.use("/",(req,res)=>{
    res.send("hello 3") //when we go to port 3000 on web,it will respond this message
  })
//create a server
app.listen(3000,() => {
  console.log("server successfully listening on this port")
});