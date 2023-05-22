"use client";
import { useState } from "react";
import { Login } from "@/interfaces/LoginResponse.interface";
import Swal from "sweetalert2";
import LoadingIcons from "react-loading-icons";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [passw, setPassw] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ): void {
    input === "email"
      ? setEmail(event.target.value)
      : setPassw(event.target.value);
  }

  async function onClickHandler(
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> {
    setLoading(true);
    const login: Login = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: passw }),
    }).then((response) => response.json());

    if (login.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password",
      });
      setLoading(false);
    } else {
      Swal.fire("Good job!", "You have successfully logged in", "success");
      setLoading(false);
      localStorage.setItem("session", login.response);
      window.location.replace("/dashboard");
    }
  }

  return (
    <form className="w-96">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@monoma.com"
          value={email}
          onChange={(e) => handleChange(e, "email")}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={passw}
          onChange={(e) => handleChange(e, "passw")}
          required
        />
      </div>
      {loading && <LoadingIcons.Rings />}
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onClickHandler}
      >
        Submit
      </button>
    </form>
  );
};
