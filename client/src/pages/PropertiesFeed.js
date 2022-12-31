import Nav from '../components/nav';
import house from '../photos/homm.svg'
import tiny from '../photos/tiny.svg'
import lux from '../photos/lux.svg'
import apartements from '../photos/apartements.png'
import bun from '../photos/bun.png'
import farms from '../photos/farms.svg'
import lands from '../photos/lands.svg'


const PropertiesFeed = () => {
    return ( 
    <div>
        <Nav num={true} />
        <div className='flex justify-around items-center w-[80%] pt-2'>
            <div className=' border-2 border-black  shadow-lg p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer'><img src={house} alt="house" className='w-[80%]' /></div>
            <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer'><img src={tiny} alt="house" className='w-[80%]' /></div>
            <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer'><img src={lux} alt="house" className='w-[80%]' /></div>
            <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer'><img src={apartements} alt="house" className='w-[80%]' /></div>
            <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer'><img src={bun} alt="house" className='w-[80%]' /></div>
            <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer'><img src={farms} alt="house" className='w-[80%]' /></div>
            <div className='p-2 rounded-3xl hover:bg-black hover:bg-opacity-5 hover:cursor-pointer'><img src={lands} alt="house" className='w-[80%]' /></div>
        </div>
    </div> );
}
 // i need to do a function to select one element 
export default PropertiesFeed;