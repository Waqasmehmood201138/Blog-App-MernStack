import React from 'react'
import img from '../../src/asset/jspageimg1.webp'
const VerticalCards = () => {
    return (
        <>

                            <div className="card full_card my-4 ">
                                <div className="img">
                                    <img className='card-img-top img-fluid ' src={img} alt="" srcset="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">How to Build an Accordion Component</h4><br />
                                    <div>
                                        <span className='language_used card_footer dot'>JavaScript</span> <br /> <span className='card_author dot card_footer'>Craig Buckler,</span> <span className='release_date'> Sep 26 </span>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export default VerticalCards
