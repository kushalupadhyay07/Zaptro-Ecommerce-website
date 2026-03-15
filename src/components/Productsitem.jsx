import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/DataContext";
import { FaCartPlus } from "react-icons/fa";
import FilterSection from "./FilterSection";
export default function Productsitem() {
  let { fetchdata, fetchingdata } = useContext(Context);
  useEffect(() => {
    fetchingdata();
  }, []);
  console.log(fetchdata);
  let [productitem, setproductitem] = useState(fetchdata);
  useEffect(() => {
    setproductitem(fetchdata);
  }, [fetchdata]);
  let category = [...new Set(fetchdata.map((item, index) => item.category))];
  console.log(category);
  let brand = [...new Set(fetchdata.map((item, index) => item.brand))];
  let [pricerange,setpricerange]=useState(1000);

  return (
    <div className="flex gap-2 ">
      <div
        className="w-2/10 border-2 border-amber-200 flex flex-col  item-center gap-7"
        style={{ padding: "10px" }}
      >
        <input
          type="text"
          className="border-2 "
          style={{ marginTop: "10px" }}
        />
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold">Category</h1>
          <div>
            <input type="checkbox" value="All"  />
            <button>All</button>
          </div>
          {category.map((item, index) => {
            return (
              <div>
                <input type="checkbox" value={item} />
                <button>{item}</button>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="font-bold text-2xl">Brand</h1>
          <select name="" id="" className="border-2">
            <option value="">All</option>
            {brand.map((item, index) => {
              return (
                <div>
                  <option value="">{item}</option>
                </div>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col box-border gap-2" style={{marginTop:"15px"}}>
          <h1 className="font-bold" >Price Range </h1>
          <p>Price Range $0 to${pricerange} </p>
          <input type="range" name="range" id="range" min="0" max="1000" value={pricerange} onChange={(event)=>setpricerange(event.target.value)} className="accent-red-500"/>
          <button className="bg-red-400 border-2 text-white rounded-full cursor-pointer">Filter Button </button>
        </div>
      </div>
      <div className="w-8/10  border-red-300  product   ">

        {
          productitem.length===0 && <div>
            No Item yet ....
          </div>
        }
        {productitem.map((item, index) => {
          return (
            <div className="w-40 h-50 border-2 box-border p-2 flex flex-col items-center relative gap-2 dataitem rounded-2xl">
              <img
                src={item.images}
                alt="#"
                className="h-4/10 w-full rounded-2xl "
              />
              <h1
                className="h-2/10 box-border text-[14px] font-bold "
                style={{ paddingBottom: "4px" }}
              >
                {item.title}
              </h1>
              <h2 className="h-2/10"> Price :- {item.price}</h2>
              <button className="flex justify-center items-center w-8/10 gap-2 border-2 bg-red-500 text-white rounded-2xl cursor-pointer">
                <FaCartPlus></FaCartPlus>
                <h1>Add To Cart</h1>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
