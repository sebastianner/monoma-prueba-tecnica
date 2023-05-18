"use client";
import Image from "next/image";
import { useState } from "react";
type Props = {};

const NavBar = (props: Props) => {
  const [toggle, useToggle] = useState<boolean>(false);

  function handleClick(): void {
    useToggle(!toggle);
  }

  function handleBlur(): void {
    useToggle(!toggle);
  }

  return (
    <header className="p-3">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* //todo change a */}
          <a href="https://flowbite.com/" className="flex items-center">
            <Image
              src="https://monoma.io/wp-content/uploads/2022/05/logo-white.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
              width={"200"}
              height={"200"}
            />
          </a>
          <div className="flex items-center md:order-2">
            <div className="relative">
              <button
                type="button"
                className={`flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 ${
                  toggle
                    ? "focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    : ""
                }`}
                onClick={handleClick}
                onBlur={handleBlur}
              >
                <Image
                  className="w-8 h-8 rounded-full"
                  src="https://images.pexels.com/photos/9163/night.jpg"
                  alt="user photo"
                  width={"50"}
                  height={"50"}
                />
              </button>
              <div
                className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ab absolute right-0 ${
                  toggle ? "visible" : "invisible"
                }`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 cursor-pointer"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
