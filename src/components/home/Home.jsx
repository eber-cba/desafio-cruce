import * as React from "react";
import axios from "axios";
import Cards from "../../commons/home//cards/Cards";
 import "./Home.css";

export default function Home() {

  return (
    <div className="home">
      <div>
        <Cards />
      
      </div>
    </div>
  );
}
