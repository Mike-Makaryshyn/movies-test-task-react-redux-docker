import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: "idle",
    movies: [],
    moviesTotal: 0,
  },
  reducers: {
    moviesLoading(state) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    setMovies(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.movies = action.payload.data;
        state.moviesTotal = action.payload.meta.total;
      }
    },
    removeMovie(state, action) {
      const movieId = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== movieId);
      state.moviesTotal = state.moviesTotal - 1;
    },
  },
});

export const { moviesLoading, setMovies, removeMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
