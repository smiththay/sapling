import React from 'react';
import Navbar from './Navbar';

export default function main() {
    return (
        <div>
            <Navbar />
            <section className="bgimage">
                <div className="container-fluid">
                    <div className="row">
                        <div className="hero-text col-xs-12 col-sm-6 col-md-8">
                            <p> Grow Your Money</p>
                            <p className='hero-sub'><i>"<b>together</b> we can take
                            our money <br />from saplings to well rooted trees"</i>
                            </p>
                            <p><a href="#" className="btn btn-warning btn-large">SIGN UP »</a></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------------------------------------------ */}
            <div className="container2">
                <div className="row">
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
                                    <img src='./SAPLING.png' className='w-50' />
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
                                            it becomes much easier to stay focused and persevere</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="card bg-warning border-0">
                                <img src="./win.png" className="card-img-top" alt="win" />
                                <div className="card-body">
                                    <h3 className="card-title"><b>Succeed Selflessly</b></h3>
                                    <h5 className="card-text">Others will achieve their savings goals with your encouragement,
                                    the same way you will combined the tools to track your them.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
