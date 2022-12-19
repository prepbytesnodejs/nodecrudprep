const mongoose=require("mongoose");


const UserSchema=new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
  address: String,
  email:{
    type:String,
    unique:true
  }

})

module.exports = mongoose.model('person', UserSchema);
