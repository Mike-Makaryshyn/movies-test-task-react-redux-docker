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
  const [alertMsg, setAlertMsg] = useState("");

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

  useEffect(() => {
    if (alertMsg) {
      const timer = setTimeout(() => {
        setAlertMsg("");
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alertMsg]);

  return (
    <>
      <SearchInput
        label="Search"
        type="text"
        value={search}
        setSearchValue={setSearch}
        onChange={debouncedResults}
        placeholder="Please type title/actor"
      />

      {movies.map((movie, idx) => (
        <MovieItem
          key={movie.id}
          idx={idx}
          movie={movie}
          alertMsg={alertMsg}
          setAlertMsg={setAlertMsg}
        />
      ))}

      {moviesTotal === movies.length && moviesTotal > 10 && (
        <div className="text-gray-400 mt-5">There are no more movies!</div>
      )}

      {moviesTotal === 0 && (
        <div className="text-gray-400 mt-5">There are no movies!</div>
      )}

      {moviesTotal > 10 && (
        <div className="md:w-[30%] mt-5 flex">
          <Button
            text="LOAD MORE"
            onClick={() => setLimit((prev) => prev + 5)}
            disabled={!hasMoreMovies}
          />
          <Button
            text="SHOW ALL"
            onClick={() => setLimit(moviesTotal)}
            disabled={!hasMoreMovies}
          />
        </div>
      )}

      <div className="bg-slate-500 rounded-sm px-5 text-slate-50 fixed bottom-6 right-[8vw]">{alertMsg}</div>
    </>
  );
};

export default MoviesList;
