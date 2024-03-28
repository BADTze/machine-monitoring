"use client";
import { AreaChart, Card, DatePicker, Title } from "@tremor/react";
import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
  useState,
} from "react";
import ReactApexChart from "react-apexcharts";

export default function AreachartPage() {
  return (
    <div className="px-3 bg-transparent">
      <header className="flex justify-between p-2">
        <Link className="max-w-sm" href="/">
          <h3 className="text-xl font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            &lt;- Kembali
          </h3>
        </Link>
        <DatePicker className="max-w-sm" />
      </header>

      <div className=" flex h-96 space-x-2 h-full">
        <div className=" rounded-lg space-y-2">
          <img src="kompresor-gas.jpg" className="rounded-lg border-2" />
          <div className="bg-green-600 shadow-lg text-white text-2xl p-5 h-20 w-1/2">
            <h1>Running</h1>
          </div>
          <div className="h-12 border-2 shadow-lg bg-white p-2">RH</div>
          <div className="h-12 border-2 shadow-lg bg-white p-2">RH period</div>
          <div className="h-12 border-2 shadow-lg bg-white p-2">Down Time</div>
          <div className="p-2 border-2 shadow-lg bg-white">
            <h2>Maintenance</h2>
            <div className="flex justify-around">
              <div className="text-green-600">PM = 30</div>
              <div className="text-yellow-400">CM = 30</div>
              <div className="text-red-600">EM = 30</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex space-x-2 mb-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <div className="text-sm">Hot Side First Stage Air Temp <b>MAX 30</b></div>
              <div className="mt-2 text-5xl text-center">300</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-full bg-white">
              {/* <ReactApexChart
                options={{
                  chart: {
                    height: 150,
                    width:20,
                    type: "area",
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  xaxis: {
                    type: "datetime",
                    categories: [
                      "2018-09-19T00:00:00.000Z",
                      "2018-09-19T01:30:00.000Z",
                      "2018-09-19T02:30:00.000Z",
                      "2018-09-19T03:30:00.000Z",
                      "2018-09-19T04:30:00.000Z",
                      "2018-09-19T05:30:00.000Z",
                      "2018-09-19T06:30:00.000Z",
                    ],
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
                    data: [31, 40, 28, 51, 42, 109, 100],
                  }
                ]}
                type="area"
                height={150}
              /> */}
            </div>
          </div>
          <div className="flex space-x-2 mb-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <div className="text-sm">Cold Side First Stage Air Temp <b>MAX 30</b></div>
              <div className="mt-2 text-5xl text-center">300</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-full bg-white">
            
            </div>
          </div>
          <div className="flex space-x-2 mb-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-41 h-40 rounded-lg p-2 border-2 bg-white">
              <div className="text-sm">Hot Side Second Stage Air Temperature <b>MAX 30</b></div>
              <div className="mt-2 text-5xl text-center">300</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-full bg-white">
            
            </div>
          </div>
          <div className="flex space-x-2 mb-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-41 h-40 rounded-lg p-2 border-2 bg-white">
              <div className="text-sm">Hot Side Second Stage Air Temperature <b>MAX 30</b></div>
              <div className="mt-2 text-5xl text-center">300</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-full bg-white">
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
