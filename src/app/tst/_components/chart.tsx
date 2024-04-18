"use client";

import { useEffect, useState } from "react";
import { Nilai } from "@/types";
import ReactApexChart from "react-apexcharts";

export const ChartTest = ({ items }: { items: Nilai[] }) => {
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
        },
      }}
      series={[
        {
          name: "series-1",
          data: items.map((res) => res.y),
        },
      ]}
      type="area"
      height={150}
    />
  );
};
