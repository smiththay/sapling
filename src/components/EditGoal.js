import React, { useEffect, useState } from 'react'
import { useGoals } from '../utilities/GoalContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Edit.css'



export default function EditGoal(props) {
    const { id } = useParams()
    const { editGoal, deleteGoal, myGoals } = useGoals()
    
    const currentGoal = myGoals.length > 0 ? myGoals.find(goal => goal.id === parseInt(id)) : {}
    //console.log(currentGoal)

    const [goalData, setGoalData] = useState(currentGoal)


    useEffect(() => {
        setGoalData(previousGoal => currentGoal)
    }, [myGoals.length])
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

    const handleSubmit = (e) => {
        e.preventDefault();
        editGoal(goalData, id)

    }
    
    const deleteGoalFun = (e) => {
        e.preventDefault();
         deleteGoal(id)
     
    }

    return (
        <div>

            <div className="mt-5 pt-5 mx-5 mb-3">
                <div className="row text-center pt-5 mt-5">
                    <div className='col'>
                        <Link to='/dashboard'>Back To Dashboard</Link>
                    </div>
                </div>

                <div className="row justify-content-center g-0">
                    {/* <div className="col-md-4 mx-5 px-5 my-5">
                        <Circle percent={percent} strokeWidth="4" strokeColor="#228b22" />
                    </div> */}
                    <div className="edit col-md-4 col-sm-10  px-5 my-5">
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
                                    checked={!!goalData.community_vis}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h5>Make Public</h5></label>
                            </div>
                            <div className="row pt-3 d-flex justify-content-center">
                                <div className="col-lg-5 col-md-8 col-sm-10">
                                    <button className="w-100 btn btn-secondary" type="submit">
                                        Edit Goal
                                </button>
                                </div>
                            </div>
                        </form>
                        <div className="row pt-3 d-flex justify-content-center">
                        <div className="col-lg-5 col-md-8 col-sm-10">
                                    <button onClick={deleteGoalFun} className="w-100 btn btn-danger" type="submit">
                                        Delete Goal
                                </button>
                                </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
