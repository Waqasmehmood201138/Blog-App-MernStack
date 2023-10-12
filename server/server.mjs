import express from "express"
import cors from "cors"
import blogRoute from "./routes/blog.mjs"

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 8081;

app.use("/blogs" , blogRoute)

app.listen(PORT , () => {

    console.log(`Server is Running on Port ${PORT}`)

})