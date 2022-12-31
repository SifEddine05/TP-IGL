import ss from '../photos/Logo.svg'
import ff from '../photos/facebook.svg'
import ii from '../photos/instagram.svg'
import ll from '../photos/linkedin.png'
import logo from "../photos/logo1.svg"

const Home = () => {
    return ( 
     <div>
        <div className="bg-[#FF5D02] pb-[5%] ">
             <div className=" pl-[5%] pr-[5%] flex justify-between  ">  
                  <div className="w-[5%] pt-[1%] flex justify-start">
                         <img src={logo} alt="logo" className="w-[100%]"/>
                         <h3 className="lg:text-[36px] md:text-[26px] text-[20px] text-[17px]font-black md:p-2 p-1 ">DARNAB</h3>
                   </div>
                  <div className="flex pt-[2%]">
                             <a href="/login" className="underline hover:text-white underline-offset-1 pr-[40px]">Sign in</a>
                             <a href="/signup"className="mt-[-4%]"><button className="border-2 border-black hover:bg-[#fff]   hover:text-black rounded-full text-white bg-black text-xs pl-[30%] pr-[30%]">Get started</button></a>
                  </div>           
             </div>

            <div className="mt-[50px] ">
               <div className="flex justify-center">
               <div className="flex-row  ">
                    <div className="pl-[30%] text-4xl italic ">Don't worry.</div>
                    <div className="text-4xl italic ">You'll find the perfect home with us</div>
               </div>
               </div>
               <div className="flex justify-center mt-[5%] ">
                    <a href="/login" className="rounded-full  hover:bg-[#fff]   hover:text-black bg-black text-white p-[0.5%] pl-[2%] pr-[2%] mr-[20px]">Get started</a>
                    <a href="/login" className="rounded-full border-black border-2 pl-[3%] pr-[3%] hover:bg-slate-400 hover:bg-opacity-50 mr-[20px] p-2">Explore proeprities</a>
               </div>
            </div>
        </div>
       
        <div className="bg-black pt-[5%] pb-[5%]">
          
          <div className="text-white font-bold pl-[28%] pb-[2%]">DARNAB count +1.5 million users and 20 000 property for sale and rent</div>
          <div className="text-white align-center pl-[33%] text-xs">DARNAB is a web platform that specializes in Real Estate announcement.</div>
          <div className="text-white pl-[29%] text-xs"> Our mission is to take the operation of the sale and purchase of proeprities simple ans easy </div>
          <button className="bg-white rounded-full ml-[42%] mt-[3%] text-xs text-black p-[1%] pl-[1.5%] pr-[1.5%] hover:bg-slate-400 hover:bg-opacity-100"><a href="/properties">Explore properties</a></button>
      
        </div>

        <div className="bg-white">
          <div className="pt-[2%] pl-[7%] pr-[7%] pb-[2%] flex justify-between border-b">
               <div className="flex flex-col justify-center items-center">
                    <div>48</div>
                    <div>State</div>
               </div>
               <div className="flex flex-col justify-center items-center">
                    <div>384</div>
                    <div>City</div>
               </div>
               <div className="flex flex-col justify-center items-center">
                    <div>+1.5M</div>
                    <div>Users</div>
               </div>
               <div className="flex flex-col justify-center items-center">
                    <div>+20k</div>
                    <div>property</div>
               </div>
          </div>


          <div className="pl-[7%] pr-[7%] pt-[2%] pb-[2%] flex justify-between ">
               <div className="w-[10%] pt-[1%]"><img src={ss} alt='ss'/></div>
               <div>
                    <div className="text-xl">Links</div>
                    <div className="pt-[10%] pb-[10%] hover:cursor-pointer hover:text-blue-800">Home</div>
                    <div className="pt-[10%] pb-[10%] hover:cursor-pointer hover:text-blue-800">About as</div>
                    <div className="pt-[10%] pb-[10%] hover:cursor-pointer hover:text-blue-800">FAQ</div>
               </div>
               <div>
                    <div className="text-xl">Company</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800">Partners</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800">Terms of use</div>
                    <div className="pt-[6%] pb-[6%] hover:cursor-pointer hover:text-blue-800">Privacy policy</div>
                    <div className="pt-[6%] pb-[6%]">© 2022 DARNAB. ALL RIGHTS RESERVED</div>
               </div>
               <div>
                    <div className="text-xl">Social</div>
                    <div className="flex pt-[40%]">
                         <a href="www.facebook.com" className="w-[30px] mr-[5%]"><img  src={ff} alt='ff'/></a>
                         <a href="www.instagram.com" className="w-[30px] ml-[5%] mr-[5%]"><img src={ii} alt='ii'/></a>
                         <a href="www.linkedin.com" className="w-[30px] ml-[5%]"><img src={ll} alt='ll'/></a>
                    </div>
               </div>
          </div>

        
        </div>

     </div>
     );
}
 
export default Home;
