

import React, { useEffect, useState } from "react";
import Styles from "./Stopwatch.module.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="stopwatch">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="stopwatch-time">Time: {formatTime(time)}</div>
      <div className="stopwatch-controls">
        {isRunning ? (
          <button className="stopwatch-button" onClick={stopStopwatch}>
            Stop
          </button>
        ) : (
          <button className="stopwatch-button" onClick={startStopwatch}>
            Start
          </button>
        )}
        <button className="stopwatch-button" onClick={resetStopwatch}>
          Reset
        </button>
      </div>
    </div>
  );

}
