import React from "react"
import VideoItem from "./VideoItem"

const ResultsContainer = (props) => {
		return (
      <div id="results-container">
        {props.results.map(r => <VideoItem key={r.id.videoId} video={r} setSelectedVideo={props.setSelectedVideo} />)}
      </div>
    )
}

export default ResultsContainer
