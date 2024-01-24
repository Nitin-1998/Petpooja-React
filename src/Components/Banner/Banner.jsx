import React from "react";
import img1 from "../../assets/biryani5.png";
import { AiFillLock } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const Banner = () => {
  return (
    <>
      <div className="py-4 dark:bg-slate-900">
        <div
          data-aos="slide-up"
          data-aos-duration="300"
          className=" container grid grid-cols-1 sm:grid-cols-2 "
        >
          <div>
            {" "}
            <img src={img1} />{" "}
          </div>
          <div className="px-4 sm:px-4">
            <h1 className="text-4xl font-bold py-4 dark:text-white ">
              Best Food In Town
            </h1>
            <p className="text-slate-600 dark:text-white ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <p className="text-slate-600 py-2 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
              sed, exercitationem minima aliquid eligendi distinctio? Fugit
              repudiandae numquam hic quo recusandae. Excepturi totam ad nam
              velit quasi quidem aspernatur.
            </p>
            <div className="flex gap-3">
              <AiFillLock className=" bg-[#ede9fe] p-5 h-20 w-20 rounded-full bg text-6xl" />
              <GiHamburger className=" bg-[#ffedd5] p-5 h-20 w-20 rounded-full bg text-6xl" />
              <TbTruckDelivery className=" bg-[#dcfce7] p-5 h-20 w-20 rounded-full bg text-6xl" />
            </div>
            <div className="py-4">
              <button className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary py-3 px-4 rounded-2xl hover:scale-105 delay-200 ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
