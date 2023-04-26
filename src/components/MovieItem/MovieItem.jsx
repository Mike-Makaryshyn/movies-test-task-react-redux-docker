import { useState } from "react";
import useHttp from "../../services/useHttp";
import useDeleteMovie from "../../services/useDeleteMovie";

import { FiTrash2 } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";

import MovieDetailsModal from "../UI/MovieDetailsModal";

const MovieItem = ({ movie, idx, alertMsg, setAlertMsg }) => {
  const [clickedMovie, setClickedMovie] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const api = useHttp();
  const deleteMovie = useDeleteMovie();

  const clickDetailsHandler = async (id) => {
    if (!api) {
      console.error("Not authorized");
      return;
    }

    api.get(`movies/${id}`).then((response) => {
      const { data } = response.data;
      setClickedMovie(() => data);
      setIsDialogOpen(true);
    });
  };

  const handleDelete = async () => {
    const { status, error } = await deleteMovie(movie.id);

    if(status) {
      setAlertMsg('The movie has been deleted!')
    } else {
      setAlertMsg(error.code)
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">{idx + 1}.</span>
        <span
          onClick={() => clickDetailsHandler(movie.id)}
          className="font-medium cursor-pointer hover:underline hover:text-gray-600"
        >
          {movie.title}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => clickDetailsHandler(movie.id)}
        >
          <CgDetailsMore className="mr-5" />
        </button>
        <button
          className="text-gray-500 hover:text-red-500"
          onClick={handleDelete}
        >
          <FiTrash2 />
        </button>
      </div>

      {isDialogOpen && (
        <MovieDetailsModal
          clickedMovie={clickedMovie}
          isDialogOpen={isDialogOpen}
          handleCloseDialog={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default MovieItem;
