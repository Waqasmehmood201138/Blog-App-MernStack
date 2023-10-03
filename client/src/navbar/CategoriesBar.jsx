import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function CategoriesBar() {


    const [isSearchActive, setIsSearchActive] = useState(false)

    const handleSearch = () => {
        setIsSearchActive(true)
    }
    const handleClose = () => {
        setIsSearchActive(false)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row p-3">
                        {isSearchActive ?
                            (<>
                                <div className="col-10">
                                    <form action="" className='d-flex justify-content-center'>
                                        <input type="text" className='form-control' placeholder='Search Here ...' />
                                        <input onClick={handleClose} type="submit" value="close" className='btn btn-danger ms-1' />
                                    </form>
                                </div></>)
                            :
                            (<><div className="col-2 book_cat">Free Tech Books</div>
                                <div className="col categories_name">
                                    <Link className='categories_name ' to='/jspage'>JavaScript</Link></div>
                                <div className="col-2 categories_name">
                                    <Link className='categories_name' to='/htmlcss'>HTML&CSS</Link></div>
                                <div className="col categories_name">
                                    <Link className='categories_name' to='/aipage'>AI</Link></div>
                                <div className="col categories_name">
                                    <Link to='/java' className='categories_name'>Java</Link></div>
                                <div className="col categories_name">
                                    <Link to='/wordpress' className='categories_name'>Wordpress</Link></div>
                                <div className="col categories_name">
                                    <Link to='/php' className='categories_name'>Php</Link></div>
                                <div className="col categories_name">
                                    <Link to='/python' className='categories_name'>Python</Link></div>

                                <div className="col btn btn-secondary " onClick={handleSearch}>Search</div>
                            </>)
                        }


                    </div>
                </div>
            </div>
        </>
    )
}
