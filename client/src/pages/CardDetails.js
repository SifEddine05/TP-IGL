import ss from '../photos/logo.png'
import mm from '../photos/maskgroup.svg'
import nn from '../photos/notif.svg'
import pp from '../photos/pictures.png'
import aa from '../photos/appelle.png'
import tt from '../photos/talk.png'
import Nav from '../components/nav'
const CardDetails = () => {
    return ( 
        <div>
           <Nav num={true} />




           <div className="pl-[5%] pr-[5%] pt-[2%] pb-[2%] ">
              
               <div className="font-bold lg:text-[24px] md:text-[21px] sm:text-[19px] text-[16px]">Appartment for sale</div>
               <div className="lg:text-lg md:text-md sm:text-sm text-xs">Nabila Cherifi</div>


               <div className=" pt-[2%]  w-full flex justify-between ">

                    <div className="w-[45%] "><img src={pp} alt='pp'  /></div>
                    <div className="w-[45%] ">
                         <div className="flex justify-between items-center   ">
                              <div className="text-[#FF5D02] font-bold w-full lg:text-xl md:text-lg sm:text-md text-xs">12 Millions DA</div>
                              <div className="w-full ml-[20%]  "><button className="text-black lg:text-xl md:text-lg sm:text-md text-xs bg-[#FF5D02] hover:bg-gray-600  hover:text-white rounded-full pt-[5%] pb-[5%] pl-[10%] pr-[10%]">Buy this appartment</button></div>
                         </div>
                         <div className="mt-[5%] lg:text-sm md:text-xs sm:text-[12px] text-[10px] ">About this property</div>
                         <div className=" flex justify-between pl-[5%] pr-[5%] pt-[2%] pb-[2%] mt-[5%]  text-black w-full">
                              <div className='flex flex-col justify-center items-center'>
                                   <div className="lg:text-xl md:text-lg sm:text-md text-xs">Area</div>
                                   <div className=" lg:text-xl md:text-lg sm:text-md text-xs font-bold">100 m²</div>
                              </div>
                              <div className='flex flex-col justify-center items-center'>
                                   <div className="lg:text-xl md:text-lg sm:text-md text-xs">Dimensions</div>
                                   <div className="lg:text-xl md:text-lg sm:text-md text-xs font-bold">10x10m</div>
                              </div>
                              
                              <div className='flex flex-col justify-center items-center'>
                                   <div className="lg:text-xl md:text-lg sm:text-md text-xs">Rooms</div>
                                   <div className="lg:text-xl md:text-lg sm:text-md text-xs font-bold">3</div>
                              </div>
                         </div>
                         <div className=" mt-[5%] lg:text-xl md:text-lg sm:text-md text-xs">Desctiption</div>
                         <div className="mt-[5%] lg:text-xl md:text-lg sm:text-md text-xs">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</div>
                         <div className="mt-[5%] lg:text-xl md:text-lg sm:text-md text-xs">Location</div>
                         <div className="mt-[3%] lg:text-xl md:text-lg sm:text-md text-xs">Cité de Amir Abdelkader,Azazga, Tizi Ouzou</div>
                         <div className="w-full flex mt-[5%] justify-around mx-auto">
                              <div className="w-full ml-[5%] "><button className="flex  md:px-6 px-3  items-center rounded-full md:p-3 p-2  hover:bg-black hover:bg-opacity-75 bg-black  " >
                                   <div className="flex"><img src={aa} alt='aa'/></div>
                                   <div className="w-full pl-[2%] text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">Call owner</div>
                                   </button></div>
                              <div className="w-full  "><button className=" flex items-center  md:p-3 p-2  md:px-5 px-3    rounded-full border-2 border-black hover:bg-black hover:bg-opacity-10">
                                   <div><img src={tt} alt='tt'/></div>
                                   <div className=" w-full pl-[2%] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">Message owner</div>
                                   </button></div>
                         </div>
                    </div>
               </div>
           </div> 
        </div>
     );
}
 
export default CardDetails;