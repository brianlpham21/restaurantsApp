const initialState = {
  searchTerm: '',
  list: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {...state, searchTerm: action.payload};
    case 'LOAD_RESTAURANTS':
      return {...state, list: action.payload};
    default:
      return state;
  }
};

export default authReducer;
