import loc from "../photos/location.svg"
import imgg from "../photos/images.png"
import lov from "../photos/love.svg"
import lovr from "../photos/lovered.svg"
import { useState } from "react"
import { Link } from 'react-router-dom';


const Card = () => {
    //    <div className="rounded-xl lg:w-[17%] w-[20%] relative shadow-md lg:my-8 md:my-6 sm:my-4 my-2  lg:mx-6 md:mx-4 mx-2 ">

    return ( 
    <Link to="/Card/id" className="lg:w-[18%] w-[20%] lg:mx-6 md:mx-4 mx-2">
    <div className="rounded-xl w-full relative shadow-md lg:my-8 md:my-6 sm:my-4 my-2  lg:mx-6 md:mx-4 mx-2 ">
            <img src={lov} alt="lov"  className="absolute top-4 right-3 w-[12%] hover:cursor-pointer"/>
            <img src={imgg} alt="pht" className="w-full" />
            <div className=" p-1 flex justify-between">
                <div>
                    <h3 className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-bold">House for rent</h3>
                    <p className="lg:text-[14px] md:text-[12px] sm;:text-[10px] text-[8px]">Nabila Cherifi</p>
                </div>
                <div className="rating w-[40%] ">
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" checked />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                </div>
            </div>
            <div className=" p-1 flex justify-between md:mt-2 sm:mt-1  items-center md:pb-3 sm:pb-2 pb-1">
                <div className="flex justify-start items-center w-[50%]">
                    <img src={loc} alt="location" className="lg:w-[15%] w-[20%]" />
                    <p className="lg:text-[14px] md:text-[12px] sm;:text-[10px] text-[8px]">Hydra, Alger</p>
                </div>
                <div >
                    <h3 className="lg:text-[13px] md:text-[11px] sm;:text-[9px] text-[7px] text-center font-bold text-[#FF5D02] ">88,000 DA/month</h3>
                </div>
            </div>
            
    </div> 
    </Link>
        
    );
}
 
export default Card;

// we must use photos of number of starts here