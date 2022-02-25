import { Routes, Route, NavLink } from "react-router-dom";
import Layout from "./components/Layout";
import OneProduct from "./components/home/OneProduct";

function App() {
  return(

    <div>
    <Routes>
      <Route path="/" element={<Layout />} />
       <Route path="/products/:id" element={<OneProduct />} />
    </Routes>
  </div>
   
  )

}

export default App;
