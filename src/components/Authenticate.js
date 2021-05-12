import React, { useState } from 'react'
import { useAuth } from '../utilities/AuthContext'
import { Link } from 'react-router-dom'


export default function Authenticate(props) {
    // const [token, setToken] = useState('')
    const [formData, setFormData] = useState({})
    //console.log(formData)

    const handleChange = (e) => {
        setFormData(previousState => (
            {
                ...previousState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const { register } = useAuth()


    const handleSubmit = (e) => {  

        e.preventDefault()
        // if (formData.password.length < 8) {
        //     console.log('not working')
        //     alert("make sure all input fields are correct")
        // } else {
            register(formData)
                  
        
    }

    return (
        <div>
      
            <div className="container text-center mb-5" >
                <img src="./SAPLING.png" className="w-25 pt-5" alt="logo"/>
                <h2><i><b>Sign Up & Start Growing</b></i></h2>
                <br />

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <form
                            onSubmit={handleSubmit}>
                            <div className="form-floating">
                                <input name='name' type="text" className="form-control"
                                
                                    onChange={handleChange}
                                    value={formData.name || ''}
                                />
                                <label htmlFor="floatingInput">full name</label>
                            </div>
                            <div className="form-floating">
                                <input name='email' type="email" className="form-control"
                                    onChange={handleChange}
                                    value={formData.email || ''}
                                />
                                <label htmlFor="floatingInput">email address</label>
                            </div>
                            <div className="form-floating">
                                <input name='password' type="password" className="form-control"
                                    onChange={handleChange}
                                    value={formData.password || ''}
                                />
                                <label htmlFor="floatingPassword">password must have atleast 8 characters</label>
                            </div>
                            <span><p>Already have an account? <Link to="/login">Login Here</Link></p></span>
                        </form>
                        <div className="row pt-3 d-flex justify-content-center">
                            <div className="col-lg-5 col-md-8 col-sm-10">
                                <button className="w-100 btn btn-success" type="submit" onClick={handleSubmit}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>

           
        </div>
    )
}
