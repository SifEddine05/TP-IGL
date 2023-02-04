import Nav from '../components/nav';
import house from '../photos/homm.svg'
import tiny from '../photos/tiny.svg'
import lux from '../photos/lux.svg'
import apartements from '../photos/apartements.png'
import bun from '../photos/bun.png'
import farms from '../photos/farms.svg'
import lands from '../photos/lands.svg'
import ssss from '../photos/ssss.svg'
import clear from '../photos/clearfilter.png'
import { useState } from 'react';
import Card from '../components/card';
import { useEffect } from 'react';


const PropertiesFeed = () => {
    const [tableau, setTableau] = useState([])
    const [saveTab, setSaveTab] = useState([])
    const [pages, setPages] = useState([0])

    useEffect(() => {
        let data ;
       

        //get all the announces
        const getAllTheAnnounces = async () => {
            let headersList = {
                "Content-Type": "application/json"
            }



            let response = await fetch("http://127.0.0.1:5000/announces", {
                method: "GET",
                headers: headersList
            });
            
             data = await response.json();
            setTableau(data.announces)
            setSaveTab(data.announces)
        }
        getAllTheAnnounces()

        //adding the pagination of the pages
        const pages = [1]
        let i = 1

        for (let index = 1; index <= tableau.length; index++) {

            if ((index % 12) === 0) {
                pages[i] = i + 1
                i++
            }
        }
        setPages(pages)
       
    

    }, [])





    const [state, setState] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [dateinit, setDateinit] = useState('')
    const [datefin, setDatefin] = useState('')
    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(0)

    const handlCancel = () => {
        setTableau(saveTab)
        setState('')
        setStreet('')
        setDateinit('')
        setDatefin('')
        setPriceMin(0)
        setPriceMax(0)
        setCity('')
        setStyle1("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
        setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
        setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
        setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
        setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
        setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
        setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")

    }

    const handleFilter = () => {
        console.log(state, city, street, dateinit, datefin, priceMin, priceMax);
        let Tab = saveTab;
        if (state !== '') {
            if (state === 'all') {
                Tab = saveTab
            }
            else {
                function filter(elem) {
                    return (elem.state === state)
                }
                Tab = saveTab.filter(filter)
            }

        }
        if (city !== '') {
            function filter(elem) {
                return (elem.city === city)
            }
            Tab = Tab.filter(filter)
        }
        if (street !== '') {
            function filter(elem) {
                return (elem.street === street)
            }
            Tab = Tab.filter(filter)
        }
        if (dateinit !== '') {
            function filter(elem) {
                return (elem.createdAt >= dateinit)
            }
            Tab = Tab.filter(filter)
        }
        if (datefin !== '') {
            function filter(elem) {
                return (elem.createdAt <= datefin)
            }
            Tab = Tab.filter(filter)
        }
        if (priceMin !== 0 && priceMin !== '') {
            console.log("Min", priceMin)
            function filter(elem) {
                return (elem.price >= priceMin)
            }
            Tab = Tab.filter(filter)
        }
        if (priceMax !== 0 && priceMax !== '') {
            console.log("Max", priceMax)

            function filter(elem) {
                return (elem.price <= priceMax)
            }
            Tab = Tab.filter(filter)
        }



        setTableau(Tab)
        console.log(tableau);

    }







    const [filter, setFilter] = useState(false)
    const handlClick = () => {
        if (filter) setFilter(false)
        else setFilter(true)
    }
    const [style1, setStyle1] = useState("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
    const [style2, setStyle2] = useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
    const [style3, setStyle3] = useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
    const [style4, setStyle4] = useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
    const [style5, setStyle5] = useState("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
    const [style6, setStyle6] = useState("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
    const [style7, setStyle7] = useState("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")


    const chooseType = (e) => {
        if (e.target.value === "house") {
            function checkType(elem) {
                return (elem.type === "house")
            }

            setTableau(saveTab.filter(checkType))
            //console.log(Tab) 
            setStyle1("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")

        }
        else if (e.target.value === "tiny") {
            function checkType(elem) {
                return (elem.type === "tiny")
            }

            setTableau(saveTab.filter(checkType))
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2(" bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")

        }
        else if (e.target.value === "lux") {
            function checkType(elem) {
                return (elem.type === "lux")
            }

            setTableau(saveTab.filter(checkType))
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2(" md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3(" bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")

        }
        else if (e.target.value === "appartements") {
            function checkType(elem) {
                return (elem.type === "appartements")
            }

            setTableau(saveTab.filter(checkType))
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")

        }
        else if (e.target.value === "bun") {
            function checkType(elem) {
                return (elem.type === "bun")
            }

            setTableau(saveTab.filter(checkType))
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("bg-[#FF5D02] md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")

        }
        else if (e.target.value === "farms") {
            function checkType(elem) {
                return (elem.type === "farms")
            }

            setTableau(saveTab.filter(checkType))
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("bg-[#FF5D02] md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
            setStyle7("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")

        }
        else if (e.target.value === "lands") {
            function checkType(elem) {
                return (elem.type === "lands")
            }

            setTableau(saveTab.filter(checkType))
            setStyle1("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle2("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle3("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle4("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle5("md:w-[11%] w-[15%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle6("md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center hover:bg-black hover:bg-opacity-20 hover:cursor-pointer")
            setStyle7("bg-[#FF5D02] md:w-[10%] w-[14%]  rounded-2xl border-2  p-2 md:px-4 px-2 border-black lg:h-[100px] md:h-[80px] sm:h-[60px] h-[40px] flex justify-center items-center  hover:cursor-pointer")
        }
    }
    return (
        <div>
            <Nav num={true} />

            <div className='flex justify-between items-center lg:px-3 md:px-2 px-1 border-b-2'>
                <div className="flex justify-around items-center w-[90%] mx-auto py-2">
                    <input type="radio" name="type" id="house" value="house" className="hidden" onClick={chooseType} />
                    <label htmlFor="house" className={style1}>
                        <img src={house} alt="home" className="w-[80%] p-2" />
                    </label>
                    <input type="radio" name="type" id="tiny" className="hidden" value="tiny" onClick={chooseType} />
                    <label htmlFor="tiny" className={style2}>
                        <img src={tiny} alt="home" className="w-full p-2" />
                    </label>
                    <input type="radio" name="type" id="lux" className="hidden" value="lux" onClick={chooseType} />
                    <label htmlFor="lux" className={style3}>
                        <img src={lux} alt="home" className=" w-full p-2" />
                    </label>
                    <input type="radio" name="type" id="appartements" className="hidden" value="appartements" onClick={chooseType} />
                    <label htmlFor="appartements" className={style4}>
                        <img src={apartements} alt="home" className=" w-full p-2" />
                    </label>
                    <input type="radio" name="type" id="bun" className="hidden" value="bun" onClick={chooseType} />
                    <label htmlFor="bun" className={style5}>
                        <img src={bun} alt="home" className="w-full p-2" />
                    </label>
                    <input type="radio" name="type" id="farms" className="hidden" value="farms" onClick={chooseType} />
                    <label htmlFor="farms" className={style6}>
                        <img src={farms} alt="home" className="w-[80%] p-2" />
                    </label>
                    <input type="radio" name="type" id="lands" className="hidden" value="lands" onClick={chooseType} />
                    <label htmlFor="lands" className={style7}>
                        <img src={lands} alt="home" className="w-[80%] p-2" />
                    </label>
                </div>
                {/* <div className='flex justify-around items-center w-[80%] pt-2 '>
                <button className=' border-2 border-black  shadow-sm bg-[#FF5D02] md:p-2 p-1 rounded-3xl  hover:cursor-pointer lg:w-[7%] w-[10%]' value="house" onClick={ChooseType}><img src={house} alt="house" className='w-[100%]' /></button>
                <button className=' rounded-3xl hover:bg-black md:p-2 p-1 hover:bg-opacity-5 hover:cursor-pointer lg:w-[9%] w-[15%]'><img src={tiny} alt="house" className='w-[100%]' /></button>
                <button className='rounded-3xl hover:bg-black md:p-2 p-1 hover:bg-opacity-5 hover:cursor-pointer lg:w-[9%] w-[15%]'><img src={lux} alt="house" className='w-[100%]' /></button>
                <button className='rounded-3xl hover:bg-black md:p-2 p-1 hover:bg-opacity-5 hover:cursor-pointer lg:w-[9%] w-[15%]'><img src={apartements} alt="house" className='w-[100%]' /></button>
                <button className=' rounded-3xl hover:bg-black md:p-2 p-1 hover:bg-opacity-5 hover:cursor-pointer  lg:w-[9%] w-[15%]'><img src={bun} alt="house" className='w-[100%]' /></button>
                <button className='md:p-2 p-1 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer lg:w-[7%] w-[10%]'><img src={farms} alt="house" className='w-[100%]' /></button>
                <button className='md:p-2 p-1 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer lg:w-[7%] w-[10%]'><img src={lands} alt="house" className='w-[100%]' /></button>
            </div> */}

                <div className='w-[10%] lg:mr-10 md:mr-8 sm:mr-6 mr-4 '>
                    <button onClick={handlCancel} className='flex justify-center items-center md:p-2 p-1  w-[100%] hover:bg-gray-600 hover:bg-opacity-20 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-bold rounded-full border-2 '> <img src={clear} alt='filter' className='w-[30%] ' />Clearfilter</button>
                </div>
                <div className='w-[10%] lg:mr-10 md:mr-8 sm:mr-6 mr-4 '>
                    <button onClick={handlClick} className='flex justify-center items-center md:p-2 p-1  w-[100%] hover:bg-gray-600 hover:bg-opacity-20 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-bold rounded-full border-2 border-black lg:px-4 md:px-3 sm:px-2 px-1'> <img src={ssss} alt='filter' className='w-[22%]  mr-2' />Filter</button>
                </div>
            </div>

            {filter && <div className='flex justify-around items-center md:pt-2 pt-1 border-b-2 md:p-2 p-1 w-[100%]'>

                <select value={state} onChange={(e) => { setState(e.target.value) }} className=" max-w-xs lg:p-4 md:p-3 sm:p-2 p-1 bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full border-2 opacity-75 focus:opacity-100 border-black">
                    <option value="all" selected className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>All</option>
                    <option value="sell" className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>Sell</option>
                    <option value="exchange" className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>Exchange</option>
                    <option value="rent" className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>Rent</option>
                    <option value="rentHolidays" className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]'>Rent for holidays</option>
                </select>

                <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} placeholder='City' className='border-2 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:w-[17%] w-[33%] lg:mr-4 md:mr-3 sm:mr-2 mr-1 border-black md:p-3 p-2 rounded-full hover:cursor-pointer' />
                <input type="text" value={street} onChange={(e) => { setStreet(e.target.value) }} placeholder='Street' className='border-2 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:w-[17%] w-[33%] lg:mr-4 md:mr-3 sm:mr-2 mr-1 border-black md:p-3 p-2 rounded-full hover:cursor-pointer' />

                { /*  <select className=" max-w-xs lg:p-4 md:p-3 sm:p-2 p-1 bg-white  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] hover:cursor-pointer rounded-full opacity-75 focus:opacity-100 border-2 border-black">
                    <option hidden selected>City</option>
                    <option >Gjjj</option>
                    <option>hhhh</option>
                    <option>kkkk</option>
        </select> */}

                <div className='flex justify-start items-center'>
                    <h5 className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:pr-4 md:pr-3 sm:pr-2 pr-1 text-right'>Date range</h5>
                    <input value={dateinit} onChange={(e) => { setDateinit(e.target.value) }} type="date" className='border-2 lg:mr-4 md:mr-3 sm:mr-2 mr-1  border-black md:p-2 p-1 lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px] rounded-full hover:cursor-pointer' />
                    <input value={datefin} onChange={(e) => { setDatefin(e.target.value) }} type="date" className='border-2 border-black md:p-2 p-1 rounded-full hover:cursor-pointer lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px]' />
                </div>

                <div className='flex justify-start items-center'>
                    <h5 className='lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:pr-4 md;pr-3 sm:pr-2 pr-1 text-right'>Budget range</h5>
                    <input value={priceMin} onChange={(e) => { setPriceMin(e.target.value) }} type="number" placeholder='Min' className='border-2 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:w-[17%] w-[33%] lg:mr-4 md:mr-3 sm:mr-2 mr-1 border-black md:p-2 p-1 rounded-full hover:cursor-pointer' />
                    <input value={priceMax} onChange={(e) => { setPriceMax(e.target.value) }} type="number" placeholder='Max' className='border-2  lg:w-[17%] w-[33%] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] border-black md:p-2 p-1 rounded-full hover:cursor-pointer' />
                </div>

                <button className='rounded-full lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] border-2 border-black lg:px-4 md:px-3 sm:px-2 px-1 hover:bg-slate-600 hover:text-white' onClick={handleFilter}>filter</button>
            </div>}
            <div className='carousel '>

                {pages.map((elem) => {

                    return (<div id={"item" + elem} className="carousel-item lg:mt-4 md:mt-3 sm:mt-2 mt-1 mx-auto flex justify-around flex-wrap items-center w-full">
                        {tableau.slice((elem - 1) * 12, (elem - 1) * 12 + 12).map((e) => {
                            return (
                                <div className='w-[20%] lg:w-[18%] flex flex-warp'>
                                    <Card annonce={e} />
                                </div>
                            )  // we must add key={e.id}
                        })}
                    </div>)
                })}

            </div>


            <div className="flex justify-center w-full py-2 mb-2 gap-2">
                {
                    pages.map((elem) => {
                        return (<a href={"#item" + elem} className="btn btn-xs rounded-full mx-2 ">{elem}</a>)

                    })
                }
            </div>

        </div>);
}
// i need to do a function to select one element in the bar behind nav bar   and do a fetch
//i need to make the page responsive
//i need to add onclick in love to saveit by fetch and to change it to red love in card 
// i need to make the caed resopnsive 
// i need to find an idea for stars 
export default PropertiesFeed;