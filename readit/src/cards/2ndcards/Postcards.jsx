import React from 'react'
import './postcard.css'
import img1 from '../../asset/postcardpic.webp';
import img2 from '../../asset/postcardpic2.webp';
import img3 from '../../asset/postcardpic3.webp';
import imgbig from '../../asset/bigpic.webp';

const Postcards = () => {
    return (
        <>
            <div className='container d-flex align-items-center justify-content-center my-4 '>
                <div className="container d-flex justify-content-center p-3">

                    <div className="card col-3 sizit " >
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title title">Build Your Own ChatGPT Clone w</h5>
                            <span className='language'>JavaScript</span>
                            <div className="name"> <span className='author'>Saad khan</span><span className='date'>28 Sep</span></div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>


                    <div className="card col-3 ms-4 me-4 sizit" >
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title title">Open Source Trends to Look for In 2024</h5>
                            <span className='language'>JavaScript</span>
                            <div className="name"> <span className='author'>Saad khan</span><span className='date'>28 Sep</span></div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>


                    <div className="card col-3 sizit" >
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title title">How to Build an Accordion Component.</h5>
                            <span className='language'>JavaScript</span>
                            <div className="name"> <span className='author'>Saad khan</span><span className='date'>28 Sep</span></div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>

            </div>


                            {/* 3rd cards */}

          
                <div className="container d-flex justify-content-center">

                    <div class="card col-3 smallcard p-2" >
                    <div className="card-body">
                            <h5 className="card-title title">How to Build an Accordion Component.</h5>
                            <span className='language'>JavaScript</span>
                            <div className="name"> <span className='author'>Saad khan</span><span className='date'>28 Sep</span></div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>

                    <div class="card col-3 ms-4 me-4  smallcard p-2" >
                    <div className="card-body">
                            <h5 className="card-title title">How to Build an Accordion Component.</h5>
                            <span className='language'>JavaScript</span>
                            <div className="name"> <span className='author'>Saad khan</span><span className='date'>28 Sep</span></div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>

                    <div class="card col-3 smallcard p-2" >
                    <div className="card-body">
                            <h5 className="card-title title">How to Build an Accordion Component.</h5>
                            <span className='language'>JavaScript</span>
                            <div className="name"> <span className='author'>Saad khan</span><span className='date'>28 Sep</span></div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>


                {/* button for all articles */}
                <div className="container d-flex justify-content-center my-4">
                <button className='btn  btn-outline-success'>See all Articles</button>
                </div>

            {/* big picyure - Signup */}
            <div className="container d-flex flex-row  pic-signup p-5 mb-4">
                <div className="container d-flex flex-row">
                    <div className="left-one col-8">
                        <h1 className='pic-h1'>Become a SitePoint Member</h1>
                        <p className='pic-p'>Become a SitePoint member and join our community. With your account you'll get access to courses, books, our forum, and our weekly newsletter.</p>
                        <ul className='pic-u py-5 '>
                            <li>600+ tech courses and books</li>
                            <li>Get Fresh Tech News And Content Weekly</li>
                            <li>Learn With A Community</li>
                        </ul>
                    </div>
                    <div className="right-one d-flex flex-column col-4">
                     <img src={imgbig} alt="" />
                     <button className='btn btn-lg btn-outline-info mt-4'>Sign up now</button>
                     </div>
                </div>
            </div>
        </>

    )
}

export default Postcards