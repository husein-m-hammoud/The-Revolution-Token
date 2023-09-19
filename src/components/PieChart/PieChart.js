import React, { useEffect, useState } from 'react';

import './PieChart.scss';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);


function PieChart({data}) {
  const state = {
    test: "testing state",
    chartOptions: {
      colors: ['#8104c3', '#bb277b', '#452ffa', '#2770fc', '#0000ff', '#000'],
      backgroundColor:'#000',
      chart: {
        type: "pie",
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: ""
      },
      credits: {
     enabled: false
},
      tooltip: {
        pointFormat: ""

      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          depth: 55,
          dataLabels: {
            enabled: true,
            format: "{point.name}"
          }
        }
      },
      series: [
        {
          type: "pie",
          name: "Browser share",
          data: data,
             dataLabels: {
      enabled: true,
      style: {
        color: 'white',
            fontSize: '13px',
        textOutline: 'transparent'
      }
    },
        }
      ]
    }
  };

  return (
    <div>
    <HighchartsReact
    options={state.chartOptions}
    highcharts={Highcharts}
    />
    </div>
  );

}


export default PieChart;
