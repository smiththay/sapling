import React from 'react';
import { useAuth } from '../utilities/AuthContext';
import GoalTracker from './GoalTracker';
import GoalList from './GoalList';



export default function Dashboard(props) {

    const { userData } = useAuth();

    //console.log(userData)
    return (
       
        <div className='container text-center mt-5 pt-5'>
            <h1 className='mt-5 mb-5'>Hey <i className='username'><b>{userData.name}</b></i>! Lets Make Some Goals!</h1>
            <GoalTracker />
            <hr />
            <GoalList />

        </div>



    )
}
