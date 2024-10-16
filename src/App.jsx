import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Func from "./Pages/registration.jsx";
import Login from "./Pages/login.jsx";
import NavBar from "./Components/navbar.jsx";
import MainPage from "./Pages/mainpage.jsx";
import './Components/style.css'
// import Redirect from "./pages/redirect.jsx";
import Redirect from "./Pages/redirect.jsx";
function App(){
    return(
        <>
       <BrowserRouter>
       <Routes>
        <Route path= "/" element= {<MainPage/>}/>
        <Route path ="/register" element = {<Func/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/redirect" element = {<Redirect/>} />
        
       </Routes>
       </BrowserRouter>
        </>
    )
    
}
export default App