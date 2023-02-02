import Exb from "../photos/Exclude_below.svg"
import Exa from "../photos/Exclude_above.svg"
import { useState } from "react"
import {  useNavigate } from 'react-router-dom';
import { useAuth } from "../context/auth"
import Nav from "../components/nav";




const SendMsg = () => {
    const [err , setErr] = useState(false)
    const [message , setMessage]=useState('')
    const auth =useAuth()
    const [type,setType]=useState('')
    const [Price,setPrice]=useState(0)
    const [phone ,setPhone]=useState(0)
    const navigate= useNavigate()
    const handleSubmit =()=>{
        setErr(false)
        if(type ==='' || Price==='' || Price === 0 || phone==='')
        {
            setMessage('Please fill all the fields ')
            setErr(true)
        }else {
            const Notification = {
                user : auth.user , 
                type : type , 
                Price : Price , 
                phone : phone , 
            }                        
            fetch('/addNotification' , {method: 'POST' , 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(Notification) 
          })
          .then((res)=>{
              if(!res.ok) {throw Error }
              else{
                navigate(-1)
              }
            })
          .catch((err)=>{
              setMessage('Error message from the backend ') // we put the error message from the backend 
              setErr(true)
          })
        }
    }




    return ( 
<div>
<Nav num={true} />
<div className="  w-full flex justify-center">
            
    
            <div className=" self-center   justify-center items-center lg:w-[60%] sm:w-[75%] w-[90%] mt-1">
                <h3 className="lg:text-[28px] md:text-[22px] sm:text-[16px] text-[13px] font-medium text-center  pt-2"> Send Offer </h3>
                <div className="flex justify-around  pt-2 w-full">
                <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[22%] mr-2 flex justify-center flex-col  ">Price<br/>
                        <input value={Price} onChange={(e)=>{setPrice(e.target.value)}} type="number" step="0.01" maxLength="10" min="0" id="Price" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:p-3 sm:p-2 p-1  mt-1 px-[15%] rounded-full border-2 border-black"/>
                     </label>  
                     <label className=" bg-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[22%] flex justify-center flex-col  ">State<br/>
                     <select value={type} onChange={(e)=>{setType(e.target.value)}} className=" bg-white  hove:cursor-pointer lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:p-3 sm:p-2 p-1  mt-1 px-[15%] rounded-full border-2 border-black ">
                                <option value="" hidden selected></option>
                                <option value="sell">Sell</option>
                                <option value="exchange" >Exchange</option>
                                <option value="rent">Rent</option>
                                <option value="rentHolidays" >Rent for holidays</option>
                            </select>                      
                    </label>                  
                                    
                    </div>
                <div className="flex justify-center sm:py-3 py-2 w-full">
                <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[45%] mr-2 flex justify-center flex-col  ">Phone<br/>
                        <input value={phone} onChange={(e)=>{setPhone(e.target.value)}}  type="text"  maxLength="10" min="0" id="Price" placeholder="Phone Number" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:p-3 sm:p-2 p-1  mt-1 px-[15%] rounded-full border-2 border-black"/>
                     </label>

                 </div>
    
                

                 
    
                <div className=" w-[75%] mx-auto">
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%] flex justify-center flex-col  ">Message<br/>
                    <textarea  id="Description" name="Description" rows="8" cols="50" className=" lg:p-6 md:p-4 sm:p-2 p-1 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] mt-2 border-2 border-black rounded-lg"></textarea>                    </label>
                </div>
                {err && <div  className="w-[100%] mx-auto lg:pt-2 pt-1" >
                    <p className="text-center font-bold lg:text-[18px] md:text-[16px] sm:text-[13px] text-[10px] text-red-600 ">{message}</p>
                </div> }
                <div className="flex justify-center items-center">
                <button onClick={handleSubmit}className="w-[45%] rounded-full  bg-[#FF5D02]  md:p-3 p-2 hover:text-[#fff] hover:cursor-pointer hover:bg-gray-600 mt-2 " >  
                    <h3 className="w-full text-center lg:text-[18px] md:text-[15px] sm:text-[12px] text-[10px] font-bold bg-transparent border-0 hover:bg-gray-600">Send Order </h3>
                </button>
                </div>
                
                
            </div>
    
        </div> 
    </div> );
}
 
export default SendMsg;