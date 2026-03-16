import React from "react";
import ContextProvider from "../../store/DataContext";
import Productsitem from "../components/Productsitem";
import Homefooter from "../components/Homefooter";
import Loader from "../components/Loader";

export default function Product() {
  return (
    <>
      <ContextProvider>
        
        <div className="flex border-2 justify-center ">
          <div className="w-8/10 border-1 ">
            <Productsitem className="w-7/10"></Productsitem>
          </div>
        </div>
      </ContextProvider>
      <Homefooter></Homefooter>
    </>
  );
}
