import React, { useContext, useState } from "react";
import { Context } from "../../store/DataContext";

export default function Loader() {
  let { loader } = useContext(Context);

  return (
    <>
      {!loader && (
        <div className=" w-screen h-screen flex justify-center items-center ">
          <img src="gifloader.gif" alt="#" className="size-40" />
        </div>
      )}
    </>
  );
}
