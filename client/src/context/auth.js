import {  useContext, useEffect, useState } from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";
const AuthContext= createContext(null)

export const AuthProvider =({children})=>{
    const [user , setUser] = useState({
        id : 0,
        firstName :"", 
        lastName : "",
        email : "", 
        createdAt : ""   
    }) // it will contain the  object of the current user fetched 
    
    useEffect(()=>{
        if(user===null || user.id===0)
        { 
            let token=localStorage.getItem('token')
            if(token!==""){
            var userInfo=jwt_decode(token)
            setUser({
                id : localStorage.getItem('id'),
                firstName :userInfo.given_name, 
                lastName : userInfo.family_name,
                email : userInfo.email, 
                createdAt : "2021-02-01"   
            })
            }
        }
        
    },[user])

    const Login =(token)=>{ 
        // localStorage.setItem('token',token)
        setUser({
            id : 0,
            firstName :"", 
            lastName : "",
            email : "",   
            createdAt : ""   
 
        })

    }  
    const Logout = ()=>{
       localStorage.removeItem('token')
        setUser(null) 
    }
    return(<AuthContext.Provider value={{user,Login,Logout}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth =() =>{
    return useContext(AuthContext)
}