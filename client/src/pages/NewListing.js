import Nav from "../components/nav";
import DragDrop from "../components/DragDrop";

import house from '../photos/homm.svg'
import tiny from '../photos/tiny.svg'
import lux from '../photos/lux.svg'
import apartements from '../photos/apartements.png'
import bun from '../photos/bun.png'
import farms from '../photos/farms.svg'
import lands from '../photos/lands.svg'
import { useState } from "react";
/*if(stl2==="absolute left-[40%] top-[-1px] p-4 bg-white border-2 border-l-0 border-t-1 border-black text-[16px] text-right text-black rounded-full pl-20 pr-4")
        {
            setStl2("  p-4 bg-white border-2 border-r-0 border-black text-[16px] text-black rounded-full text-left pr-20 pl-4")
            setStl1("absolute z-10 left-[40%] top-[-1px] p-4 bg-black border-2 border-l-0 border-t-1 border-black text-[16px] text-right text-white rounded-full  px-12")
        }
        else{
            setStl2("absolute left-[40%] top-[-1px] p-4 bg-white border-2 border-l-0 border-t-1 border-black text-[16px] text-right text-black rounded-full pl-20 pr-4")
            setStl1(" z-10 p-4 bg-black border-2 border-r-0 border-black text-[16px] text-white rounded-full px-12")
        }*/
const NewListing = () => {
    
    const [stl1,setStl1]=useState(" z-10 p-3 bg-black border-2 border-r-0 border-black text-[16px] text-white rounded-full px-12")
    const [stl2,setStl2]=useState("absolute left-[40%] top-[0px] p-3 bg-white border-2 border-l-0 border-t-1 border-black text-[16px] text-right text-black rounded-full pl-20 pr-4")

    const handlcheck=()=>{ 
        if(stl2==="absolute left-[40%] top-[0px] p-3 bg-white border-2 border-l-0 border-t-1 border-black text-[16px] text-right text-black rounded-full pl-20 pr-4")
        {
            
            setStl2("z-10 absolute left-[40%] top-[0px] p-3 bg-black border-2 border-l-0 border-t-1 border-black text-[16px] text-center text-white rounded-full px-12 ")
            setStl1(" p-3 bg-white border-2 border-r-0 border-black text-[16px] text-black rounded-full pr-20")
        }
        else{
           
            setStl2("absolute left-[40%] top-[0px] p-3 bg-white border-2 border-l-0 border-t-1 border-black text-[16px] text-right text-black rounded-full pl-20 pr-4")
            setStl1(" z-10 p-3 bg-black border-2 border-r-0 border-black text-[16px] text-white rounded-full px-12")
        }
    }
    
    return ( 
    <div>
        <Nav num={true} />
        <div className="w-[95%] mx-auto">
            <div className="py-10 ">
                <h3 className="text-[20px] ">New listing</h3>
            </div>
            <div className="pt-10 pl-6">
                <h3 className="text-[18px] pb-4">Type of property</h3>
                <div className="flex justify-around items-center w-[90%] mx-auto">
                    <input type="radio" name="type" id="house" value="house" className="hidden" />
                    <label htmlFor="house" className=" bg-[#FF5D02] w-[10%]  rounded-2xl border-2  p-2 px-4 border-black h-[120px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer">
                        <img src={house} alt="home" className="w-[80%] "/>
                    </label>
                    <input type="radio" name="type" id="" className="hidden" value="Tiny" />
                    <label htmlFor="Tiny" className="w-[10%] rounded-2xl border-2  p-2 px-4 border-black h-[120px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer">
                        <img src={tiny} alt="home" className="w-full "/>
                    </label>
                    <input type="radio" name="type" id="lux" className="hidden" value="lux"/>
                    <label htmlFor="lux"  className="w-[10%] rounded-2xl border-2  p-2 px-4 border-black h-[120px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer">
                        <img src={lux} alt="home" className=" w-full "/>
                    </label>
                    <input type="radio" name="type" id="appartements" className="hidden" value="appartements" />
                    <label htmlFor="appartements"  className="w-[10%] rounded-2xl border-2  p-2 px-4 border-black h-[120px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer">
                        <img src={apartements} alt="home" className=" w-full "/>
                    </label>
                    <input type="radio" name="type" id="bun" className="hidden" value="bun"/>
                    <label htmlFor="bun"  className="w-[10%]">
                        <img src={bun} alt="home" className="w-full rounded-2xl border-2  p-2 px-4 border-black h-[120px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer"/>
                    </label>
                    <input type="radio" name="type" id="farms" className="hidden" value="farms" />
                    <label htmlFor="farms"  className="w-[10%] rounded-2xl border-2  p-2 px-4 border-black h-[120px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer">
                      <img src={farms} alt="home" className="w-[80%] "/>
                    </label>
                    <input type="radio" name="type" id="lands" className="hidden" value="lands" />
                    <label htmlFor="lands"  className="w-[10%] rounded-2xl border-2  p-2 px-4 border-black h-[120px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer">
                        <img src={lands} alt="home" className="w-[80%] "/>
                    </label>
                </div>
                <div className="pt-10 flex justify-between items-center w-[90%] mx-auto ">
                    <label className="text-[16px] w-[30%] flex justify-center flex-col ">Area (m²)<br/>
                    <input type="number" maxLength="10" min="0" id="Area" placeholder="" className="text-[16px] p-2 px-[10%] rounded-full border-2 border-black"/>
                    </label>
                    <label className="text-[16px] w-[30%] flex justify-center flex-col items-center text-left">Dimensions (m) <br/>
                        <div className="flex justify-start w-[50%] items-center ">
                            <input type="number" maxLength="10" min="0" id="Dimensions" placeholder="" className="w-[75%] text-[16px] p-2 px-[15%] rounded-full border-2 border-black"/>
                            <h3 className="text-[16px] font-bold">X</h3>
                            <input type="number" maxLength="10" min="0" id="Dimensions" placeholder="" className="w-[75%] text-[16px] p-2 px-[15%] rounded-full border-2 border-black"/>
                        </div>
                    </label>
                    <label className="text-[16px] w-[30%] flex justify-center flex-col  ">Number of rooms<br/>
                    <input type="number" maxLength="3" min="0" id="Number_of_rooms" placeholder="" className="text-[16px] p-2 px-[15%] rounded-full border-2 border-black"/>
                    </label>
                </div>

                <div className="w-[90%] mx-auto flex justify-between  items-center py-10" >
                    <div className="w-[12%]">
                        <h3 className="text-[18px] pb-1">Type of property</h3>
                        <div className="flex justify-start relative">
                            <button className={stl1} onClick={handlcheck}>Sell</button>
                            <button className={stl2} onClick={handlcheck}>Rent</button>
                        </div>
                    </div>
                    <div className="w-[58%] self-end">
                        <label className="text-[16px] w-[35%] flex justify-center flex-col  ">Price<br/>
                        <input type="number" step="0.01" maxLength="10" min="0" id="Price" placeholder="" className="text-[16px] p-3 mt-1 px-[15%] rounded-full border-2 border-black"/>
                        </label>
                    </div>
                   
                </div>

                <div className="w-[90%]  ml-[5%]">
                     <DragDrop /> 
                </div>

                <div className="pt-10  flex justify-between items-center w-[90%] mx-auto ">
                    <label className="text-[16px] w-[30%] flex justify-center flex-col ">State<br/>
                        <div className="w-full">
                            <select className="w-full p-3  px-[10%] bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full opacity-75 focus:opacity-100 border-2 border-black">
                                <option hidden selected></option>
                                <option >Gjjj</option>
                                <option>hhhh</option>
                                <option>kkkk</option>
                            </select>
                        </div>                    
                    </label>
                    <label className="text-[16px] w-[30%] flex justify-center flex-col ">City<br/>
                        <div className="w-full">
                            <select className="w-full p-3  px-[10%] bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full opacity-75 focus:opacity-100 border-2 border-black">
                                <option hidden selected></option>
                                <option >Gjjj</option>
                                <option>hhhh</option>
                                <option>kkkk</option>
                            </select>
                        </div>                    
                    </label>
                    <label className="text-[16px] w-[30%] flex justify-center flex-col  ">Street<br/>
                    <input type="text" maxLength="30"  id="Street" placeholder="" className="text-[16px] p-2 px-[15%] rounded-full border-2 border-black"/>
                    </label>
                </div>

                <div className="my-[75px] w-[90%] mx-auto">
                    <label className="text-[16px] w-[100%] flex justify-center flex-col  ">Description<br/>
                    <textarea id="Description" name="Description" rows="8" cols="50" className=" p-6 text-[16px] mt-2 border-2 border-black rounded-lg"></textarea>                    </label>
                </div>
                <div className="flex justify-end  pb-10">
                    <button className="p-3 border-2 mr-6 border-black rounded-full text-center text-[16px] shadow-md hover:bg-black hover:bg-opacity-20">Save draft</button>
                    <button className="p-3 border-2 border-black bg-black rounded-full text-center text-white text-[16px]  shadow-md hover:bg-[#002E7C] px-6">Publish</button>
                </div>

            </div>
        </div>
       
    </div> );
}
 
export default NewListing;