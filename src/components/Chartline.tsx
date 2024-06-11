"use client";
import { useEffect, useState } from "react";
import { Nilai } from "@/types";
import ReactApexChart from "react-apexcharts";

export const ChartLine = ({ items }: { items: Nilai[] }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;
  
  return (
    <ReactApexChart
      options={{
        xaxis: {
          categories: items.map((res) => res.x) || [],
          type: 'datetime'
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
          name: "Nilai",
          data: items.map((res) => res.y),
        },
      ]}
      type="area"
      height={180}
    />
  );
};
