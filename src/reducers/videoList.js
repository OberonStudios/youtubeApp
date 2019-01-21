import { USER_INPUT } from "../actions/types";

export default function(state = null, action){
    switch(action.type){
        case USER_INPUT:
            return action.payload || false;
        default:
            return state;
    }
}