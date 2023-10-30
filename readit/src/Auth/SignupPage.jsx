import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function SignupPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(name)
        console.log(email)
        console.log(password)

        setName(name)
        setEmail(email)
        setPassword(password)

        const data = {
            name: name,
            email: email,
            password: password
        };

        try {

            const responce = await axios.post('http://localhost:8081/user/signup', data)

            console.log("data send")

            if (responce.status === 201) {

                toast.success('Sign up success');
            }
            
        }
        catch (err) {
            console.log(err)
            toast.error('email already exist')
        }
    }

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 custom_container">
                <div className="row">
                    <div className="col">


                        <form className="form" onSubmit={handleSubmit}>
                            <p className="form-title">Register With Us.</p>
                            <div className="input-container">
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }} />
                                <span>
                                </span>
                            </div>
                            <div className="input-container">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                                <span>
                                </span>
                            </div>
                            <div className="input-container">
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <button type="submit" className="submit">
                                Sign in
                            </button>

                            <p className="signup-link">
                                Already Registered ?
                                <Link to="/login"> Sign in</Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
