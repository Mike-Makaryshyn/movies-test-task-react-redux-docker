import React from "react";

const Button = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-700 font-large rounded-lg text-sm font-bold px-5 py-2.5 text-center mr-2 mb-5 w-full transition-all duration-100"
    >
      {text}
    </button>
  );
};

export default Button;
