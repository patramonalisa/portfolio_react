import "./NavbarStyles.css"
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import {FaBars} from 'react-icons/fa'
// import {FaBars} from "react-icons/fa";
import { FaBars,FaTimes } from "react-icons/fa";

const Navbar=()=>{

    const [clicks,setClicks]=useState(false)
    const handleClick=()=>setClicks(!clicks)

    const [color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY >= 100) {
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);
    return(
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={clicks ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/project">Project</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
            <div className="hamburger" onClick=
            {handleClick}>
                {clicks ? (
                <FaTimes size={20} style={{color:"#fff"}} />
                ) : (
                <FaBars size={20} style={{color:"#fff"}} />
                ) }
                
                

            </div>
        </div>

    ); 
};

export default Navbar