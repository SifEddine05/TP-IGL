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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth"
import axios from "axios"
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/dc3fxvt26/image/upload";

const NewListing = () => {




    const [type,setType]=useState('house')
    const [area , setArea] = useState(0)
    const [dimX , setDimX] =useState(0)
    const [dimY , setDimY] =useState(0)
    const [nbrRooms,setNbrRooms]=useState(0)
    const [price , setPrice] = useState(0)
    const [state , setState] = useState("Vente")
    const [city , setCity] =useState("")
    const [street , setStreet] =useState("")
    const [description ,setDescription] = useState("")
    const [images, setImages] = useState([]);
    const [err , setErr] = useState(false)
    const [message , setMessage]=useState('')

    const navigate = useNavigate()

    const auth =useAuth()
    const uploadBase64Image = (base64Image) => {
        const formData = new FormData();
        formData.append('file', base64Image);
        formData.append('upload_preset', 'mipff47j');
      
        return axios.post(UPLOAD_URL, formData)
          .then(response => response.data);
      };

    const handlSubmit = ()=>{
        
        setErr(false)
        //console.log(type,area ,dimX,dimY, nbrRooms , price ,city , street , description , images ,state );
        if(area===0 || dimX===0 || dimY===0 || nbrRooms===0 || price===0 || state==="" || city==="" || street==='' || description==='' ) //|| images.length===0
        {
            setMessage('Please fill in all fields') 
            setErr(true)
        }else{
            Promise.all(images.map(image => uploadBase64Image(image.src)))
        .then(results => {
            const url =[];
            results.map((elem)=>{
                    url.push(elem.url)
            })
            const Annonce ={
                user_id:localStorage.getItem('id'),
                // type: type , 
                // userName :auth.user.firstName,
                area : area , 
                dimensions:`${dimX} X ${dimY}`,
                rooms : nbrRooms , 
                price : price , 
                type_of_property:type,
                type_announcement : state , 
                city : city , 
                street :street , 
                description : description , 
                // images : url 
            }         
            // add new annonce    
            const AddNewAnnonce=async()=>{
                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Content-Type": "application/json"
                   }
                   
                   let bodyContent = JSON.stringify(Annonce);
                   
                   let response = await fetch("http://localhost:5000/announces", { 
                     method: "POST",
                     body: bodyContent,
                     headers: headersList
                   });
                   
                   let data = await response.json();
                   console.log(data);
                   let announceId=data[0]

                //     headersList = {
                //     "Accept": "*/*",
                //     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                //     "Content-Type": "application/json"
                //    }
                   for (let i=0;i<url.length;i++)
                   {
                    console.log(url[i])
                    bodyContent = JSON.stringify({
                             "user_id":localStorage.getItem('id'),
                             "announce_id":announceId,
                             "image":`${url[i]}`
                           });
                           
                            response = await fetch("http://localhost:5000/announces/images", { 
                             method: "POST",
                             body: bodyContent,
                             headers: headersList
                           });
                           
                            data = await response.text();
                           console.log(data);
                   }
                //     bodyContent = JSON.stringify({
                //      "user_id":localStorage.getItem('id'),
                //      "announce_id":data[0],
                //      "image":"http://res.cloudinary.com/dc3fxvt26/image/upload/v1675290300/ld9h2dmnnina4qi9pjmw.png"
                //    });
                   
                //     response = await fetch("http://localhost:5000/announces/images", { 
                //      method: "POST",
                //      body: bodyContent,
                //      headers: headersList
                //    });
                   
                //     data = await response.text();
                //    console.log(data);
                   
                   
            }

            



            AddNewAnnonce()

          // Do something with the uploaded images
        });
             
        }
    }





    




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
        setType(e.target.value)
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
                    <input type="number" value={area} onChange={(e)=>{setArea(e.target.value)}} maxLength="10" min="0" id="Area" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] p-2 px-[10%] rounded-full border-2 border-black"/>
                    </label>
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col items-center text-left">Dimensions (m) <br/>
                        <div className="flex justify-start w-[100%] items-center ">
                            <input value={dimX} onChange={(e)=>{setDimX(e.target.value)}} type="number" maxLength="10" min="0" id="Dimensions" placeholder="" className="w-[75%] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] p-2 sm:pl-4  rounded-full border-2 border-black"/>
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-bold">X</h3>
                            <input  value={dimY} onChange={(e)=>{setDimY(e.target.value)}} type="number" maxLength="10" min="0" id="Dimensions" placeholder="" className="w-[75%] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] p-2  sm:pl-4 rounded-full border-2 border-black"/>
                        </div>
                    </label>
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  w-[30%] flex justify-center flex-col  ">Number of rooms<br/>
                    <input value={nbrRooms} onChange={(e)=>{setNbrRooms(e.target.value)}} type="number" maxLength="3" min="0" id="Number_of_rooms" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] p-2 px-[15%] rounded-full border-2 border-black"/>
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
                        <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="number" step="0.01" maxLength="10" min="0" id="Price" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:p-3 sm:p-2 p-1  mt-1 px-[15%] rounded-full border-2 border-black"/>
                        </label>
                    </div>
                   
                </div>

                <div className="w-[90%]  ml-[5%]">
                     <DragDrop setImages={setImages} images={images}  /> 
                </div>

                <div className="lg:pt-10 md:pt-8 sm:pt-6 pt-4   flex justify-between items-center w-[90%] mx-auto ">
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col ">State<br/>
                        <div className="w-full">
                            <select value={state} onChange={(e)=>{setState(e.target.value);}} className="w-full md:p-3 p-2  px-[10%] bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full opacity-75 focus:opacity-100 border-2 border-black">
                                <option hidden value="" selected></option>
                                <option value="sell">Sell</option>
                                <option value="exchange" >Exchange</option>
                                <option value="eent">Rent</option>
                                <option value="reentHolidays" >Rent for holidays</option>
                            </select>
                        </div>                    
                    </label>
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col ">City<br/>
                        <input value={city} onChange={(e)=>{setCity(e.target.value)}} type="text" maxLength="30"  id="City" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] p-2 px-[15%] rounded-full border-2 border-black"/>
                    </label>
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[30%] flex justify-center flex-col  ">Street<br/>
                    <input value={street} onChange={(e)=>{setStreet(e.target.value)}} type="text" maxLength="30"  id="Street" placeholder="" className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] p-2 px-[15%] rounded-full border-2 border-black"/>
                    </label>
                </div>

                <div className="lg:my-[75px] md:my-[65px] sm:my-[55px] my-[45px] w-[90%] mx-auto">
                    <label className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-[100%] flex justify-center flex-col  ">Description<br/>
                    <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} id="Description" name="Description" rows="8" cols="50" className=" lg:p-6 md:p-4 sm:p-2 p-1 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] mt-2 border-2 border-black rounded-lg"></textarea>                    </label>
                </div>
                {err && <div  className="w-[100%] mx-auto lg:pt-2 pt-1" >
                    <p className="text-center font-bold lg:text-[18px] md:text-[16px] sm:text-[13px] text-[10px] text-red-600 ">{message}</p>
                </div> }
                <div className="flex justify-end  lg:pb-10 md:pb-8 sm:pb-6 pb-4">
                    <button className="md:p-3 p-2 border-2 lg:mr-6 md:mr-4 sm:mr-2 mr-1 border-black rounded-full text-center lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] shadow-md hover:bg-black hover:bg-opacity-20">Save draft</button>
                    <button className="md:p-3 p-2 border-2 border-black bg-black rounded-full text-center text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  shadow-md hover:bg-[#002E7C] lg:px-6 md:px-4 sm:px-2 px-1" onClick={handlSubmit}>Publish</button>
                </div>
                

            </div>
        </div>
       
    </div> );
}
 
export default NewListing;