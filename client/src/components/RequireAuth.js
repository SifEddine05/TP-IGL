import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/auth"



export const RequireAuth = ({children})=>{
    const location = useLocation()
    const item = localStorage.getItem('token')

    if(!item)
    {
        return (<Navigate to='/login' state={{path:location.pathname}} replace={true} />)  
    }    
    else {
        return (children )
    }

}

/*    const auth = useAuth()
    const navigate = useNavigate()*/