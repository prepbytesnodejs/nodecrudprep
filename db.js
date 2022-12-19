const mongoose=require("mongoose");

function connect(){

    return mongoose.connect("mongodb+srv://logan:8kGAnKS7510DbGbi@cluster0.ww6acxi.mongodb.net/?retryWrites=true&w=majority")




}



module.exports=connect;

