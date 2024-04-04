import React from "react";
import { Thing } from "@/types";
import Link from "next/link";
import ReactApexChart from "react-apexcharts";
import { NextResponse } from "next/server";
import { promises } from "fs";
import dynamic from 'next/dynamic';

export default function PageTest() {
 
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

  return (
    <div>
      <Link className="max-w-sm" href="/">
        <h3 className="text-xl font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          &lt;- Kembali
        </h3>
      </Link>
      <div className="flex space-x-2 h-40 rounded-lg ">
        <div className=" flex-col w-40 h-40 rounded-lg p-2 border-2 bg-white">
          <p className="text-xs">Hot Side First Stage Air Temperature</p>
          <b>Max 200</b>
          <div className="mt-2 text-5xl text-center">200</div>
          <div className="mt-2">Celcius</div>
        </div>

        <div className="border-2 rounded-lg w-[820px] bg-white">
         {/* <ApexCharts/> */}
        </div>
      </div>
      {/* <p>{posts[9].username}</p> */}
    </div>
  );
}
