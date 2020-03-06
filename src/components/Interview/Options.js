import React from "react";

function Options() {
  return (
    <div className="options-wrapper">
      <div className="options">
        <div className="right-answers">
          <img alt="right-answer" src="/100.png" />
          <span className="white-colored">
            <i className="fa fa-arrow-up fa-5x" aria-hidden="true"></i>
          </span>
        </div>
        <div className="wrong-answers">
          <img alt="right-answer" src="/0.png" />
          <span className="white-colored">
            <i className="fa fa-arrow-down fa-5x" aria-hidden="true"></i>
          </span>
        </div>
        <div className="average-answers">
          <img alt="right-answer" src="/50.png" />
          <span className="white-colored">
            <i className="fa fa-arrow-right fa-5x" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Options;
