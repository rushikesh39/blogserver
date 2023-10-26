const express=require("express")
const app=express()
const cors=require("cors")
const data=require("./data")
const blogRoutes = require("./router/blogRoutes")
app.use(cors())

// app.get("/data",(req, res)=>{
//     res.send(data)
// })
app.use(blogRoutes)
app.listen("4000",()=>{
    console.log("server is running 5000")
   
})