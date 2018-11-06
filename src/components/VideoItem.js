import React from "react"

const VideoItem = (props) => {
    const { thumbnails, title, channelTitle } = props.video.snippet
		return (
      <div className="video-item">
        <img src={thumbnails.default.url} alt={title} />
        <div className="info">
          <p><b>{title}</b></p>
          <p>{channelTitle}</p>
        </div>
      </div>
    )
}

export default VideoItem
