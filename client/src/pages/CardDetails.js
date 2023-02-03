import ss from '../photos/logo.png'
import mm from '../photos/maskgroup.svg'
import nn from '../photos/notif.svg'
import pp from '../photos/pictures.png'
import aa from '../photos/appelle.png'
import tt from '../photos/talk.png'
import Nav from '../components/nav'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import MapAnnonces from '../components/MapAnnonces'
import { Link } from 'react-router-dom';

const CardDetails = () => {
     // we must add the photos of annonce 
     let { cardId } = useParams();
     console.log(cardId)
     const [Card, setCard] = useState({  // this set Table will be replaced by the fetch below 
          id: cardId,
          userName: "",
          longitude: 0,
          latitude: 0,
          type: "",
          area: 0,
          dimX: 0,
          dimY: 0,
          nbrRooms: 0,
          price: 0,
          state: "",
          city: "",
          street: "",
          description: "",
          images: [""]
     })
     useEffect(() => {
          let data;
          const fetchingData = async () => {
               //get the data about the card 
               let headersList = {
                    "Content-Type": "application/json"
               }

               let response = await fetch("http://127.0.0.1:5000/announces/2", {
                    method: "GET",
                    headers: headersList
               });

               data = await response.json();
               console.log(data.announce[0]);

               setCard({  // this set Table will be replaced by the fetch below 
                    id: cardId,
                    userName: "Nabila cherifi",
                    type: data.announce[0].type_announcement,
                    area: data.announce[0].area,
                    dimX: 10,
                    dimY: 20,
                    longitude: 3.1717269,
                    latitude: 36.7050299,
                    nbrRooms: data.announce[0].rooms,
                    price: data.announce[0].price,
                    state: data.announce[0].state,
                    city:data.announce[0].city ,
                    street: data.announce[0].street,
                    description: data.announce[0].description,
                    images: ["http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png", "http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png", "http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png", "http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png", "http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png"]
               },)
     


               //get the data of the user by his id 

               let response2 = await fetch(`http://127.0.0.1:5000/getUser/${data.announce[0].user_id}`, {
                    method: "GET",
                    headers: headersList
               });

               data = await response2.json();
               setCard({...Card,userName:`${data.prenom} ${data.nom}`})
               console.log(data);
          }




          fetchingData()
          

          // this set Table will be replaced by the fetch below
          /*fetch('/getAnnonceByid')
           .then(res => {
                if(!res.ok){
                     throw Error 
                }else{ return res.json}
                })
                .then (data => {
                          setCard(data)
                }) 
                     .catch(err => {} )
           }, []);*/


     }, [])
     return (
          <div>
               <Nav num={true} />
               <div className="pl-[5%] pr-[5%] pt-[2%] pb-[2%] ">

                    <div className="font-bold lg:text-[24px] md:text-[21px] sm:text-[19px] text-[16px]">{Card.type} for {Card.state}</div>
                    <div className="lg:text-lg md:text-md sm:text-sm text-xs">{Card.userName}</div>


                    <div className=" pt-[2%]  w-full flex justify-between ">

                         <div className="w-[45%] flex flex-col justify-center items-center ">
                              <div className='w-[80%]'>
                                   <a target="_blank" rel="noreferrer" href={Card.images[0]} className='w-full '><img src={Card.images[0]} alt='pp' className="w-[100%] " /></a>
                              </div>
                              <div className='w-full mt-3 flex justify-start'>
                                   {
                                        Card.images.slice(1, 5).map((elem) => {
                                             return (<a target="_blank" rel="noreferrer" href={elem} className='w-full mr-2'><img src={elem} alt='pp' className="w-[100%] " /></a>)
                                        })
                                   }
                              </div>

                         </div>
                         <div className="w-[45%] ">
                              <div className="flex justify-between items-center   ">
                                   <div className="text-[#FF5D02] font-bold w-full lg:text-xl md:text-lg sm:text-md text-xs">{Card.price} DA</div>
                                   <div className="w-full ml-[20%]  "><Link to="/sendMsg" className="text-black lg:text-xl md:text-lg sm:text-md text-xs bg-[#FF5D02] hover:bg-gray-600  hover:text-white rounded-full pt-[5%] pb-[5%] pl-[10%] pr-[10%]">Buy this appartment</Link></div>
                              </div>
                              <div className="mt-[5%] lg:text-sm md:text-xs sm:text-[12px] text-[10px] ">About this property</div>
                              <div className=" flex justify-between pl-[5%] pr-[5%] pt-[2%] pb-[2%] mt-[5%]  text-black w-full">
                                   <div className='flex flex-col justify-center items-center'>
                                        <div className="lg:text-xl md:text-lg sm:text-md text-xs">Area</div>
                                        <div className=" lg:text-xl md:text-lg sm:text-md text-xs font-bold">{Card.area} m²</div>
                                   </div>
                                   <div className='flex flex-col justify-center items-center'>
                                        <div className="lg:text-xl md:text-lg sm:text-md text-xs">Dimensions</div>
                                        <div className="lg:text-xl md:text-lg sm:text-md text-xs font-bold">{Card.dimX}x{Card.dimY} m</div>
                                   </div>

                                   <div className='flex flex-col justify-center items-center'>
                                        <div className="lg:text-xl md:text-lg sm:text-md text-xs">Rooms</div>
                                        <div className="lg:text-xl md:text-lg sm:text-md text-xs font-bold">{Card.nbrRooms}</div>
                                   </div>
                              </div>
                              <div className=" mt-[5%] lg:text-xl md:text-lg sm:text-md text-xs">Desctiption</div>
                              <div className="mt-[5%] lg:text-xl md:text-lg sm:text-md text-xs">{Card.description}</div>
                              <div className="mt-[5%] lg:text-xl md:text-lg sm:text-md text-xs">Location</div>
                              <div className="mt-[3%] lg:text-xl md:text-lg sm:text-md text-xs">{Card.street} , {Card.city} </div>
                              <div className="w-full flex mt-[5%] justify-around mx-auto">
                                   <a href="#my-modal-2" className="w-full ml-[5%] "><button className="flex  md:px-6 px-3  items-center rounded-full md:p-3 p-2  hover:bg-black hover:bg-opacity-75 bg-black  " >
                                        <div className="flex"><img src={aa} alt='aa' /></div>
                                        <div className="w-full pl-[2%] text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">Call owner</div>
                                   </button></a>
                                   <div className="w-[50%]  "><Link to='/sendMsg' className=" flex items-center  md:p-3 p-2  rounded-full border-2 border-black hover:bg-black hover:bg-opacity-10">
                                        <div><img src={tt} alt='tt' /></div>
                                        <div className=" w-full pl-[2%] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">Message owner</div>
                                   </Link></div>
                              </div>
                         </div>
                    </div>
                    <MapAnnonces announces={Card} />
               </div>

               <div className="modal" id="my-modal-2">
                    <div className="modal-box">
                         <h3 className="font-bold text-lg">Would you Call the owner ! </h3>
                         <p className="py-4">This is his phone number : 0558456920 </p>
                         <div className="modal-action">
                              <a href="#" className="btn"> OK! </a>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default CardDetails;