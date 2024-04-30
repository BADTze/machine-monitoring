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

  return (
    <ReactApexChart
      options={{
        xaxis: {
          // categories: data.map((res) => res.Bulan) || []
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Des"
          ],
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
      }}
      series={[
        {
          data: data.map((res) => res.Total) || [],
        },
      ]}
      type="bar"
      height={350}
    />
  );
};
