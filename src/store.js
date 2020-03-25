import {createStore, combineReducers} from 'redux';
import authReducer from './reducers/auth';
import restaurantsReducer from './reducers/restaurants';

const rootReducer = combineReducers({
  auth: authReducer,
  restaurants: restaurantsReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
