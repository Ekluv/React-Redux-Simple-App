import React from 'react';

export default class VideoListItem extends React.Component {
	render() {
		return (
			<div className="video-list-item media" onClick={() => this.props.onItemChange(this.props.video)}>
			  <div className="media-left">
			    <img src={this.props.video.snippet.thumbnails.default.url} className="media-object img-responsive" />
			  </div>
			  <div className="media-body">
			    <h4 className="media-heading">{this.props.video.snippet.title}</h4>
			    <p>{this.props.video.snippet.description}</p>
			  </div>
			</div>
		);
	}
}