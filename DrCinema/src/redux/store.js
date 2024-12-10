import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
import tokenReducer from './reducers/tokenSlice'; // Ensure the token slice is included

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: tokenReducer,
  },
});

export default store;
