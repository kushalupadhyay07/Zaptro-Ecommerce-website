import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/DataContext";
import { FaCartPlus } from "react-icons/fa";
import Loader from "./Loader";
import { Link } from "react-router-dom";
export default function Productsitem() {
  let { fetchdata, fetchingdata, dispatch } = useContext(Context);
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
  let [pricerange, setpricerange] = useState(1000);
  let [selectedCategory, setSelectedCategory] = useState("All");
  let [selectedBrand, setSelectedBrand] = useState("All");
  function applyFilter() {
    let filtered = fetchdata;
    console.log(selectedCategory);
    console.log(selectedBrand);

    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (selectedBrand !== "All") {
      filtered = filtered.filter((item) => item.brand === selectedBrand);
    }

    filtered = filtered.filter((item) => item.price <= pricerange);

    setproductitem(filtered);
  }

  const LIMIT = 8;

  const [currentpage, setCurrentPage] = useState(1);

  const changepage = (page) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(productitem.length / LIMIT);

  return (
    <>
      <Loader></Loader>
      <div className="flex gap-2 ">
        <div
          className="w-2/10 border-2 border-red-200  flex flex-col shadow-2xl  item-center gap-7"
          style={{ padding: "10px" }}
        >
          <h1 className="font-bold  text-2xl">
            <span
              className="text-red-500 italic"
              style={{ marginLeft: "20px" }}
            >
              Z
            </span>
            aptro
          </h1>
          <div className="flex flex-col ">
            <h1 className="text-2xl font-bold">Category</h1>
            <div>
              <input
                type="radio"
                name="category"
                value="All"
                checked={selectedCategory === "All" && true}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
              />
              <button>All</button>
            </div>
            {category.map((item, index) => {
              return (
                <div>
                  <input
                    type="radio"
                    name="category"
                    value={item}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <button>{item}</button>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="font-bold text-2xl">Brand</h1>
            <select
              className="border-2"
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="All">All</option>
              {brand.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className="flex flex-col box-border gap-2"
            style={{ marginTop: "15px" }}
          >
            <h1 className="font-bold">Price Range </h1>
            <p>Price Range $0 to${pricerange} </p>
            <input
              type="range"
              name="range"
              id="range"
              min="0"
              max="1000"
              value={pricerange}
              onChange={(event) => setpricerange(event.target.value)}
              className="accent-red-500"
            />
            <button
              onClick={applyFilter}
              className="bg-red-400 border-2 text-white rounded-full cursor-pointer"
            >
              Filter Button
            </button>
          </div>
        </div>
        <div className="w-8/10 grid grid-cols-4 gap-5 p-5   ">
          {productitem.length === 0 && <div>No Item yet ....</div>}
          {productitem
            .slice(currentpage * 8 - 8, currentpage * 8)
            .map((item, index) => {
              return (
                <div
                  className="w-40 h-50 border-2 box-border p-2 flex flex-col items-center relative  dataitem rounded-2xl cursor-pointer"
                  style={{ marginTop: "25px" }}
                >
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
                  <Link
                    to={`/SingleProduct`}
                    state={item}
                    className="cursor-pointer border-1 bg-amber-100"
                  >
                    View Details
                  </Link>
                  <button
                    className="flex justify-center items-center w-8/10 gap-2 border-2 bg-red-500 text-white rounded-2xl cursor-pointer"
                    onClick={() => {
                      console.log("Clicked", item);
                      dispatch({
                        type: "Add",
                        payload: {
                          id: Date.now() + Math.floor(Math.random() * 1000),
                          title: item.title,
                          images: item.images,
                          description: item.description,
                          category: item.category,
                          price: item.price,
                        },
                      });
                    }}
                  >
                    <FaCartPlus></FaCartPlus>
                    <h1>Add To Cart</h1>
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className="flex justify-center border-2  gap-5 h-10 "
        style={{ padding: "5px" }}
      >
        <button
          className="border w-10 cursor-pointer"
          disabled={currentpage === 1}
          onClick={() => changepage(currentpage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => {
          return (
            <button
              key={i}
              className="border w-10 cursor-pointer"
              onClick={() => changepage(i + 1)}
              style={{ backgroundColor: currentpage === i + 1 ? "red" : "" }}
            >
              {i + 1}
            </button>
          );
        })}

        <button
          className="border w-10 cursor-pointer"
          disabled={currentpage === totalPages}
          onClick={() => changepage(currentpage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
