import React from "react";

const Stopwatch = ({
  time,
  running,
  handleStart,
  handleStop,
  handleWait,
  handleReset,
}) => {
  return (
    <section>
      <h1>Stopwatch</h1>
      <div>
        <span> {time}</span>
      </div>

      <div>
        {running ? (
          <button type="button" onClick={handleStop}>
            Stop
          </button>
        ) : (
          <button type="button" onClick={handleStart}>
            Start
          </button>
        )}

        <button type="button" onClick={handleWait} disabled={!running}>
          Wait
        </button>

        <button type="button" onClick={handleReset} disabled={!running}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Stopwatch;
