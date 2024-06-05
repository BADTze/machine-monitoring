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

  console.log(items);

  return (
    <ReactApexChart
      options={{
        xaxis: {
          categories: items.map((res) => res.x) || [],
          labels:{
            datetimeFormatter: {
              // year: 'yyyy',
              // month: 'MMM \'yy',
              // day: 'dd MMM',
              hour: 'HH:mm'
            }
          }
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
          data: items.map((res) => res.y)
        },
      ]}
      type="area"
      height={150}
    />
  );
};
