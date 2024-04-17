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
    <div className="px-3 bg-cyan-300 w-full h-full">
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
          <div className=" relative rounded-lg border-2 object-fit">
            <img className="rounded-lg" src="kompresor-gas.jpg" />
            <div className="absolute bottom-2 left-2 text-2xl border p-1 text-white bg-green-400 w-1/3 h-10">
              Load: 90%
            </div>
          </div>
          <div className="bg-green-600 shadow-lg text-white text-4xl text-center p-5 h-20">
            Running
          </div>
          <div className="h-17 border-2 shadow-lg p-2 bg-white">
            <h2>Running Hours</h2>
            <div className="text-5xl text-center mt-5">3000</div>
          </div>
          <div className="h-17 border-2 shadow-lg p-2 bg-white">
            <h2>Running Hours (Period)</h2>
            <div className="text-5xl text-center mt-5">3000</div>
          </div>
          <div className="h-17 border-2 shadow-lg p-2 bg-white">
            <h2>Down Time (Minute)</h2>
            <div className="text-5xl text-center mt-5">30</div>
          </div>

          <div className="p-2 border-2 bg-white shadow-lg">
            <h2>Maintenance</h2>
            <div className="flex justify-around mt-8">
              <div className="text-green-600 text-2xl">PM = 3 </div>
              <div className="text-yellow-400 text-2xl">CM = 5</div>
              <div className="text-red-500 text-2xl">EM = 6</div>
            </div>
          </div>

          <div className="p-2 border-2 rounded-lg bg-white shadow-lg h-96">
            <div>Down Time:</div>
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
                  data: [1, 2, 5, 4, 1, 3, 7, 0, 4, 2, 10, 0],
                },
              ]}
              type="bar"
              height={350}
            />
          </div>
          <div className="h-[500px] border-2 bg-white p-2 shadow-lg rounded-lg">
            Maintenance List:
          </div>
        </div>

        <div className="grid grid-rows-11 space-y-2">
          <div className="flex space-x-2 h-52 rounded-lg ">
            <div className=" flex-col w-40 h-52 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Hot Side First Stage Air Temperature</p>
              <b>Max 200</b>
              <div className="mt-9 text-5xl text-center">200</div>
              <div className="mt-5">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ReactApexChart
                options={{
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
                    name: "series 1",
                    data: [100, 40, 30, 21, 42, 10, 100],
                  },
                ]}
                type="area"
                height={160}
              />
              <h3>Min=50</h3>
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Cold Side First Stage Air Temperature</p>
              <b>Max 55</b>
              <div className="mt-2 text-5xl text-center">55</div>
              <div className="mt-2">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ReactApexChart
                options={{
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
                    data: [110, 40, 111, 51, 42, 109, 100],
                  },
                ]}
                
                type="area"
                height={150}
              />
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Hot Side Second Stage Air Temperature</p>
              <b>Max 175</b>
              <div className="mt-2 text-5xl text-center">100</div>
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
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Cold Side Second Stage Air Temperature</p>
              <b>Max 55</b>
              <div className="mt-2 text-5xl text-center">55</div>
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
                    data: [31, 40, 28, 108, 42, 109, 100],
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Hot Side Third Stage Air Temperature</p>
              <b>Max 165</b>
              <div className="mt-2 text-5xl text-center">150</div>
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
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Cold Side Third Stage Air Temperature</p>
              <b>Max 55</b>
              <div className="mt-2 text-5xl text-center">45</div>
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
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Oil Pressure Compressor</p>
              <b>Max 1 Bar</b>
              <div className="mt-2 text-5xl text-center">0</div>
              <div className="mt-4">Bar</div>
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
                    data: [31, 40, 28, 99, 42, 120, 10],
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Water Inlet Pressure</p>
              <b>Max 4 Min 2</b>
              <div className="mt-2 text-5xl text-center">3</div>
              <div className="mt-4">Bar</div>
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
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">Water Outlet Temperature</p>
              <b>Max 55</b>
              <div className="mt-2 text-5xl text-center">46</div>
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
          <div className="flex space-x-2 h-40 rounded-lg">
            <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
              <p className="text-xs">2nd Stage Cylinder Water Temperature</p>
              <b>Max 62</b>
              <div className="mt-2 text-5xl text-center">50</div>
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
                    data: [31, 40, 28, 51, 42, 109, 10],
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
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
                    data: [50, 40, 28, 51, 42, 60, 90],
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
