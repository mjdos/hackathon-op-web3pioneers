import React, { useEffect, useRef, useState } from "react";

function Counter() {
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSecounds, setTimerSecounds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Jul 30, 2022, 00:00:00");

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secound = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSecounds(secound);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <span id="hours1">{timerHours}</span>H :&nbsp;
      <span id="minutes1">{timerMinutes}</span>M :&nbsp; 
      <span id="seconds1">{timerSecounds}</span>S 
    </>
  );
}

export default Counter;
