import { authenticateUser } from '../../api/services/auth';

export const refreshToken = () => async (dispatch) => {
  try {
    const token = await authenticateUser();
    dispatch({ type: 'SET_TOKEN', payload: token });
  } catch (error) {
    console.error('Error refreshing token:', error);
    dispatch({ type: 'AUTH_ERROR', error });
  }
};
