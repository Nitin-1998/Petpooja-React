import React from "react";
import img2 from "../../assets/services1.png";

const ServiceData = [
  {
    id: 1,
    img: img2,
    name: "Biryani",
    description:
      "A utility-first CSS framework packed with classes like flex, pt-4,",
  },
  {
    id: 2,
    img: img2,
    name: "Cold Coffee",
    description:
      "A utility-first CSS framework packed with classes like flex, pt-4,",
  },
  {
    id: 3,
    img: img2,
    name: "Chicken Kari",
    description:
      "A utility-first CSS framework packed with classes like flex, pt-4,",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10 dark:bg-slate-900">
        <div className="container">
          {/* Header Section */}
          <div className="  items-center text-center mb-20 mx-auto max-w-[400px] dark:text-white ">
            <p className="font-md font-medium text-primary ">Our Services</p>
            <h1 className="text-3xl font-bold ">Services</h1>
            <p className="text-slate-700 dark:text-white font-light">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </div>

          {/* Cards section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
              {ServiceData.map(({ id, img, name, description }) => {
                return (
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:text-white hover:bg-primary hover:text-white duration-300 shadow-xl "
                  >
                    <div className="h-[100px]">
                      <img
                        src={img2}
                        className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 p-4 "
                      />
                    </div>
                    <div className="p-4 text-center ">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500text-sm line-clamp-2 ">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
