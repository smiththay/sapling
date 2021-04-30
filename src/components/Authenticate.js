import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Authenticate() {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {

        setFormData(previousState => (
            {
                ...previousState,
                [e.target.name]: e.target.value
            }
        ))

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (formData.password.length < 8) {
            console.log('not working')
        } else {
            const apiUrl = 'https://finalproject-contactsmiththay315914.codeanyapp.com/api/register'
            axios.post(apiUrl, formData)
                .then(response => {
                    console.log(response)

                    // save token
                    // useHistory push to Dashboard
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }
    console.log(formData)

    // setup form validation
    // setup error handling from API

    return (
        <div>
            <Navbar />
            <div className="LoginBox text-center mb-5" >
                <img src="./SAPLING.png" className="w-25" />
                <main className="form-signin">
                    <div className="row d-flex justify-content-center">
                        <div className="col-3">
                            <form
                                onSubmit={handleSubmit}>
                                <div className="form-floating">
                                    <input
                                        name='name'
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        value={formData.name || ''}

                                    />
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        name='email'
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        onChange={handleChange}
                                        value={formData.email || ''}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        name='password'
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={formData.password || ''}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-success" type="submit">
                                    Sign Up
                              </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}
