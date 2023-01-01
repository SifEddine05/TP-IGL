import ss from './photos/logo.png'
import mm from './photos/maskgroup.svg'
import nn from './photos/notif.svg'
import pp from './photos/pictures.png'
import aa from './photos/appelle.png'
import tt from './photos/talk.png'
const CardDetails = () => {
    return ( 
        <div>
           <div className=" bg-[#FF5D02] w-full pt-[2%] mb-[] pl-[5%] pr-[5%] flex justify-between">
               <div className="w-[10%] pt-[-5%]"><img src={ss} alt='ss'/></div>
               <div className="w-[25%] flex justify-between">
                    <div className="">Explore</div>
                    <div className="text-sm">Profile</div>
                    <div className="text-sm ">Log out</div>
               </div>    
               <div className="w-[20%]  flex justify-between">
                    <div className="w-[8%]   "><img  src={mm} alt='mm'/></div>
                    <div className="w-[8%] "><img src={nn} alt='nn'/></div>
                    <div className=""><button className="rounded-full w-full pl-[25px] pr-[25px] pt-[10px] pb-[10px] bg-black text-white ">+ listing</button></div>
               </div>
           </div>





           <div className="pl-[5%] pr-[5%] pt-[2%] pb-[2%] ">
              
               <div className="font-bold">Appartment for sale</div>
               <div className="text-xs">Nabila Cherifi</div>


               <div className=" pt-[2%]  w-full flex justify-between ">

                    <div className="w-[45%] "><img src={pp} alt='pp'  /></div>

                    <div className="w-[45%] ">
                         <div className="flex justify-between h-[20%] pt-[6%] pl-[4%] rounded-2xl">
                              <div className="text-[#FF5D02] font-bold w-full text-xl">12 Millions DA</div>
                              <div className="w-full ml-[20%]  "><button className="text-black text-xm bg-[#FF5D02] rounded-full pt-[5%] pb-[5%] pl-[10%] pr-[10%]">Buy this appartment</button></div>
                         </div>
                         <div className="mt-[5%] text-sm">About this property</div>
                         <div className=" flex justify-between pl-[5%] pr-[5%] pt-[2%] pb-[2%] mt-[5%]  text-black w-full">
                              <div>
                                   <div className="text-sm">Area</div>
                                   <div className="text-bold">100 m²</div>
                              </div>
                              <div>
                                   <div className="text-sm">Dimensions</div>
                                   <div className="text-bold">10x10m</div>
                              </div>
                              <div>
                                   <div>
                                        <div className="text-sm">Rooms</div>
                                        <div className="text-bold">3</div>
                                   </div>
                              </div>
                         </div>
                         <div className=" mt-[5%] text-sm">Desctiption</div>
                         <div className="mt-[5%] text-sm">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</div>
                         <div className="mt-[5%] text-sm">Location</div>
                         <div className="mt-[3%] text-sm">Cité de Amir Abdelkader,Azazga, Tizi Ouzou</div>
                         <div className="w-full flex mt-[5%] ml-[5%]">
                              <div className="w-full ml-[5%] "><button className="flex rounded-full bg-black pl-[9%] pr-[9%] pt-[3%] pb-[2%] " >
                                   <div className="flex"><img src={aa} alt='aa'/></div>
                                   <div className="w-full pl-[2%] text-white">Call owner</div>
                                   </button></div>
                              <div className="w-full mr-[28%]"><button className=" flex pt-[3%] pb-[2%] pl-[9%] pr-[9%] rounded-full border-2 border-black ">
                                   <div><img src={tt} alt='tt'/></div>
                                   <div className=" w-full pl-[2%] ">Message owner</div>
                                   </button></div>
                         </div>
                    </div>
               </div>
           </div> 
        </div>
     );
}
 
export default CardDetails;