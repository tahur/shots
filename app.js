const express = require("express")
const ejs = require("ejs")
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/shotsDB",{useNewUrlParser:true})

const app = express()

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{

    res.render("index",)

})




app.listen(process.env.PUBLIC_PORT||3000,()=>{

    console.log("server started on port 3000")

})