import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="main-wrapper">
    <div className="page-wrapper">
      <App />
    </div>
    <section className="page_copyright ds ms s-pt-20 s-pb-20 s-pb-20 s-pb-20 s-pb-20 s-pb-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 text-center">
            All Rights Reserved © 2020 Jawad Ul Hassan
          </div>
        </div>
      </div>
    </section>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
