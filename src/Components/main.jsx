import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Api(){
  let [api, setApi]= useState([]);
  let[search, setSearch] = useState("")
  let change =  (e)=>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
    let api= fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`);
    api.then(res=>res.json()).then(val=>setApi(val.hits))
  })
  let Navigate = useNavigate()
  
  return(
    <>
    <div id="main1">
      <input
          type="text"
          placeholder="Search for all images on Pixabay" onChange={change} id="input"
        /> <br />
        
        {
        api.map(image=>{
          return(
           
            <>
        
            <button onClick={()=>Navigate("/redirect", {state:{image}})}><img src={image.webformatURL} style={{width:315, height:200, margin:9 }}/></button>
            
          
          
        
            </>
          )
        })}
       </div>
        {/* <div id="footer">
            <h1>hellooo</h1>

    </div> */}
    </>
  )

 

}