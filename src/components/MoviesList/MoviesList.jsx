import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import useGetMovies from "../../services/useGetMovies";
import Button from "../UI/Button";
import MovieItem from "../MovieItem";
import SearchInput from "../UI/SearchInput";

const MoviesList = () => {
  const getMovies = useGetMovies();
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);

  const movies = useSelector((state) => state.movies.movies);
  const moviesTotal = useSelector((state) => state.movies.moviesTotal);
  const hasMoreMovies = movies.length < moviesTotal;

  const debouncedResults = useMemo(() => {
    return debounce((e) => setSearch(e.target.value), 200);
  }, []);

  useEffect(() => {
    getMovies("title", "ASC", search, limit);
    return () => {
      debouncedResults.cancel();
    };
    // eslint-disable-next-line
  }, [search, limit]);

  return (
    <>
      <SearchInput
        label="Search"
        type="text"
        onChange={debouncedResults}
        placeholder="Please type title/actor"
      />

      {movies.map((movie, idx) => (
        <MovieItem key={movie.id} idx={idx} movie={movie} />
      ))}

      {moviesTotal === movies.length && moviesTotal > 10 && (
        <div className="text-gray-400 mt-5">There are no more movies!</div>
      )}

      {moviesTotal === 0 ? (
        <div className="text-gray-400 mt-5">There are no movies!</div>
      ) : (
        <div className="w-[30%] mt-5 flex">
          <Button
            text="LOAD MORE"
            onClick={() => setLimit((prev) => prev + 5)}
            disabled={!hasMoreMovies}
          />
          <Button
            text="ALL"
            onClick={() => setLimit(moviesTotal)}
            disabled={!hasMoreMovies}
          />
        </div>
      )}
    </>
  );
};

export default MoviesList;
