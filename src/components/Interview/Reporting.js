import React, { useReducer, useEffect, Fragment, useState } from "react";

import OptionsWidget from "./Options";
import Report from "./Report";
import Timer from "./Timer";

const initialState = {
  rightAnswers: 0,
  wrongAnswers: 0,
  averageAnswers: 0
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

function Reporting() {
  const [interviewEnded, setInterviewEnded] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.addEventListener("keydown", event => keyFunc(event));
    return () => {
      window.removeEventListener("keydown", event => keyFunc(event));
    };
  }, []);

  function keyFunc(event) {
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
    <Fragment>
      {!interviewEnded ? (
        <Fragment>
          <Timer {...{ setInterviewEnded }} />
          <OptionsWidget />
        </Fragment>
      ) : (
        <Report reportMarks={state} />
      )}
    </Fragment>
  );
}

export default Reporting;
