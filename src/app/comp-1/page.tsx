import Link from "next/link";
import { Data, Isi, Nilai } from "@/types";
import { ChartBar } from "@/components/Chartbar";
import { ChartLine } from "@/components/Chartline";
import { useEffect, useState } from "react";
import { NextApiResponse } from "next";

export const revalidate = 0;

export default async function AreachartPage() {
  // const [latestData, setLatestData] = useState<any | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/api/get-data") 
  //       setLatestData(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);

  const response = await fetch("http://localhost:3000/api/db-data");
  let chartdata = await response.json();
  const hs_first: Nilai[] = chartdata["hot_side_first_temp"];
  const cs_first: Nilai[] = chartdata["cold_side_first_temp"];
  // const hs_second: Nilai[] = chartdata["hot_side_second_temp"];
  // const cs_second: Nilai[] = chartdata["cold_side_second_temp"];
  // const hs_third: Nilai[] = chartdata["hot_side_third_temp"];
  // const cs_third: Nilai[] = chartdata["cold_side_third_temp"];
  // const oil_press: Nilai[] = chartdata["oil_pressure"];
  // const water_in_press: Nilai[] = chartdata["water_inlet_pressure"];
  // const water_out_temp: Nilai[] = chartdata["water_outlet_temp"];
  // const scnd_cylinder: Nilai[] = chartdata["second_stage_cylinder_water_temp"];
  // const thrd_cylinder: Nilai[] = chartdata["third_stage_cylinder_water_temp"];

  const respon = await fetch(
    "https://66270e71b625bf088c073b29.mockapi.io/api/endpoint/DownTime"
  );
  const res: Isi[] = await respon.json();

  return (
    <div className="px-3 bg-cyan-300 w-full h-full">
      <header className="flex justify-between h-16 p-2">
        <Link className="max-w-sm" href="/">
          <h3 className="text-xl font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            &lt;- Kembali
          </h3>
        </Link>
        <div className="bg-white rounded-sm">{/* <SelectLabels/> */}</div>
      </header>

      <div className=" grid grid-cols-3 gap-3 h-full">
        <div className="col-span-1 rounded-lg space-y-2">
          <div className=" relative rounded-lg border-2 object-fit">
            <img className="rounded-lg" src="kompresor-gas.jpg" />
            <div className="absolute truncate bottom-2 left-2 text-2xl border p-1 text-white bg-green-400 w-1/3 h-10">
              Load: 90%
            </div>
          </div>
          <div className="bg-green-600 shadow-lg text-white text-4xl text-center p-5 h-20">
            Running
          </div>
          <div className="h-17 border-2 shadow-lg p-2 text-2xl bg-white">
            <h2>Running Hours</h2>
            <div className="text-5xl text-center mt-5">3000</div>
          </div>
          <div className="h-17 border-2 shadow-lg p-2 text-2xl bg-white">
            <h2>Running Hours (Period)</h2>
            <div className="text-5xl text-center mt-5">3000</div>
          </div>
          <div className="h-17 border-2 shadow-lg p-2 text-2xl bg-white">
            <h2>Down Time (Minute)</h2>
            <div className="text-5xl text-center mt-5">30</div>
          </div>

          <div className="p-2 border-2 text-2xl bg-white shadow-lg">
            <h2>Maintenance</h2>
            <div className="flex justify-around mt-8">
              <div className="text-green-600 text-2xl">PM = 3 </div>
              <div className="text-yellow-400 text-2xl">CM = 5</div>
              <div className="text-red-500 text-2xl">EM = 6</div>
            </div>
          </div>

          <div className="p-2 text-2xl border-2 rounded-lg bg-white shadow-lg h-96">
            <div>Down Time:</div>
            <ChartBar data={res} />
          </div>
          <div className="h-[500px] text-2xl border-2 bg-white p-2 shadow-lg rounded-lg">
            Maintenance List:
          </div>
        </div>

        <div className="grid grid-rows-11 space-y-2">
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Hot Side First Stage Air Temperature</p>
              <b>Max 200</b>
              <div className="text-5xl text-center"></div>
              <div>Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={hs_first} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Cold Side First Stage Air Temperature</p>
              <b>Max 55</b>
              <div className="text-5xl text-center">40</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={cs_first} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Hot Side Second Stage Air Temperature</p>
              <b>Max 175</b>
              <div className="text-5xl text-center">100</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={hs_second} /> */}
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Cold Side Second Stage Air Temperature</p>
              <b>Max 55</b>
              <div className="text-5xl text-center">45</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={cs_second} /> */}
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Hot Side Third Stage Air Temperature</p>
              <b>Max 165</b>
              <div className="text-5xl text-center">150</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={hs_third} /> */}
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Cold Side Third Stage Air Temperature</p>
              <b>Max 55</b>
              <div className="text-5xl text-center">55</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={cs_third} /> */}
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Oil Pressure Compressor</p>
              <b>Max 1 Bar</b>
              <div className="text-5xl text-center">0</div>
              <div className="">Bar</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={oil_press} /> */}
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Water Inlet Pressure</p>
              <b>Max 4 Min 2</b>
              <div className="text-5xl text-center">3</div>
              <div className="">Bar</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={water_in_press} /> */}
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Water Outlet Temperature</p>
              <b>Max 55</b>
              <div className="text-5xl text-center">46</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={water_out_temp} /> */}
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">2nd Stage Cylinder Water Temperature</p>
              <b>Max 62</b>
              <div className="text-5xl text-center">50</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={scnd_cylinder} /> */}
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">3rd Stage Cylinder Water Temperature</p>
              <b>Max 62</b>
              <div className="text-5xl text-center">20</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              {/* <ChartLine items={thrd_cylinder} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
