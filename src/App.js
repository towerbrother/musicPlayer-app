import React from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";

function App() {
  return (
    <div className="box">
      <Song />
      <Player />
    </div>
  );
}

export default App;
