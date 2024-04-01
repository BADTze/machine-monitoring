"use client";
import { AreaChart, Card, DatePicker, Title } from "@tremor/react";
import { Just_Me_Again_Down_Here } from "next/font/google";
import Link from "next/link";
import { hasUncaughtExceptionCaptureCallback } from "process";
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
import { Interface } from "readline/promises";
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

      <div className=" grid grid-cols-3 gap-3 h-full">
        <div className="col-span-1 rounded-lg space-y-2">
          <img
            src="kompresor-gas.jpg"
            className="rounded-lg border-2 object-fit"
          />
          <div className="bg-green-600 shadow-lg text-white text-4xl text-center p-5 h-20">
            Running
          </div>
          <div className="h-17 border-2 shadow-lg p-2">
            <h2>Running Hours</h2>
            <div className="text-3xl text-center">3000</div>
          </div>
          <div className="h-17 border-2 shadow-lg p-2">
            <h2>Running Hours (Period)</h2>
            <div className="text-3xl text-center">3000</div>
          </div>
          <div className="h-17 border-2 shadow-lg p-2">
            <h2>Down Time (Minute)</h2>
            <div className="text-3xl text-center">30</div>
          </div>

          <div className="p-2 border-2 shadow-lg">
            <h2>Maintenance</h2>
            <div className="flex justify-around">
              <div className="text-green-600 text-2xl">PM = 3 </div>
              <div className="text-yellow-400 text-2xl">CM = 5</div>
              <div className="text-red-500 text-2xl">EM = 6</div>
            </div>
          </div>

          <div className="p-2 border-2 shadow-lg h-96">
            <ReactApexChart
              options={{
                dataLabels: {
                  enabled: false,
                },
                plotOptions: {
                  bar: {
                    borderRadius: 4,
                    horizontal: true,
                  },
                },
                xaxis: {
                  categories: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MEI",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OKT",
                    "NOV",
                    "DES",
                  ],
                  labels: {
                    formatter: (val) => {
                      return val;
                    },
                  },
                },
              }}
              series={[
                {
                  name: "series1",
                  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                },
              ]}
              type="bar"
              height={350}
            />
          </div>
        </div>

        <div className="grid col-span-2">
          <div className="flex space-x-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Hot Side First Stage Air Temperature</p>
              <b>MAX 200</b>
              <div className="mt-2 text-5xl text-center">200</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-[820px] bg-white">
              <ReactApexChart
                options={{
                  chart: {
                    height: 150,
                    width: 20,
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
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Cold Side First Stage Air Temperature</p>
              <b>MAX 55</b>
              <div className="mt-2 text-5xl text-center">55</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-[820px] bg-white">
              <ReactApexChart
                options={{
                  chart: {
                    height: 150,
                    width: 20,
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
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Hot Side Second Stage Air Temperature</p>
              <b>MAX 175</b>
              <div className="mt-2 text-5xl text-center">100</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-[820px] bg-white">
              <ReactApexChart
                options={{
                  chart: {
                    height: 150,
                    width: 20,
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
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Cold Side Second Stage Air Temperature</p>
              <b>MAX 55</b>
              <div className="mt-2 text-5xl text-center">55</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-[820px] bg-white">
              <ReactApexChart
                options={{
                  chart: {
                    height: 150,
                    width: 20,
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
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Hot Side Third Stage Air Temperature</p>
              <b>MAX 165</b>
              <div className="mt-2 text-5xl text-center">150</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-[820px] bg-white">
              <ReactApexChart
                options={{
                  chart: {
                    height: 150,
                    width: 20,
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
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg h-1/2">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Cold Side Third Stage Air Temperature</p>
              <b>MAX 55</b>
              <div className="mt-2 text-5xl text-center">45</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg max-h-40 w-[820px] bg-white">
              <ReactApexChart
                options={{
                  chart: {
                    height: 150,
                    width: 20,
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
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
