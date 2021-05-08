import React from 'react';

import GoalTracker from './GoalTracker';
import GoalList from './GoalList';



export default function Dashboard(props) {

  
    return (

        <div className='container text-center mt-5 pt-5'>
            <h1>Hello World This Is Your Dashboard</h1>
           

            <GoalTracker />
            <hr />
            <GoalList />

        </div>



    )
}
