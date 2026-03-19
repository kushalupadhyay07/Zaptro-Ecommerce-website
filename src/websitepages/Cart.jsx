import React, { useContext } from "react";
import { Context } from "../../store/DataContext";
import Lottie from "lottie-react";
import empty from "../assets/empty.json";
export default function Cart() {
  let { cartitem, dispatch } = useContext(Context);
  console.log(cartitem);
  return (
    <div className="flex justify-center">
      <div
        className="w-8/10  flex items-center flex-col gap-4  "
        style={{ padding: "4px" }}
      >
        {cartitem.length === 0 && (
          <div className="flex flex-col items-center">
            <Lottie animationData={empty} style={{ height: 450 }} />
            <h2 className="font-bold">Your Cart is Empty 🛒</h2>
          </div>
        )}
        {cartitem.map((data, index) => {
          return (
            <div className="w-9/10  border-1 flex ">
              <div className="w-2/10 bg-amber-200">
                <img src={data.images} alt="" className="w-full h-full" />
              </div>
              <div
                className="w-8/10 bg-red-300 box-border "
                style={{ padding: "4px" }}
              >
                <h1 className="font-bold text-2xl"> Title :- {data.title}</h1>
                <h1>Decription:- {data.description} </h1>
                <h3>Category:- {data.category} </h3>
                <h3 className="font-bold">Price :- ${data.price}</h3>
                <button
                  className="border-2 box-border rounded-2xl bg-red-600 text-white font-bold cursor-pointer hover:bg-blue-500 "
                  style={{ padding: "4px" }}
                  onClick={() => {
                    dispatch({
                      type: "delete",
                      payload: data,
                    });
                  }}
                >
                  Delete from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
