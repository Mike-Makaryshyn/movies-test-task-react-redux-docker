import { BiSearchAlt } from "react-icons/bi";

const SearchInput = ({ label, value, setSearchValue, ...props }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BiSearchAlt size={18} color="gray" />
      </div>
      <input
        {...props}
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        className="h-8 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search"
      />
      {value.length > 0 && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={(e) => setSearchValue("")}
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchInput;
