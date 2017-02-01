import React from 'react';

import VideoListItem from './video_list_item';
import { fetchVideos, videoSeleted } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class VideoList extends React.Component {
	constructor(props) {
		super(props);
		this.props.fetchVideos();
	}

	render() {
		return (
			<div className="video-list col-md-5">
				<ul>
				{this.props.videos.map((video, index) => 
					<VideoListItem key={index} video={video} onItemChange={this.props.videoSeleted} />
					)}
				</ul>
			</div>
		);
	}
}

VideoList.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  videos: React.PropTypes.array
}

function mapStateToProps(state) {
	return {
		videos: state.videos.all,
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchVideos, videoSeleted}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)