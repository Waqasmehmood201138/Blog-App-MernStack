import React from 'react'
import './footer.css'
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="container-fluid custom-footer bg-dark">
        <div className="row">
          <div className="col-5 d-flex  align-items-center ">
            <p className='custom-space fw-bold fs-3 '>ReadIt.</p>
            <p className='custom-space '><BsGithub /></p>
            <p className='custom-space '><BsInstagram /></p>
            <p className='custom-space '> <BsFacebook /></p>
          </div>
          <div className="col-5 d-flex  align-items-center"><p>&copy; All Rights reserved 2023.</p></div>
        </div>
      </div>
    </>
  )
}

export default Footer