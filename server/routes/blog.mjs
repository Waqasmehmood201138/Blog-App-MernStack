import express from "express"
const blogRoute = express.Router()
import Blog from "../models/Blog.mjs"



// Finding All Blog Code start Here 

blogRoute.get("/all-Blogs", async (req, res) => {

    try {

        const Blogs = await Blog.find();

        if (Blogs.length === 0) {

            return res.status(404).json({ message: "No Blogs Found" })
        }

        return res.status(200).json(Blogs)

    } catch (error) {
        console.log(error)
    }
})

// Finding All Blog Code end Here 

// Creating Blog code start here
blogRoute.post("/create-Blog", async (req, res) => {

    try {

        const { title, description, category, author } = req.body;

        const blogAvailable = await Blog.findOne({ title })

        if (blogAvailable) {
            // if blog Title already available in the dataBase  |409 conflict code
            return res.status(409).json({ message: "Blog title is already taken!" })
        }
        else {

            const blogSave = await Blog.create({

                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                author: req.body.author
            })

            return res.status(201).json({ message: "Blog Created Successfully ..." })
        }

    } catch (error) {

        console.log(error)
    }

})
// Creating Blog code end here


// Delete Blog code start here
blogRoute.delete("/delete-blog/:id" , async(req , res) => {
    
    try {

        const deleteBlog = await Blog.findByIdAndDelete(req.params.id)
        
        if(!deleteBlog){

            return res.send(401).json({message: "Content Not Available"})
        }

        return res.status(200).json({message: "Blog Deleted!"})
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
})
// Delete Blog code end here



export default blogRoute;