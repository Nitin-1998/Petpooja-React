import React from "react";
import GooglePlay from "../../assets/play_store.png";
import AppleStore from "../../assets/app_store.png";
import bikegif from "../../assets/mobile_bike.gif";

const AppStore = () => {
  return (
    <>
      <div className="py-24 bg-slate-200 dark:bg-slate-700">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="container  grid grid-cols-1 place-content-center sm:grid-cols-2 "
        >
          <div className="text-center  px-4 font-semibold  ">
            <h1 className="dark:text-white sm:text-5xl text-2xl text-gray-700 md:text-start">
              Foodly is Available for Android and IOS
            </h1>
            <div className="flex md:justify-start justify-center py-4">
              <a href="#">
                <img className="h-12 lg:h-[75px] " src={GooglePlay} />
              </a>

              <a href="#">
                <img className="h-12 lg:h-[75px]" src={AppleStore} />
              </a>
            </div>
          </div>

          <div className=" flex justify-center items-center ">
            <img className="  h-[200px]" src={bikegif} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
