import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./websitepages/Home";
import Product from "./websitepages/Product";
import Contact from "./websitepages/Contact";
import About from "./websitepages/About";
import Cart from "./websitepages/Cart";
import Navbar from "./components/Navbar";
import { use, useEffect, useState } from "react";

function App() {
  // let [userlocation ,setuserlocation]=useState({});
  // async function GetLocation(){
  //   navigator.geolocation.getCurrentPosition((pos)=>{
  //     setuserlocation({
  //       latitude:pos.coords.latitude,
  //       longitude: pos.coords.longitude

  //     })
  //   })
  // }
  // useEffect(()=>{
  //   GetLocation()
  // },[])
  // console.log(userlocation)

  return (
    <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
