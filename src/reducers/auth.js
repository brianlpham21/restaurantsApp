const initialState = {
  loggedIn: false,
  email: '',
  password: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, loggedIn: true};
    case 'LOG_OUT':
      return {...state, loggedIn: false};
    case 'EDIT_LOGIN_INFORMATION': {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

export default authReducer;
