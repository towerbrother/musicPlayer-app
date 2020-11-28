import React, { useContext } from "react";
import MusicContext from "./../context/musicContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { libraryStatus, setLibraryStatus } = useContext(MusicContext);

  return (
    <nav>
      <h1 className="app-title">Good Vibes</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} className="icon" />
      </button>
    </nav>
  );
};

export default Nav;
