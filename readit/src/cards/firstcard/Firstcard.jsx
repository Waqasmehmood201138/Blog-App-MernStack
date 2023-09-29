import React from 'react'
import './firstcard.css'
import img from '../../asset/firstcardrightpic.webp'
import Postcards from '../2ndcards/Postcards'

const Firstcard = () => {
  return (
    <>
    <div className="card1">
    <div className='firstcard '>
        <div className="left">
            <div className="content">
                <h1 className='heading'>An Introduction to the Bun JavaScript Runtime</h1>
                <span className='language'>JavaScript</span>
                <div className="name"> <span className='author'>Saad khan</span><span className='date'>28 Sep</span></div>
                <p className='para'>Learn about Bun 1.0, a rival JavaScript runtime to Node.js and Deno, and the reasons it may tempt you away from your current favorite.</p>
            </div>
        </div>
        <div className="right">
            {/* <img className='rightimg' src={img} alt="" /> */}
        </div>
    </div>
    </div>
    <Postcards/>
    </>
  )
}

export default Firstcard