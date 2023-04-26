import useHttp from "./useHttp";

const useAddMovie = () => {
  const api = useHttp();

  const addMovie = async (movie) => {
    if (!api) {
      console.error("Not authorized");
      return;
    }

    try {
      const { data } = await api.post("movies", movie);
      return data;
    } catch (e) {
      return e;
    }
  };

  return addMovie;
};

export default useAddMovie;
