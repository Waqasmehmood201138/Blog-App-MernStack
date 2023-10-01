import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import home from '../asset/blog_home.webp'
// import MainNavbar from '../navbar/MainNavbar'
import CategoriesBar from '../navbar/CategoriesBar'
// import Footer from '../footer/Footer'
import Firstcard from '../cards/firstcard/Firstcard'


export default function HomePage() {
    return (
        <>
                {/* <MainNavbar/> */}
                <CategoriesBar/>
            <div className="container-fluid bg-dark">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-lg-8">
                            <h1 className='main_head'>Learn & Practice <br /> In-Demand Tech Skills</h1>
                            <p className='text-light main_para'>Unlock a premium collection of courses, books, and assessments to hone your tech skills and advance your career. Get unlimited access to everything for one simple price.</p>
                            <Link to="/homepage"><button className='btn ps-5 pe-5 fw-bold text-white main_button'>Explore Articles</button></Link>
                        </div>
                        <div className="col-lg-3">
                            <img src={home} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Firstcard/>
            {/* <Footer/> */}
        </>
    )
}
