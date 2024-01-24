import React, { useState } from "react";
import bgImg from "../../src/assets/hero-bg.png";
import Food1 from "../../src/assets/biryani2.png";
import Food2 from "../../src/assets/biryani3.png";
import Food3 from "../../src/assets/biryani5.png";

const ImageList = [
  {
    id: 1,
    img: Food1,
  },
  {
    id: 2,
    img: Food2,
  },
  {
    id: 3,
    img: Food3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = useState(Food1);

  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center "
      >
        <div className="container pb-8 sm:pb-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-9  text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcom to the Foodi Zone
              </h1>
              <p className="text-sm">
                You have direct access to the grid-template-rows CSS property
                here so you can make your custom rows values as generic or as
                complicated and site-specific as you like.
              </p>
              <div>
                <button className=" text-2xl bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl font-medium hover:scale-105 duration-300 ">
                  Order Now
                </button>
              </div>
            </div>

            {/* Image section */}
            <div className="order-1 sm:order-2  min-h-[450px] sm:min-h-[500px] flex justify-center items-center relative ">
              {/* main Image */}
              <div className="flex justify-center items-center h-[300px] sm:[450px]  ">
                <img
                  data-aos="zoom-out"
                  data-aos-duration="400"
                  data-aos-once="true"
                  src={imageId}
                  alt="image"
                  className="w-[300px] sm:w-[450px] mx-auto spin  "
                />
              </div>
              {/* Image list section */}
              <div className="flex lg:flex-col lg:top-[-1px]    justify-center gap-4 absolute bottom-[0px]  lg:right-10 bg-white/30 rounded-full ">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-once="true"
                    key={item.id}
                    src={item.img}
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200  "
                    // to toggle in between food
                    onClick={() => {
                      setImageId(
                        item.id === 1
                          ? Food1
                          : item.id === 2
                          ? Food2
                          : item.id === 3
                          ? Food3
                          : Food1
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
