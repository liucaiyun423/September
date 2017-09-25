export default function(state={}, action){
    console.log("action called", action);
    switch(action.type){
        default:
            return state;
    }
}