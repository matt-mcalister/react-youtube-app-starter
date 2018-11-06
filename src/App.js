import React, { Component } from "react";
import SearchBar from "./components/SearchBar"
import ResultsContainer from "./components/ResultsContainer"
import VideoContainer from "./components/VideoContainer"
import { searchVideos } from "./adapter"
import "./index.css"

class App extends Component {
  state = {
    results: [],
    nextPageToken: "",
    prevPageToken: "",
    selectedVideo: null
  }

  search = (term) => {
    searchVideos(term)
      .then(payload => {
        this.setState({
          results: payload.items,
          nextPageToken: payload.nextPageToken || "",
          prevPageToken: payload.prevPageToken || ""
        })
      })
  }

  render() {
    return (
      <div id="app">
        <SearchBar search={this.search}/>
        <ResultsContainer results={this.state.results}/>
        <VideoContainer selectedVideo={this.state.selectedVideo} />
      </div>
    );
  }
}

export default App;
