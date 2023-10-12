import express from "express"
const blogRoute = express.Router()



blogRoute.get("/" , (req , res) => {

    res.send("Get All Blogs Route ....")
})

blogRoute.post("/" , (req , res) => {

    res.send("Post Blog Routes ...")
})

export default blogRoute;