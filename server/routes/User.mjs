import express from "express";
import bcrypt from "bcrypt"
const userRoute = express.Router();
import User from "../models/User.mjs";


// Creating User code Start
userRoute.post("/signup", async (req, res) => {

    try {

        const { email } = req.body;

        const check = await User.findOne({ email });

        if (check) {

            return res.status(409).send(`${email} already Existed`)

        } else {

            const userSave = await User.create({

                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })

            return res.status(201).send("User Created ....")
        }
    } catch (err) {
        console.log(err)
    }

})
// Created User End 

// Authenticate / Login User code start
userRoute.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({message: "No Data Found"});
        }

        // Compare the hashed password with the provided password
        // const passwordMatch = await bcrypt.compare(password, user.password);

        if (user.password === password) {
            return res.status(200).json({message: "Login Success"});
        } else {
            return res.status(401).json({message: "Invalid Credentials"});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

// Authenticate / Login User code end


export default userRoute;


