import express from "express";
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

        const { email , password } = req.body;

        const check = await User.findOne({ email })

        if (check) {

            if(check.password === password)

            {
            return res.status(200).send("Login Success")
            }

            else{
                return res.status(401).send("Invalid Credential")
            }
        }
        else {
            return res.status(401).send("No Data Found")
        }

    } catch (error) {
        console.log(error)
    }

})

// Authenticate / Login User code end


export default userRoute;


