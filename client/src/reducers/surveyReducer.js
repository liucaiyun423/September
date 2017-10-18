import {FETCH_SURVEYS} from '../actions/types';

export default function(surveys=[], action){
    
    switch(action.type){
        case FETCH_SURVEYS:
            console.log("~~~survey reducer ", action.payload);
            return action.payload || [];
        default:
            return surveys;
    }
}