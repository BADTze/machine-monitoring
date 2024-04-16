"use client";
import fetch from "node-fetch";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const testingPage = () => {
  return (
    <div className="flex space-x-2 h-40 rounded-lg">
      <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
        <p className="text-xs">3rd Stage Cylinder Water Temperature</p>
        <b>Max 62</b>
        <div className="mt-2 text-5xl text-center">20</div>
        <div className="mt-2">Celcius</div>
      </div>

      <div className="border-2 rounded-lg max-h-40 w-[820px] bg-white">
        <ReactApexChart
          options={{
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
            },
            xaxis: {
              categories: [1999, 1990, 1998],
            },
            tooltip: {
              x: {
                format: "dd/MM/yy HH:mm",
              },
            },
          }}
          series={[
            {
              name: "series1",
              data: [510, 340, 228]
            },
          ]}
          type="area"
          height={150}
        />
      </div>
    </div>
  );
};

export default testingPage;
