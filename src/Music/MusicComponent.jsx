import React, { useRef, useEffect, useState } from "react";
import sound from "../assets/lagu2.mp3";
import musicIcon from "../assets/icon_play.gif";
import playIcon from "../assets/icon_play_icon.gif";
import style from "./music.module.css";

const MusicComponent = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fadeInterval = useRef(null);

  const fadeOut = () => {
    if (!audioRef.current) return;
    clearInterval(fadeInterval.current);

    fadeInterval.current = setInterval(() => {
      if (audioRef.current.volume > 0.1) {
        audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1);
      } else {
        audioRef.current.volume = 0;
        audioRef.current.pause();
        setIsPlaying(false);
        clearInterval(fadeInterval.current);
      }
    }, 100);
  };

  const fadeIn = () => {
    if (!audioRef.current) return;
    clearInterval(fadeInterval.current);
    audioRef.current.volume = 0;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.log("Auto play failed:", err));

    fadeInterval.current = setInterval(() => {
      if (audioRef.current.volume < 0.9) {
        audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.1);
      } else {
        audioRef.current.volume = 1;
        clearInterval(fadeInterval.current);
      }
    }, 100);
  };

  // Global startAudio event
  useEffect(() => {
    const handleStartAudio = () => {
      if (!audioRef.current) return;
      fadeIn();
    };

    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        fadeOut();
      } else {
        fadeIn();
      }
    };

    window.addEventListener("startAudio", handleStartAudio);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("startAudio", handleStartAudio);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      fadeOut();
    } else {
      fadeIn();
    }
  };

  return (
    <div className={style.audioPlayer}>
      <audio ref={audioRef} src={sound} loop preload="auto" />
      <button className={style.playButton} onClick={togglePlay}>
        <img
          src={isPlaying ? musicIcon : playIcon}
          alt={isPlaying ? "Pause" : "Play"}
        />
      </button>
    </div>
  );
};

export default MusicComponent;
