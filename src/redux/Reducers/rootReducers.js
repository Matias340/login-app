import {combineReducers} from 'redux';
import loginReducers from '../Reducers/loginReducer';

const rootReducer = combineReducers({
  auth:  loginReducers
})

export default rootReducer;