import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../../api/services/movies';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (_, thunkAPI) => {
  try {
    const response = await getMovies();
    return response;
  } catch (error) {
    console.error('Error in fetchMovies:', error);
    return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching movies');
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default moviesSlice.reducer;
