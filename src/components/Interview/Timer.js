import React, { useState } from "react";

function TimerWidget(props) {
  const { setInterviewEnded } = props;
  let [timer, setTimer] = useState(0);

  setTimeout(function() {
    setTimer(timer + 1);
  }, 60000);

  return (
    <>
      <div className="timer-wrapper">{`Timer (minutes): ${timer}`}</div>
      <div
        className="submission-wrapper"
        onClick={() => setInterviewEnded(true)}
      >
        Wrap up!
      </div>
    </>
  );
}

export default TimerWidget;
