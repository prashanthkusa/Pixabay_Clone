import React, { useState } from "react";
import { Link } from "react-router-dom";
function Func(props){
let [state, setState] = useState();
    function Regis() {
        alert("Please create your account")
        
    }
    return(
     <>
     <div id="register">
     <h1 style={{textAlign:"center", color:"white"}}>Registration page</h1>
     
     <form action="" id="form">
     <table >
        <tr><label htmlFor="FirstName">Username :</label>
        <td><input type="text"  placeholder="enter your name" required pattern="[A-Z a-z]{3,0}" id="uname"/></td> <br /></tr>

        <tr><label>email :</label>
        <td><input type="text" placeholder="enter your email"/> </td><br /></tr>

        <tr><label htmlFor="">Mobile Number :</label>
        <td><input type="text" placeholder="enter mobile number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength={10} required /></td> <br /></tr>

       <tr> <label htmlFor="">Password :</label>
       <td><input type="password" placeholder="enter your password" required pattern="[A-Z a-z 0-9]{8,10}" id="pass"/></td></tr>
       <tr>
      <td> <Link to="/login"><button  type="submit" onClick={store} id="regbtn" >Login</button></Link> </td>
      <td><button id="regbtn1" onClick={Regis}>Sign In</button></td>
     
       </tr>
      </table>
     </form>
     
     </div>
     </>
    )
    function store(){
        let username = document.getElementById("uname")
        window.localStorage.setItem("Username", username)
        let pwd = document.getElementById("pass")
        window.localStorage.setItem("Password", pwd)
    }
}
    export default Func