import { Children, useContext, useState } from "react";
import { createContext } from "react";
const AuthContext= createContext(null)

export const AuthProvider =({children})=>{
    const  [user,setUser] = useState(null) 
    const Login =(user)=>{ setUser(user) } // we need to put the token in the local storage 
    const Logout = ()=>{
        setUser(null) // here we need to delete local storage 
    }
    return(<AuthContext.Provider value={{user,Login,Logout}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth =() =>{
    return useContext(AuthContext)
}