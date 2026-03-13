import React, { useContext, useEffect } from "react";
import { Context } from "../../store/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Carsouel() {
  let { fetchingdata, fetchdata, setfetchdata } = useContext(Context);
  useEffect(() => {
    fetchingdata();
  }, []);
  console.log(fetchdata);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 z-5 bg-black text-white p-3 rounded-full cursor-pointer text-2xl"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full cursor-pointer text-xl"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {fetchdata.slice(0, 5).map((item, index) => {
          return (
            <div>
              <div
                className="h-110  bg-red-300  border-2 carsouel-bg box-border flex justify-center items-center gap-10 "
                key={index}
              >
                <div className="h-8/10 w-4/10  flex flex-col gap-5 justify-center border-box p-3 ">
                  <h1 className="text-xl ">{item.title}</h1>
                  <h1 className="text-xl font-bold text-yellow-600 italic">
                    {item.description}
                  </h1>
                  <div className="flex w-9/10 justify-between  p-2 items-center">
                    <p className="font-bold text-amber-600">
                      {" "}
                      Price :-{item.price}
                    </p>
                    <button className="border-2 rounded-2xl text-xl p-1 text-white button-bg">
                      Shop Now{" "}
                    </button>
                  </div>
                </div>
                <div className="h-8/10 w-4/10  box-border   ">
                  <div className="h-full w-full ">
                    <img src={item.images} alt="#" className="h-full w-full " />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
