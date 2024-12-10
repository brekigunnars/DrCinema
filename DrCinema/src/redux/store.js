import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
import upcomingMoviesReducer from './reducers/upcomingMoviesSlice';
import tokenReducer from './reducers/tokenSlice'; // Ensure the token slice is included

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    auth: tokenReducer,
  },
});

export default store;
