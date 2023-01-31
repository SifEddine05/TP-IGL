import ii from '../photos/image.png'
import mm from '../photos/Mask.png'
import jj from '../photos/jjjjj.png'
import ss from '../photos/stars.png'
import ll from '../photos/localisation.png'
import kk from '../photos/watch.png'
import Nav from '../components/nav'
import Card from '../components/card';
import { useState } from 'react'
import {useAuth } from '../context/auth'

const Profile = () => {
  const auth = useAuth() // it will contain the token 
    return ( 
       <div>
            <Nav num={false} /> 
            <div className="m-[3%] ">
            <div className="rounded-full bg-white  flex justify-between  p-2 ">
                <div className="md:w-[20%] lg:w-[15%] sm:w-[20%] w-[25%] flex justify-between items-center">
                    <div className="w-[40%] "><img src={ii} alt='ii' className="rounded-full "/></div>
                    <div className=" lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">Hi, Nabila</div>
                </div>
                <div className="w-[50%] flex justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">My Listings</div>
                        <div className=" lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-bold">2</div>
                    </div>
                    <div  className="flex flex-col justify-center items-center">
                         <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">Bought Properties</div>
                         <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-bold">2</div>
                    </div>
                    <div  className="flex flex-col justify-center items-center">
                         <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">Member since</div>
                         <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-bold">2019</div>
                    </div>
                </div>
            </div>
            <div className=" mt-[5%] ml-[3%] flex items-center w-[25%]">
                <div className='md:w-[10%] w-[15%]'><img src={mm} alt='mm' className='w-full'/></div>
                <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] ml-[1%] mt-[0.25%]">My listings</div>
            </div>
            <div className='lg:mt-4 md:mt-3 sm:mt-2 mt-1 mx-auto flex justify-around flex-wrap items-center w-[100%]'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>



            <div className="mt-[5%] ml-[3%] flex items-center w-[25%]">
                <div className='md:w-[10%] w-[15%]'><img src={kk} alt='kk' className='w-[100%]'/></div>
                <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] ml-[1%] mt-[0.25%]">Watchlist</div>
            </div>
            <div className='lg:mt-4 md:mt-3 sm:mt-2 mt-1 flex justify-start flex-wrap items-center w-[95%] mx-auto'>
                <Card/>
                <Card/>
                
            </div>  
                  
            












        </div>
       </div>
       
     );
}
 
export default Profile;
<div></div>