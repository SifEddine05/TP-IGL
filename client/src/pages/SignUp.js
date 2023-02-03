import Exb from "../photos/Exclude_below.svg"
import Exa from "../photos/Exclude_above.svg"
import logo from "../photos/logo1.svg"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    phone_number: yup.number().required("incorrect phone number"),
    address: yup.string().required("address is required"),
}).required();


const SignUp = () => {
    

    const [googleAuth, setGoogleAuth] = useState({
        email: "",
        errors: "please connect with your google account "
    })

    const [error, setError] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleCallbackResponse(response) {
        var userObject = jwt_decode(response.credential);
        setGoogleAuth(userObject)
    }
    useEffect(() => {

        /* global google */
        google.accounts.id.initialize({
            client_id: "440038003517-sbvp2846sqmiaokjm4459t80k2hp221m.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "medium",
        });
    }, [])

    const submitForm = async (dataa) => {

        if (googleAuth.email === "" || googleAuth.email === "invalid") {
            setGoogleAuth({ ...googleAuth, email: "invalid" })
            return
        }

        let dataToSbumit = {
            email: googleAuth.email,
            phone_number: dataa.phone_number,
            address: dataa.address,
            nom: googleAuth.family_name,
            prenom: googleAuth.given_name,
            picture: googleAuth.picture,
        }

        let headersList = {
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify(dataToSbumit);

        let response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        setError(data.message === "Email already exists" ? true : false)
        //here you add the navigate after the login 
    };





    return (




        <div style={{ height: "100vh" }} className="  w-full flex justify-between ">
            <div className="self-end w-[10%]">
                <img src={Exb} alt="exclude" className="w-[100%]" />
            </div>

            <div className=" self-center   justify-center items-center lg:w-[60%] sm:w-[75%] w-[90%]">
                <div className="flex justify-center items-center w-[50%] mx-auto">
                    <img src={logo} alt="logo" className="w-[12%]" />
                    <h3 className="lg:text-[36px] md:text-[26px] text-[20px] text-[17px]font-black  p-1 ">DARNAB</h3>
                </div>
                <form onSubmit={handleSubmit(submitForm)}>
                    <h3 className="lg:text-[28px] md:text-[22px] sm:text-[16px] text-[13px] font-medium text-center sm:py-3 py-2"> Create you account </h3>
                    <div className="text-center sm:py-3 py-2 w-full">
                        <input {...register("phone_number")} type="number" className={` lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] ${errors.phone_number ? "border-red-500" : "border-gray-600"} focus:outline-none w-[45%] border-2  focus:border-[#FFC29F] rounded-full  p-2  px-3`} name="phone_number" placeholder="phone number" />
                        <p className="text-red-500 text-sm font-bold underline">{errors.phone_number && "incorrect phone number"}</p>
                    </div>
                    <div className="text-center sm:py-3 py-2 w-full">
                        <input {...register("address")} type="string" className={` lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] ${errors.address ? "border-red-500" : "border-gray-600"} focus:outline-none w-[45%] border-2  focus:border-[#FFC29F] rounded-full  p-2  px-3`} name="address" placeholder="Address" />
                        <p className="text-red-500 text-sm font-bold underline">{errors.address?.message}</p>
                    </div>
                    <div className="w-[45%] mx-auto lg:py-5 md:py-4 sm:py-3 py-2 flex justify-center items-center ">
                        <div id="signInDiv" className=" text-center"></div>
                    </div>
                    {googleAuth.email === "invalid" && <p className="text-red-500 font-bold text-sm text-center underline">Authenticate with google</p>}
                    {error && <p className=" mt-2 text-red-500 font-bold w-full text-center underline text-sm">Email already exist</p>}


                    <div class="flex justify-start pl-2  items-center w-[50%] mx-auto">
                        <label className="flex justify-start pl-2 items-center text-gray-500 font-bold my-4">
                            <input type="checkbox" className="leading-loose text-pink-600 hover:cursor-pointer" />
                            <span className="py-2 px-2 lg:text-[14px] md:text-[12px]  sm:text-[10px] text-[8px] text-gray-600 leading-snug"> I agree at Terms & Conditions </span>
                        </label>
                    </div>
                    <div className="flex justify-center  w-[45%] mx-auto rounded-full  bg-[#FF5D02]   p-2 hover:text-[#fff] hover:cursor-pointer hover:bg-gray-600 ">
                        <input type="submit" id="submit" className="text-center text-white lg:text-[18px] md:text-[15px] sm:text-[12px] text-[10px] font-bold"></input>
                    </div>
                    <div className="w-[50%] mx-auto lg:py-7 md:py-5 sm:pt-3 pt-2">
                        <p className="text-center lg:text-[16px] md:text-[14px] sm:text-[11px] text-[9px] ">Already have an account ? <Link to="/Login" className="underline hover:text-[#177aeb]">Sign in</Link></p>
                    </div>
                </form>
            </div>

            <div className="self-start w-[8%]">
                <img src={Exa} alt="exclude-above" className="w-[100%]" />
            </div>

        </div>

    );
}

export default SignUp;



