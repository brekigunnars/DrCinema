import axios from 'axios';
import { API_BASE_URL } from './constants';

export const authenticate = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/authenticate`, {
      username,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error('Error during authentication:', error);
    throw error;
  }
};
