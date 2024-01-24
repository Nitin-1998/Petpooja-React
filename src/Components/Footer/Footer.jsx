import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="py-6 px-4 dark:bg-slate-950">
        <div className="container">
          <div className="grid gap-6 text-start lg:grid-cols-4">
            {/* grid-1 */}
            <div className="pr-8">
              <div className="flex items-center gap-2 py-4 ">
                <img className="h-12" src={Logo} />
                <h1 className="dark:text-white text-2xl font-semibold">FOODIE</h1>
              </div>
              <div>
                <p className="dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  facere ab hic accusamus omnis dolor voluptatibus illo, tempore
                  eum tenetur.
                </p>
              </div>
              <div className="dark:text-white pt-4 flex items-center gap-2">
                <FaTelegramPlane size={32} />
                New Delhi
              </div>
              <div className="dark:text-white pt-4 flex items-center gap-2">
                <BsFillTelephoneFill size={28} />
                +91 123 123 1234
              </div>

              <div className="flex gap-3 py-4">
                <FaInstagram className="dark:text-white" size={32} />
                <FaFacebook className="dark:text-white" size={32} />
                <FaLinkedin className="dark:text-white" size={32} />
              </div>
            </div>
            <div className="md:flex grid grid-cols-2 md:w-[1000px] md:gap-40">
            <div>
              <h1 className="dark:text-white text-xl font-bold py-4">Important Links</h1>
              <div className="flex flex-col gap-4 dark:text-white">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Login</a>
              </div>
            </div>
            <div>
              <h1 className="dark:text-white text-xl font-bold py-4">Important Links</h1>
              <div className="dark:text-white flex flex-col gap-4">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Login</a>
              </div>
            </div>
            <div>
              <h1 className="dark:text-white text-xl font-bold py-4">Important Links</h1>
              <div className="dark:text-white flex flex-col gap-4">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Login</a>
              </div>
            </div>
            </div>
          </div>

          {/* copyright */}
          <div className="py-4 text-center">
            <hr/>
            <h2 className="dark:text-white pt-2">@copyright 2024 All rights reserved || Made with ❤️ by Nitin Kumar</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
