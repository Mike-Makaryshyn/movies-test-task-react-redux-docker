import { useDispatch } from 'react-redux';
import { moviesLoading, setMovies } from '../redux/slices/moviesSlice';
import useHttp from './useHttp';

const useGetMovies = () => {
  const api = useHttp();
  const dispatch = useDispatch();

  const getMovies = async (sortParam, order, search, limit) => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    dispatch(moviesLoading());
    const { data } = await api.get(`movies?sort=${sortParam}&order=${order}&limit=${limit}` + (search.length > 1 ? `&search=${search}` : ''));
    dispatch(setMovies(data));
  }
  return getMovies;
};

export default useGetMovies;
