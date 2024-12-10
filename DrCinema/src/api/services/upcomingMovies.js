import apiClient from './apiClient';

export const getUpcomingMovies = async () => {
  try {
    const response = await apiClient.get('/upcoming'); // API endpoint for fetching upcoming movies
    return response.data; // Assuming the API returns a `data` object
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};
