import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Async function to authenticate and fetch a new token
export const fetchToken = createAsyncThunk('token/fetchToken', async () => {
  try {
    const response = await axios.post('https://api.kvikmyndir.is/authenticate', null, {
      headers: {
        Authorization: `Basic ${btoa('username:password')}`, // Replace with your credentials
      },
    });

    const token = response.data.token;

    // Save token in AsyncStorage for persistence
    await AsyncStorage.setItem('accessToken', token);

    return token;
  } catch (error) {
    throw new Error('Failed to fetch token');
  }
});

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    clearToken: (state) => {
      state.value = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export const { clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
