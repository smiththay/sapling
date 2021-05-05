import React, { useState } from 'react';
import { useAuth } from '../utilities/AuthContext';
import { GoalProvider } from '../utilities/GoalContext';
import GoalTracker from './GoalTracker';
import GoalList from './GoalList';


export default function Dashboard(props) {
    const { token } = useAuth()
   // console.log(token)

    return (
        <>
      
            <GoalProvider token={token}>
                <div className='container text-center mt-5 pt-5'>
                    <h1>Hello World This Is Your Dashboard</h1>
                    <div className='row'>
                        <div className ='col'>
                            
                        </div>
                    </div>

                    <GoalTracker />
                    <hr />
                    <GoalList />

                </div>
            </GoalProvider>
        </>

    )
}
