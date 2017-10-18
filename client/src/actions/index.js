import axios from 'axios';
import { FETCH_USER , FETCH_SURVEYS, FETCH_TOTAL} from './types';


//action creator
//fetchUser action is fired before the APP is about to mount
export const  fetchUser = ()=> async dispatch => {
    const res =  await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
}

export const handleToken = (token)=> async dispatch => {
    const res = await axios.post('/api/stripe', {token});
    dispatch({type: FETCH_USER, payload:  res.data});
}

export const submitSurvey = (values,history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({type: FETCH_USER, payload:  res.data});
}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    console.log("~~~~~~~~~~fetched surveys", res.data);
    dispatch({type: FETCH_SURVEYS, payload: res.data});
}

export const fetchTotal = (model)=> async dispatch => {
    console.log("fetching total");
    const res = await axios.get(`/api/${model}/count`);
    dispatch({type: FETCH_TOTAL, payload: {total: res.data.total, model: model }});
}
