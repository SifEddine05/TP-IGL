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
    return ( 
    <div>
        <Nav num={true} />

        <div className='flex justify-between items-center px-3 border-b-2'>
            <div className='flex justify-around items-center w-[80%] pt-2 '>
                <div className=' border-2 border-black  shadow-lg p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer w-[5%]'><img src={house} alt="house" className='w-[100%]' /></div>
                <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer w-[7%]'><img src={tiny} alt="house" className='w-[100%]' /></div>
                <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer w-[7%]'><img src={lux} alt="house" className='w-[100%]' /></div>
                <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer w-[7%]'><img src={apartements} alt="house" className='w-[100%]' /></div>
                <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer  w-[7%]'><img src={bun} alt="house" className='w-[100%]' /></div>
                <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer w-[5%]'><img src={farms} alt="house" className='w-[100%]' /></div>
                <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer w-[5%]'><img src={lands} alt="house" className='w-[100%]' /></div>
            </div>
            <div className='w-[10%] mr-10 '>
                <button onClick={handlClick} className='flex justify-center items-center p-2  w-[100%] hover:bg-gray-600 hover:bg-opacity-20 text-[16px] font-bold rounded-full border-2 border-black px-4'> <img src={ssss} alt='filter' className='w-[25%] pr-2'/>Filter</button>
            </div>
        </div>

     {filter &&   <div className='flex justify-around items-center pt-2 border-b-2 p-2'>
            <div>
                <select className="select w-full max-w-xs bg-white p-2 text-[16px] hover:cursor-pointer rounded-full border-2 opacity-75 focus:opacity-100 border-black">
                    <option hidden selected>State</option>
                    <option >Gjjj</option>
                    <option>hhhh</option>
                    <option>kkkk</option>
                </select>
            </div>
            <div>
                <select className="select w-full max-w-xs bg-white p-2 text-[16px] hover:cursor-pointer rounded-full opacity-75 focus:opacity-100 border-2 border-black">
                    <option hidden selected>City</option>
                    <option >Gjjj</option>
                    <option>hhhh</option>
                    <option>kkkk</option>
                </select>
            </div>
            <div className='flex justify-start items-center'>
                <h5 className='text-[16px] pr-4'>Date range</h5>
                <input type="date" className='border-2 mr-4 border-black p-2 rounded-full hover:cursor-pointer'/>
                <input type="date" className='border-2 border-black p-2 rounded-full hover:cursor-pointer'/>
            </div>

            <div className='flex justify-start items-center'>
                <h5 className='text-[16px] pr-4'>Budget range</h5>
                <input type="number" placeholder='Min' className='border-2 w-[15%] mr-4 border-black p-2 rounded-full hover:cursor-pointer'/>
                <input type="number" placeholder='Max' className='border-2  w-[15%] border-black p-2 rounded-full hover:cursor-pointer'/>
            </div>
            
            <button className='rounded-full text-[18px] border-2 border-black px-4 hover:bg-slate-600 hover:text-white'>filter</button>
        </div>}
        <div className='mt-4 mx-auto flex justify-around flex-wrap items-center w-[90%]'>
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
            <Card/>
           
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs ">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
       
    </div> );
}
 // i need to do a function to select one element in the bar behind nav bar   and do a fetch
 //i need to make the page responsive
 //i need to add onclick in love to saveit by fetch and to change it to red love in card 
 // i need to make the caed resopnsive 
 // i need to find an idea for stars 
export default PropertiesFeed;