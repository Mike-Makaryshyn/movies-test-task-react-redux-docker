import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchInput = ({ label, ...props }) => {
  return (
    <div className="block mb-5">
      <div className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BiSearchAlt size={18} color="gray" />
        </div>
        <input
          {...props}
          className="h-8 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchInput;
