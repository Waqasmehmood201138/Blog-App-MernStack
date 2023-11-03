import mongoose from "mongoose";


const blogSchema = mongoose.Schema({

    title : {
        type : String
    },

    description : {
        type : String
    },

    category : {
        type : String
    },

    author : {
        type : String
    }
})

export default mongoose.model('Blog' , blogSchema)