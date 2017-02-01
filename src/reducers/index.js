import { combineReducers } from 'redux';
import videoReducer from './video_reducers';

const rootReducer = combineReducers({
	videos: videoReducer
});

export default rootReducer;
