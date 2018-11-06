import React, { Component } from "react";
import SearchBar from "./components/SearchBar"
import ResultsContainer from "./components/ResultsContainer"
import VideoContainer from "./components/VideoContainer"
import { searchVideos } from "./adapter"
import "./index.css"

class App extends Component {
  state = {
    results: []
  }

  search = (term) => {
    searchVideos(term)
      .then(console.log)
  }

  render() {
    console.log(this.state.results);
    return (
      <div id="app">
        <SearchBar search={this.search}/>
        <ResultsContainer />
        <VideoContainer />
      </div>
    );
  }
}

export default App;
