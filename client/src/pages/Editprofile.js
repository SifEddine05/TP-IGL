import { useState } from "react";
import Nav from "../components/nav";

const Editprofile = () => {

    const [userInfo,setUserInfo]=useState({
        first_name:"belhadef",
        last_name:"anis",
        email:"anis@gmail.com",
        phone_number:1,
        adresse:"tizi ouzou",
        password:"0000",
        new_password:"0000"

    })
    function Myfunction(){
         
    }
    return (  
        <div className="">
            <Nav num={false} />  
            <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] lg:mt-20 md:mt-16 sm:mt-14 mt-12 w-[20%] text-center font-bold">Edit Profile</div>
            <div className="w-[80%] rounded-lg border-2 lg:mt-10 md:mt-8 sm:mt-6 mt-4 mx-auto shadow-md lg:mb-10 md:mb-8 sm:mb-6 mb-4">
                <div className="w-[90%] mx-auto flex justify-between  items-center">
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="firstname" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  pb-2">First name</label>
                        <input onChange={(e)=>{setUserInfo({...userInfo,first_name:e.target.value});console.log(userInfo)}} type="text" id="firstname" name="firstname" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="lastname" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] pb-2">Last name</label>
                        <input onChange={(e)=>{setUserInfo({...userInfo, last_name:e.target.value});console.log(userInfo)}}   type="text" id="lastname" name="lastname" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                </div>
                <div className="w-[90%] mx-auto flex justify-between  items-center">
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="email" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  pb-2">Email</label>
                        <input onChange={(e)=>{setUserInfo({...userInfo,email:e.target.value});console.log(userInfo)}} type="email" id="email" name="email" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="phone" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] pb-2">Phone Number</label>
                        <input onChange={(e)=>{setUserInfo({...userInfo, phone_number:e.target.value});console.log(userInfo)}} type="tel" maxLength="10" id="phone" name="phone" className=" lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                </div>
                <div className="w-[90%] mx-auto flex flex-col  justify-center  items-start lg:mt-10 md:mt-8 sm:mt-6 mt-4 ">
                    <label for="Address" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] pb-2">Address</label>
                    <input onChange={(e)=>{setUserInfo({...userInfo,adresse:e.target.value});console.log(userInfo)}} type="text" id="Address" name="Address" className=" lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                </div>
                <div className="w-[90%] mx-auto flex justify-between  items-center">
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="password" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  pb-2">Password</label>
                        <input onChange={(e)=>{setUserInfo({...userInfo, password:e.target.value});console.log(userInfo)}} type="password" id="password" name="password" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                    <div className="lg:mt-10 md:mt-8 sm:mt-6 mt-4   w-[40%]">
                        <label for="newpassword" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] pb-2">New Password</label>
                        <input onChange={(e)=>{setUserInfo({...userInfo,new_password:e.target.value});console.log(userInfo)}} type="password"  id="newpassword" name="newpassword" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%]  p-2 px-4 rounded-full border-2 border-black"/>
                    </div>
                </div>
                <div className=" md:mt-5 mt-4   lg:mb-5 md:mb-4 sm:mb-3 mb-2  md:mr-3 mr-2  flex justify-end">
                    <button onClick="Myfunction()" className="text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] bg-black rounded-full p-3 shadow-sm font-bold hover:bg-[#002E7C]">Save Changes</button>
                </div>

            </div>
        </div>
    );
}
 
export default Editprofile;