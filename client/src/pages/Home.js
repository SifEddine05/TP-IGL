import ss from '../photos/Logo.svg'
import ff from '../photos/facebook.svg'
import ii from '../photos/instagram.svg'
import ll from '../photos/linkedin.png'
import logo from "../photos/logo1.png"
import { Link } from 'react-router-dom';


const Home = () => {
    return ( 
     <div className=''>
        <div className="bg-[#FF5D02] pb-[5%] ">
             <div className=" md:px-8 sm:px-6 px-4 flex justify-between  ">  
                  <div className=" pt-[1%] flex justify-start items-center">
                         <img src={logo} alt="logo" className="sm:w-[85px] w-[60px] "/>
                         <h3 className="lg:text-[36px] md:text-[26px] sm:text-[20px] text-[17px] font-black">DARNAB</h3>
                   </div>
                  <div className="flex pt-[2%] items-center">
                             <Link to="/Login" className="underline hover:text-white underline-offset-1 lg:pr-[40px] md:pr-[30px] sm:pr-[20px] pr-[10px] sm:text-sm md:text-md lg:text-lg text-xs">Sign in</Link>
                             <Link to="/SignUp" className=""><button className="border-2 border-black hover:bg-[#fff]   hover:text-black rounded-full text-white bg-black sm:text-sm md:text-md lg:text-lg text-xs px-2 py-2">Get started</button></Link>
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
                    <Link to="SignUp" className="rounded-full  hover:bg-[#fff]    p-2 hover:text-black  bg-black text-white md:px-8 px-6 mr-[20px]  sm:text-sm md:text-md lg:text-lg text-xs">Get started</Link>
                    <Link to="/PropertiesFeed" className="rounded-full border-black border-2  hover:bg-white hover:text-black  mr-[20px] p-2  sm:text-sm md:text-md lg:text-lg text-xs">Explore proeprities</Link>
               </div>
            </div>
        </div>
       
        <div className="bg-black pt-[5%] pb-[5%] flex flex-col justify-center items-center px-2">
          
          <div className="text-white font-bold text-center pb-[2%] lg:text-[18px] md:text-[16px] sm:text-[14px]  text-[12px]">DARNAB count +1.5 million users and 20 000 property for sale and rent</div>
          <div className="text-white align-center text-center  lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px] ">DARNAB is a web platform that specializes in Real Estate announcement.</div>
          <div className="text-white text-center lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]"> Our mission is to take the operation of the sale and purchase of proeprities simple ans easy </div>
          <Link to="/PropertiesFeed" className="mt-4"><button className="bg-white rounded-full mx-auto w-full mt-[3%] lg:text-[18px] md:text-[16px] sm:text-[14px]  text-[12px] text-black px-4 py-2 hover:bg-[#FF5D02] hover:bg-opacity-100">Explore properties </button> </Link>
      
        </div>

        <div className="bg-white">
          <div className="px-6 py-4 flex justify-around border-b font-bold">
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


          <div className=" flex justify-around items-start pt-8 w-[80%] mx-auto gap-4">
               <div className=" pt-[1%] sm:w-[100px] w-[50px]">
                    <img src={logo} alt='ss'/>
                    <h3 className="lg:text-[36px] md:text-[26px] sm:text-[20px] text-[17px] font-black">DARNAB</h3>
               </div>
               <div className=" ">
                    <div className="lg:text-xl md:text-lg sm:text-md text-sm font-bold">Links</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]" >Home</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">About us</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">FAQ</div>
               </div>
               <div className="">
                    <div className="lg:text-xl md:text-lg sm:text-md text-sm font-bold">Company</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">Partners</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">Terms of use</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">Privacy policy</div>
               </div>
               <div className="">
                    <div className="lg:text-xl md:text-lg sm:text-md text-sm font-bold">Social</div>
                    <div className="flex pt-4 ">
                         <a href="www.facebook.com" className="sm:w-[50px] w-[25px] mr-2 "><img  src={ff} alt='ff'/></a>
                         <a href="www.instagram.com" className="sm:w-[50px] w-[25px] ml-2 mr-2"><img src={ii} alt='ii'/></a>
                         <a href="www.linkedin.com" className="sm:w-[35px] w-[25px] ml-2"><img src={ll} alt='ll'/></a>
                    </div>
               </div>
          </div>
          <div className="w-fit mx-auto pb-4 lg:text-[16px] md:text-[14px] sm:text-[12px]  text-[10px]">© 2022 DARNAB. ALL RIGHTS RESERVED</div>

        
        </div>

     </div>
     );
}
 
export default Home;
