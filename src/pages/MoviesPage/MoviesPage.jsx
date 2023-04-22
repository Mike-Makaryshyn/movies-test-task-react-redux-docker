import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";

import LogoutButton from "../../components/UI/LogoutButton";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedIn";

import Movies from "../../components/MoviesList";
import MoviesImporter from "../../components/MovieImporter";
import Button from "../../components/UI/Button";

const HomePage = () => {
  const { email: isLoggedIn, name } = useSelector((state) => state.user);
  const { logoutHadler } = useAuth();

  return (
    <div className="my-container pb-10">
      {isLoggedIn ? (
        <>
          <div className="mt-10 text-right flex items-center justify-end">
            <span className="mr-5"> Hello, {name}!</span>
            <LogoutButton onClick={logoutHadler} />
          </div>

          <div className="flex justify-start justify-between items-end">
            <MoviesImporter />
          </div>

          <hr className="mt-5 mb-5" />

          <div className="w-[15%] mt-5">
            <Button text="ADD A MOVIE" />
          </div>

          <hr className="mt-5 mb-5" />

          <Movies />
        </>
      ) : (
        <NotLoggedIn />
      )}
    </div>
  );
};

export default HomePage;
