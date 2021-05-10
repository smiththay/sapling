import React from 'react'
import { useGoals } from '../utilities/GoalContext'
import './Community.css'
import CommentModal from './CommentModal'

//import { useAuth } from '../utilities/AuthContext'


export default function Community() {

    const { allGoals } = useGoals()
    //const { allUsers } = useAuth();

    const mapAllGoals = allGoals.map((goal, index) => {

        if (goal.community_vis == 1) {

            return (
                <CommentModal key={index} goal={goal}/>
            )
        }
    });
    return (
        <div className='container1 px-5 pt-5 mt-5'>
            <div className='row text-center'>
                <div className='col-12'>
                    <h1 className='mb-5 mt-5'>Community</h1>
                </div>
            </div>

            <div className='row'>

                {mapAllGoals}
            </div>
        </div>
    )

}
