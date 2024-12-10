const initialState = {
    movies: [],
    loading: false,
    error: null,
  };
  
  const upcomingMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPCOMING_MOVIES_LOADING':
        return { ...state, loading: true };
      case 'UPCOMING_MOVIES_SUCCESS':
        return { ...state, loading: false, upcomingMovies: action.payload };
      case 'UPCOMING_MOVIES_ERROR':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default upcomingMoviesReducer;
  