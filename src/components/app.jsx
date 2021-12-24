import React, { Component } from "react"
import giphy from "giphy-api"

import SearchBar from "./search_bar"
import Gif from "./gif"
import GifList from "./gif_list"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      selectedGifId: "xT9IgK70y3VHfkksve",
    }
    this.search("homer thinking")
  }

  search = (query) => {
    const apiKey = "iklpRhVg1ZRatjgUkMxG2CcjgFCK9zyf"
    giphy(apiKey).search(
      {
        q: query,
        rating: "g",
      },
      (error, result) => {
        this.setState({
          gifs: result.data,
        })
      }
    )
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    )
  }
}
export default App
