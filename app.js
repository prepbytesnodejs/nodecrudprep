const express=require("express");

const app=express();
app.use(express.json());

const connect =require("./db");
const router=require("./route");

app.use("/api",router)

connect().then(data=>{
    // we will make a connection to server

    app.listen(8090,function(){
        console.log("Server Started")
    })
}).catch(err=>{
    console.log(err);
})