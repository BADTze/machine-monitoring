"use client";
import { AreaChart, Card, Title } from "@tremor/react";
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
    <main>
      <Link href="/">
        <h3 className="text-lg mt-4 ml-5 font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          &lt;- Kembali
        </h3>
      </Link>
      <div className="flex flex-col my-12 min min-w-full">
        <Card className="w-36 p-4 mx-5 border border-gray-400 rounded-l">Test</Card>
        <div className="w-1/2 border border-gray-400 rounded-xl col-span-2">
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
        <Card className="w-36 p-4 mx-5 border border-gray-400 rounded-l">Test</Card>
        <div className="w-1/2 border border-gray-400 rounded-xl col-span-2">
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
    </main>
  );
}
