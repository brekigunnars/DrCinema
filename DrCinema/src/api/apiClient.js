import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authenticate } from './services/auth';

const BASE_URL = 'https://api.kvikmyndir.is';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Add interceptor to include token in requests
apiClient.interceptors.request.use(async (config) => {
  let token = await AsyncStorage.getItem('accessToken');

  // Re-authenticate if no token
  if (!token) {
    token = await authenticate();
  }

  config.headers['x-access-token'] = token;
  return config;
});

export default apiClient;
