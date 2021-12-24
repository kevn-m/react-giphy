import React, { Component } from "react"

class searchBar extends Component {
  handleChange = (event) => {
    this.props.searchFunction(event.target.value)
  }

  render() {
    return (
      <input
        onChange={this.handleChange}
        type="text"
        className="form-control form-search"
      />
    )
  }
}

export default searchBar
