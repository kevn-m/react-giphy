import React from "react"

import SearchBar from "./search_bar"
import SelectedGif from "./selected_gif"
import GifList from "./gif_list"

const App = () => {
  const gifs = [{ id: "bUm7IqjufH5eoFN6bG" }, { id: "lMsT2f47tDxFMYdJMC" }]
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <SelectedGif />
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} />
      </div>
    </div>
  )
}

export default App
