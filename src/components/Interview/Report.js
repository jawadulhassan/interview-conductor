import React from "react";
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
    averageAnswers: normal
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
          y: correct
        },
        {
          color: "#e3595f",
          name: "Wrong",
          y: wrong
        },
        {
          color: "#c8c97f",
          name: "Average",
          y: normal
        }
      ]
    }
  ];

  const chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: "Pie chart for answers",
      text: null
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
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
            color: "#212833",
            textOutline: false
          }
        },
        showInLegend: true
      }
    },
    series: reportGraph
  };

  var getIntervieweeInfo = window.localStorage.getItem("interviewee-info");
  const { name, position, date } = JSON.parse(getIntervieweeInfo);

  return (
    <div className="report-wrapper">
      <h1 style={{color: 'white'}}>Final Report</h1>
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
              <td>{name}</td>
              <td>{date}</td>
              <td>{position}</td>
              <td>{timer}</td>
              <td>{totalQuestionsAsked}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div className="note">
        <p><strong> *Note: </strong> Go to the Browser menu to take the printout of the report.</p>
      </div>
    </div>
  );
}

export default Report;
