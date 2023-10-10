 import  express from "express";
 import cors from "cors"

 import blogRoute from "./routes/blogController.mjs";

 const app = express()
 app.use(express.json())
 app.use(cors())

 app.use("/blog" , blogRoute)


const PORT = 8081 || process.env.Port 

app.listen(PORT , () => {

    console.log(`App is listening on port ${PORT}`)
})

