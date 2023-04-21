import { NavLink } from "react-router-dom";

function Header() {
  const headerList = ["/", "movies", "login"];

  return (
    <header>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>

              <div className="ml-10 flex space-x-4">
                {headerList.map((item) => (
                  <NavLink
                    to={item}
                    key={item}
                    className={({ isActive }) =>
                      isActive
                        ? "capitalize bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-bold cursor-pointer"
                        : "capitalize text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-bold cursor-pointer"
                    }
                  >
                    {item === "/" ? "home" : item}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
