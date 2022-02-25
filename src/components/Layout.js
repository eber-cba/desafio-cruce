import React from 'react'
import Navbar from "./navbar/Navbar"
import Header from "./header/Header"
import UseCardHome from '../redux/UseCardHome'
export default function Layout() {
  return (
    <>
    <Navbar/>
    <Header/>
    <UseCardHome/>
    </>
  )
}
