import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{formatTime(songInfo.duration)}</p>
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
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </div>
  );
};

export default Player;
