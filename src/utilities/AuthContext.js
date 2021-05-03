import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper'
// code for user authentication

const AuthContext = createContext({});


// helper function that exports just the needed / wanted data for the provider
export const AuthHelper = () => {

    const [token, setToken] = useState('')

    // retaining user login information
    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');

        if (lsToken) {
            axiosHelper({
                url: '/api/register',
                successMethod: saveUserData,
                failureMethod: destroyToken,
                token: lsToken

            })

            setToken(lsToken)
        }
    }, [])

    function saveUserData(res) {
        console.log("we got the user!", res.data)
    }

    function saveToken(res, history) {
        let APItoken; // Initalize variable
        if (res.config.url === "https://finalproject-contactsmiththay315914.codeanyapp.com/api/register") {
            APItoken = res.data.data.token
        } else if (res.config.url === "https://finalproject-contactsmiththay315914.codeanyapp.com/oauth/token") {
            APItoken = res.data.access_token
        }
        // const APItoken = res.data.data.token || res.data.access_token;
        setToken(APItoken);
        window.localStorage.setItem('token', APItoken)
        history.replace('/dashboard');
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token');
    }

    function register(registrationData, history) {
        axiosHelper({
            data: registrationData,
            method: 'post',
            url: '/api/register',
            successMethod: (res) => saveToken(res, history)
        })

    }

    function login(loginData, history) {
        axiosHelper({
            data: {
            grant_type: "password",
            client_id: "2",
            client_secret: "BEQ7Qltj916PmZ5csKJfHVVVswYbJI6pEzrHSsuX",
            ...loginData
            },
            method: 'post',
            url: '/oauth/token',
            successMethod: (res) => saveToken(res, history)
        })
    }
 

    function logout() {
        axiosHelper({
            url: '/api/auth/logout',
            successMethod: destroyToken,
            token
        })
    }


    return { token, register, login, logout }

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