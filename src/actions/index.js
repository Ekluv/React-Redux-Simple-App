import YTSearch from 'youtube-api-search';
import { YOUTUBE_API_KEY } from '../constants';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const VIDEO_SELECTED = 'VIDEO_SELECTED';

export var fetchVideos = (search_query = 'diljit') => {
	return function(dispatch) {
		YTSearch({key: YOUTUBE_API_KEY, term: search_query}, (videos) => {
			dispatch({
				type: FETCH_VIDEOS,
				payload: videos
			});
			
		});
	};
};

export var videoSeleted = (video) => {
	return {
		type: VIDEO_SELECTED,
		video: video
	};
};