import ss from '../photos/Logo.svg'
import ff from '../photos/facebook.svg'
import ii from '../photos/instagram.svg'
import ll from '../photos/linkedin.png'
import logo from "../photos/logo1.svg"
import { Link } from 'react-router-dom';


const Home = () => {
    return ( 
     <div>
        <div className="bg-[#FF5D02] pb-[5%] ">
             <div className=" pl-[5%] pr-[5%] flex justify-between  ">  
                  <div className="w-[5%] pt-[1%] flex justify-start items-center">
                         <img src={logo} alt="logo" className="w-[100%]"/>
                         <h3 className="lg:text-[36px] md:text-[26px] sm:text-[20px] text-[17px] font-black md:p-2 p-1 ">DARNAB</h3>
                   </div>
                  <div className="flex pt-[2%] items-center">
                             <Link to="/Login" className="underline hover:text-white underline-offset-1 lg:pr-[40px] md:pr-[30px] sm:pr-[20px] pr-[10px] sm:text-sm md:text-md lg:text-lg text-xs">Sign in</Link>
                             <Link to="/SignUp"className="mt-[-4%]"><button className="border-2 border-black hover:bg-[#fff]   hover:text-black rounded-full text-white bg-black sm:text-sm md:text-md lg:text-lg text-xs pl-[30%] pr-[30%]">Get started</button></Link>
                  </div>           
             </div>

            <div className="lg:mt-[50px] md:mt-[40px] sm:mt-[30px] mt-[20px] ">
               <div className="flex justify-center">
               <div className="flex-row  ">
                    <div className="pl-[30%] lg:text-4xl md:text-3xl sm:text-2xl text-xl italic ">Don't worry.</div>
                    <div className="lg:text-4xl md:text-3xl sm:text-2xl text-xl italic ">You'll find the perfect home with us</div>
               </div>
               </div>
               <div className="flex justify-center mt-[5%] items-center">
                    <Link to="SignUp" className="rounded-full  hover:bg-[#fff]    p-2 hover:text-black  bg-black text-white pl-[2%] pr-[2%] mr-[20px]  sm:text-sm md:text-md lg:text-lg text-xs">Get started</Link>
                    <Link to="/PropertiesFeed" className="rounded-full border-black border-2  hover:bg-slate-400 hover:bg-opacity-50 mr-[20px] p-2  sm:text-sm md:text-md lg:text-lg text-xs">Explore proeprities</Link>
               </div>
            </div>
        </div>
       
        <div className="bg-black pt-[5%] pb-[5%] flex flex-col justify-center items-center">
          
          <div className="text-white font-bold text-center pb-[2%] lg:text-[18px] md:text-[16px] sm:text-[14px]  text-[12px]">DARNAB count +1.5 million users and 20 000 property for sale and rent</div>
          <div className="text-white align-center text-center  lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px] ">DARNAB is a web platform that specializes in Real Estate announcement.</div>
          <div className="text-white text-center lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]"> Our mission is to take the operation of the sale and purchase of proeprities simple ans easy </div>
          <Link to="/PropertiesFeed" className="w-[15%]"><button className="bg-white rounded-full mx-auto w-full mt-[3%] lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px] text-black lg:p-4 md:p-3 p-2 hover:bg-slate-400 hover:bg-opacity-100">Explore properties </button> </Link>
      
        </div>

        <div className="bg-white">
          <div className="px-6 py-4 flex justify-around border-b">
               <div className="flex flex-col justify-center items-center">
                    <div className='lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]'>48</div>
                    <div className='lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]'>State</div>
               </div>
               <div className="flex flex-col justify-center items-center">
                    <div className='lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]'>384</div>
                    <div className='lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]'>City</div>
               </div>
               <div className="flex flex-col justify-center items-center">
                    <div className='lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]'>+1.5M</div>
                    <div className='lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]'>Users</div>
               </div>
               <div className="flex flex-col justify-center items-center">
                    <div className='lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]'>+20k</div>
                    <div className='lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]'>property</div>
               </div>
          </div>


          <div className=" flex justify-around items-start pt-8 w-[80%] mx-auto ">
               <div className="w-[15%] pt-[1%] "><img src={ss} alt='ss'/></div>
               <div className="w-[25%] ml-[15%]">
                    <div className="lg:text-xl md:text-lg sm:text-md text-sm">Links</div>
                    <div className="lg:py-5 md:py-4 sm:py-3 py-2 hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]" >Home</div>
                    <div className="lg:py-5 md:py-4 sm:py-3 py-2 hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">About us</div>
                    <div className="lg:py-5 md:py-4 sm:py-3 py-2 hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">FAQ</div>
               </div>
               <div className="w-[25%]">
                    <div className="lg:text-xl md:text-lg sm:text-md text-sm">Company</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">Partners</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">Terms of use</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">Privacy policy</div>
                    <div className="pt-[6%] pb-[6%] lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">© 2022 DARNAB. ALL RIGHTS RESERVED</div>
               </div>
               <div className="w-[25%]">
                    <div className="lg:text-xl md:text-lg sm:text-md text-sm">Social</div>
                    <div className="flex pt-4 ">
                         <a href="www.facebook.com" className="w-[10%] mr-2 "><img  src={ff} alt='ff'/></a>
                         <a href="www.instagram.com" className="w-[10%] ml-2 mr-2"><img src={ii} alt='ii'/></a>
                         <a href="www.linkedin.com" className="w-[10%] ml-2"><img src={ll} alt='ll'/></a>
                    </div>
               </div>
          </div>

        
        </div>

     </div>
     );
}
 
export default Home;
