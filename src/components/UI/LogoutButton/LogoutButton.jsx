import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const LogoutButton = ({onClick}) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="capitalize bg-gray-700 text-white px-4 pl-3 py-2 rounded-md text-sm font-bold cursor-pointer transition-all duration-100 hover:bg-gray-600 hover:text-white-200"
    >
      <div className="flex items-center">
        <BiLogOutCircle size={28} />
        <span className="ml-2">Logout</span>
      </div>
    </Link>
  );
};

export default LogoutButton;
