import React from "react";
import StopwatchStyled from "./StopwatchStyled";

const Stopwatch = ({ time, running, handleStart, handleStop, handleReset }) => {
  return (
    <StopwatchStyled>
      <h1 className="stopwatch__title">Stopwatch</h1>

      <p className="stopwatch__display">
        <span className="stopwatch__display-units">{time.slice(0, 2)}</span> :
        <span className="stopwatch__display-units">{time.slice(3, 5)}</span> :
        <span className="stopwatch__display-units">{time.slice(6)}</span>
      </p>

      {running ? (
        <button type="button" onClick={handleStop} className="stopwatch__btn">
          Stop
        </button>
      ) : (
        <button type="button" onClick={handleStart} className="stopwatch__btn">
          Start
        </button>
      )}

      <div className="stopwatch__btn-container">
        <button
          type="button"
          id="waitBtn"
          disabled={!running}
          className="stopwatch__btn"
        >
          Wait
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={!running}
          className="stopwatch__btn "
        >
          Reset
        </button>
      </div>
    </StopwatchStyled>
  );
};

export default Stopwatch;
