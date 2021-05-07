import React, { useState, useEffect, useContext, createContext } from 'react';
import { axiosHelper } from './axiosHelper';
import history from './history'

const GoalContext = createContext({})

export const GoalHelper = (props) => {

    const [myGoals, setMyGoals] = useState([])
    const [allGoals, setAllGoals] = useState([])

    function saveMyGoals(res) {
        setMyGoals(res.data)
        history.push('/dashboard')
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
            editGoal()
            deleteGoal()
        }
    }, [props.token])

    //Create Goal
    function createGoal(goalData, token) {
        //console.log(goalData)
        axiosHelper({
            token,
            data: goalData,
            method: 'post',
            url: '/api/goal/create',
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

    //Edit Goal 
    function editGoal(goalData, id) {
        //console.log(goalData)
        axiosHelper({
            token: props.token,
            data: goalData,
            method: 'post',
            url: `/api/goal/update/${id}`,
            successMethod: saveMyGoals  
        })    
    }

    //Delete goal
    function deleteGoal(id) {
        axiosHelper({
            method: 'delete',
            url: `/api/goal/destroy/${id}`,
            token: props.token,
            successMethod: saveMyGoals
        })
    }









    //add comment on Goal
    //add like Goal 


    return { myGoals, allGoals, createGoal, editGoal, deleteGoal}
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