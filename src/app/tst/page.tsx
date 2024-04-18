import { Nilai } from "@/types";
import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartTest } from "./_components/chart";

export default async function Page() {
  const response = await fetch(
    "https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly"
  );
  const responseJson: Nilai[] = await response.json();

  return (
    <div className="border-2 rounded-lg w-[820px] bg-white">
      <ChartTest items={responseJson} />
    </div>
  );
}
