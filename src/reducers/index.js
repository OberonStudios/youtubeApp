import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import videoListReducer from './videoList';

export default combineReducers({
    form: formReducer,
    vidList: videoListReducer
});