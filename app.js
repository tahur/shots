const express = require("express")
const ejs = require("ejs")
const mongoose = require('mongoose')
const shortURL = require("./models/url")
mongoose.connect("mongodb://localhost:27017/shotsDB",{useNewUrlParser:true})

const app = express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({urlencoded:true}));

app.get("/", async (req,res)=>  {
    
    const allData = await shortURL.find({}, { _id:0 })


    res.render("index",{shortUrls:allData})

})

app.post("/short", async (req,res)=>{

    const url = req.body.fullUrl

   const record = new shortURL({
       full : url
   })
   await record.save()
    res.redirect("/")

})

app.get("/:shortid", async (req,res)=>{
 const shortid = req.params.shortid
 const data = await shortURL.findOne({short :shortid})

 if(!data){
     res.sendStatus(404)
 }
  
 data.clicks++
 await data.save()

 res.redirect(data.full)

})


mongoose.connection.on("open",()=>{

    app.listen(process.env.PUBLIC_PORT||3000,()=>{
        console.log("server started on port 3000")
    })

}) // This is wait for mongo to start first then listen to server


