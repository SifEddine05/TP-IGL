import ss from '../photos/logo.png'
import ff from '../photos/facebook.svg'
import ii from '../photos/instagram.svg'
import ll from '../photos/linkedin.png'
const Home = () => {
    return ( 
     <div>
        <div className="bg-[#FF5D02] pb-[5%] ">
             <div className=" pl-[5%] pr-[5%] flex justify-between  ">  
                  <div className="w-[100px] pt-[1%]"><img src={ss} alt='ss'/></div>
                  <div className="flex pt-[2%]">
                             <div className="underline underline-offset-1 pr-[40px]">Sign in</div>
                             <div className="mt-[-4%]"><button className="border-2 border-black rounded-full text-white bg-black text-xs pl-[30%] pr-[30%]">Get started</button></div>
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
                    <button className="rounded-full  bg-black text-white p-[0.5%] pl-[2%] pr-[2%] mr-[20px]">Get started</button>
                    <button className="rounded-full border-black border-2 pl-[3%] pr-[3%] mr-[20px]">Explore proeprities</button>
               </div>
            </div>
        </div>
        <div className="bg-black pt-[5%] pb-[5%]">
          
          <div className="text-white font-bold pl-[28%] pb-[2%]">DARNAB count +1.5 million users and 20 000 property for sale and rent</div>
          <div className="text-white align-center pl-[33%] text-xs">DARNAB is a web platform that specializes in Real Estate announcement.</div>
          <div className="text-white pl-[29%] text-xs"> Our mission is to take the operation of the sale and purchase of proeprities simple ans easy </div>
          <button className="bg-white rounded-full ml-[42%] mt-[3%] text-xs text-black p-[1%] pl-[1.5%] pr-[1.5%]">Explore properties</button>
      
        </div>

        <div className="bg-white">
          <div className="pt-[2%] pl-[7%] pr-[7%] pb-[2%] flex justify-between border-b">
               <div>
                    <div>48</div>
                    <div>State</div>
               </div>
               <div>
                    <div>384</div>
                    <div>City</div>
               </div>
               <div>
                    <div>+1.5M</div>
                    <div>Users</div>
               </div>
               <div>
                    <div>+20k</div>
                    <div>property</div>
               </div>
          </div>


          <div className="pl-[7%] pr-[7%] pt-[2%] pb-[2%] flex justify-between ">
               <div className="w-[100px] pt-[1%]"><img src={ss} alt='ss'/></div>
               <div>
                    <div className="text-xl">Links</div>
                    <div className="pt-[10%] pb-[10%]">Home</div>
                    <div className="pt-[10%] pb-[10%]">About as</div>
                    <div className="pt-[10%] pb-[10%]">FAQ</div>
               </div>
               <div>
                    <div className="text-xl">Company</div>
                    <div className="pt-[6%] pb-[6%]">Partners</div>
                    <div className="pt-[6%] pb-[6%]">Terms of use</div>
                    <div className="pt-[6%] pb-[6%]">Privacy policy</div>
                    <div className="pt-[6%] pb-[6%]">© 2022 DARNAB. ALL RIGHTS RESERVED</div>
               </div>
               <div>
                    <div className="text-xl">Social</div>
                    <div className="flex pt-[40%]">
                         <div className="w-[30px] mr-[5%]"><img  src={ff} alt='ff'/></div>
                         <div className="w-[30px] ml-[5%] mr-[5%]"><img src={ii} alt='ii'/></div>
                         <div className="w-[30px] ml-[5%]"><img src={ll} alt='ll'/></div>
                    </div>
               </div>
          </div>

        </div>






        </div>
     );
}
 
export default Home;
