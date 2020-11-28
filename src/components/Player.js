import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  isPlaying,
  songInfo,
  songs,
  currentSong,
  setSongs,
  setSongInfo,
  setIsPlaying,
  setCurrentSong,
}) => {
  const activeLibraryHandler = (nextOrPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextOrPrev.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongs);
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

  const skipTrackHandler = async (direction) => {
    const index = songs.findIndex((song) => song.id === currentSong.id);
    const songsNumber = songs.length;
    if (direction === "skip-back") {
      await setCurrentSong(songs[(index - 1 + songsNumber) % songsNumber]);
      activeLibraryHandler(songs[(index - 1 + songsNumber) % songsNumber]);
    } else {
      await setCurrentSong(songs[(index + 1) % songsNumber]);
      activeLibraryHandler(songs[(index + 1) % songsNumber]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const trackAnimationStyle = {
    transform: `translateX(${
      (songInfo.currentTime / songInfo.duration) * 100
    }%)`,
  };

  const trackStyle = {
    background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div className="track" style={trackStyle}>
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div className="animate-track" style={trackAnimationStyle}></div>
        </div>
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          className="play-pause"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
