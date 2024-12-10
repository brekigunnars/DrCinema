import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authenticate } from './auth';

const apiClient = axios.create({
  baseURL: 'https://api.kvikmyndir.is',
  timeout: 10000,
});

// Axios Request Interceptor
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios Response Interceptor for Token Refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token is invalid, fetch a new one
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await authenticate(); // This fetches a new token
        await AsyncStorage.setItem('accessToken', newToken);
        apiClient.defaults.headers.common['x-access-token'] = newToken;
        originalRequest.headers['x-access-token'] = newToken;
        return apiClient(originalRequest); // Retry the original request
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
