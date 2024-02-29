"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  //get the current url path to use for ternary operator to style the link if it is active or not (ux purposes)
  const currentRoute = usePathname();

  return (
    /*  //container of the header */
    <div className="fixed w-full  bg-orange-400 z-20 ">

      {/* This is the navigation bar and I used Tailwind CSS to make this component rweb responsive */}
      <nav className="relative flex flex-row gap-20 mx-auto max-w-[1440px] padding-container z-30 h-20 lg:h-28 bg-orange-400 items-center justify-center  text-xl lg:text-3xl">

        {/* I used Link to navigate the website */}
        <Link
          href="/"
          className={`hover:bg-orange-300 active:bg-red-500  font-bold py-2 px-5 rounded-3xl ${
            currentRoute === "/" ? "underline" : " no-underline"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:bg-orange-300 active:bg-red-500 font-bold  py-2 px-5 rounded-3xl ${
            currentRoute === "/about" ? "underline" : " no-underline"
          }`}
        >
          About
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
