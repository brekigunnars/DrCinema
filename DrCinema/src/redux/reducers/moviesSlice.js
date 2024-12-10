import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/services/apiClient';

// Async action to fetch movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (_, { getState }) => {
  const { token } = getState();
  const response = await apiClient.get('/movies', {
    headers: { 'x-access-token': token.value },
  });
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
