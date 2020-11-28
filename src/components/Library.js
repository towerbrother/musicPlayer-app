import React, { useContext } from "react";
import MusicContext from "./../context/musicContext";
import LibrarySong from "./LibrarySong";

const Library = () => {
  const { songs, libraryStatus } = useContext(MusicContext);

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2 className="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong key={song.id} id={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
