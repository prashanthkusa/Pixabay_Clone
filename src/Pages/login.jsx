import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login(props){
let [state, setState] = useState();
    function Regis() {
        alert("enter the details")
        
    }
    return(
     <>
     <div id="login">
     <h1 style={{textAlign:"center", color:"white"}}>
        Login Page
     </h1>
     
     <form action="" id="form">
     <table >
        <tr><label htmlFor="">Username :</label>
        <td><input type="text"  placeholder="enter your name" required className="username"/></td> <br /></tr>

       <tr> <label htmlFor="">Password :</label>
       <td><input type="password" placeholder="enter your password"  required className="password"/></td></tr> <br />
       <tr>
       <button id="lgbtn" onClick={validate}>Sign In</button>
        </tr>

        </table>
     </form>
     
     </div>
     </>
    )
    function validate(){
        let uname = document.getElementById("username")
        let pass = document.getElementById("password")
        if(uname === window.localStorage.getItem("Username")&& pass=== window.localStorage.getItem("Password")){
            window.open("./login.jsx")
        }
        else{
            alert ("Enter valid details")
        }
    }
}
    export default Login