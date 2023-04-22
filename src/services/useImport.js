import useHttp from './useHttp';

const useImportMovies = () => {
  const api = useHttp();

  const importMovies = async (file) => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    const formdata = new FormData();
    formdata.append("movies", file, file.name);
    const { data } = await api.post('movies/import', formdata);
    return data
  }
  return importMovies;
};

export default useImportMovies;
