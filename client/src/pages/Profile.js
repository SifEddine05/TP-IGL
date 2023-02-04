import ii from '../photos/profile.jpg'
import mm from '../photos/Mask.png'
import del from '../photos/delete.png'
import Nav from '../components/nav'
import Card from '../components/card';
import {useAuth } from '../context/auth'
import { useState } from 'react'
import { useEffect } from 'react'

const Profile = () => {
    // "http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290127/vkchoybulqat4ffgid3x.png"
    //"http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png"
  const auth = useAuth() // it will contain the current user details 
    const [MyListing,setMyListing]=useState([ 
        // this set Table will be replaced by the fetch below 
        {   id:0,
            userName:"sifou", type: "" , 
            area : 0 , 
            dimX : 0 , 
            dimY : 0 ,
            nbrRooms : 0 , 
            price : 0 , 
            state : "" , 
            city : "" , 
            street :"" , 
            description : "" , 
            images : [""]
        },])

  useEffect(()=>{
    // setMyListing([  // this set Table will be replaced by the fetch below 
    //     {   id:1,
    //         userName:"sifou", type: "tiny" , 
    //         area : 100 , 
    //         dimX : 10 , 
    //         dimY : 20 ,
    //         nbrRooms : 3 , 
    //         price : 2000.00 , 
    //         state : "sell" , 
    //         city : "batna" , 
    //         street :"ain yagout" , 
    //         description : "fgdfg fghgfdh dtfh d fh d g hrt h r tg rt hd tr hddr th d th fh t ht  hg htr " , 
    //         images : ["http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png"]
    //     },
    //     {   id:2,
    //         userName:"sifou", type: "house" , 
    //         area : 100 , 
    //         dimX : 10 , 
    //         dimY : 20 ,
    //         nbrRooms : 3 , 
    //         price : 2000.00 , 
    //         state : "sell" , 
    //         city : "batna" , 
    //         street :"ain yagout" , 
    //         description : "fgdfg fghgfdh dtfh d fh d g hrt h r tg rt hd tr hddr th d th fh t ht  hg htr " , 
    //         images : ["http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png"]
    //     },
    //     {   id:3,
    //         userName:"sifou", type: "house" , 
    //         area : 100 , 
    //         dimX : 10 , 
    //         dimY : 20 ,
    //         nbrRooms : 3 , 
    //         price : 2000.00 , 
    //         state : "sell" , 
    //         city : "batna" , 
    //         street :"ain yagout" , 
    //         description : "fgdfg fghgfdh dtfh d fh d g hrt h r tg rt hd tr hddr th d th fh t ht  hg htr " , 
    //         images : ["http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png"]
    //     },
    // {       id:4 ,
    //         userName:"sifou", type: "lux" , 
    //         area : 100 , 
    //         dimX : 10 , 
    //         dimY : 20 ,
    //         nbrRooms : 3 , 
    //         price : 2000.00 , 
    //         state : "sell" , 
    //         city : "batna" , 
    //         street :"ain yagout" , 
    //         description : "fgdfg fghgfdh dtfh d fh d g hrt h r tg rt hd tr hddr th d th fh t ht  hg htr " , 
    //         images : ["http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png"]
    //     },
    //     {   id:5,
    //         userName:"sifou", type: "lux" , 
    //         area : 100 , 
    //         dimX : 10 , 
    //         dimY : 20 ,
    //         nbrRooms : 3 , 
    //         price : 2000.00 , 
    //         state : "sell" , 
    //         city : "batna" , 
    //         street :"ain yagout" , 
    //         description : "fgdfg fghgfdh dtfh d fh d g hrt h r tg rt hd tr hddr th d th fh t ht  hg htr " , 
    //         images : ["http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png","http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png"]
    //     }, 
    // ])// this set table will replaced by the fetch below 
   
    //get the annonces of the actuel user 
    const getUserAnnonces= async ()=>{
        let headersList = {
            "Content-Type": "application/json"
           }
           
           let response = await fetch(`http://127.0.0.1:5000/my-announces/${localStorage.getItem('id')}`, { 
             method: "GET",
             headers: headersList
           });
           
           let data = await response.json();
           console.log(data.announces);
           setMyListing(data.announces)

    }
    getUserAnnonces()
   
       


  },[])
  const [err , setErr] = useState(false)
  const [message , setMessage]=useState('')
  const deleteAnonce = (id)=>{
      setErr(false)
    let Tab = MyListing ; 
    function filter(elem) {
        return (elem.id!==id)
    }
    Tab= Tab.filter(filter)
    setMyListing(Tab)

    // this instruction will be replaced by the fetch below


   /*fetch('/deletAnnonce' , {method: 'Delete' , 
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify(id) 
  })
  .then((res)=>{
      if(!res.ok) {throw Error }
      else{
          function filter(elem) {
                     return (elem.id!==id)
            }
            Tab= Tab.filter(filter)
            setMyListing(Tab)
      }
    })
  .catch((err)=>{
      setMessage('Error message from the backend ') // we put the error message from the backend 
      setErr(true)
  })*/
  }
  
    return ( 
       <div>
            <Nav num={false} /> 
            <div className="m-[3%] ">
            <div className="rounded-full bg-white  flex justify-between  p-2 ">
                <div className="md:w-[20%] lg:w-[15%] sm:w-[20%] w-[25%] flex justify-between items-center">
                    <div className="w-[40%] "><img src={ii} alt='ii' className="rounded-full "/></div>
                    <div className=" lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">Hi , {auth.user.firstName}</div>
                </div>
                <div className="w-[50%] flex justify-around">
                    <div className="flex flex-col justify-center items-center">
                        <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">My Listings</div>
                        <div className=" lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-bold">{MyListing.length}</div>
                    </div>
                    <div  className="flex flex-col justify-center items-center">
                         <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">Bought Properties</div>
                         <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-bold">2</div>
                    </div>
                    <div  className="flex flex-col justify-center items-center">
                         <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">Member since</div>
                         <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-bold">{auth.user.createdAt}</div>
                    </div>
                </div>
            </div>
            <div className=" mt-[5%] ml-[3%] flex items-center w-[25%]">
                <div className='md:w-[10%] w-[15%]'><img src={mm} alt='mm' className='w-full'/></div>
                <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] ml-[1%] mt-[0.25%]">My listings</div>
            </div>
            <div className='lg:mt-4 md:mt-3 sm:mt-2 mt-1 mx-auto flex justify-around flex-wrap items-center w-[100%]'>
            {err && <div  className="w-[100%] mx-auto lg:pt-2 pt-1" >
                    <p className="text-center font-bold lg:text-[18px] md:text-[16px] sm:text-[13px] text-[10px] text-red-600 ">{message}</p>
                </div> }
                
                {MyListing.map((e)=>{
                    return( 
                   // <div className="flex flex-col justify-center items-center w-full">
                   <div className="flex flex-col justify-center items-center w-[20%] lg:w-[18%]" >
                       <Card annonce={e} className='w-full'/>
                        <button  onClick={()=>{deleteAnonce(e.id)}} className=" group flex flex-col justify-center items-center w-[50%] hover:bg-[#000] hover:bg-opacity-20  rounded-full p-2 border-2 " > 
                            <h4 className='text-red-600 hidden group-hover:block'> Delete Annonce </h4>
                            <img src={del} alt="delete" className="w-[20%]"/>
                       </button>
                   </div>
                        
               /* </div>*/ )
                })}
                        
            </div>



         { /*    <div className="mt-[5%] ml-[3%] flex items-center w-[25%]">
                <div className='md:w-[10%] w-[15%]'><img src={kk} alt='kk' className='w-[100%]'/></div>
                <div className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] ml-[1%] mt-[0.25%]">Watchlist</div>
            </div>
            <div className='lg:mt-4 md:mt-3 sm:mt-2 mt-1 flex justify-start flex-wrap items-center w-[95%] mx-auto'>
                <Card/>
                <Card/>
                
    </div>  */}
            

        </div>
       </div>
       
     );
}
 
export default Profile;
<div></div>