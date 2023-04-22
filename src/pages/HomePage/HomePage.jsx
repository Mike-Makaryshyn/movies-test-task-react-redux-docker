import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import movies from "./movies";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedIn";

const HomePage = () => {
  const { email: isLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="my-container">
      {isLoggedIn ? (
        <div className="mt-10">
          Congrats, You are logged in!
          <Link className="my-link ml-2" to="/movies">
            Go to your Movies!
          </Link>
        </div>
      ) : (
        <NotLoggedIn />
      )}

      <h1 className="text-center m-10 text-xl md:text-2xl lg:text-2xl font-bold uppercase">
        Top 6 movies by ChatGPT opinion
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="text-center max-h-[32vh] mb-10">
            <a
              href={movie.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="h-full w-full object-contain rounded-md transition duration-500 ease-in-out transform hover:scale-105"
              />
              <h3 className="text-lg font-medium mt-2">{movie.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
