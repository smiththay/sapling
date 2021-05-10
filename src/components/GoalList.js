import React, {useState} from 'react'
import { useGoals } from '../utilities/GoalContext'
import { Circle } from 'rc-progress';
import { Link } from 'react-router-dom';
import './GoalList.css'

export default function GoalList(props) {

    const { myGoals } = useGoals()

    

    const mapGoals = myGoals.map((goal, index) => {
        return (
           
            <div className='col-md-6 col-sm-12 pt-5' key={index}>
                <div className="card-list">
                    {/* <div>
                        Goal {index + 1}
                    </div> */}
                    <div className='row d-flex justify-content-center mt-5'>
                        <div className ='col-6 border-danger'>
                        <h2 className="card-title"><b>{goal.title}</b></h2>
                        <Circle percent= {(goal.progress/goal.total)*100} strokeWidth="4" strokeColor="#228b22" className='mw-25 mb-5 mt-5'/>
                        <span><b>{((goal.progress/goal.total)*100).toFixed(2)}% of the way there!</b></span>
                        </div>                   
                    </div>
                    <div className="card-body ">
                    
                        <p className="card-text">{goal.description}</p>
                    </div>
                    <span><h2>$<b>{goal.progress}</b> /</h2><h5> ${goal.total}</h5></span>
                    <Link className='btn btn-warning mt-2' to={'/edit/' + goal.id}>Edit Goal</Link>
        
                </div>
            </div>
        )
    });
    return (
        <div className='row '>
            {mapGoals}
        </div>
    )
}
