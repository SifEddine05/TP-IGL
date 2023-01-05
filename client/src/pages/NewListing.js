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

const NewListing = () => {
    
    const [stl1,setStl1]=useState(" z-10 md:p-3 p-2 bg-black border-2 border-r-0 border-black lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white rounded-full lg:px-12 md:px-8 sm:px-8 px-6")
    const [stl2,setStl2]=useState("absolute left-[40%] top-[0px] md:p-3 p-2 bg-white border-2 border-l-0 border-t-1 border-black lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-right text-black rounded-full lg:pl-20 md:pl-16 sm:pl-14 pl-11  lg:pr-4 md:pr-3 sm:pr-2 pr-1")

    const handlcheck=()=>{ 
        if(stl2==="absolute left-[40%] top-[0px] md:p-3 p-2 bg-white border-2 border-l-0 border-t-1 border-black lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-right text-black rounded-full lg:pl-20 md:pl-16 sm:pl-14 pl-11  lg:pr-4 md:pr-3 sm:pr-2 pr-1")
        {
            
            setStl2("z-10 absolute left-[40%] top-[0px] md:p-3 p-2 bg-black border-2 border-l-0 border-t-1 border-black lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-center text-white rounded-full lg:px-12 md:px-10 sm:px-8 px-6 ")
            setStl1(" md:p-3 p-2 bg-white border-2 border-r-0 border-black lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-black rounded-full lg:pr-20 md:pr-16 sm:pr-14 pr-11 ")
        }
        else{
           
            setStl2("absolute left-[40%] top-[0px] md:p-3 p-2 bg-white border-2 border-l-0 border-t-1 border-black lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-right text-black rounded-full lg:pl-20 md:pl-16 sm:pl-14 pl-11  lg:pr-4 md:pr-3 sm:pr-2 pr-1")
            setStl1(" z-10 md:p-3 p-2 bg-black border-2 border-r-0 border-black lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white rounded-full lg:px-12 md:px-10 sm:px-8 px-6")
        }
    }
    
    const [style1,setStyle1]=useState("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center  hover:cursor-pointer") 
    const [style2,setStyle2]=useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style3,setStyle3]=useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style4,setStyle4]=useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style5,setStyle5]=useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style6,setStyle6]=useState("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style7,setStyle7]=useState("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const chooseType =(e)=>{
        if(e.target.value==="house")
        {
            setStyle1("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center  hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="tiny")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2(" bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center  hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="lux")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2(" md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3(" bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center  hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="appartements")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center  hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="bun")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center  hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="farms")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("bg-[#FF5D02] md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center  hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="lands")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("bg-[#FF5D02] md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] flex justify-center items-center  hover:cursor-pointer")
        }
    }


    return ( 
    <div>
        <Nav num={true} />
        <div className="w-[95%] mx-auto">
            <div className="lg:py-10 md:py-8 sm:py-6 py-4 ">
                <h3 className="text-[20px] ">New listing</h3>
            </div>
            <div className="lg:pt-10 md:pt-8 sm:pt-6 pt-4  lg:pl-6 md:pl-4 sm:pl-3 pl-2 ">
                <h3 className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] lg:pb-4 md:pb-3 pb-2">Type of property</h3>
                <div className="flex justify-around items-center w-[90%] mx-auto">
                    <input type="radio" name="type" id="house" value="house" className="hidden" onClick={chooseType}/>
                    <label htmlFor="house" className={style1}>
                        <img src={house} alt="home" className="w-[80%] p-1"/>
                    </label>
                    <input type="radio" name="type" id="tiny" className="hidden" value="tiny" onClick={chooseType} />
                    <label htmlFor="tiny" className={style2}>
                        <img src={tiny} alt="home" className="w-full "/>
                    </label>
                    <input type="radio" name="type" id="lux" className="hidden" value="lux" onClick={chooseType}/>
                    <label htmlFor="lux"  className={style3}>
                        <img src={lux} alt="home" className=" w-full "/>
                    </label>
                    <input type="radio" name="type" id="appartements" className="hidden" value="appartements" onClick={chooseType} />
                    <label htmlFor="appartements"  className={style4}>
                        <img src={apartements} alt="home" className=" w-full "/>
                    </label>
                    <input type="radio" name="type" id="bun" className="hidden" value="bun" onClick={chooseType}/>
                    <label htmlFor="bun"  className={style5}>
                        <img src={bun} alt="home" className="w-full "/>
                    </label>
                    <input type="radio" name="type" id="farms" className="hidden" value="farms" onClick={chooseType}/>
                    <label htmlFor="farms"  className={style6}>
                      <img src={farms} alt="home" className="w-[80%] p-1"/>
                    </label>
                    <input type="radio" name="type" id="lands" className="hidden" value="lands" onClick={chooseType}/>
                    <label htmlFor="lands"  className={style7}>
                        <img src={lands} alt="home" className="w-[80%] p-1 "/>
                    </label>
                </div>
                <div className="lg:pt-10 md:pt-8 sm:pt-6 pt-4 flex justify-between items-center w-[90%] mx-auto ">
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col ">Area (m²)<br/>
                    <input type="number" maxLength="10" min="0" id="Area" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] p-2 px-[10%] rounded-full border-2 border-black"/>
                    </label>
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col items-center text-left">Dimensions (m) <br/>
                        <div className="flex justify-start w-[100%] items-center ">
                            <input type="number" maxLength="10" min="0" id="Dimensions" placeholder="" className="w-[75%] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] p-2 sm:pl-4  rounded-full border-2 border-black"/>
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-bold">X</h3>
                            <input type="number" maxLength="10" min="0" id="Dimensions" placeholder="" className="w-[75%] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] p-2  sm:pl-4 rounded-full border-2 border-black"/>
                        </div>
                    </label>
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  w-[30%] flex justify-center flex-col  ">Number of rooms<br/>
                    <input type="number" maxLength="3" min="0" id="Number_of_rooms" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] p-2 px-[15%] rounded-full border-2 border-black"/>
                    </label>
                </div>

                <div className="w-[90%] mx-auto flex justify-between  items-center lg:py-10 md:py-8 sm:py-6 py-4 " >
                    <div className="w-[12%]">
                        <h3 className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] pb-1">Type of property</h3>
                        <div className="flex justify-start relative">
                            <button className={stl1} onClick={handlcheck}>Sell</button>
                            <button className={stl2} onClick={handlcheck}>Rent</button>
                        </div>
                    </div>
                    <div className="w-[58%] self-end">
                        <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[35%] flex justify-center flex-col  ">Price<br/>
                        <input type="number" step="0.01" maxLength="10" min="0" id="Price" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:p-3 sm:p-2 p-1  mt-1 px-[15%] rounded-full border-2 border-black"/>
                        </label>
                    </div>
                   
                </div>

                <div className="w-[90%]  ml-[5%]">
                     <DragDrop /> 
                </div>

                <div className="lg:pt-10 md:pt-8 sm:pt-6 pt-4   flex justify-between items-center w-[90%] mx-auto ">
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col ">State<br/>
                        <div className="w-full">
                            <select className="w-full md:p-3 p-2  px-[10%] bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full opacity-75 focus:opacity-100 border-2 border-black">
                                <option hidden selected></option>
                                <option >Gjjj</option>
                                <option>hhhh</option>
                                <option>kkkk</option>
                            </select>
                        </div>                    
                    </label>
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col ">City<br/>
                        <div className="w-full">
                            <select className="w-full md:p-3 p-2 px-[10%] bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full opacity-75 focus:opacity-100 border-2 border-black">
                                <option hidden selected></option>
                                <option >Gjjj</option>
                                <option>hhhh</option>
                                <option>kkkk</option>
                            </select>
                        </div>                    
                    </label>
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col  ">Street<br/>
                    <input type="text" maxLength="30"  id="Street" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] p-2 px-[15%] rounded-full border-2 border-black"/>
                    </label>
                </div>

                <div className="lg:my-[75px] md:my-[65px] sm:my-[55px] my-[45px] w-[90%] mx-auto">
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%] flex justify-center flex-col  ">Description<br/>
                    <textarea id="Description" name="Description" rows="8" cols="50" className=" lg:p-6 md:p-4 sm:p-2 p-1 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] mt-2 border-2 border-black rounded-lg"></textarea>                    </label>
                </div>
                <div className="flex justify-end  lg:pb-10 md:pb-8 sm:pb-6 pb-4">
                    <button className="md:p-3 p-2 border-2 lg:mr-6 md:mr-4 sm:mr-2 mr-1 border-black rounded-full text-center lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] shadow-md hover:bg-black hover:bg-opacity-20">Save draft</button>
                    <button className="md:p-3 p-2 border-2 border-black bg-black rounded-full text-center text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  shadow-md hover:bg-[#002E7C] lg:px-6 md:px-4 sm:px-2 px-1">Publish</button>
                </div>

            </div>
        </div>
       
    </div> );
}
 
export default NewListing;