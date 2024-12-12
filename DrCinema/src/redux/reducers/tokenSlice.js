import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authenticate } from '../../api/services/auth';

export const fetchToken = createAsyncThunk(
  'auth/fetchToken',
  async (_, thunkAPI) => {
    try {
      const username = 'hopur8'; // Replace with your username
      const password = 'hopur8'; // Replace with your password
      const token = await authenticate(username, password);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch token');
    }
  }
);

const tokenSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default tokenSlice.reducer;
