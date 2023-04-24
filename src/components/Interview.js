import React, { useReducer, useEffect, Fragment, useState } from "react";
import { Progress } from "antd";

import Report from "./Report";

const initialState = {
  rightAnswers: 0,
  wrongAnswers: 0,
  averageAnswers: 0,
};

function reducer(state, actions) {
  switch (actions.type) {
    case "UP":
      return { ...state, rightAnswers: state.rightAnswers + 1 };
    case "DOWN":
      return { ...state, wrongAnswers: state.wrongAnswers + 1 };
    case "AVERAGE":
      return { ...state, averageAnswers: state.averageAnswers + 1 };
    default:
      throw Error;
  }
}

function Options() {
  return (
    <div className="options-wrapper">
      <div className="options">
        <div className="right-answers">
          <Progress type="circle" percent={100} strokeWidth={10} />
          <span className="white-colored">
            <i className="fa fa-arrow-up fa-5x" aria-hidden="true"></i>
          </span>
        </div>
        <div className="wrong-answers">
          <Progress
            type="circle"
            percent={100}
            strokeWidth={10}
            status="exception"
          />
          <span className="white-colored">
            <i className="fa fa-arrow-down fa-5x" aria-hidden="true"></i>
          </span>
        </div>
        <div className="average-answers">
          <Progress
            type="circle"
            percent={50}
            strokeColor={{ "0%": "#ff4d4f", "100%": "#87d068" }}
            strokeWidth={10}
          />
          <span className="white-colored">
            <i className="fa fa-arrow-right fa-5x" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

function Timer(props) {
  const { setInterviewEnded, timer, setTimer } = props;

  setTimeout(function () {
    setTimer(timer + 1);
  }, 60000);

  return (
    <div style={{ width: "100%" }}>
      <div className="timer-wrapper">{`Timer: ${timer} minutes`}</div>
      <div
        className="submission-wrapper"
        onClick={() => setInterviewEnded(true)}
      >
        Wrap up!
      </div>
    </div>
  );
}

function Interview(props) {
  const { setSelectedTab } = props;

  let [timer, setTimer] = useState(0);
  const [interviewEnded, setInterviewEnded] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.addEventListener("keydown", (event) => keyFunc(event));
    return () => {
      window.removeEventListener("keydown", (event) => keyFunc(event));
    };
  }, []);

  function keyFunc(event) {
    //event.preventDefault();
    console.log("You clicked submit.", event);
    if (event.isComposing || event.keyCode === 38) {
      dispatch({ type: "UP" });
    }
    if (event.isComposing || event.keyCode === 40) {
      dispatch({ type: "DOWN" });
    }
    if (event.isComposing || event.keyCode === 39) {
      dispatch({ type: "AVERAGE" });
    }
  }

  return (
    <div>
      {!interviewEnded ? (
        <Fragment>
          <Timer {...{ setInterviewEnded, timer, setTimer }} />
          <Options />
        </Fragment>
      ) : (
        <Report
          reportMarks={state}
          setSelectedTab={setSelectedTab}
          {...{ timer }}
        />
      )}
    </div>
  );
}

export default Interview;
