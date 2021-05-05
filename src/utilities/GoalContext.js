import React, { useState, useEffect, useContext, createContext } from 'react';
import { axiosHelper } from './axiosHelper';

const GoalContext = createContext({})

export const GoalHelper = (props) => {

    const [myGoals, setMyGoals] = useState([])
    const [allGoals, setAllGoals] = useState([])

    function saveMyGoals(res) {
        setMyGoals(res.data)
    }

    function saveAllGoals(res) {
        setAllGoals(res.data)
    }

    //See all personal goals
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
            getAllGoals()

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
   //See all public goals
    function getAllGoals() {
        axiosHelper({
            url: '/api/goals/all',
            token: props.token,
            successMethod: saveAllGoals
        })
    }


    //Delete goal
    //Edit Goal 

    //comment on Goal
    //like Goal 




    return { myGoals, allGoals, createGoal }
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