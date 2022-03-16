import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componant/login.js";
import Home from "./componant/home.js";
import CarioPage from "./componant/cairo";
import GizaPage from "./componant/giza";
import AllProducts from './componant/allProducts'
import FollowUpPage from "./componant/followup";
import CardPage from "./componant/card"
let p1 = {
  id: 1,
  name: 'Ahmed',
  price: 15,
  comments: ["This product is nice", "I recommend it"],
};

let p2 = {
  id: 2,
  name: 'Abdou',
  price: 14,
  comments: ["bad one low quality", "don't buy it"],
};

let all_products = [p1, p2];

let testcard = {
  client_name: "dsf"
  , client_number: "sdf"
  , comment: [{content:"df", time: Date()}]
  , product_id: 1
}
let userProducts = [testcard];
export { all_products, userProducts }

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cairo" element={<CarioPage />} />
        <Route exact path="/giza" element={<GizaPage />} />
        <Route exact path="/allproducts" element={<AllProducts />} />
        <Route exact path="/followup" element={<FollowUpPage />} />
        <Route exact path="/card/:cardIdx" element={<CardPage/>} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;
