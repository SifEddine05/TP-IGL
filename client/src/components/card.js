import loc from "../photos/location.svg"
import imgg from "../photos/images.png"
import lov from "../photos/love.svg"
import lovr from "../photos/lovered.svg"
import { useState } from "react"
import { Link } from 'react-router-dom';
import { useEffect } from "react"


const Card = ({annonce}) => {
    
  // sitll the image to put it in the place of image annonce.images[0]  
    const link = "/Card/"+annonce.id
    return ( 
        <div onClick={()=>{localStorage.setItem('id_announce',annonce.id)}}>

       
    <Link to={link} className="lg:w-[100%] w-[100%] lg:mx-6 md:mx-4 mx-2">
    <div className="rounded-xl w-full relative shadow-md lg:mt-8 md:mt-6 sm:mt-4 mt-2  lg:mx-6 md:mx-4 mx-2 ">
            <img src={lov} alt="lov"  className="absolute top-4 right-3 w-[12%] hover:cursor-pointer"/>
            <img src={annonce.images[0]} alt="pht" className="w-full" />
            <div className=" p-1 flex justify-between">
                <div>
                    <h3 className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-bold">{annonce.type_of_property} for {annonce.type_announcement}</h3>
                    <p className="lg:text-[14px] md:text-[12px] sm;:text-[10px] text-[8px]">{annonce.userName}</p>
                </div>
                <div className="rating w-[40%] ">
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400"  />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400"  />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" checked />
                </div>
            </div>
            <div className=" p-1 flex justify-between md:mt-2 sm:mt-1  items-center md:pb-3 sm:pb-2 pb-1">
                <div className="flex justify-start items-center w-[50%]">
                    <img src={loc} alt="location" className="lg:w-[15%] w-[20%]" />
                    <p className="lg:text-[14px] md:text-[12px] sm;:text-[10px] text-[8px]">{annonce.street}, {annonce.city} </p>
                </div>
                <div >
                    <h3 className="lg:text-[13px] md:text-[11px] sm;:text-[9px] text-[7px] text-center font-bold text-[#FF5D02] ">{annonce.price},00 DA</h3>
                </div>
            </div>
    </div> 
    </Link>
    </div>
        
    );
}
 
export default Card;

// we must use photos of number of starts here