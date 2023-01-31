import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../photos/Logo2.svg'
import not from '../photos/notif.png'
import sett from '../photos/sett.svg'
import Noty from './Noty';
import { useAuth } from '../context/auth';

const Nav = ({num}) => {
   const auth= useAuth ()
   const [logout,setLogout]= useState(false)
   const navigate = useNavigate()
   // const [confirm , setConfirm] = useState(false)
   const handleLogout = ()=>{
      // setConfirm(true)
      // console.log("sifou");
       auth.Logout() // we delete the token and we redirect 
       navigate('/');

    }
    return ( 
        <div>
            <nav className='bg-[#FF5D02] lg:p-3  sm:p-2 p-1 flex justify-between items-center'>
                <div className='w-[10%]'>
                    <img src={logo} alt="logo" />
                </div>

                <div className='w-[30%] flex justify-around items-center '>
                {num &&   <Link to='/PropertiesFeed' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] font-bold hover:text-white">Explore</Link> }
                {!num &&   <Link to='/PropertiesFeed' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px]  hover:text-white">Explore</Link> }

                {num &&  <Link to='/Profile' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] hover:text-white ">Profile</Link> }
                {!num  && <Link to='/Profile' className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] hover:text-white font-bold">Profile</Link> }

                    <button className="lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] hover:text-white" onClick={()=>{setLogout(true)}} >Logout</button>
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
              
            </nav>
           {logout && <div className="alert shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Are you sure that you want to logout ! </span>
                </div>
                <div className="flex-none">
                    <button className="btn btn-sm btn-ghost" onClick={()=>{setLogout(false)}} >Cancel</button>
                    <button className="btn btn-sm btn-primary" onClick={handleLogout}>Logout</button>
                </div>
                </div> }
        </div>
    );
}
 
export default Nav;