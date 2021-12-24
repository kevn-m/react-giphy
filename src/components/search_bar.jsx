import React, { Component } from "react"

class searchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
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
