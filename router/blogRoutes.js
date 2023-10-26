const blogController = require("../controller/blogController")
const blogRoutes=require("express").Router()
blogRoutes.get("/data",blogController)
module.exports=blogRoutes