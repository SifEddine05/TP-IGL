import { Navigate, useLocation, useNavigate } from "react-router-dom"
import {useAuth} from "../context/auth"



export const RequireAuth = ({children})=>{
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    if(!auth.user)
    {
        return (<Navigate to='/login' state={{path:location.pathname}} replace={true} />)  
    }    
    else {
        return (children )
    }

}

/*    const auth = useAuth()
    const navigate = useNavigate()*/