import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from '../components/nav'





const ShowMsgs = () => {
    const [Notifications,setNoty] =useState([{user :{id:0 , email:"" ,firstName:""} , // this user will contain all the user object 
    type :  "",
    annonceId : 0 ,  
    id:0,
    message : "" ,
    Price : 0 , 
    phone : ""
},])
    useEffect(()=>{

        setNoty([{user :{id:123 , email:"ks@esi.dz" ,firstName:"sifou"} , // this user will contain all the user object 
            type :  "sell",
            annonceId : 122 ,  
            id:1,
            message : "kdjfkds dsjqkfkdsjg fds gqdf g df g df g fds g fg gsdsggfd  gdf g dfg " ,
            Price : 200.00 , 
            phone : "0558684686"
        },
        {user :{id:1234 , email:"ksa@esi.dz" ,firstName:"sifou"} , 
            type :  "sell",
            annonceId : 121 ,  
            message : "kdjfkds dsjqkfkdsjg fds gqdf g df g df g fds g fg gsdsggfd  gdf g dfg " ,
            id:2,
            Price : 2000.00 , 
            phone : "0558684686"
        },
        {user :{id:1235, email:"ks1@esi.dz" ,firstName:"sifou"} , 
            type :  "sell", 
            annonceId : 1222 ,  
            message : "kdjfkds dsjqkfkdsjg fds gqdf g df g df g fds g fg gsdsggfd  gdf g dfg " ,
            Price : 200.00 , 
            id:3,
            phone : "0558684686"
        },
        {user :{id:1236 , email:"ks@esi.dz" ,firstName:"sifou"} , 
            type :  "sell", 
            Price : 200.00 ,
            message : "kdjfkds dsjqkfkdsjg fds gqdf g df g df g fds g fg gsdsggfd  gdf g dfg " ,
            annonceId : 1223 ,   
            id:4,
            phone : "0558684686"
        },
        {user :{id:1237 , email:"ks@esi.dz" ,firstName:"sifou"} , 
            type :  "sell", 
            id:5,
            message : "kdjfkds dsjqkfkdsjg fds gqdf g df g df g fds g fg gsdsggfd  gdf g dfg " ,
            Price : 200.00 , 
            annonceId : 1224 ,  
            phone : "0558684686"
        },
    ]) // this setNoty will be replaced by the fetch below 

    /*fetch('/getUserNotifications' , {method: 'GET' , 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(auth.user.id) 
          })
          .then((res)=>{
              if(!res.ok) {throw Error }
              else{
                return res.json
              }
            })
            .then((data)=>{
                setNoty(data)
            })
          .catch((err)=>{
              
          })*/
    },[]) 
    return ( 
        <div className=''>
        <Nav num={true} /> 
        <h3 className=" lg:mt-6 md:mt-4 sm:mt-2 mt-1  lg:text-[28px] md:text-[22px] sm:text-[16px] text-[13px] font-medium text-center sm:py-3 py-2"> My Offers</h3>


        {
            Notifications.map((elem)=>{
                //bg-blue-500
                return( <div className='w-[75%] my-8   bg-[#FF5D02] mx-auto   text-white p-2 rounded-full shadow-md'>
                <h3 className=" text-center lg:text-[24px] md:text-[18px] sm:text-[14px] text-[11px] font-medium text-[#000]"> The Buyer : <span className='text-white'>{elem.user.firstName}</span></h3>
                <h3 className=" text-center mt-4 lg:text-[20px] md:text-[14px] sm:text-[12px] text-[9px] text-[#000]"> Type Of Operation : <span className='text-white'>{elem.type}</span></h3>
                <h3 className=" text-center  lg:text-[20px] md:text-[14px] sm:text-[12px] text-[9px]  text-[#000]">Price Offred : <span className='text-white'>{elem.Price} DA</span></h3>
                <h3 className=" text-center  lg:text-[20px] md:text-[14px] sm:text-[12px] text-[9px]  text-[#000]"> Buyer's Phone Number : <span className='text-white'>{elem.phone}</span></h3>
                <h3 className=" text-center  lg:text-[20px] md:text-[14px] sm:text-[12px] text-[9px]  text-[#000]"> Buyer's Email : <span className='text-white'>{elem.user.email}</span></h3>
                <Link to={"/Card/"+elem.annonceId} className="ml-[10%]  lg:text-[20px] md:text-[14px] sm:text-[12px] text-[9px]  hover:text-[#000]" >See My Annonce </Link>
            </div>)
            })
        }
       
    </div> );
}
 
export default ShowMsgs ; 