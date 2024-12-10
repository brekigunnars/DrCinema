import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUpcomingMovies } from '../../api/services/upcomingMovies';

export const fetchUpcomingMovies = createAsyncThunk('upcomingMovies/fetchUpcomingMovies', async (_, thunkAPI) => {
  try {
    const response = await getUpcomingMovies();
    return response;
  } catch (error) {
    console.error('Error in fetchUpcomingMovies:', error);
    return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching upcoming movies');
  }
});

const upcomingMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default upcomingMoviesSlice.reducer;
