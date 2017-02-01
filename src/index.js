import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // thunk middleware for aync actions in redux(doing things redux way)

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
		<div className="app">
		<SearchBar />
			<div className="video-section">
				<VideoDetail />
				<VideoList />
			</div>
		</div>
		);
	}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>, document.querySelector('.container-fluid'))