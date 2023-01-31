import Exb from "../photos/Exclude_below.svg"
import Exa from "../photos/Exclude_above.svg"
import logo from "../photos/logo1.svg"
import eye from "../photos/eye.png"
import eyeOpen from "../photos/eyeO.png"
import google from "../photos/google.svg"
import { useState } from "react"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


const SignUp = () => {
    const [show , setShow]=useState(false)
    const [show2 , setShow2]=useState(false)

    const [type , setType]=useState("password")
    const [type2 , setType2]=useState("password")
    /***********Conrole Forms************************** */
    const [firstName , setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const[email , setEmail]=useState('')
    const[password , setPassword]=useState('')
    const[confirmePassword,setConfirmePassword] = useState('')
    const[agree , setAgree] =useState(false)
    const [err , setErr] = useState(false)
    const [message , setMessage]=useState('')
    const navigate = useNavigate()

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    const handleSubmit =()=>{
        setErr(false)
        if(firstName==='' || lastName==='' || email==='' || password==='' || confirmePassword==='' )
        {
            setMessage('Please fill in all fields')
            setErr(true)
        }
        else if (!isValidEmail(email))
        {
            setMessage('You must enter a valid email')
            setErr(true)
        }else if(password !== confirmePassword)
        {
            setMessage('the password is not confirmed')
            setErr(true)
        }else if(password.length<6)
        {
            setMessage('please enter a password with more then 6 characters ')
            setErr(true)
        }else if (!agree)
        {
            setMessage('You must agree at Terms & Conditions')
            setErr(true)
        }
        else{
            const LogoutObj = {
                firstName:firstName , 
                lastName : lastName,
                email :email,
                password :password , 
            }
            fetch('/signUp' , {method: 'POST' , 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(LogoutObj) 
          })
          .then((res)=>{navigate('/login')}) //Alert to tell him that you are registred and we will redirect it to login 
          .catch((err)=>{
              setMessage('Error message from the backend ') // we put the error message from the backend 
              setErr(true)
          }) 
        }

    }


    /************************************************* */
    
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
        const handlClick2= ()=>{
            if(show2){
                setShow2(false) 
                setType2("password")
            }
            else {
                setShow2(true) 
                setType2("text")
            }
        }        
        return ( 
        <div className="  w-full flex justify-between">
            <div className="self-end w-[10%]">
                <img src={Exb} alt="exclude" className="w-[100%]"/>
            </div>
    
            <div className=" self-center   justify-center items-center lg:w-[60%] sm:w-[75%] w-[90%]">
                <div className="flex justify-center items-center w-[50%] mx-auto">
                    <img src={logo} alt="logo" className="w-[12%]"/>
                    <h3 className="lg:text-[36px] md:text-[26px] text-[20px] text-[17px]font-black  p-1 ">DARNAB</h3>
                </div>
                <h3 className="lg:text-[28px] md:text-[22px] sm:text-[16px] text-[13px] font-medium text-center sm:py-3 py-2"> Create you account </h3>
                <div className="flex justify-center sm:py-3 py-2 w-full">
                    <input  type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} className=" lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] border-gray-600 focus:outline-none w-[22%] mr-[1%] border-2  focus:border-[#FFC29F] rounded-full  p-2  px-3"placeholder="First Name"  />
                    <input  type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} className=" lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] border-gray-600 focus:outline-none w-[22%] border-2  focus:border-[#FFC29F] rounded-full  p-2  px-3"placeholder="Last Name"  />
                 </div>
                <div className="flex justify-center sm:py-3 py-2 w-full">
                    <input  type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className=" lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] border-gray-600 focus:outline-none w-[45%] border-2  focus:border-[#FFC29F] rounded-full  p-2  px-3"placeholder="Email address"  />
                 </div>
    
                 <div className="flex justify-center sm:py-3 py-2 w-full">
                     <div className="w-[45%] relative">
                        <input  type={type} value={password} onChange={(e)=>{setPassword(e.target.value)}} className=" lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] border-gray-600 focus:outline-none w-full border-2  focus:border-[#FFC29F] rounded-full  p-2 px-3"placeholder="Password"  />
                      {!show  && 
                        <div className="w-[10%] absolute top-2  right-4 hover:cursor-pointer" onClick={handlClick } >
                          <img src={eye} alt="close eye" />
                         </div> }
                         {show  && 
                        <div className="w-[10%] absolute top-2  right-4 hover:cursor-pointer" onClick={handlClick } >
                          <img src={eyeOpen} alt="open eye" />
                         </div> }
                     </div>
                 </div>

                 <div className="flex justify-center  sm:pt-3 pt-2 w-full">
                     <div className="w-[45%] relative">
                        <input value={confirmePassword} onChange={(e)=>{setConfirmePassword(e.target.value)}} type={type2} className=" lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] border-gray-600 focus:outline-none w-full border-2  focus:border-[#FFC29F] rounded-full  p-2  px-3" placeholder="Confirm Password"  />
                      {!show2  && 
                        <div className="w-[10%] absolute top-3  right-4 hover:cursor-pointer" onClick={handlClick2 } >
                          <img src={eye} alt="close eye" />
                         </div> }
                         {show2  && 
                        <div className="w-[10%] absolute top-3  right-4 hover:cursor-pointer" onClick={handlClick2 } >
                          <img src={eyeOpen} alt="open eye" />
                         </div> }
                     </div>
                 </div>
    
                 <div class="flex justify-start pl-2  items-center w-[50%] mx-auto">
                    <label className="flex justify-start pl-2 items-center text-gray-500 font-bold my-4">
                        <input type="checkbox" value={agree} onChange={(e)=>{setAgree(!agree)}}  className="leading-loose text-pink-600 hover:cursor-pointer" />
                        <span className="pt-2 px-2 lg:text-[14px] md:text-[12px]  sm:text-[10px] text-[8px] text-gray-600 leading-snug"> I agree at Terms & Conditions </span>
                    </label>
                </div>
    
                <div className="flex justify-center items-center">
                <button className="w-[45%] rounded-full  bg-[#FF5D02]  md:p-3 p-2 hover:text-[#fff] hover:cursor-pointer hover:bg-gray-600 " onClick={handleSubmit}>  
                    <h3 className="w-full text-center lg:text-[18px] md:text-[15px] sm:text-[12px] text-[10px] font-bold bg-transparent border-0 hover:bg-gray-600">Sign Up</h3>
                </button>
                </div>
                

                {err && <div  className="w-[100%] mx-auto lg:pt-2 pt-1" >
                    <p className="text-center font-bold lg:text-[14px] md:text-[12px] sm:text-[9px] text-[7px] text-red-600 ">{message}</p>
                </div> }
                <div className="w-[45%] mx-auto py-2">
                    <p className="text-center">OR</p>
                </div>

    
                <div className="w-[45%] flex justify-center mx-auto rounded-full  border-2 border-[#000]  p-2 hover:cursor-pointer hover:bg-gray-400 ">
                    <img src={google} alt="google" className="w-[8%]"/>
                    <h3 className="text-center lg:text-[18px] md:text-[14px] sm:text-[11px] text-[8px] font-bold md:px-2 px-1">Continue with Google</h3>
                </div>
    
                <div className="w-[50%] mx-auto lg:py-7 md:py-5 sm:pt-3 pt-2">
                    <p className="text-center lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] ">Already have an account ? <Link to="/Login" className="underline hover:text-[#177aeb]">Sign in</Link></p>
                </div>
            </div>
    
            <div className="self-start w-[8%]">
                <img src={Exa} alt="exclude-above" className="w-[100%]"/>
            </div>
            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">You have been registered successfully !</h3>
                    <p className="py-4">you have been registred in our app now you can logged in !</p>
                    <div className="modal-action">
                    <Link to="/login" className="btn">Login</Link>
                    </div>
                </div>
            </div>
    
        </div> );
}
 
export default SignUp;