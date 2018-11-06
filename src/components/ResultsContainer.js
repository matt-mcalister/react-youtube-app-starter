import React from "react"
import VideoItem from "./VideoItem"

const ResultsContainer = (props) => {
		return (
      <div id="results-container">
        {props.results.map(r => <VideoItem key={r.id.videoId} video={r} />)}
      </div>
    )
}

export default ResultsContainer
