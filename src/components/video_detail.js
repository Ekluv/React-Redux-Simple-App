import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {
	constructor(props){
		super(props);	
	}

	render() {
		if(!this.props.video) {
			return <div className="col-md-7"><div className="loader "/></div>
		}
		let iframeSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
		return (
			<div className="video-detail col-md-7">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={iframeSrc} frameBorder="0" allowFullScreen />
				</div>
				<div className="media">
				  <div className="media-body">
				    <h4 className="media-heading">{this.props.video.snippet.title}</h4>
				    <p>{this.props.video.snippet.description}</p>
				  </div>
				</div>
			</div>
		);
	}
}

VideoDetail.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  video: React.PropTypes.object
}


function mapStateToProps(state) {
	return {
		video: state.videos.active,
	}
}

export default connect(mapStateToProps)(VideoDetail)