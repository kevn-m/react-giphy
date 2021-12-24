import React, { Component } from "react"
import Gif from "./Gif"

class SelectedGif extends Component {
  render() {
    return (
      <div className="selected-gif">
        <Gif />
      </div>
    )
  }
}

export default SelectedGif
