import React, { useState } from 'react'
import { Circle } from 'rc-progress'
import { useGoals } from '../utilities/GoalContext'
import { useAuth } from '../utilities/AuthContext'
import {useParams} from 'react-router-dom'
//import axios from 'axios'
import { Link } from 'react-router-dom'

export default function EditGoal(props) {
    const [percent, setPercent] = useState(100)
    const [goalData, setGoalData] = useState({community_vis:false})
    const { token } = useAuth()
    const {id} = useParams()
    //const history = useHistory()
    
   // console.log(id)


    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setGoalData(previousState => (
            {
                ...previousState,
                [e.target.name]: value,   
            }
        ))
    }
    const { editGoal } = useGoals()

    const handleSubmit = (e) => {
        e.preventDefault();
        editGoal(goalData, token, id)
    }
    //history.replace('/dashboard')
  
    return (
        <div>
           
            <div className="card mt-5 pt-5 mb-3">
            <div className="row text-center pt-5 mt-5">
                <div className='col'>
                    <Link to='/dashboard'>Back To Dashboard</Link>
                </div>
            </div>
          
                <div className="row g-0">
                    <div className="col-md-4 mx-5 px-5 my-5">
                        <Circle percent={percent} strokeWidth="4" strokeColor="#228b22" />
                    </div>
                    <div className="col-md-6 mx-5 px-5 my-5">
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-floating">
                                <input name='title' type="text" className="form-control"
                                    onChange={handleChange}
                                    value={goalData.title || ''}
                                />
                                
                                <label htmlFor="floatingInput">Goal Title</label>
                            </div>
                            <div className="form-floating">
                                <input name='description' type="text" className="form-control"
                                    onChange={handleChange}
                                    value={goalData.description || ''}
                                />
                                <label htmlFor="floatingInput">Goal Description</label>
                            </div>
                            <div className="form-floating">
                                <input name='progress' type="number" className="form-control"
                                    onChange={handleChange}
                                    value={goalData.progress || ''}
                                />
                                <label htmlFor="floatingPassword">Savings Progress</label>
                            </div>
                            <div className="form-floating">
                                <input name='total' type="number" className="form-control"
                                    onChange={handleChange}
                                    value={goalData.total || ''}
                                />
                                <label htmlFor="floatingPassword">Goal Total</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="community_vis" type="checkbox" id="flexSwitchCheckDefault"

                                    onChange={handleChange}
                                    value={goalData.community_vis || ''}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Public</label>
                            </div>
                            <div className="row pt-3 d-flex justify-content-center">
                                <div className="col-lg-5 col-md-8 col-sm-10">
                                    <button className="w-100 btn btn-success" type="submit">
                                   Edit Goal
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
