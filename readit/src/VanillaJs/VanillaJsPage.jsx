import React from 'react'
import VerticalCards from './VerticalCards'
import './VanillaJsPage.css'
import HorizantalCards from './HorizantalCards'

const VanillaJsPage = () => {
    return (
        <>
            <div className=' container-fluid vanilla_js d-flex align-items-center justify-content-center'>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-lg-3"><VerticalCards /></div>
                        <div className="col-lg-3"><VerticalCards /></div>
                        <div className="col-lg-3"><VerticalCards /></div>
                        <div className="col-lg-3"><VerticalCards /></div>
                    </div>
                </div>
            </div>


            <div className="container pt-5 p-3">
                <p className=' display-4 m-2 fw-bold'>Vanilla JavaScript</p>
                <HorizantalCards />
                <HorizantalCards />
                <HorizantalCards />
                <HorizantalCards />
            </div>


        </>
    )
}

export default VanillaJsPage
