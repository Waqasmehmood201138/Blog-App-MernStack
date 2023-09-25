import React from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <>

            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 custom_container">
                <div className="row">
                    <div className="col">


                        <form className="form">
                            <p className="form-title">Sign in to your account</p>
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
