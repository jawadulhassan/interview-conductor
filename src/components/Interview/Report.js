import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts.src.js";

import HighchartsExporting from "highcharts/modules/exporting";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

function Report(props) {
  const { reportMarks } = props;
  if (!reportMarks) return null;

  const {
    rightAnswers: correct,
    wrongAnswers: wrong,
    averageAnswers: normal
  } = reportMarks;

  const reportGraph = [
    {
      name: "Brands",
      colorByPoint: true,
      innerSize: "40%",
      data: [
        {
          color: "#64a169",
          name: "Correct Answers",
          y: correct
        },
        {
          color: "#e3595f",
          name: "Wrong Answers",
          y: wrong
        },
        {
          color: "#c8c97f",
          name: "Average Answers",
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
      text: "Browser market shares in January, 2018",
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

  return (
    <div className="report-wrapper">
      <h1>Final Report</h1>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default Report;
