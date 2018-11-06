import React from "react"

const VideoContainer = (props) => {
	console.log(props);
	if (props.selectedVideo){
		const embedUrl = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;
		const { title } = props.selectedVideo.snippet
		return (
			<div id="video-container">
				<iframe src={embedUrl} title={title}/>
			</div>
		)
	} else {
		return null
	}
}

export default VideoContainer
