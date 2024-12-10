import apiClient from './apiClient';

export const getUpcomingMovies = async () => {
  try {
    const response = await apiClient.get('/upcoming'); // API endpoint for fetching upcoming movies
    const sortedResponse = response.data.sort((a, b) => {
      const dateA = new Date(a['release-dateIS']);
      const dateB = new Date(b['release-dateIS']);
      return dateA - dateB
    });
    return response.data; // Assuming the API returns a `data` object
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};
