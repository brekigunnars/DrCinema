import axios from 'axios';

const AUTH_URL = 'https://api.kvikmyndir.is/authenticate';

export const authenticate = async (username, password) => {
  try {
    const response = await axios.post(AUTH_URL, {}, {
      auth: {
        username,
        password,
      },
    });
    return response.data.token; // Extract the token from the response
  } catch (error) {
    console.error('Error authenticating:', error.response?.data || error.message);
    throw error;
  }
};
