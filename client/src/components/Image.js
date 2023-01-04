import React from "react";
import { useEffect } from "react";
import Delete from "../photos/delete.png"
function Image({ image,removeFile }) {
   
  return (
    <div className="w-[20%] p-2 border-2 border-black mx-2 rounded-lg group">
        <div className="file-remove group-hover:block hidden py-[35%] group-hover:cursor-pointer" onClick={() => removeFile(image.src) } ><p className="text-[16px] text-center pb-2">Click To delete</p><img src={Delete} alt="delete" className="w-[25%] mx-auto"/> </div>
      <img alt='' src={image.src}  className="w-full  group-hover:hidden block"/>
    </div>
  );
}
export default Image;