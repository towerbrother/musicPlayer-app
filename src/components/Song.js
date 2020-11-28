import React, { useContext } from "react";
import MusicContext from "./../context/musicContext";

const Song = () => {
  const { currentSong } = useContext(MusicContext);
  return (
    <div className="song-container">
      <div className="image-cropper">
        <img src={currentSong.cover} alt={currentSong.name} />
      </div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
