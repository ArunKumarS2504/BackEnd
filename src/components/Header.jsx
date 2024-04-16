


import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import {TOKEN} from "../utils/AppContrains"

function Header() {

    let navigate = useNavigate();
    const logoutClick =()=>{
        localStorage.setItem(TOKEN, "")
        navigate("/")
    }

  return (
    <>
      <ul>
        <li><Link to='/'>Login</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><span onClick={()=>{logoutClick()}} >Logout  </span></li>
      </ul>
    
    </>
  )
}

export default Header