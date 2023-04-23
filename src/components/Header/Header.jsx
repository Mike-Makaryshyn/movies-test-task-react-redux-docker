import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";

const headerList = [
  { link: "/", title: "home", Icon: FaHome },
  { link: "/movies", title: "movies", Icon: MdLocalMovies },
  { link: "/login", title: "login", Icon: AiOutlineLogin },
];

const iconSize = 23;

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 flex-col p-3">
        <NavLink to="/" className="inline-flex mb-2 mt-1 -block">
          <img
            src="https://webbylab.com/wp-content/uploads/2022/08/h-logo.svg"
            alt="WebbyLab logo"
          />
          <span className="text-yellow font-bold text-sm">TV</span>
        </NavLink>
        <div className="max-w-7xl mx-auto px-4 mb-2 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="ml-0 flex md:ml-9 space-x-4">
              {headerList.map(({ link, title, Icon }) => (
                <NavLink
                  to={link}
                  key={title} 
                  className={({ isActive }) =>
                    isActive
                      ? "capitalize bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-bold cursor-pointer"
                      : "capitalize text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-bold cursor-pointer"
                  }
                >
                  <div className="flex items-center">
                    <Icon size={iconSize} />
                    <span className="ml-2">{title}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
