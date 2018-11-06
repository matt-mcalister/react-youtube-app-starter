import React from "react"

class SearchBar extends React.Component {
	state = {
    term: ""
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.term);
  }

	render(){
		return (
      <form onSubmit={this.handleSubmit} id="search-bar">
        <input type="text" value={this.state.term} onChange={this.handleChange}/>
        <input type="submit" value="Search"/>
      </form>
    )
	}
}

export default SearchBar
