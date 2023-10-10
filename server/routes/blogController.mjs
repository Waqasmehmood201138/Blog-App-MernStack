import express from "express";
const blogRoute = express.Router()


blogRoute.get("/" ,  (req , res) => {

    res.send("All Blogs ...")

})

blogRoute.post("/" , (req, res) => {

    res.send("Post Blog here ....")
})


export default blogRoute;