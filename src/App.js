import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./data";
import MusicContext from "./context/musicContext";
import "./styles/app.scss";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
    });
  };

  const songEndHandler = () => {
    const index = songs.findIndex((song) => song.id === currentSong.id);
    const songsNumber = songs.length;
    setCurrentSong(songs[(index + 1) % songsNumber]);
  };

  return (
    <div className={`box ${libraryStatus ? "library-active" : ""}`}>
      <MusicContext.Provider
        value={{
          audioRef,
          songs,
          setSongs,
          songInfo,
          setSongInfo,
          isPlaying,
          setIsPlaying,
          libraryStatus,
          setLibraryStatus,
          currentSong,
          setCurrentSong,
        }}
      >
        <Nav />
        <Song />
        <Player />
        <Library />
      </MusicContext.Provider>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
      <div className="bottom">
        <h5 className="credits">
          Music by{" "}
          <a href="https://chillhop.ffm.to/creatorcred" target="_blank">
            Chillhop Music
          </a>
        </h5>
      </div>
    </div>
  );
}

export default App;
