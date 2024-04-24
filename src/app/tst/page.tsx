import { Isi, Nilai } from "@/types";
import React, { useEffect } from "react";
import { ChartLine } from "./_components/chart";
import { ChartBar } from "./_components/chartbar";
import Link from "next/link";

export default async function Page() {
  const response = await fetch(
    "https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly"
  );
  const responseJson: Nilai[] = await response.json();

  const respon = await fetch(
    "https://66270e71b625bf088c073b29.mockapi.io/api/endpoint/DownTime"
  );
  const res: Isi[] = await respon.json();

  return (
    <div className=" bg-cyan-300 px-3 w-full h-full">
      <header className="flex justify-between p-2">
        <Link className="max-w-sm" href="/">
          <h3 className="text-xl font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            &lt;- Kembali
          </h3>
        </Link>
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
            <ChartBar data={res}/>
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
              <ChartLine items={responseJson} />
              <h3>Min=50</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
