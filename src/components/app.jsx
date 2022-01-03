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
      selectedGifId: "BBkKEBJkmFbTG",
    }
    this.search("homer thinking")
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id,
    })
  }

  search = (query) => {
    const apiKey = "iklpRhVg1ZRatjgUkMxG2CcjgFCK9zyf"
    giphy(apiKey).search(
      {
        q: query,
        rating: "g",
        limit: 10,
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
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}
export default App
