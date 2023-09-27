import React from 'react'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">Readit!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='ms-auto d-md-flex'>
              <Link to="/"><button className='btn btn-dark fw-bold'>Login</button></Link>
              <Link to="/signup"><button className='btn btn-dark fw-bold ms-3' style={{ backgroundColor: "#424649" }}>Signup</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNavbar
