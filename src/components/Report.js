import React from "react";
import { Button } from "antd";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts.src.js";
import HighchartsExporting from "highcharts/modules/exporting";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

function Report(props) {
  const { reportMarks, timer } = props;
  if (!reportMarks) return null;

  const {
    rightAnswers: correct,
    wrongAnswers: wrong,
    averageAnswers: normal,
  } = reportMarks;

  const totalQuestionsAsked = correct + wrong + normal;
  const reportGraph = [
    {
      name: "Answers",
      colorByPoint: true,
      innerSize: "40%",
      data: [
        {
          color: "#64a169",
          name: "Correct",
          y: correct,
        },
        {
          color: "#e3595f",
          name: "Wrong",
          y: wrong,
        },
        {
          color: "#c8c97f",
          name: "Average",
          y: normal,
        },
      ],
    },
  ];

  const chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Pie chart for answers",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",

        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            textShadow: false,
            textOutline: false,
          },
        },
        showInLegend: true,
      },
    },
    series: reportGraph,
  };

  var getIntervieweeInfo = window.localStorage.getItem("interviewee-info");
  const { username, designation, dateInfo } = JSON.parse(getIntervieweeInfo);

  const print = () => {
    window.print();
  };
  const onSubmit = () => {
    props.setSelectedTab("info");
  };

  return (
    <div className="report-wrapper">
      <h1>Final Report</h1>
      <div className="interview-info-wrapper">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Postion</th>
              <th>Time Taken (Minutes)</th>
              <th>Total Questions</th>
            </tr>
            <tr>
              <td>{username}</td>
              <td>{dateInfo}</td>
              <td>{designation}</td>
              <td>{timer}</td>
              <td>{totalQuestionsAsked}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div className="buttons">
        <Button type="dashed" onClick={print}>
          Print
        </Button>
        &nbsp;
        <Button onClick={onSubmit}>Another Interviewee</Button>
      </div>
    </div>
  );
}

export default Report;
