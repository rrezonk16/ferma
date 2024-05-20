import React from "react";
import Navbar from "./Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col justify-center items-center">
        <p className=" text-3xl text-center">Page not found</p>
        <p className=" text-3xl text-center font-bold text-red-500">404</p>
      </div>
    </div>
  );
};

export default Error;
