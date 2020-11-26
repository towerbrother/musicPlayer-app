import React, { useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./data";
import "./styles/app.scss";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="box">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
