import { configureStore } from '@reduxjs/toolkit';
import moviesListSlice from "./redux-slices/movieSlice"
import topRatedMoviesSlice from './redux-slices/stats-slice';

export const store = configureStore({
  reducer: {
    movies: moviesListSlice.reducer,
    stats: topRatedMoviesSlice.reducer
  },
});
