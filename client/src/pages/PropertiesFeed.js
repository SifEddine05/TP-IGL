import Nav from '../components/nav';
import house from '../photos/homm.svg'
import tiny from '../photos/tiny.svg'
import lux from '../photos/lux.svg'
import apartements from '../photos/apartements.png'
import bun from '../photos/bun.png'
import farms from '../photos/farms.svg'
import lands from '../photos/lands.svg'
import ssss from '../photos/ssss.svg'
import { useState } from 'react';
import Card from '../components/card';


const PropertiesFeed = () => {
    //const[select,setSelect]=useState([true,false,false,false,false,false,false])
    const [filter,setFilter] =useState(false)
    const handlClick=()=>{
            if(filter)setFilter(false)
            else setFilter(true)
    }
    const [style1,setStyle1]=useState("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px]  flex justify-center items-center  hover:cursor-pointer") 
    const [style2,setStyle2]=useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style3,setStyle3]=useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style4,setStyle4]=useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style5,setStyle5]=useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style6,setStyle6]=useState("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const [style7,setStyle7]=useState("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer") 
    const chooseType =(e)=>{
        if(e.target.value==="house")
        {
            setStyle1("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="tiny")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2(" bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="lux")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2(" md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3(" bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="appartements")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="bun")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="farms")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("bg-[#FF5D02] md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
      
        }
        else if (e.target.value==="lands")
        {
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("bg-[#FF5D02] md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
        }
    }
    return ( 
    <div>
        <Nav num={true} />

        <div className='flex justify-between items-center lg:px-3 md:px-2 px-1 border-b-2'>
        <div className="flex justify-around items-center w-[90%] mx-auto py-2">
                    <input type="radio" name="type" id="house" value="house" className="hidden" onClick={chooseType}/>
                    <label htmlFor="house" className={style1}>
                        <img src={house} alt="home" className="w-[80%] p-2"/>
                    </label>
                    <input type="radio" name="type" id="tiny" className="hidden" value="tiny" onClick={chooseType} />
                    <label htmlFor="tiny" className={style2}>
                        <img src={tiny} alt="home" className="w-full p-2"/>
                    </label>
                    <input type="radio" name="type" id="lux" className="hidden" value="lux" onClick={chooseType}/>
                    <label htmlFor="lux"  className={style3}>
                        <img src={lux} alt="home" className=" w-full p-2"/>
                    </label>
                    <input type="radio" name="type" id="appartements" className="hidden" value="appartements" onClick={chooseType} />
                    <label htmlFor="appartements"  className={style4}>
                        <img src={apartements} alt="home" className=" w-full p-2"/>
                    </label>
                    <input type="radio" name="type" id="bun" className="hidden" value="bun" onClick={chooseType}/>
                    <label htmlFor="bun"  className={style5}>
                        <img src={bun} alt="home" className="w-full p-2"/>
                    </label>
                    <input type="radio" name="type" id="farms" className="hidden" value="farms" onClick={chooseType}/>
                    <label htmlFor="farms"  className={style6}>
                      <img src={farms} alt="home" className="w-[80%] p-2"/>
                    </label>
                    <input type="radio" name="type" id="lands" className="hidden" value="lands" onClick={chooseType}/>
                    <label htmlFor="lands"  className={style7}>
                        <img src={lands} alt="home" className="w-[80%] p-2"/>
                    </label>
                </div>
            {/* <div className='flex justify-around items-center w-[80%] pt-2 '>
                <button className=' border-2 border-black  shadow-sm bg-[#FF5D02] md:p-2 p-1 rounded-3xl  hover:cursor-pointer lg:w-[7%] w-[10%]' value="house" onClick={ChooseType}><img src={house} alt="house" className='w-[100%]' /></button>
                <button className=' rounded-3xl hover:bg-black md:p-2 p-1 hover:bg-opacity-5 hover:cursor-pointer lg:w-[9%] w-[15%]'><img src={tiny} alt="house" className='w-[100%]' /></button>
                <button className='rounded-3xl hover:bg-black md:p-2 p-1 hover:bg-opacity-5 hover:cursor-pointer lg:w-[9%] w-[15%]'><img src={lux} alt="house" className='w-[100%]' /></button>
                <button className='rounded-3xl hover:bg-black md:p-2 p-1 hover:bg-opacity-5 hover:cursor-pointer lg:w-[9%] w-[15%]'><img src={apartements} alt="house" className='w-[100%]' /></button>
                <button className=' rounded-3xl hover:bg-black md:p-2 p-1 hover:bg-opacity-5 hover:cursor-pointer  lg:w-[9%] w-[15%]'><img src={bun} alt="house" className='w-[100%]' /></button>
                <button className='md:p-2 p-1 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer lg:w-[7%] w-[10%]'><img src={farms} alt="house" className='w-[100%]' /></button>
                <button className='md:p-2 p-1 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer lg:w-[7%] w-[10%]'><img src={lands} alt="house" className='w-[100%]' /></button>
            </div> */}
            <div className='w-[10%] lg:mr-10 md:mr-8 sm:mr-6 mr-4 '>
                <button onClick={handlClick} className='flex justify-center items-center md:p-2 p-1  w-[100%] hover:bg-gray-600 hover:bg-opacity-20 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-bold rounded-full border-2 border-black lg:px-4 md:px-3 sm:px-2 px-1'> <img src={ssss} alt='filter' className='w-[22%]  mr-2'/>Filter</button>
            </div>
        </div>

     {filter &&   <div className='flex justify-around items-center md:pt-2 pt-1 border-b-2 md:p-2 p-1 w-[100%]'>
            
                <select className=" max-w-xs lg:p-4 md:p-3 sm:p-2 p-1 bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full border-2 opacity-75 focus:opacity-100 border-black">
                    <option hidden selected className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>State</option>
                    <option className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>Gjjj</option>
                    <option className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>hhhh</option>
                    <option className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>kkkk</option>
                </select>
            
            
                <select className=" max-w-xs lg:p-4 md:p-3 sm:p-2 p-1 bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full opacity-75 focus:opacity-100 border-2 border-black">
                    <option hidden selected>City</option>
                    <option >Gjjj</option>
                    <option>hhhh</option>
                    <option>kkkk</option>
                </select>
            
            <div className='flex justify-start items-center'>
                <h5 className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:pr-4 md:pr-3 sm:pr-2 pr-1 text-right'>Date range</h5>
                <input type="date" className='border-2 lg:mr-4 md:mr-3 sm:mr-2 mr-1  border-black md:p-2 p-1 lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px] rounded-full hover:cursor-pointer'/>
                <input type="date" className='border-2 border-black md:p-2 p-1 rounded-full hover:cursor-pointer lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px]'/>
            </div>

            <div className='flex justify-start items-center'>
                <h5 className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:pr-4 md;pr-3 sm:pr-2 pr-1 text-right'>Budget range</h5>
                <input type="number" placeholder='Min' className='border-2 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:w-[17%] w-[33%] lg:mr-4 md:mr-3 sm:mr-2 mr-1 border-black md:p-2 p-1 rounded-full hover:cursor-pointer'/>
                <input type="number" placeholder='Max' className='border-2  lg:w-[17%] w-[33%] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] border-black md:p-2 p-1 rounded-full hover:cursor-pointer'/>
            </div>
            
            <button className='rounded-full lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] border-2 border-black lg:px-4 md:px-3 sm:px-2 px-1 hover:bg-slate-600 hover:text-white'>filter</button>
        </div>}
        <div className='lg:mt-4 md:mt-3 sm:mt-2 mt-1 mx-auto flex justify-around flex-wrap items-center w-[90%]'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        
           
        </div>
        <div className="flex justify-center w-full py-2 mb-2 gap-2">
            <a href="#item1" className="btn btn-xs rounded-full mx-2 ">1</a> 
            <a href="#item2" className="btn btn-xs rounded-full mx-2 ">2</a> 
            <a href="#item3" className="btn btn-xs rounded-full mx-2 ">3</a> 
            <a href="#item4" className="btn btn-xs rounded-full mx-2 ">4</a>
        </div>
       
    </div> );
}
 // i need to do a function to select one element in the bar behind nav bar   and do a fetch
 //i need to make the page responsive
 //i need to add onclick in love to saveit by fetch and to change it to red love in card 
 // i need to make the caed resopnsive 
 // i need to find an idea for stars 
export default PropertiesFeed;