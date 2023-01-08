import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../photos/Logo2.svg'
import not from '../photos/notif.png'
import sett from '../photos/sett.svg'
import Noty from './Noty';


const Nav = ({num}) => {
   
    return ( 
    <nav className='bg-[#FF5D02] lg:p-3  sm:p-2 p-1 flex justify-between items-center'>
        <div className='w-[10%]'>
            <img src={logo} alt="logo" />
        </div>

        <div className='w-[30%] flex justify-around items-center '>
         {num &&   <Link to='/PropertiesFeed' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] font-bold hover:text-white">Explore</Link> }
         {!num &&   <Link to='/PropertiesFeed' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px]  hover:text-white">Explore</Link> }

          {num &&  <Link to='/Profile' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] hover:text-white ">Profile</Link> }
           {!num  && <Link to='/Profile' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] hover:text-white font-bold">Profile</Link> }

            <Link to='/Logout' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] hover:text-white">Logout</Link>
        </div>

        <div className='w-[20%] flex justify-around items-center '>
            <Link  to="/EditProfile" className='w-[30%] hover:cursor-pointer'>
                <img src={sett} alt="logo" className='w-[40%]' />
            </Link>
            <div className='w-[30%] hover:cursor-pointer'>
                <Noty width={"40%"} color={"#000"} count={3} />
            </div>
            <button className='w-[50%] hover:cursor-pointer text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] rounded-full bg-black p-2 hover:bg-white hover:text-black'>
                <Link to='/NewListing'>+  New listing</Link>
            </button>
        </div>
    </nav> );
}
 
export default Nav;