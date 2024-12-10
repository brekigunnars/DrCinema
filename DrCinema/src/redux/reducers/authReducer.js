const initialState = {
    token: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return { ...state, token: action.payload, error: null };
      case 'AUTH_ERROR':
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  
  export default authReducer;
  