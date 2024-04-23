"use client";

import { useEffect, useState } from "react";
import { Isi } from "@/types";
import ReactApexChart from "react-apexcharts";

export const ChartBar = ({ data }: { data: Isi[] }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  console.log(data);

  <ReactApexChart
    options={{
      xaxis: {
        categories: data.map((res) => res.Bulan) || [],
        // categories:[
        //   "JAN",
        //   "FEB",
        //   "MAR",
        //   "APR",
        //   "MEI",
        //   "JUN",
        //   "JUL",
        //   "AUG",
        //   "SEP",
        //   "OKT",
        //   "NOV",
        //   "DES",
        // ]
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
    }}
    series={[
      {
        name: "series 1",
        data: data.map((res) => res.Total)
        // data: [1, 2, 5, 4, 1, 3, 7, 0, 4, 2, 10, 0],
      },
    ]}
    type="bar"
    height={150}
  />;
};
