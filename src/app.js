
const express = require('express');

const app = express();

  // //server handeller
  // app.use((req,res)=>{
  //   res.send("hello worled") //when we go to port 3000 on web,it will respond this message
  // })

  // //server handeller
  // app.use("/hello",(req,res)=>{
  //   res.send("hello 1") //when we go to port 3000 on web,it will respond this message
  // })

  //server handeller
  app.use("/test",(req,res)=>{
    res.send("hello 2") //when we go to port 3000 on web,it will respond this message
  })

  // //server handeller
  // app.use("/",(req,res)=>{
  //   res.send("hello 3") //when we go to port 3000 on web,it will respond this message
  // })

  //get call,only works for /user
  app.get("/user",(req,res)=>{
    res.send({name:"simran", class:"10"}) //when we go to port 3000 on web,it will respond this message
  }) 

  //post call,only works for /user
  app.post("/user",(req,res)=>{
      //save DB
    res.send("saved data into databse successfully")  
  })   

//create a server
app.listen(3000,() => {
  console.log("server successfully listening on this port")
});