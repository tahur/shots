const express = require("express")
const ejs = require("ejs")

const app = express()

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{

    res.render("index",{Name: "tahur"})

})




app.listen(process.env.PUBLIC_PORT||3000,()=>{

    console.log("server started on port 3000")

})