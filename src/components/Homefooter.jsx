import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Homefooter() {
  return (
    <footer className="h-60 bg-blue-100 bg-[url(footerimage.avif)] bg-center bg-cover ">
      <div
        className="flex border-b-2 justify-center gap-18 items-center h-8/10 border-box border-b-black   "
        style={{ padding: "2px" }}
      >
        <div>
          <h1 className="font-bold">
            <span className="font-bold text-red-600 text-2xl">Z</span>aptro
          </h1>
          <h2>Powering Your World with Best Products</h2>
          <p>Greater Noida Uttar Pradesh , India </p>
          <p>Email :- abc@gmail.com</p>
          <p>Phone Number :- XXXXXXXXXX</p>
        </div>
        <div>
          <h1 className="font-bold text-xl">Customer Service </h1>
          <p>Contact </p>
          <p>Shipping & Return </p>
          <p>FAQ</p>
          <p>Order Tracking </p>
        </div>
        <div>
          <h1 className="text-xl font-bold">Follow Us </h1>
          <div className="flex gap-2 text-xl">
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Stay In the Loop</h1>
          <p>Suscribe to get offers , Free giveway and more</p>
          <div className="border-2 w-80 ">
            <input
              type="text"
              className="border-1  w-7/10"
              placeholder="abc@gmail.com"
            />
            <button className="w-3/10 text-center text-white bg-red-500">
              Suscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p>
          <FaRegCopyright className="inline" /> 2025 Zaptro All Right
          Reserved{" "}
        </p>
      </div>
    </footer>
  );
}
