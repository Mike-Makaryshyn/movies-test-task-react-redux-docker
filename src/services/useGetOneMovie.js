import { useDispatch } from "react-redux";
import useHttp from "./useHttp";
import { moviesLoading, setCurrentMovie } from "../redux/slices/moviesSlice";

const useGetOneMovie = () => {
  const api = useHttp();
  const dispatch = useDispatch();

  const getMovie = async (movieId) => {
    if (!api) {
      console.error("Not authorized");
      return;
    }

    dispatch(moviesLoading());
    const { data } = await api.get(`movies/${movieId}`);
    dispatch(setCurrentMovie(data));
  };

  return getMovie;
};

export default useGetOneMovie;
