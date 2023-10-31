import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userRoute from "./routes/User.mjs"
import blogRoute from "./routes/blog.mjs"


const app = express()
app.use(express.json())
app.use(cors())

const PORT = 8081;


app.use("/user" , userRoute)  // route that's for the user signup and login only ...
app.use("/blogs" , blogRoute) // route that is for the blog crud operation only  ...

app.listen(PORT , () => {

    console.log(`Server is Running on Port ${PORT}`)

})



mongoose.connect('mongodb+srv://wk288516:blogster@mern-blog.rfikmo1.mongodb.net/?retryWrites=true&w=majority')

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////
