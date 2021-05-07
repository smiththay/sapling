import React from 'react'
import { useGoals } from '../utilities/GoalContext'
import { Circle } from 'rc-progress'
import { Link } from 'react-router-dom';


export default function Community() {



const { allGoals  } = useGoals()


const mapAllGoals = allGoals.map((goal, index) => {
    if(goal.community_vis == 1)

    return (
        <div className='col-6' key={index}>
            <div className="card">
                <div className="card-header">
                </div>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className ='col-6'>
            
                    <Circle percent={(goal.progress/goal.total)*100} strokeWidth="4" strokeColor="#228b22" className='mw-25'/>
                    <span><b>%{((goal.progress/goal.total)*100).toFixed(2)}</b></span>
                    </div>                   
                </div>
                <div className="card-body">
                    <h5 className="card-title">{goal.title}</h5>
                    <p className="card-text">{goal.description}</p>
                </div>
                <span><h2>${goal.progress} / ${goal.total}</h2></span>
            </div>
        </div>
        
    )
});
return (
    <div className='container pt-5 mt-5'>
       <div className='row text-center'>
       <div className='col-12'>
           <h1>Community</h1>
       </div>
       <div className='col-12'>
            <Link to='/dashboard'>Dashboard</Link>
       </div>
       </div>
  
    <div className='row'>

        {mapAllGoals}
    </div>
    </div>
)

}
