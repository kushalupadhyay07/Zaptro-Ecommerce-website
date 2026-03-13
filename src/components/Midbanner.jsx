import React from "react";

export default function Midbanner() {
  return (
    <div className="h-150 border-2 flex justify-center items-center bg-yellow-50 ">
      <div className="h-8/10 w-8/10 border-1 bg-[url(./assets/midbanner2.webp)] bg-cover bg-center text-white flex justify-center items-center flex-col gap-10 rounded-2xl bg-fixed shadow-2xl">
        <h1 className="text-3xl font-bold">
          New Gen Electronis At your Fingertips
        </h1>
        <h2 className="font-bold">
          Discover the Latest tech innovation with unbeatble price and free
          shipings for all orders{" "}
        </h2>
        <button className="border-2 bg-red-600 " style={{ padding: "2px" }}>
          {" "}
          Shop Now{" "}
        </button>
      </div>
    </div>
  );
}
