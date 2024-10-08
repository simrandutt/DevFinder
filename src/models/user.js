const mongoose = require("mongoose");
const validator = require("validator");
//schema for database, what a user can have.
const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required: true,
    minlength: 4,
    maxLength: 50 //string so minLength
  },
  lastName:{
    type:String
  },
  emailID:{
    type:String,
    required: true,
    unique: true,
    lowercase:true,
    trim: true, //avoid extra spaces
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Inccorect email address" + value)
      }
    }
  },
  password:{
    type:String,
    required: true,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("Enter a strong password" + value)
      }
    }
  },
  age:{
    type:Number,
    min: 18 //number than min,
  },
  gender:{
    type:String,
    validate(value){ //custom validate fxn,only works when new user is created ,not for currect object 
      if(!["male","female","others"].includes(value)){
        throw new Error("gender data is not valudate");
    }}
  },
  photoURL: {
    type: String,
    default: "https://geographyandyou.com/images/user-profile.png",
    validate(value){
      if(!validator.isURL(value)){
        throw new Error("Invalid Photo URL" + value)
      }
    }
  },
  about: {
    type: String,
    default: "This is default about of the user!"
  },
  skills:{
    type: [String] //skills is array
  }
},{timestamps:true})//works for new or updated users when user register
//create model,"User" always start with captical letter.
module.exports = mongoose.model("User", userSchema);