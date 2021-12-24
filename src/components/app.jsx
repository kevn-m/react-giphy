import React from "react"

import SearchBar from "./search_bar"
import SelectedGif from "./selected_gif"

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <SelectedGif />
      </div>
      <div className="right-scene"></div>
    </div>
  )
}

export default App
