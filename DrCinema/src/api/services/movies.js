import apiClient from './apiClient';

export const getMovies = async () => {
  try {
    const response = await apiClient.get('/movies'); // API endpoint for fetching movies
    return response.data; // Assuming the API returns a `data` object
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
