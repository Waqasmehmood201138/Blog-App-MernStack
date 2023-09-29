import React, { useState } from 'react'

export default function SignupPage() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

   
    const handleSubmit=(e) => {
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        
        setUsername(username)
        setEmail(email)
        setPassword(password)
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
                                 value={username} 
                                 onChange={(e)=>{setUsername(e.target.value)}}/>
                                <span>
                                </span>
                            </div>
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
                                  onChange={(e)=>{setPassword(e.target.value)}}/>
                            </div>
                            <button type="submit" className="submit">
                                Sign in
                            </button>

                            <p className="signup-link">
                                Already Registered ?
                                <a href="/"> Login</a>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
