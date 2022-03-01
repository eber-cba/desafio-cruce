import React from "react";

import Header from "./header/Header";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar"
export default function Layout() {
  return (
    <>
    <Navbar/>
      <Header />
      <Home />
    </>
  );
}
