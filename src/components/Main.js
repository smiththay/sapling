import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import Navbar from './Navbar';

export default function main() {
    return (
        <div>

            <section className="bgimage">
                <div className="container">
                    <div className="row">
                        <div className="hero-text col-xs-12 col-sm-6 col-md-8">
                            <p> <i>Grow Your Money </i></p>
                            <p className='hero-sub'><i>"<b>together</b> we can take
                            our money <br />from saplings to well rooted trees"</i>
                            </p>
                            <div><p><Link to="/register" style={{ textDecoration: 'none' }} className="button"><h3 className='mt-3'><b>SIGN UP</b></h3></Link></p></div>
                        </div>
                    </div>

                    {/* <div className='row'>
                          <div className='col'>
                            <div className="arrow">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                          </div>
                        </div> */}

                </div>
            </section>
            {/* ------------------------------------------------------ */}
            <div className="container2">
                <div className="row bg-light">
                    <div className="row mt-5 mb-5 ">
                        <div className="col-md-6 col-sm-12">
                            <img src="./investing.png" className="card-img-top card-img-top img-fluid mt-25" alt="investing" />
                        </div>
                        <div className="col-md-6 col-sm-12 mt-5 pt-5 mb-5">

                            <h1><i>Anything is possible...</i></h1>
                            <br />
                            <h4>that is with careful planning, and the support of a huge community of people
                            doing the exact same thing you are. It can be hard to save for that car, or down
                            payment on your dream home, or even that purse you've been eyeing. With <b><i>Sapling </i></b>
                             you can create your savings goals, update them, and share them with a community who will
                            only support you in achieving it.

                         <i><b>Together, we can take
                            our money from saplings to well rooted trees!</b></i></h4>

                            <div className="row  text-center">
                                <div className="col">
                                    <img src='./SAPLING.png' className='w-50' alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------------- */}
                <div className="row">
                    <div className="row text-center px-5 mt-5 pt-5 mb-5 pb-4">
                        <div className="col">
                            <h1>“You must gain control over your money or the lack of it will <br />forever control you.” —<i>Dave Ramsey</i></h1>
                        </div>
                    </div>
                    <div className="row bg-warning text-center mt-5 mb-5 m-0">
                        <div className="col-md-4 col-sm-12">
                            <div className="card bg-warning border-0">
                                <img src="./lose.png" className="card-img-top" alt="lose" />
                                <div className="card-body">
                                    <h3 className="card-title"><b>Stop Sinking</b></h3>
                                    <h5 className="card-text">Make a game plan. Set goals and stick to them.
                                        Tell your money what to do or else your money will tell you what to do.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="card bg-warning border-0">
                                <img src="./team.png" className="card-img-top" alt="team" />
                                <div className="card-body">
                                    <h3 className="card-title"><b>Cultivate Community</b></h3>
                                    <h5 className="card-text">With the support of like minded individuals cheering you on,
                                            it becomes much easier to stay focused and persevere.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="card bg-warning border-0">
                                <img src="./win.png" className="card-img-top" alt="win" />
                                <div className="card-body">
                                    <h3 className="card-title"><b>Succeed Selflessly</b></h3>
                                    <h5 className="card-text">Others will achieve their goals with our tools combined with your encouragement,
                                    and in vice versa.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------- */}

            <div className="container3">
                <div className="row mt-5 mb-5">
                    <div className="col">
                        <div className="row mt-5 mb-5">
                            <div className="col"></div>
                            <div className="row mt-5 pt-5 mb-5 pb-5 px-5 text-center">
                                <div className="col-md-6 col-sm-12 px-5 pt-5">

                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </p>
                                    <h3 className='pt-4 mt-4'>"Through this app, I was able to save up and pay off coding bootcamp.
                                    Easy to use goal setting tool with friends rooting for me made it an
                                    easy to achieve goal for me."
                                        </h3>
                                    <br />

                                    <h4><b><i>-Harris Green</i></b></h4>
                                </div>
                                <div className="col-md-6 col-sm-12" >
                                    <img src='./harrisgreen.jpg' className="w-50 card-img-top img-fluid rounded-circle mt-25" alt="review" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------- */}
            <div className="row pb-5 text-center">
                <div className="col-sm-6">
                    <div className="card-spon mx-5">
                        <div className="card-body">
                            <h5 className="card-title">TripShare</h5>
                            <p className="card-text">Saving for a trip, and need some help planning? Visit...</p>
                            <a href="https://awesome-vacation-planner.web.app/" target="_blank" className="btn btn-success">TripShare</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card-spon mx-5">
                        <div className="card-body">
                            <h5 className="card-title">Yolo Fund</h5>
                            <p className="card-text">Built that emergency fund now you want to learn to invest? Visit...</p>
                            <a href="https://yolofund.reecewalter.com/" target="_blank" className="btn btn-success">Yolo Fund</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------- */}

            <div className='row  mt-5 pt-5'>
                <div className='col text-center'>
                    <span><h1 className='sponsored'>Sponsored By:
                    <a href='https://whyrecord.com/' target='_blank'>
                            <img src='why.png' className="why" alt="review" />
                        </a>
                    </h1>
                    </span>

                </div>
            </div>
            <div className='row text-center mt-5 pt-5'>
                <div className='col mt-5 pt-5'>
                    <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    back to top</a>
                </div>
            </div>
        </div>
    )
}
