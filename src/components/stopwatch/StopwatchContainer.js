import React, { useState, useEffect, useRef } from "react";
import { interval } from "rxjs";
import { tap } from "rxjs/operators";
import { toHHMMSS } from "../../utils/timeFormat";
import Stopwatch from "./Stopwatch";

const StopwatchContainer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const clickTime = useRef(null);

  const timer$ = interval(1000).pipe(tap((v) => console.log(v)));

  useEffect(() => {
    if (running) {
      const subscription = timer$.subscribe((val) => {
        setTime((prev) => prev + 1);
      });
      return () => subscription.unsubscribe();
    }
    // eslint-disable-next-line
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
    setTime(0);
  };

  const handleReset = async () => {
    await handleStop();
    handleStart();
  };

  const handleWait = () => {
    const clickInterval = Date.now() - clickTime.current;
    if (clickInterval <= 300) {
      setRunning(false);
      console.log("Ставим на паузу!");
    }
    clickTime.current = Date.now();
  };
  return (
    <Stopwatch
      handleStart={handleStart}
      handleStop={handleStop}
      handleWait={handleWait}
      handleReset={handleReset}
      running={running}
      time={toHHMMSS(time)}
    />
  );
};

export default StopwatchContainer;
