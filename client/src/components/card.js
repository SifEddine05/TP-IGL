import loc from "../photos/location.svg"
import imgg from "../photos/images.png"
import lov from "../photos/love.svg"
import lovr from "../photos/lovered.svg"
import { useState } from "react"


const Card = () => {
    return ( 
    <div className="rounded-xl w-[17%] relative shadow-md my-8">
            <img src={lov} alt="lov"  className="absolute top-4 right-3 w-[12%] hover:cursor-pointer"/>
            <img src={imgg} alt="pht" className="w-full" />
            <div className=" p-1 flex justify-between">
                <div>
                    <h3 className="text-[16px] font-bold">House for rent</h3>
                    <p className="text-[14px]">Nabila Cherifi</p>
                </div>
                <div className="rating w-[40%] ">
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" checked />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                    <input type="radio" name="rating-1" disabled className="mask mask-star hover:cursor-default bg-orange-400" />
                </div>
            </div>
            <div className=" p-1 flex justify-between mt-2 items-center pb-3">
                <div className="flex justify-start items-center w-[50%]">
                    <img src={loc} alt="location" className="w-[15%]" />
                    <p className="text-[14px]">Hydra, Alger</p>
                </div>
                <div>
                    <h3 className="text-[14px] font-bold text-[#FF5D02]">88,000 DA/month</h3>
                </div>
            </div>
            
    </div> 
        
    );
}
 
export default Card;