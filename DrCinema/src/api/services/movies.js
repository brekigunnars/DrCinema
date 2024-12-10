import apiClient from './apiClient';

export const getMovies = async () => {
  try {
    const response = await apiClient.get('/movies');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
