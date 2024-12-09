import apiClient from '../apiClient';

/**
 * Fetch all cinemas.
 * @returns {Promise<Object[]>} - The list of cinemas.
 */
export const getCinemas = async () => {
  try {
    const response = await apiClient.get('/cinemas');
    console.log('Cinemas fetched successfully:', response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error('Error fetching cinemas:', error.response?.data || error.message);
    throw error;
  }
};
