import React from "react";
import { useLocation } from "react-router-dom";

function Redirect(){
 let Location = useLocation()
console.log(Location)
let specificImg = Location.state.image
    return(
        <>
        <div>
            <img src={specificImg.webformatURL} id="image" />
        </div>
        </>

    )
}
export default Redirect