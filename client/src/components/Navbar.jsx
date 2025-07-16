import React,{useState} from "react";
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa';
import { nav } from "../data/Data";

function Navbar() {
  const [navList, setNavList] = useState(false)

  return (
    <nav className="  bg-white border-gray-200 dark:bg-white shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./images/logo.png" alt="logo" className="h-8 text-white"/>

        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/signup"
            className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Get started
          </Link>
          <button
            type="button"
            onClick={() =>setNavList(!navList)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${navList ? '' : 'hidden'}`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
          
                {nav.map((list,index)=>(
                    <li key={index} className="block py-2 px-3 md:p-0 text-black  rounded-sm md:bg-transparent md:text-black md:dark:text-black">
                        <Link to={list.path}>{list.text}</Link>
                    </li>
                ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
