import axios from 'axios';
import store from '../../redux/store'; // Ensure correct import of the Redux store
import { fetchToken } from '../../redux/reducers/tokenSlice';

const apiClient = axios.create({
  baseURL: 'https://api.kvikmyndir.is',
});

// Attach token to every request
apiClient.interceptors.request.use(async (config) => {
  const state = store.getState();
  let token = state.auth.token;

  if (!token) {
    // If token doesn't exist, fetch it
    await store.dispatch(fetchToken());
    token = store.getState().auth.token; // Get the updated token
  }

  config.headers['x-access-token'] = token;
  return config;
});

export default apiClient;
