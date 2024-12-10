import { getMovies } from '../../api/services/movies';

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: 'MOVIES_LOADING' });
  try {
    const movies = await getMovies();
    dispatch({ type: 'MOVIES_SUCCESS', payload: movies });
  } catch (error) {
    console.error('Error fetching movies:', error);
    dispatch({ type: 'MOVIES_ERROR', error });
  }
};
