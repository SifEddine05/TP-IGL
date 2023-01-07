const Editprofile = () => {
    return (  
        <div className="bg-[#fffff5] h-full">
             <div className="text-sm mt-[3%] ml-[20%] text-[#767676] ">Edit Profile</div>
            <div className="pl-[2%] pr-[2%]  ml-[20%] mr-[20%] bg-white rounded-xl pt-[2%] mt-[2%] pb-[2%]  ">
            
            <div>
               
                 <label for="prenom" className="text-sm text-[#767676]">UserName</label>
                <input type="text" id="prenom" name="prenom" className="w-[100%] mt-[1%] pt-[0.5%] pb-[0.5%] pl-[2%] pr-[2%] rounded-full border-2 "/>
            </div>
           
            <div className="w-full flex justify-between mt-[2%] mr-[3%]">
                <div>
                    
                     <label for="email" className="text-sm text-[#767676]">Email</label>
                    <input type="text" id="email" name="email" className="w-full mt-[1%] pt-[2%] pb-[2%] pl-[5%] pr-[5%] rounded-full border-2 "/>
                </div>
                <div>
                      
                      <label for="phone" className="text-sm text-[#767676]">Phone mobile</label>
                      <input type="text" name="phone" className=" w-full mt-[1%] pt-[1.5%] pb-[1.5%] pl-[5%] pr-[5%]  rounded-full border-2 "/>
                </div>
            </div>
           
            <div className="mt-[1%]">
               
               <label for="address" className="text-sm text-[#767676]">Address</label>
              <input type="text" id="address" name="address" className="w-full mt-[1%] pt-[0.5%] pb-[0.5%] pl-[2%] pr-[2%] rounded-full border-2 "/>
          </div>
          <div className="w-full flex justify-between mt-[2%] mr-[3%]">
                <div>
                    
                     <label for="email" className="text-sm text-[#767676]">Password</label>
                    <input type="text" id="email" name="email" className="w-full mt-[1%] pt-[2%] pb-[2%] pl-[5%] pr-[5%] rounded-full border-2 "/>
                </div>
                <div>
                      
                      <label for="phone" className="text-sm text-[#767676]">New Password</label>
                      <input type="text" name="phone" className=" w-full mt-[1%] pt-[1.5%] pb-[1.5%] pl-[5%] pr-[5%] rounded-full border-2 "/>
                </div>
            </div>
           
              <div className="mt-[2%] flex justify-end"><button className="text-white bg-black rounded-full p-[1%] font-bold">Save Changes</button></div>
            </div>
            
         
        </div>
    );
}
 
export default Editprofile;