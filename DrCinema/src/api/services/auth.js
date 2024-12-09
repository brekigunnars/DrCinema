import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buffer } from 'buffer';

const BASE_URL = 'https://api.kvikmyndir.is';
const USERNAME = 'brekia23'; // Replace with your actual username
const PASSWORD = 'Geimganga121'; // Replace with your actual password

export const authenticate = async () => {
  try {
    const credentials = `${USERNAME}:${PASSWORD}`;
    const encodedCredentials = Buffer.from(credentials).toString('base64');

    const response = await axios.post(`${BASE_URL}/authenticate`, null, {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    });

    const { token } = response.data;

    // Store token in AsyncStorage for later use
    await AsyncStorage.setItem('accessToken', token);

    return token;
  } catch (error) {
    console.error('Authentication failed:', error.response?.data || error.message);
    throw error;
  }
};
