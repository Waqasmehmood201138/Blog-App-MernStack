import express from "express"
const blogRoute = express.Router()
import Blog from "../models/Blog.mjs" 



blogRoute.get("/" , (req , res) => {

    res.send("Get All Blogs Route ....")
})

// Creating Blog code start
blogRoute.post("/createBlog" , async(req , res) => {

    try {

        const {title , description, category, author } = req.body;

        const blogAvailable = await Blog.findOne({ title })

        if(blogAvailable){
            // if blog Title already available in the dataBase  |409 conflict code
            return res.status(409).json({message: "Blog title is already taken!"})
        }
        else{

            const blogSave = await Blog.create({

                title : req.body.title,
                description : req.body.description,
                category : req.body.category,
                author : req.body.author
            })

            return res.status(201).json({message: "Blog Created Successfully ..."})
        }
        
    } catch (error) {
        
        console.log(error)
    }
   
})
// Creating Blog code end

export default blogRoute;