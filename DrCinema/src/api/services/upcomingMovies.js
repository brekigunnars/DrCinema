import apiClient from './apiClient';

/**
 * Fetch upcoming movies.
 * @returns {Promise<Object[]>} - The list of upcoming movies.
 */
export const getUpcomingMovies = async () => {
  try {
    // Replace `/upcoming` with the correct endpoint if necessary
    const response = await apiClient.get('/upcoming'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error.response?.data || error.message);
    throw error;
  }
};
