import apiClient from './apiClient';

export const getCinemas = async () => {
  try {
    const response = await apiClient.get('/theaters');
    return response.data;
  } catch (error) {
    console.error('Error fetching cinemas:', error);
    throw error;
  }
};
