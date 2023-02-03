import Exb from "../photos/Exclude_below.svg"
import Exa from "../photos/Exclude_above.svg"
import logo from "../photos/logo1.svg"
import eye from "../photos/eye.png"
import eyeOpen from "../photos/eyeO.png"
// import google from "../photos/google.svg"
import { useState,useEffect } from "react"
import { Link } from 'react-router-dom';
import { useAuth } from "../context/auth"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import jwt_decode from "jwt-decode";

const Login = () => {
    const location = useLocation()
    const redirectPath = location.state?.path || '/PropertiesFeed' 
    const auth=  useAuth()
    const navigate = useNavigate()
   


    const handleLogin = (token)=>{
        auth.Login(token)
        // navigate(redirectPath, {replace : true})

    }
    

    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [error2, setError2] = useState({
        valid: true,
        message: "email not found "
    })

    function handleCallbackResponse(response) {
        var userObject = jwt_decode(response.credential);
        localStorage.setItem('token',response.credential);
        handleLogin(response.credential)
        setEmail(userObject.email)
        //confirming that the user is authentified with google 
        setError(false)

    }

    useEffect(() => {
        localStorage.setItem('token',"")
        /* global google */
        google.accounts.id.initialize({
            client_id: "440038003517-sbvp2846sqmiaokjm4459t80k2hp221m.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "medium",
        });

    }, [])


    //checking if the user authentified with google 
    const submit = async () => {
        if (email === "") {
            setError(true)
            return
        }
        let headersList = {
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "email": email
        });

        let response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        //checking if the user exist in the database 
        if (data.message === "Email does not exist") {
            setError2({ ...error2, valid: false })
            return
        }
        setError2({ ...error2, valid: true })
        
        navigate(redirectPath, {replace : true})
        localStorage.setItem('id',data[0][0])

    }
    return ( 
 
    <div className="h-screen  w-full flex justify-between">

            <div className="self-end w-[10%]">
                <img src={Exb} alt="exclude" className="w-[100%]" />
            </div>

            <div className=" self-center   justify-center items-center lg:w-[60%] sm:w-[75%] w-[90%]">
                <div className="flex justify-center items-center w-[50%] mx-auto">
                    <img src={logo} alt="logo" className="w-[12%]" />
                    <h3 className="lg:text-[36px] md:text-[26px] text-[20px] text-[17px]font-black md:p-2 p-1 ">DARNAB</h3>
                </div>
                <h3 className="lg:text-[28px] md:text-[22px] sm:text-[16px] text-[13px] font-medium text-center lg:py-5 md:py-4 sm:py-3 py-2"> Welcome back! </h3>


                <p className="text-orange-500 underline text-center mb-2"> select your google account </p>
                <div className="w-[45%] mx-auto rounded-full    md:p-3 p-2  hover:cursor-pointer  mt-4 text-white">
                    <div id="signInDiv" className="flex items-center justify-center rounded-full w-full" >
                    </div>

                </div>

                <div onClick={() => { submit() }} className="w-[45%] mx-auto rounded-full  bg-[#FF5D02]  md:p-3 p-2 hover:text-[#fff] hover:cursor-pointer hover:bg-gray-600 mt-4 text-white">
                    <h3 className="text-center lg:text-[18px] md:text-[15px] sm:text-[12px] text-[10px] font-bold">Sign in</h3>
                </div>
                {error && <p className="w-full text-center text-red-500 font-bold mt-4">google authentification required</p>}
                {!error2.valid && <p className="w-full text-center text-red-500 font-bold mt-4">{error2.message}</p>}

                <div className="w-[50%] mx-auto lg:py-7 md:py-5 sm:pt-3 pt-2">
                    <p className="text-center lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] ">Don t have an account ? <Link to="/SignUp" className="underline hover:text-[#177aeb]">Sign Up</Link></p>
                </div>
            </div>

            <div className="self-start w-[8%]">
                <img src={Exa} alt="exclude-above" className="w-[100%]" />
            </div>

        </div>

    );
}
 
export default Login;