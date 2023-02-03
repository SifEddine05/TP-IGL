import Nav from "../components/nav";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Editprofile = () => {
    const [firstName , setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const[email , setEmail]=useState('')
    const[adress , setAdress]=useState('')
    const[phone , setPhone]=useState('')
    const[password , setPassword]=useState('')
    const[newPassword,setNewPassword] = useState('')
    const [err , setErr] = useState(false)
    const [message , setMessage]=useState('') 
    const navigate = useNavigate() 
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    const handleSubmit =()=>{ // we can add the user id when we do it in login 
        setErr(false)
        if(!isValidEmail)
        {
            setMessage("Please Enter a valid email ")
            setErr(true)
        }else
        {
            const Profile = {
                firstName : firstName , 
                lastName : lastName , 
                email : email , 
                adress : adress , 
                phone : phone , 
                password : password , 
                newPassword : newPassword , 
            }
            console.log(firstName,lastName,email,adress,phone,password,newPassword);
            fetch('/EditProfile' , {method: 'POST' , 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(Profile) 
            })
            .then((res)=>{
                    if(!res.ok) {throw Error }
                    else{
                        navigate('/Profile') // we add here the user id 
                    }
            })
            .catch((err)=>{
                    setMessage('Error message from the backend ') // we put the error message from the backend 
                    setErr(true)
            }) 
            
        }
        
    }
    



    return (  
        <div className="">
            <Nav num={false} />  
            <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] lg:mt-20 md:mt-16 sm:mt-14 mt-12 w-[20%] text-center font-bold">Edit Profile</div>
            <div className="w-[80%] rounded-lg border-2 lg:mt-10 md:mt-8 sm:mt-6 mt-4 mx-auto shadow-md lg:mb-10 md:mb-8 sm:mb-6 mb-4">
                <div className="w-[90%] mx-auto flex justify-between  items-center">
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="firstname" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  pb-2">First name</label>
                        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" id="firstname" name="firstname" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="lastname" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] pb-2">Last name</label>
                        <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" id="lastname" name="lastname" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                </div>
                <div className="w-[90%] mx-auto flex justify-between  items-center">
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="email" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  pb-2">Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="phone" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] pb-2">Phone Number</label>
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" maxLength="10" id="phone" name="phone" className=" lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                </div>
                <div className="w-[90%] mx-auto flex flex-col  justify-center  items-start lg:mt-10 md:mt-8 sm:mt-6 mt-4 ">
                    <label for="Address" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] pb-2">Address</label>
                    <input value={adress} onChange={(e)=>setAdress(e.target.value)} type="text" id="Address" name="Address" className=" lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                </div>
                <div className="w-[90%] mx-auto flex justify-between  items-center">
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="password" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  pb-2">Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="newpassword" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] pb-2">New Password</label>
                        <input value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} type="password"  id="newpassword" name="newpassword" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                </div>
                {err && <div  className="w-[100%] mx-auto lg:pt-2 pt-1" >
                    <p className="text-center font-bold lg:text-[18px] md:text-[16px] sm:text-[13px] text-[10px] text-red-600 ">{message}</p>
                </div> }
                <div className=" md:mt-5 mt-4   lg:mb-5 md:mb-4 sm:mb-3 mb-2  md:mr-3 mr-2  flex justify-end">
                    <button className="text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] bg-black rounded-full p-3 shadow-sm font-bold hover:bg-[#002E7C]" onClick={handleSubmit}>Save Changes</button>
                </div>

            </div>
        </div>
    );
}
 
export default Editprofile;