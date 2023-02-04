import { Outlet, Navigate } from "react-router-dom"
const PrivateRoutes = () => {
     let auth = false
    // if(localStorage['jwt'])
    if(localStorage.getItem('token')) {
        auth = true;
    }
    return (
        auth ? <Outlet /> : <Navigate to={"/Login"} />
    )
}

export default PrivateRoutes;