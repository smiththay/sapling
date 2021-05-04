import React from 'react'
import { useGoals } from '../utilities/GoalContext'

export default function GoalList(props) {
    const { myGoals } = useGoals()

    //console.log(myGoals)
    const mapGoals = myGoals.map((goal, index) => {
        return (
            <div className='col-3' key={index}>

                <div className="card">
                    <div className="card-header">
                        Featured
                 </div>
                    <div className="card-body">
                        <h5 className="card-title">{goal.title}</h5>
                        <p className="card-text">{goal.description}</p>

                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='row'>
            {mapGoals}
        </div>
    )
}
