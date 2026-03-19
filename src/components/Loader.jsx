import React, { useContext, useState } from "react";
import { Context } from "../../store/DataContext";
import Lottie from "lottie-react";
import SandyLoading from "../assets/SandyLoading.json";

export default function Loader() {
  let { loader } = useContext(Context);

  return (
    <>
      {!loader && (
        <div className=" w-screen h-screen flex justify-center items-center ">
          <Lottie
            animationData={SandyLoading}
            loop={true}
            style={{ height: 300 }}
          />
        </div>
      )}
    </>
  );
}
