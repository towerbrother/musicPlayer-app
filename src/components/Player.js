import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        {isPlaying ? (
          <FontAwesomeIcon
            className="pause"
            icon={faPause}
            size="2x"
            onClick={playSongHandler}
          />
        ) : (
          <FontAwesomeIcon
            className="play"
            icon={faPlay}
            size="2x"
            onClick={playSongHandler}
          />
        )}
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
        <audio ref={audioRef} src={currentSong.audio}></audio>
      </div>
    </div>
  );
};

export default Player;
