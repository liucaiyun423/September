import {FETCH_TOTAL} from '../actions/types';

export default function(state = {}, action){
    
    switch(action.type){
        case FETCH_TOTAL:
            console.log("~~~pagination reducer FETCH_TOTAL", action.payload);
            return action.payload;
        default:
            return state;
    }
}