import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const ChartGraph = ({ chartData }) => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Q1", "Q2", "Q3", "Q4"],
          datasets: [
            {
              id: 1,
              label: "P1",
              data: [
                chartData.map((data) => data.Q1.P1),
                chartData.map((data) => data.Q2.P1),
                chartData.map((data) => data.Q3.P1),
                chartData.map((data) => data.Q4.P1),
              ],
              backgroundColor: ["green"],
              borderColor: "black",
              borderWidth: 2,
            },
            {
              id: 2,
              label: "P2",
              data: [
                chartData.map((data) => data.Q1.P2),
                chartData.map((data) => data.Q2.P2),
                chartData.map((data) => data.Q3.P2),
                chartData.map((data) => data.Q4.P2),
              ],
              backgroundColor: ["red"],
              borderColor: "black",
              borderWidth: 2,
            },
            {
              id: 3,
              label: "P3",
              data: [
                chartData.map((data) => data.Q1.P3),
                chartData.map((data) => data.Q2.P3),
                chartData.map((data) => data.Q3.P3),
                chartData.map((data) => data.Q4.P3),
              ],
              backgroundColor: ["blue"],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartGraph;
