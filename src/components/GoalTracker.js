import React, { useState } from 'react'
import { useGoals } from '../utilities/GoalContext'
import { useAuth } from '../utilities/AuthContext'
import './GoalTracker.css'


export default function GoalTracker() {
    const [goalData, setGoalData] = useState({ community_vis: false })
    const { token } = useAuth()
    //console.log(token)

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setGoalData(previousState => (
            {
                ...previousState,
                [e.target.name]: value,
            }
        ))
    }
    const { createGoal } = useGoals()

    const handleSubmit = (e) => {
        e.preventDefault();
        createGoal(goalData)
        setGoalData('')
        window.scrollTo(0,document.body.scrollHeight);
        
    }

    return (
        <div>

            <section className="tracker-bg">
                <div className="container">

                    <div className="card-track  mb-3">

                        <div className="row">
                            <div className="row pt-5 justify-content-center">

                                <div className="col-6 mt-5 pt-5">

                                    <form
                                        name='create-course-form'
                                        onSubmit={handleSubmit}
    
                                        className='track-form'
                                    >
                                        <div className='row pb-3'>
                                            <div className="form-floating ">
                                                <input name='title' type="text" className="form-control"
                                                    onChange={handleChange}
                                                    value={goalData.title || ''}
                                                />
                                                <label htmlFor="floatingInput">Goal Title</label>
                                            </div>
                                        </div>
                                        <div className='row pb-3'>
                                            <div className="form-floating">
                                                <input name='description' type="text" className="form-control"
                                                    onChange={handleChange}
                                                    value={goalData.description || ''}
                                                />
                                                <label htmlFor="floatingInput">Goal Description</label>
                                            </div>
                                        </div>
                                        <div className='row pb-3'>

                                            <div className='col-6'>
                                                <div className="form-floating">
                                                    <input name='progress' type="number" className="form-control"
                                                        onChange={handleChange}
                                                        value={goalData.progress || ''}
                                                    />
                                                    <label htmlFor="floatingPassword">Savings Progress</label>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className="form-floating">
                                                    <input name='total' type="number" className="form-control"
                                                        onChange={handleChange}
                                                        value={goalData.total || ''}
                                                    />
                                                    <label htmlFor="floatingPassword">Goal Total</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row justify-content-center'>
                                            <div className='col-5'>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" name="community_vis" type="checkbox" id="flexSwitchCheckDefault"

                                                        onChange={handleChange}
                                                        value={goalData.community_vis || ''}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h4 className='switch'>Make Public</h4></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-3 d-flex justify-content-center">
                                            <div className="col-lg-5 col-md-8 col-sm-10">
                                                <button className="w-100 btn btn-warning" type="submit">
                                                    Add Goal
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}
