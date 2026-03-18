import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
import { FaCartPlus } from "react-icons/fa";
import { Context } from "../../store/DataContext";

export default function Navbar() {
  let location = false;
  let [locationdropdown, setlocationdropdown] = useState(false);
  let { cartno } = useContext(Context);
  return (
    <>
      <div className="h-15  shadow-2xl flex justify-center items-center">
        <header
          className="w-9/10 h-8/10 border-1 box-border  flex items-center justify-between relative "
          style={{ padding: "10px" }}
        >
          <div className="flex items-center gap-5">
            <NavLink to={"/"}>
              <h1 className="font-bold">
                <span className="text-red-600 font-bold text-2xl font-serif">
                  Z
                </span>
                aptro
              </h1>
            </NavLink>
            <div id="location " className="font-bold">
              <IoLocation className="inline text-red-500" />
              {location ? <div></div> : "Add your Location "}
              <RxCaretDown
                className="inline cursor-pointer"
                onClick={() => setlocationdropdown(!locationdropdown)}
              ></RxCaretDown>
            </div>
            {locationdropdown && (
              <div className="h-30 w-60 border-2 bg-amber-200 fixed  z-5 left-64 top-12 flex flex-col justify-center items-center box-border p-5 rounded-2xl">
                <button
                  className="absolute top-2 right-2  border-2 w-4 h-7 bg-red-500"
                  onClick={() => setlocationdropdown(false)}
                >
                  X
                </button>
                <h1 className="font-bold ">Reset Current Location </h1>
                <button className="border-2 bg-blue-500 p-1 box-border">
                  SetLocation
                </button>
              </div>
            )}
          </div>
          <div className="flex gap-8 justify-center items-center font-semibold [&>*]:hover:border-b-4 [&>*]:hover:border-b-red-600 [&>*]:hover:text-amber-400">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive && "border-b-red-600 border-b-4"} cursor-pointer`
              }
            >
              <h1>Home</h1>
            </NavLink>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                `${isActive && "border-b-red-600 border-b-4"} cursor-pointer`
              }
            >
              <h1>Products</h1>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive && "border-b-red-600 border-b-4"} cursor-pointer`
              }
            >
              <h1>About</h1>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive && "border-b-red-600 border-b-4"} cursor-pointer`
              }
            >
              <h1>Contact</h1>
            </NavLink>
            <NavLink to={"cart"}>
              <h1>
                <FaCartPlus className="inline text-3xl " />
                <p className="absolute  top-0 right-0 rounded-full text-[15px] bg-red-500 text-white size-5 text-center ">
                  {cartno}
                </p>
              </h1>
            </NavLink>
          </div>
        </header>
      </div>
    </>
  );
}
