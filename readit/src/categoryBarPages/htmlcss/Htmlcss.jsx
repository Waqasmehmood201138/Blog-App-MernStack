import React from 'react'
import { Link } from 'react-router-dom';
import './htmlcss.css';
import img1 from '../../asset/jspageimg1.webp'
import CategoriesBar from '../../navbar/CategoriesBar';

const Htmlcss = () => {
    return (
        
        <> <CategoriesBar/>
                {/* start of vertical cards */}
            <div className='container-fluid js_page d-flex align-items-center justify-content-center '>
                <div className="container  p-3 d-flex justify-content-center ">
                    <div className="row">
                        <div className='col-lg-3 '>
                            <div className="card full_card my-4 ">
                                <div className="img">
                                    <img className='card-img-top img-fluid ' src={img1} alt="" srcset="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">How to Build an Accordion Component</h4><br />
                                    <div>
                                        <span className='language_used card_footer dot'>JavaScript</span> <br /> <span className='card_author dot card_footer'>Craig Buckler,</span> <span className='release_date'> Sep 26 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 '>
                            <div className="card full_card  my-4 ">
                                <div className="img">
                                    <img className='card-img-top img-fluid ' src={img1} alt="" srcset="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">How to Build an Accordion Component</h4><br />
                                    <div>
                                        <span className='language_used card_footer dot'>JavaScript</span> <br /> <span className='card_author dot card_footer'>Craig Buckler,</span> <span className='release_date'> Sep 26 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 '>
                            <div className="card full_card  my-4 ">
                                <div className="img">
                                    <img className='card-img-top img-fluid ' src={img1} alt="" srcset="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">How to Build an Accordion Component</h4><br />
                                    <div>
                                        <span className='language_used card_footer dot'>JavaScript</span> <br /> <span className='card_author dot card_footer'>Craig Buckler,</span> <span className='release_date'> Sep 26 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 '>
                            <div className="card full_card  my-4 ">
                                <div className="img">
                                    <img className='card-img-top img-fluid ' src={img1} alt="" srcset="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">How to Build an Accordion Component</h4><br />
                                    <div>
                                        <span className='language_used card_footer dot'>JavaScript</span> <br /> <span className='card_author dot card_footer'>Craig Buckler,</span> <span className='release_date'> Sep 26 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    {/* end of vertical cards */}


                    {/* start of JS section */}
            <div className="container ">
                <h1 className='pt-5 display-4 fw-bold'>JavaScript</h1>
                <div>
                    <Link to="/vanillajs"><button className='btn fw-bold btn-secondary m-2 '>Vanilla JS</button></Link>
                    <Link to="/react"><button className='btn fw-bold btn-secondary m-2 '>React </button></Link>
                    <Link to="/node"><button className='btn fw-bold btn-secondary m-2 '>Node</button></Link>
                    <Link to="/jquery"><button className='btn fw-bold btn-secondary m-2 '>jQuery</button></Link>
                    <Link to="/angular"><button className='btn fw-bold btn-secondary m-2 '>Angular</button></Link>
                    <Link to="/deno"><button className='btn fw-bold btn-secondary m-2 '>Deno</button></Link>
                    <Link to="/toolsandlibraries"><button className='btn fw-bold btn-secondary m-2 '>Tools & Libraries</button></Link>
                    <Link to="/npm"><button className='btn fw-bold btn-secondary m-2 '>npm</button></Link>
                    <Link to="/es6"><button className='btn fw-bold btn-secondary m-2 '>ES6</button></Link>
                    <Link to="/ember"><button className='btn fw-bold btn-secondary m-2 '>Ember</button></Link>
                    <Link to="/engines"><button className='btn fw-bold btn-secondary m-2 '>Engines</button></Link>
                    <Link to="/webgl"><button className='btn fw-bold btn-secondary m-2 '>WebGL</button></Link>
                    <Link to="/coffescript"><button className='btn fw-bold btn-secondary m-2 '>CoffeeScript</button></Link>
                    <Link to="/ajax"><button className='btn fw-bold btn-secondary m-2 '>Ajax</button></Link>
                    <Link to="/apis"><button className='btn fw-bold btn-secondary m-2 '>APIs</button></Link>
                </div>
            </div>
                        {/* end of JS section  */}
                        
                            {/* start of horizental cards  */}
            <div className="container pt-5 p-3">
                <div className="card  full_card my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid" alt="..." />
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
                <div className="card  full_card my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid" alt="..." />
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
                <div className="card  full_card my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid" alt="..." />
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
                <div className="card  full_card my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid" alt="..." />
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
                <div className="card  full_card my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid" alt="..." />
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
                <div className="card  full_card my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid" alt="..." />
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
            </div>
                    {/* end of horizantal cards */}

                    {/* start of  pagination */}

                    <div className="container d-flex justify-content-center align-items-center mb-5">
                        <div className="pagination">
                        <div className="prev fw-bold text-secondary"> Prev</div>
                        <div className="numbers text-primary fw-bold">&nbsp;&nbsp;&nbsp;&nbsp; <span className='one'>1</span>  &nbsp;&nbsp; 2 &nbsp;&nbsp; 3 &nbsp;&nbsp; 4 &nbsp;&nbsp; ... &nbsp;&nbsp; 95</div>
                        <div className="next fw-bold text-primary">&nbsp;&nbsp;&nbsp;&nbsp;  Next </div>
                        </div>
                    </div>

                    {/* end of  pagination */}

        </>
    )
}

export default Htmlcss
