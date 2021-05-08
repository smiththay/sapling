import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper'
import history from './history'
// code for user authentication

const AuthContext = createContext({});


// helper function that exports just the needed / wanted data for the provider
export const AuthHelper = () => {

    const [token, setToken] = useState('')
    const [userData, setUserData] = useState({});

    // retaining user login information
    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');

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

    function saveUserData(res) {
        setUserData(res.data);
        //console.log(res.data)

    }

    function saveToken(res, history) {
        let APItoken; // Initalize variable
        if (res.config.url === "https://finalproject-contactsmiththay315914.codeanyapp.com/api/register") {
            APItoken = res.data.data.token
        } else if (res.config.url === "https://finalproject-contactsmiththay315914.codeanyapp.com/oauth/token") {
            APItoken = res.data.access_token
        }
      
        setToken(APItoken);
        window.localStorage.setItem('token', APItoken)
        history.push('/dashboard');
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token')
        history.replace('/')
    }

    function register(registrationData, history) {
       
        axiosHelper({
            data: registrationData,
            method: 'post',
            url: '/api/register',
            successMethod: (res) => saveToken(res, history)
        })

    }

     function index(token) {
        axiosHelper({
            method:'get',
            url:'/api/auth/user',
            successMethod: saveUserData,
            token
        })
    }

    function login(loginData, history) {
       
        axiosHelper({
            data: {
            grant_type: "password",
            client_id: "2",
            client_secret: "n5sSon1N2Zrcg9mLIspncnApITp7LNf0rAQGqnvW",
            ...loginData
           
            },
            
            method: 'post',
            url: '/oauth/token',
            successMethod: (res) => saveToken(res, history),
          
        })
        
    }
   
    function logout() {
        axiosHelper({
            url: '/api/logout',
            successMethod: destroyToken,
            token
        })
    }


    return { token, register, login, logout, userData }

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