import React from 'react'
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <div className='flex'>
      <h1 style={{padding:"100px" }}>{props.Home}</h1>
      <h1  style={{padding:"100px" }}>{props.About}</h1>
      <h1  style={{padding:"100px" }}>{props.Contact}</h1>
      <h1  style={{padding:"100px" }}>{props.Team}</h1>
    </div>
  )
}

export default Navbar
