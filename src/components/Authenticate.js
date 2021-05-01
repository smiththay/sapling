import React, { useState } from 'react';
import { BrowserRouter as Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Authenticate(props) {
    let history = useHistory();
    const [token, setToken] = useState('')
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData(previousState => (
            {
                ...previousState,
                [e.target.name]: e.target.value
            }
        ))

    }

    const saveToken = (newToken) => {
        setToken(newToken) 
        window.localStorage.setItem('token', newToken)
        console.log("success", newToken)

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (formData.password.length < 8) {
            console.log('not working')
            alert("make sure all input fields are correct")
        } else {
            const apiUrl = 'https://finalproject-contactsmiththay315914.codeanyapp.com/api/register'
            axios.post(apiUrl, formData)
                .then(response => {
                    saveToken(response.data.data.token)
                    console.log(response)
                    sessionStorage.setItem('token', response.data.data.token)
                    history.push('/dashboard');

                
                    // useHistory push to Dashboard
                })
                .catch(error => {
                    console.log(error)
                })
        }
        e.preventDefault()

    }


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
                                <button className="w-100 btn btn-success" type="submit" onClick={handleSubmit}>
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
