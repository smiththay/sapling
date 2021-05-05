import React from 'react';

import GoalTracker from './GoalTracker';
import GoalList from './GoalList';
import { Link } from 'react-router-dom';


export default function Dashboard(props) {

    // console.log(token)

    return (



        <div className='container text-center mt-5 pt-5'>
            <h1>Hello World This Is Your Dashboard</h1>
            <div className='row'>
                <div className='col'>
                    <Link to="/community">Community Page</Link>
                </div>
            </div>

            <GoalTracker />
            <hr />
            <GoalList />

        </div>



    )
}
