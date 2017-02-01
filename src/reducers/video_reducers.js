import { FETCH_VIDEOS, VIDEO_SELECTED } from '../actions';
import Immutable from 'immutable';

const INITIAL_STATE = {all: [], active: null};

var videosReducer = (state=INITIAL_STATE, action) => {
	state = Immutable.fromJS(state)
	switch (action.type) {
		case FETCH_VIDEOS:
			// return {...state, all: action.payload, active: action.payload[0]}; // ES6 way to clone obj
			state = state.set('all', action.payload)
			state = state.set('active', action.payload[0])
			break;
		case VIDEO_SELECTED:
			state = state.set('active', action.video)
			break;
	}
	return state.toJS();
};

export default videosReducer;