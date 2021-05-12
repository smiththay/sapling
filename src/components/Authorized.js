import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useAuth } from '../utilities/AuthContext'
import { GoalProvider } from '../utilities/GoalContext'

import Dashboard from './Dashboard'
import Community from './Community'
import EditGoal from "./EditGoal"


export default function Authorized() {
    const { token } = useAuth()
    return (
        
          <GoalProvider token={token}>
            <Switch>

                <Route path="/dashboard">
                    <Dashboard />
                </Route>

                <Route path="/community">
                    <Community />
                </Route>

                <Route path="/edit/:id"> 
                    <EditGoal />
                </Route>

            </Switch>
            </GoalProvider>
       
    )
}
