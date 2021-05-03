import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
        <Navbar />

        <div className="container text-center mb-5" >
                <img src="./SAPLING.png" className="w-25 pt-5" />
                <h2><i><b>Login, We're Rooting For You</b></i></h2>
                <br />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <form
                            // onSubmit={handleSubmit}
                            >
                
                            <div className="form-floating">
                                <input name='email' type="email" className="form-control"
                                    // onChange={handleChange}
                                    // value={formData.email || ''}
                                />
                                <label htmlFor="floatingInput">Email Address</label>
                            </div>
                            <div className="form-floating">
                                <input name='password' type="password" className="form-control"
                                    // onChange={handleChange}
                                    // value={formData.password || ''}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <span><p>Need an account? <Link to="/register">Register Here</Link></p></span>
                        </form>
                        <div className="row pt-3 d-flex justify-content-center">
                            <div className="col-lg-5 col-md-8 col-sm-10">
                               <button className="w-100 btn btn-success" type="submit" >
                                  Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        <Footer />    
        </div>
    )
}
