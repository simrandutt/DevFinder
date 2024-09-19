const mongoose = require("mongoose");
//connect cluster

const connectDB = async() =>{
  await mongoose.connect(
    "mongodb+srv://duttsimran007:AsePfDkniWCNW6Sr@mycode0.pn3lb.mongodb.net/devTinder"
    )
}

module.exports =  connectDB
