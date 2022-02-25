import React from 'react'
import "./Navbar.css"
import portada from "../../assets/navbar/banner.png"
export default function Navbar() {
  return (
    <div className='navbar'>
      <img className='img' src={portada} height="80%" width="100%" />
     </div>
  )
}
