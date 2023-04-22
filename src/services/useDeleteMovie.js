import { useDispatch } from "react-redux";
import { removeMovie } from "../redux/slices/moviesSlice";
import useHttp from "./useHttp";

const useDeleteMovie = () => {
  const api = useHttp();

  const dispatch = useDispatch();

  const deleteMovie = async (movieId) => {
    if (!api) {
      console.error("Not authorized");
      return;
    }
    
    dispatch(removeMovie(movieId));

    const { data } = await api.delete(`movies/${movieId}`);
    return data;
  };

  return deleteMovie;
};

export default useDeleteMovie;
