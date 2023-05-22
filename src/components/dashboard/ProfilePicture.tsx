"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

type Props = {};

const ProfilePicture = (props: Props) => {
  const [toggle, useToggle] = useState<boolean>(false);

  function handleClick(): void {
    useToggle(!toggle);
  }

  function handleBlur(): void {
    useToggle(!toggle);
  }

  function handleLogout(): void {
    localStorage.removeItem("session");
    window.location.replace("/login");
  }

  return (
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
              name@monoma.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                href={"/profile"}
              >
                Profile
              </Link>
            </li>
            <li>
              <span
                className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
