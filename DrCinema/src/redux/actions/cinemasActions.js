import { getCinemas } from '../../api/services/cinemas';

export const fetchCinemas = () => async (dispatch) => {
  dispatch({ type: 'CINEMAS_LOADING' });
  try {
    const cinemas = await getCinemas();
    dispatch({ type: 'CINEMAS_SUCCESS', payload: cinemas });
  } catch (error) {
    console.error('Error fetching cinemas:', error);
    dispatch({ type: 'CINEMAS_ERROR', error });
  }
};
