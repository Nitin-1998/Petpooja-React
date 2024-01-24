import React from "react";
import Logo from "../../assets/food-logo.png";
import { MdAddShoppingCart } from "react-icons/md";
import DarkPractice from "./DarkPractice";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 py-2">
        <div className="container p-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center text-2xl md:text-3xl font-semibold">
              <img className="w-10" src={Logo} alt="logo" />
              Foodie
            </div>

            <div className="flex items-center gap-8">
            <DarkPractice/>
              <ul className=" hidden md:flex py-4 text-2xl font-medium gap-20   ">
                <li>
                  {" "}
                  <a className="hover:text-secondary" href="#">
                    Home
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="hover:text-secondary" href="#">
                    About
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="hover:text-secondary" href="#">
                    Contact
                  </a>{" "}
                </li>
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-md hover:scale-105 duration-200 text-xl font-medium">
                Order
                <MdAddShoppingCart className="text-xl inline-block ml-2" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
