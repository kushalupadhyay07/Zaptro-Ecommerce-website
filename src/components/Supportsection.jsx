import React from "react";
import { FaCarSide } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoRefreshCircleSharp } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";

export default function Supportsection() {
  let supportitem = [
    {
      itemimage: <FaCarSide />,
      maintext: "Free shiping ",
      simpletext: "On Order Above $100",
    },
    {
      itemimage: <FaLock></FaLock>,
      maintext: "Secure Payement ",
      simpletext: "100% Protected Payments",
    },
    {
      itemimage: <IoRefreshCircleSharp />,
      maintext: "Easy Return  ",
      simpletext: "30 days return Policy ",
    },
    {
      itemimage: <MdWatchLater />,
      maintext: "24/7 Support ",
      simpletext: "Dedicated Customer Service ",
    },
  ];

  return (
    <div className=" flex  justify-center items-center h-20 support_section_bg">
      <div
        className="
       w-8/10  h-8/10 flex justify-between  "
      >
        {supportitem.map((item, index) => {
          return (
            <div
              className="flex gap-2 w-3/10 h-full  justify-center items-center box-border  "
              key={index}
            >
              <div className="text-3xl">{item.itemimage}</div>
              <div className="flex flex-col h-full">
                <h2>{item.maintext}</h2>
                <p>{item.simpletext}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
