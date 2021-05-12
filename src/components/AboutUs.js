import React from 'react'

export default function AboutUs() {
    return (
        <div>

            <div className='container text-center pt-5 mt-4'>
                <div className="row mt-5 pt-5">
                    <div className='col'>
                    <img src='./Rocket-bro.png' className="card-img w-50" alt="saving" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <div className="col">
                        <h1 className="card-text mt-5 pt-2 mx-2 px-2"><i>"Our mission is to empower people to be financially responsible and educated
                     by providing useful tools and building a community of support" </i></h1>
                    </div>
                    </div>
                </div>
            </div>


            <div className="container pt-5 mt-5">
            <div className='row'>
                <div className="row mt-5 mb-5 m-0 text-center">
                    <div className="col-md-6 col-sm-12 pb-3 ">
                        <img src='/st-photo.jpg' className="w-50 card-img-top img-fluid rounded-circle mw-25 mb-3" alt="pic" />
                        <p><i>Owner and Founder</i></p>
                        <h6>-Smith Thay</h6>
                        <img src='/stlogo.PNG' className="w-25 card-img-top img-fluid rounded-circle mw-25 mb-3" alt="pic" />

                    </div>
                    <div className="col-md-6 col-sm-12 pb-3 pt-5 mt-3">
                        <i class="fab fa-html5"></i>
                        <h2>Humble Beginnings</h2>
                        <h5 className='mt-5'>Smith grew up in a low-income neighborhood near Boston, MA to parents of refugees. Money was always tight but his parents always seemed to scrape by. It wasn't until he was a bit older that he realized that his parents were saving to buy their dream home and move their family to a more safe environment. Saving was a value that was instilled in him as he watched his parents work low paying jobs while saving to achieve their dreams.
                        <br />
                        <br />
                        The pandemic revealed a big flaw in how people are unprepared for financial hardship. Over 60% of Americans live paycheck to paycheck. The topic of money is taboo which makes it difficult to learn how to properly save and budget. By creating an environment that encourages each other to save, we believe people will have better money habits. Remember, all trees in a forest start off as saplings.

                        </h5>
                    </div>
                </div>
                </div>

            </div>





        </div>
    )
}
