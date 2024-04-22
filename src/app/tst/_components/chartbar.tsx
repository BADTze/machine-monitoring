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
          categories: data.map((res) => res.nama) || []
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
        data: data.map((res) => res.nomer)
      },
    ]}
    type="bar"
    height={150}
  />;
};
