import React, { useState, useRef } from "react";
import { GoPlay } from "react-icons/go";
import { CgPlayPauseO } from "react-icons/cg";
import { RiReplay10Fill, RiForward10Fill } from "react-icons/ri";
import LyricsViewer from "./LyricsViewer";
import "./MusicPlayer.css";

const MusicPlayer = ({ song, showComments }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) =>
            console.error("Erro ao tentar reproduzir o áudio:", error)
          );
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleSkip = (seconds) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = Math.max(
        0,
        Math.min(audio.duration, audio.currentTime + seconds)
      );
      audio.currentTime = newTime;
    }
  };

  return (
    <div className="player-container text-center mb-40">
      <h2 className="text-xl font-bold mt-3">
        {song.title} - {song.artist}
      </h2>

      <audio
        ref={audioRef}
        src={song.audioUrl}
        className="audio-player w-[480px] h-[30px] mx-auto mt-5"
        controls
      ></audio>

      <div className="button-container flex justify-center mt-4 h-[50px] space-x-3 items-center">
        <button
          onClick={() => handleSkip(-10)}
          className="control-button bg-gray-800 hover:bg-gray-900 text-white font-bold h-[40px] py-2 px-2 rounded-full flex items-center justify-center"
        >
          <RiReplay10Fill className="text-xl" />
        </button>
        <button
          onClick={handlePlayPause}
          className={`control-button bg-gray-800 hover:bg-gray-900 text-white font-bold h-[44px] py-2 px-2 rounded-full flex items-center justify-center ${
            isPlaying ? "playing-animation" : ""
          }`}
        >
          {isPlaying ? (
            <CgPlayPauseO className="text-2xl" />
          ) : (
            <GoPlay className="text-2xl" />
          )}
        </button>
        <button
          onClick={() => handleSkip(10)}
          className="control-button bg-gray-800 hover:bg-gray-900 text-white font-bold h-[40px] py-2 px-2 rounded-full flex items-center justify-center"
        >
          <RiForward10Fill className="text-xl" />
        </button>
      </div>

      <LyricsViewer
        audioRef={audioRef}
        lyrics={song.lyrics}
        showComments={showComments}
      />
    </div>
  );
};

export default MusicPlayer;
