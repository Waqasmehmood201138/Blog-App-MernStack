import React, { useState } from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,password)
        setEmail(email)
        setPassword(password)
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
                                onChange={(e)=>{setEmail(e.target.value)}} />
                                <span>
                                </span>
                            </div>
                            <div className="input-container">
                                <input 
                                type="password"
                                 placeholder="Enter password"
                                 value={password}
                                 onChange={(e)=>{setPassword(e.target.value)}} />
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
