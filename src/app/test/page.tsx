"use client";
import React, { useEffect, useState } from "react";
import { Thing } from "@/types";
import Link from "next/link";
import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";


export default function PageTest() {
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly")
    .then(res=>res.json())
    .then(json=>{
      const {data} = json
      // setChartData({
      //   options:{
      //     chart:{
      //       id:"area"
      //     },
      //     xaxis:{
      //       categories:[1980,]
      //     }
      //   },
      //   series:[
      //     {

      //     }
      //   ]
      // })
    })
  }, []);

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
          {typeof window !== "undefined" && (
            <ReactApexChart

            />
          )}
        </div>
      </div>
    </div>
  );
}