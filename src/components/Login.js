import React, { useState } from 'react';

import { useAuth } from '../utilities/AuthContext';
import { BrowserRouter as Link, useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory()
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData(previousState => (
            {
                ...previousState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData, history)
        console.log(formData)

    }


    return (
        <div>
          

            <div className="container text-center mb-5" >
                <img src="./SAPLING.png" className="w-25 pt-5" />
                <h2><i><b>Login, We're Rooting For You</b></i></h2>
                <br />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <form
                            onSubmit={handleSubmit}
                        >

                            <div className="form-floating">
                                <input name='username' type="email" className="form-control"
                                    onChange={handleChange}
                                    value={formData.username || ''}
                                />
                                <label htmlFor="floatingInput">Email Address</label>
                            </div>
                            <div className="form-floating">
                                <input name='password' type="password" className="form-control"
                                    onChange={handleChange}
                                    value={formData.password || ''}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <span><p>Need an account? <Link to="/register">Register Here</Link></p></span>
                            <div className="row pt-3 d-flex justify-content-center">
                                <div className="col-lg-5 col-md-8 col-sm-10">
                                    <button className="w-100 btn btn-success" type="submit" >
                                        Login
                                </button>
                                </div>
                            </div>
                        </form>



                    </div>
                </div>
            </div>

           
        </div>
    )
}
