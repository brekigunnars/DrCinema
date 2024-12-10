import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import cinemasReducer from './reducers/cinemasReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    cinemas: cinemasReducer,
    auth: authReducer,
  },
});

export default store;
