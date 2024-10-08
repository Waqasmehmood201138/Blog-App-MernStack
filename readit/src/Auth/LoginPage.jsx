import React, { useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()

        console.log(email, password)
        setEmail(email)
        setPassword(password)

        const data = {

            email: email,
            password: password
        }

        try {

            const response = await axios.post('http://localhost:8081/user/login', data)

            if (response.data.message === "Login Success") {

                toast.success(response.data.message)
                navigate('/')
            }

            //    else if ( responce.status === 401) 
            //     {
            //         toast.error("Invalid Credentials")
            //         console.log(responce.data)
            //     }

        } catch (error) {

            // toast.error(error.message)
            // console.log(error.message)

            if (error.response && error.response.data.message === "Invalid Credentials") {
                toast.error(error.response.data.message)
            }
            else if (error.response && error.response.data.message === "No Data Found") {
                toast.error(error.response.data.message)
            }
            else if (error.response && error.response.data.message === "Internal Server Error") {
                toast.error(error.response.data.message)
            }
            
        }
    }
    return (
        <>

            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 custom_container">
                <div className="row">
                    <div className="col">


                        <form className="form" onSubmit={handleSubmit}>
                            <p className="form-title">Sign in to your account</p>
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
                            <button
                                type="submit"
                                className="submit"
                            >
                                Sign in
                            </button>

                            <p className="signup-link">
                                No account ?
                                <Link to="/signup"> Sign up</Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
