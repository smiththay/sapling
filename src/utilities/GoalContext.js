import React, { useState, useEffect, useContext, createContext } from 'react';
import { axiosHelper } from './axiosHelper';

const GoalContext = createContext({})

export const GoalHelper = (props) => {

    const [myGoals, setMyGoals] = useState([])

    function saveMyGoals(res) {
        setMyGoals(res.data)
    
    }
    //See all our goals
    function getMyGoals() {
        axiosHelper({
            url: '/api/goals/personal',
            token: props.token,
            successMethod: saveMyGoals
        })
    }
    useEffect(() => {
        if (props.token && props.token.length > 0) {

            getMyGoals()
        }
    }, [props.token])

    //Create Goal
    function createGoal(goalData, token) {
        //console.log(goalData)
        axiosHelper({
            token,
            data: goalData,
            method: 'post',
            url: '/api/goals/create',
            successMethod: saveMyGoals
        })
    }



    //Delete goal
    //Edit Goal
    //See all public goals 
    //comment on Goal
    //like Goal 




    return { myGoals, createGoal }
}



export const GoalProvider = (props) => {
   // console.log(props)

    const initialContext = GoalHelper(props)

    return (
        <GoalContext.Provider value={initialContext}>
            {props.children}
        </GoalContext.Provider>
    )
}


export const useGoals = () => useContext(GoalContext)

export default GoalContext