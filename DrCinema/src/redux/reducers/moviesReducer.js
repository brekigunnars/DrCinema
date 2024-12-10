const initialState = {
    movies: [],
    loading: false,
    error: null,
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MOVIES_LOADING':
        return { ...state, loading: true };
      case 'MOVIES_SUCCESS':
        return { ...state, loading: false, movies: action.payload };
      case 'MOVIES_ERROR':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  