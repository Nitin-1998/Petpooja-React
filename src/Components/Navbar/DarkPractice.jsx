import React, { useState } from "react";
import { useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const DarkPractice = () => {
  // for Toggle in between icons
  const [toggle, setToggle] = useState(true);

//   const ToggleHandler = () => {
//     setToggle(!toggle);
//   };

  //To get the type of theme from local storage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggle(!toggle);
    } else {
      setTheme("light");
      setToggle(!toggle);
    }
  };

  return (
    <>
      <div>
        {toggle ? (
          <MdDarkMode size={26} onClick={changeTheme} />
        ) : (
          <MdOutlineLightMode size={26} onClick={changeTheme} />
        )}
      </div>
    </>
  );
};

export default DarkPractice;
