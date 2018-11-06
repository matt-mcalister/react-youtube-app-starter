import React, { Component } from "react";
import SearchBar from "./components/SearchBar"
import ResultsContainer from "./components/ResultsContainer"
import VideoContainer from "./components/VideoContainer"
import "./index.css"

class App extends Component {
  state = {
    results: []
  }

  search = (term) => {

  }

  render() {
    return (
      <div id="app">
        <SearchBar />
        <ResultsContainer />
        <VideoContainer />
      </div>
    );
  }
}

export default App;
