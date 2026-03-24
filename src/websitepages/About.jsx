import React from "react";
import Lottie from "lottie-react";
import aboutus from "../assets/aboutus.json";
export default function About() {
  return (
    <div className="flex h-screen">
      <div className="w-5/10 ">
        <Lottie animationData={aboutus} style={{ height: "100%" }}></Lottie>
      </div>
      <div
        className="w-5/10  flex flex-col items-center gap-5  "
        style={{ padding: "90px" }}
      >
        <h1 className="text-2xl font-bold "> About us </h1>
        <p className="text-xl font-semibold">
          Welcome to our platform! We are dedicated to providing high-quality
          products at affordable prices. Our mission is to make online shopping
          easy, fast, and reliable for everyone. We focus on delivering the best
          user experience with secure payments and fast delivery. We carefully
          select our products to ensure quality and customer satisfaction. Thank
          you for choosing us!
        </p>
      </div>
    </div>
  );
}
