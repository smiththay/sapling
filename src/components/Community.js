import React from 'react'
import { useGoals } from '../utilities/GoalContext'
import { Circle } from 'rc-progress'
import Comment from './Comment'
import './Community.css'


export default function Community() {

const { allGoals  } = useGoals()

const mapAllGoals = allGoals.map((goal, index) => {
    if(goal.community_vis == 1)
    return (
        <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
            <div className="card-com">
                <div className='text-center'>
                Name of person
                </div>
                <div className='row d-flex justify-content-center text-center mt-5'>
                    <div className ='col-12'>
            
                    <Circle percent={(goal.progress/goal.total)*100} strokeWidth="4" strokeColor="#228b22" className='mw-25'/>
                    <span><b className='per'>{((goal.progress/goal.total)*100).toFixed(2)}%</b></span>
                    </div>                   
                </div>
                <div className="card-body">
                    <h5 className="card-title">{goal.title}</h5>
                    <p className="card-text">{goal.description}</p>
                </div>
                <span><h2 className='text-center'>${goal.progress} / ${goal.total}</h2></span>
                <Comment />
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
       </div>
  
    <div className='row'>

        {mapAllGoals}
    </div>
    </div>
)

}
