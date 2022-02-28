import { Routes, Route, NavLink } from "react-router-dom";
import Layout from "./components/Layout";
import Product from "./commons/home/oneProduct/OneProduct";
import CreateProduct from "./commons/createProduct/CreateProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/createProduct" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
