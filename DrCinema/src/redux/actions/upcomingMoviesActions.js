import { getUpcomingMovies } from '../../api/services/upcomingMovies';

export const fetchUpcomingMovies = () => async (dispatch) => {
  dispatch({ type: 'UPCOMING_MOVIES_LOADING' });
  try {
    const upcomingMovies = await getUpcomingMovies();
    dispatch({ type: 'UPCOMING_MOVIES_SUCCESS', payload: upcomingMovies });
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    dispatch({ type: 'UPCOMING_MOVIES_ERROR', error });
  }
};
