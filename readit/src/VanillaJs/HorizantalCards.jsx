import React from 'react'
import img from '../asset/jspageimg1.webp'

const HorizantalCards = () => {
    return (
        <>
           
            <div className="card  full_card my-4">
                <div className="row">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fw-bold title">An Introduction to the Bun JavaScript Runtime</h5>
                            <div>
                                <span className='language_used card_footer'>JavaScript</span>  <span className='card_author dot card_footer'>By Craig Buckler,</span> <span className='release_date'> Sep 26 </span>
                            </div>
                            <p className="card-text">Learn about Bun 1.0, a rival JavaScript runtime to Node.js and Deno, and the reasons it may tempt you away from your current favorite.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HorizantalCards
