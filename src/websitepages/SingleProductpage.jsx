import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Homefooter from "../components/Homefooter";

export default function SingleProductpage() {
  let location = useLocation();
  let item = location.state;
  console.log(item);
  return (
    <>
      <div className="flex justify-center border-2  ">
        <div className="border-2 w-8/10 flex gap-2 ">
          <div className="image w-4/10 border-amber-200 border-2 relative">
            <img src={item.images} alt="" />
            <button className="border-1 box-border w-full h-12 bg-red-500 text-2xl font-bold text-white cursor-grab absolute bottom-0">
              Add to Cart{" "}
            </button>
          </div>
          <div className="flex flex-col  gap-3 font-bold">
            <h1> Title :- {item.title}</h1>
            <h1> Price :- $ {item.price}</h1>
            <h1> Brand :- {item.brand}</h1>
            <h1>{item.categroy}</h1>
            <h1> Description :- {item.description}</h1>
            <h1>Available stocks :- {item.stock}</h1>
            <h1>Warranty Information :- {item.warrantyInformation}</h1>
            <h1>Return Policy :- {item.returnPolicy}</h1>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}
