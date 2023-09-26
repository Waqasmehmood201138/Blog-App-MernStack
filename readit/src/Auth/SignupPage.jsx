import React from 'react'

export default function SignupPage() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 custom_container">
                <div className="row">
                    <div className="col">


                        <form className="form">
                            <p className="form-title">Register With Us.</p>
                            <div className="input-container">
                                <input type="text" placeholder="Enter Your Name" />
                                <span>
                                </span>
                            </div>
                            <div className="input-container">
                                <input type="email" placeholder="Enter email" />
                                <span>
                                </span>
                            </div>
                            <div className="input-container">
                                <input type="password" placeholder="Enter password" />
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
