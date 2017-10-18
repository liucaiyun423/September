import {combineReducers} from 'redux';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';
import paginationReducer from './paginationReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    surveys: surveyReducer,
    pagination: paginationReducer
});