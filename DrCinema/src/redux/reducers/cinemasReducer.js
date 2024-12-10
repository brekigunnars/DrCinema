const initialState = {
  cinemas: [],
  loading: false,
  error: null,
};

const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CINEMAS_LOADING':
      return { ...state, loading: true };
    case 'CINEMAS_SUCCESS':
      return { ...state, loading: false, cinemas: action.payload };
    case 'CINEMAS_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default cinemasReducer;
