import {createStore, combineReducers} from 'redux';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
