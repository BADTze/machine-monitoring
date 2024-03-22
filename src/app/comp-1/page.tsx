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
} from "react";

const chartdata = [
  {
    date: "Jan 23",
    Running: 167,
  },
  {
    date: "Feb 23",
    Running: 125,
  },
  {
    date: "Mar 23",
    Running: 156,
  },
  {
    date: "Apr 23",
    Running: 165,
  },
  {
    date: "May 23",
    Running: 153,
  },
  {
    date: "Jun 23",
    Running: 124,
  },
];

export default function Areachart() {
  const customTooltip = (props: { payload: any; active: any }) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map(
          (
            category: {
              color: any;
              dataKey: string;
              value: string;
            },
            idx: Key | null | undefined
          ) => (
            <div key={idx} className="flex flex-1 space-x-2.5">
              <div
                className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
              />
              <div className="space-y-1">
                <p className="text-tremor-content">{category.dataKey}</p>
                <p className="font-medium text-tremor-content-emphasis">
                  {category.value} bpm
                </p>
              </div>
            </div>
          )
        )}
      </div>
    );
  };
  return (
    <div className="px-3">
      <header className="flex justify-between mt-4">
        <Link className="max-w-sm" href="/">
          <h3 className="text-lg ml-5 font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            &lt;- Kembali
          </h3>
        </Link>
        <DatePicker className="max-w-sm" />
      </header>
      <div className="mt-12">
        <div className="flex">
          <div className="rounded-lg border w-40">
            <h1>Test</h1>
          </div>
          <div className="rounded-lg border w-1/2">
            <AreaChart
              className="h-40 w-auto"
              data={chartdata}
              index="date"
              categories={["Running"]}
              colors={["blue"]}
              yAxisWidth={30}
              customTooltip={customTooltip}
            />
          </div>
        </div>
        <div className="flex ">
          <div className="rounded-lg border w-40">
            <h1>Test</h1>
          </div>
          <div className="rounded-lg border w-1/2">
            <AreaChart
              className="h-40 w-auto"
              data={chartdata}
              index="date"
              categories={["Running"]}
              colors={["blue"]}
              yAxisWidth={30}
              customTooltip={customTooltip}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
