import useHttp from './useHttp';

const useAddMovie = () => {
  const api = useHttp();

  const addMovie = async (movie) => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    const { data } = await api.post('movies', movie);
    return data
  }
  return addMovie;
};

export default useAddMovie;
