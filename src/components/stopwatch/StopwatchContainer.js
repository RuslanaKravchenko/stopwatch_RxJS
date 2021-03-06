import React, { useState, useEffect } from "react";
import { fromEvent, interval } from "rxjs";
import { bufferCount, filter, map, tap } from "rxjs/operators";
import { toHHMMSS } from "../../utils/timeFormat";
import Stopwatch from "./Stopwatch";

const StopwatchContainer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const timer$ = interval(1000).pipe(
    tap((v) => {
      console.log(v);
    })
  );

  useEffect(() => {
    const waitBtn = document.getElementById("waitBtn");
    const numberOfClicks = 2;

    const waitBtnClick$ = fromEvent(waitBtn, "click")
      .pipe(
        map(() => Date.now()),
        bufferCount(numberOfClicks, 1),
        filter((clickTime) => {
          console.log(`Между кликами прошло: ${clickTime[1] - clickTime[0]}ms`);
          return clickTime[1] - clickTime[0] <= 300;
        })
      )
      .subscribe(handleWait);
    return () => waitBtnClick$.unsubscribe();
  }, []);

  useEffect(() => {
    if (running) {
      const subscription = timer$.subscribe(() => {
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
    setRunning(false);
    console.log("Ставим на паузу!");
  };

  return (
    <Stopwatch
      handleStart={handleStart}
      handleStop={handleStop}
      handleReset={handleReset}
      running={running}
      time={toHHMMSS(time)}
    />
  );
};

export default StopwatchContainer;
