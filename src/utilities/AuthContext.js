import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper'
import history from './history'
// code for user authentication

const AuthContext = createContext({});


// helper function that exports just the needed / wanted data for the provider
export const AuthHelper = () => {

    const [token, setToken] = useState('')
    const [userData, setUserData] = useState({})

    // retaining user login information
    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');
       // console.log(lsToken) 
        if (lsToken) {
            axiosHelper({
                url: '/api/user',
                successMethod: saveUserData,
                failureMethod: destroyToken,
                token: lsToken
            })
            setToken(lsToken)
        }
    }, [])

    useEffect(() => {

        if (token.length > 0) {
            getUser()
        }
    }, [token])

    function saveUserData(res) {
        setUserData(res.data);
     
    }
    function alertPopup(error) {
        alert('PLEASE DOUBLE CHECK YOUR EMAIL AND PASSWORD AND TRY AGAIN!')
    }

    function saveToken(res) {
        let APItoken; // Initalize variable
        if (res.config.url === "https://finalproject-contactsmiththay315914.codeanyapp.com/api/register") {
            APItoken = res.data.data.token
        } else if (res.config.url === "https://finalproject-contactsmiththay315914.codeanyapp.com/oauth/token") {
            APItoken = res.data.access_token
        }
      
        setToken(APItoken);
        window.localStorage.setItem('token', APItoken)
        history.replace('/dashboard')
    
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token')
        history.replace('/')
    }

    function register(registrationData) {
        axiosHelper({
            data: registrationData,
            method: 'post',
            url: '/api/register',
            successMethod: saveToken,
            failureMethod: alertPopup
        })
    }

     function getUser(token) {
        axiosHelper({
            method:'get',
            url:'/api/user',
            successMethod: saveUserData,
            token: token
        })
    }

    function login(loginData) {
        axiosHelper({
            data: {
            grant_type: "password",
            client_id: "2",
            client_secret: "n5sSon1N2Zrcg9mLIspncnApITp7LNf0rAQGqnvW",
            ...loginData
            },
            method: 'post',
            url: '/oauth/token',
            successMethod: saveToken,
            failureMethod: alertPopup
          
        })
        
    }
   
    function logout() {
        axiosHelper({
            url: '/api/logout',
            successMethod: destroyToken,
            token
        })
    }

  
    return { token, userData, register, login, logout}

}

// custom Provider component
export const AuthProvider = (props) => {

    const initialContext = AuthHelper()

    return (
        <AuthContext.Provider value={initialContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

// create a custom hook
export const useAuth = () => useContext(AuthContext);

// actual context
export default AuthContext;