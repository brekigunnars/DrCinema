import apiClient from '../apiClient';

export const getMovies = async () => {
  try {
    const response = await apiClient.get('/movies');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error.response?.data || error.message);
    throw error;
  }
};

export const getMovieImages = async (imdbId) => {
  try {
    console.log(`Fetching poster for imdbId: ${imdbId}`);
    const response = await apiClient.get(`/images?imdbid=${imdbId}`);
    console.log('Images API Response:', response.data);

    const results = response.data[0]?.results?.posters || [];
    if (results.length > 0) {
      const posterPath = results[0].file_path;
      return `http://image.tmdb.org/t/p/w500${posterPath}`;
    }

    return null; // Fallback if no poster is available
  } catch (error) {
    console.error('Error fetching images:', error.response?.data || error.message);
    return null; // Return null on error
  }
};
