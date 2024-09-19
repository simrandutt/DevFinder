
const express = require('express');
const connectDB = require('./config/databse');
const app = express();
const User = require("./models/user")

connectDB().then(()=>{
  console.log("database connection established..");
  //create a server,call only when db connection established
app.listen(3000,() => {
  console.log("server successfully listening on this port")
});

}).catch((err)=>{
  console.error("database cannot be connected..!!")
})

// user model signup
app.post("/signup",async (req,res)=>{

  const user = new User({
    firstName: "simran",
    lastName: "sharma",
    emailID: "simransharma@gmail.com",
    password: "pass",
    age: 27,
    gender: 'female'
  })
  //save user data in schema
  try {
    await user.save()
    res.send("User added successfully!!")
  } catch(err){
    res.status(400).send("Error saving the User:",err.message);
  }
})



// --Work----

//   // //server handeller
//   // app.use((req,res)=>{
//   //   res.send("hello worled") //when we go to port 3000 on web,it will respond this message
//   // })

//   // //server handeller
//   // app.use("/hello",(req,res)=>{
//   //   res.send("hello 1") //when we go to port 3000 on web,it will respond this message
//   // })

//   //server handeller
//   app.use("/test",(req,res)=>{
//     res.send("hello 2") //when we go to port 3000 on web,it will respond this message
//   })

//   // //server handeller
//   // app.use("/",(req,res)=>{
//   //   res.send("hello 3") //when we go to port 3000 on web,it will respond this message
//   // })

//   //get call,only works for /user
//   app.get("/user",(req,res)=>{
//     res.send({name:"simran", class:"10"}) //when we go to port 3000 on web,it will respond this message
//   }) 

//   //post call,only works for /user
//   app.post("/user",(req,res)=>{
//       //save DB
//     res.send("saved data into databse successfully")  
//   })   

// //middleware

// const {adminAuth,userAuth} = require("./middleware/auth");

// app.use("/admin",adminAuth);

//   app.get("/admin/getAllData",(req,res) => {
//     res.send("Get all data successfully")
//   })

//   app.get("/user",userAuth,(req,res) => {
//     res.send("Get all data successfully")
//   })

//   app.get("/admin/deleteUser",(req,res) => {
//     res.send("Delete successfully")
//   })

//   //error handeling,alway keep wild card handeling error
//   app.use("/",(err,req,res,next) => {
//     if(err){
//       //log errors 
//       res.status(500).send("something went wrong")
//     }
//   })

//   //error other way, proper way of handeling
//   app.get("/getUserData",(err,req,res,next) => {
//    try {
//     throw new Error("hjsdhg")
//    } catch(err){
//       res.status(500).send("something went wrong")
//    }
//   })
