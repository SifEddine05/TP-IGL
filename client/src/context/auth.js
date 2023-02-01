import {  useContext, useEffect, useState } from "react";
import { createContext } from "react";
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
            
            setUser({
                id : 123,
                firstName :"sifeddine", 
                lastName : "sellami",
                email : "ks@esi.dz", 
                createdAt : "2021-02-01"   
   
            })
            // this SetUser will be replaced by the fetch below  
    
           /* fetch('/getCurrentUser')
            .then(res => { return res.json })
            .then (data => {
                    setUser({
                        id : res.id,
                        firstName : res.firstName , 
                        lastName : res.lastName ,
                        email : res.email,
                        createdAt : res.createdAt    
                    })
             } ) 
            .catch(err => {} )*/
        }
        
    },[user])

    const Login =(token)=>{ 
        localStorage.setItem('token',token)
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