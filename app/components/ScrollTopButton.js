"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

import { FaArrowCircleUp } from "react-icons/fa";



//for easy scroll to go back on top of the page
const ScrollTopButton = () => {
  return (
    <div className="flex justify-center">
      <ScrollToTop
        smooth
        top={10}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#fe6719",
          padding: "5px",
        }}
        component={
          <FaArrowCircleUp className="hover:scale-125 w-8 h-8 m-auto self-center " />
        }
      />
    </div>
  );
};

export default ScrollTopButton;
