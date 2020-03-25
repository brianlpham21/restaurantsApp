const initialState = {
  searchTerm: '',
  exploreList: [],
  searchList: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {...state, searchTerm: action.payload};
    case 'LOAD_EXPLORE_RESTAURANTS':
      return {...state, exploreList: action.payload};
    case 'LOAD_SEARCH_RESTAURANTS':
      return {...state, searchList: action.payload};
    default:
      return state;
  }
};

export default authReducer;
