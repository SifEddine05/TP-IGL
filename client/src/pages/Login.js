import Exb from "../photos/Exclude_below.svg"
import Exa from "../photos/Exclude_above.svg"
import logo from "../photos/logo1.svg"
import eye from "../photos/eye.png"
import eyeOpen from "../photos/eyeO.png"
import google from "../photos/google.svg"
import { useState } from "react"
import { Link } from 'react-router-dom';
import { useAuth } from "../context/auth"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
const Login = () => {
    const location = useLocation()
    const redirectPath = location.state?.path || '/PropertiesFeed' 
    const auth=  useAuth()
    const navigate = useNavigate()
    const [user , setUser] = useState('ss') // it will contain the token here 
    const handleLogin = ()=>{
        auth.Login(user)
        navigate(redirectPath, {replace : true})
        console.log(redirectPath);

    }
    /*************Controle forms ****************** */
    const [email , setEmail] = useState('')
    const [password , setPassword] =useState('')
    const [err , setErr] =useState(false)
    const [message , setMessage] = useState('')
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    const handleSubmit = ()=>{
        setErr(false)
        if(email==='' || password==='') 
        {
            setMessage('please enter an email and a password ')
            setErr(true)
        }
        else if (!isValidEmail(email)){
            
            setMessage('please enter a vaild email')
            setErr(true)
        }
        else{
            handleLogin() // we replace this by the fetch in the comment 
            const loginobj = {
                email : email ,
                password : password 
            }
          /*  fetch('/login' , {method: 'POST' , 
                              headers : {"Content-Type" : "application/json"},
                              body : JSON.stringify(loginobj) 
                            })
                            .then((res)=>{
                                if(!res.ok) {throw Error }
                                else{
                                    handleLogin()  // we push aguments depanding of our backend (we must have the user name) and the token   // we need to change it to handleSubmit in login button 
                                }
                                })
                            .catch((err)=>{
                                setMessage('Login Failed: Your email or password is incorrect')
                                setErr(true)
                            })*/
        }
        
    }
    /************************************************** */


    const [show , setShow]=useState(false)
    const [type , setType]=useState("password")
    const handlClick= ()=>{
        if(show){
            setShow(false) 
            setType("password")
        }
        else {
            setShow(true) 
            setType("text")
        }
    }
    return ( 
    <div className="h-screen  w-full flex justify-between">
        <div className="self-end w-[10%]">
            <img src={Exb} alt="exclude" className="w-[100%]"/>
        </div>

        <div className=" self-center   justify-center items-center lg:w-[60%] sm:w-[75%] w-[90%]">
            <div className="flex justify-center items-center w-[50%] mx-auto">
                <img src={logo} alt="logo" className="w-[12%]"/>
                <h3 className="lg:text-[36px] md:text-[26px] text-[20px] text-[17px]font-black md:p-2 p-1 ">DARNAB</h3>
            </div>
            <h3 className="lg:text-[28px] md:text-[22px] sm:text-[16px] text-[13px] font-medium text-center lg:py-5 md:py-4 sm:py-3 py-2"> Welcome back! </h3>
            <div className="flex justify-center lg:py-5 md:py-4 sm:py-3 py-2 w-full">
                <input  type="email" value={email} minlength="5" onChange={(e)=>{setEmail(e.target.value)}} className=" lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] border-gray-600 focus:outline-none w-[45%] border-2  focus:border-[#FFC29F] rounded-full md:p-3 p-2 md:px-5 px-3"placeholder="Email address"  />
             </div>

             <div className="flex justify-center lg:py-5 md:py-4 sm:py-3 py-2 w-full">
                 <div className="w-[45%] relative">
                    <input  type={type} value={password}  minlength="5" onChange={(e)=>{setPassword(e.target.value)}} className=" lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] border-gray-600 focus:outline-none w-full border-2  focus:border-[#FFC29F] rounded-full md:p-3 p-2 md:px-5 px-3"placeholder="Password"  />
                  {!show  && 
                    <div className="w-[10%] absolute top-3  right-4 hover:cursor-pointer" onClick={handlClick } >
                      <img src={eye} alt="close eye" />
                     </div> }
                     {show  && 
                    <div className="w-[10%] absolute top-3  right-4 hover:cursor-pointer" onClick={handlClick } >
                      <img src={eyeOpen} alt="open eye" />
                     </div> }
                 </div>
             </div>

             <div class="flex justify-around  items-center w-[50%] mx-auto">
                <label className="flex justify-start items-center text-gray-500 font-bold my-4">
                    <input type="checkbox"className="leading-loose text-pink-600 hover:cursor-pointer" />
                    <span className="py-2 px-2 lg:text-[14px] md:text-[12px]  sm:text-[10px] text-[8px] text-gray-600 leading-snug"> RememberMe </span>
                </label>
                <h3 className="py-2 lg:text-[14px] md:text-[12px]  sm:text-[10px]  text-[8px]  text-gray-600 leading-snug opacity-75 hover:text-[#177aeb]"><a href="/frgpass">Forgot password</a></h3> 
            </div>
            <div className="flex justify-center items-center">
                <button className="w-[45%] rounded-full  bg-[#FF5D02]  md:p-3 p-2 hover:text-[#fff] hover:cursor-pointer hover:bg-gray-600 " onClick={handleSubmit}>  
                    <h3 className="text-center lg:text-[18px] md:text-[15px] sm:text-[12px] text-[10px] font-bold">Sign in</h3>
                </button>
            </div>
            {err && <div  className="w-[100%] mx-auto lg:pt-2 pt-1" >
                <p className="text-center font-bold lg:text-[14px] md:text-[12px] sm:text-[9px] text-[7px] text-red-600 ">{message}</p>
            </div> }
            <div className="w-[45%] mx-auto py-2">
                <p className="text-center">OR</p>
            </div>

            <div className="w-[45%] flex justify-center mx-auto rounded-full  border-2 border-[#000] md:p-3 p-2 hover:cursor-pointer hover:bg-gray-400 ">
                <img src={google} alt="google" className="w-[8%]"/>
                <h3 className="text-center lg:text-[18px] md:text-[14px] sm:text-[11px] text-[8px] font-bold md:px-2 px-1">Continue with Google</h3>
            </div>

            <div className="w-[50%] mx-auto lg:py-7 md:py-5 sm:pt-3 pt-2">
                <p className="text-center lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] ">Don t have an account ? <Link to="/SignUp" className="underline hover:text-[#177aeb]">Sign Up</Link></p>
            </div>
        </div>

        <div className="self-start w-[8%]">
            <img src={Exa} alt="exclude-above" className="w-[100%]"/>
        </div>

    </div> );
}
 
export default Login;