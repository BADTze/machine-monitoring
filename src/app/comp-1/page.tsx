import Link from "next/link";
import { DataType, Isi, Nilai } from "@/types";
import { ChartBar } from "@/components/Chartbar";
import { ChartLine } from "@/components/Chartline";
export const revalidate = 0;

async function fetchData() {
  try {
    const res = await fetch("http://localhost:3000/api/db-data");
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function AreachartPage() {
  const data: {
    hot_side_first_temp: DataType[];
    cold_side_first_temp: DataType[];
    hot_side_second_temp: DataType[];
    cold_side_second_temp: DataType[];
    hot_side_third_temp: DataType[];
    cold_side_third_temp: DataType[];
    oil_pressure: DataType[];
    water_inlet_pressure: DataType[];
    water_outlet_temp: DataType[];
    second_stage_cylinder_water_temp: DataType[];
    third_stage_cylinder_water_temp: DataType[];
  } | null = await fetchData();

  if (!data) {
    return (
      <div className="text-red-500">
        Error fetching data. Please try again later.
      </div>
    );
  }

  const hotSideData1 = data.hot_side_first_temp;
  const coldSideData1 = data.cold_side_first_temp;
  const hotSideData2 = data.hot_side_second_temp;
  const coldSideData2 = data.cold_side_second_temp;
  const hotSideData3 = data.hot_side_third_temp;
  const coldSideData3 = data.cold_side_third_temp;
  const oil_press_data = data.oil_pressure;
  const water_in_data = data.water_inlet_pressure;
  const water_out_data = data.water_outlet_temp;
  const scnd_cilynder_data = data.second_stage_cylinder_water_temp;
  const thrd_cylinder_data = data.third_stage_cylinder_water_temp;

  const hs_first_y = hotSideData1.length
    ? hotSideData1[hotSideData1.length - 1].y
    : "N/A";
  const cs_first_y = coldSideData1.length
    ? coldSideData1[coldSideData1.length - 1].y
    : "N/A";
  const hs_scnd_y = hotSideData2.length
    ? hotSideData2[hotSideData2.length - 1].y
    : "N/A";
  const cs_scnd_y = coldSideData2.length
    ? coldSideData2[coldSideData2.length - 1].y
    : "N/A";
  const hs_thrd_y = hotSideData3.length
    ? hotSideData3[hotSideData3.length - 1].y
    : "N/A";
  const cs_thrd_y = coldSideData3.length
    ? coldSideData3[coldSideData3.length - 1].y
    : "N/A";
  const oil_y = oil_press_data.length
    ? oil_press_data[oil_press_data.length - 1].y
    : "N/A";
  const water_in_y = water_in_data.length
    ? water_in_data[water_in_data.length - 1].y
    : "N/A";
  const water_out_y = water_out_data.length
    ? water_out_data[water_out_data.length - 1].y
    : "N/A";
  const scnd_cylinder_y = scnd_cilynder_data.length
    ? scnd_cilynder_data[scnd_cilynder_data.length - 1].y
    : "N/A";
  const thrd_cylinder_y = thrd_cylinder_data.length
    ? thrd_cylinder_data[thrd_cylinder_data.length - 1].y
    : "N/A";

  const response = await fetch("http://localhost:3000/api/db-data");
  let chartdata = await response.json();
  const hs_first: Nilai[] = chartdata["hot_side_first_temp"];
  const cs_first: Nilai[] = chartdata["cold_side_first_temp"];
  const hs_second: Nilai[] = chartdata["hot_side_second_temp"];
  const cs_second: Nilai[] = chartdata["cold_side_second_temp"];
  const hs_third: Nilai[] = chartdata["hot_side_third_temp"];
  const cs_third: Nilai[] = chartdata["cold_side_third_temp"];
  const oil_press: Nilai[] = chartdata["oil_pressure"];
  const water_in_press: Nilai[] = chartdata["water_inlet_pressure"];
  const water_out_temp: Nilai[] = chartdata["water_outlet_temp"];
  const scnd_cylinder: Nilai[] = chartdata["second_stage_cylinder_water_temp"];
  const thrd_cylinder: Nilai[] = chartdata["third_stage_cylinder_water_temp"];

  const respon = await fetch(
    "https://66270e71b625bf088c073b29.mockapi.io/api/endpoint/DownTime"
  );
  const res: Isi[] = await respon.json();

  return (
    <div className="px-3 bg-cyan-300 mb-0">
      <header className="flex justify-between h-16 p-2">
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
              <div className="text-5xl text-center">{hs_first_y}</div>
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
              <div className="text-5xl text-center">{cs_first_y}</div>
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
              <div className="text-5xl text-center">{hs_scnd_y}</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={hs_second} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Cold Side Second Stage Air Temperature</p>
              <b>Max 55</b>
              <div className="text-5xl text-center">{cs_scnd_y}</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={cs_second} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Hot Side Third Stage Air Temperature</p>
              <b>Max 165</b>
              <div className="text-5xl text-center">{hs_thrd_y}</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={hs_third} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Cold Side Third Stage Air Temperature</p>
              <b>Max 55</b>
              <div className="text-5xl text-center">{cs_thrd_y}</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={cs_third} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Oil Pressure Compressor</p>
              <b>Max 1 Bar</b>
              <div className="text-5xl text-center">{oil_y}</div>
              <div className="">Bar</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={oil_press} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Water Inlet Pressure</p>
              <b>Max 4 Min 2</b>
              <div className="text-5xl text-center">{water_in_y}</div>
              <div className="">Bar</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={water_in_press} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">Water Outlet Temperature</p>
              <b>Max 55</b>
              <div className="text-5xl text-center">{water_out_y}</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={water_out_temp} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">2nd Stage Cylinder Water Temperature</p>
              <b>Max 62</b>
              <div className="text-5xl text-center">{scnd_cylinder_y}</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={scnd_cylinder} />
            </div>
          </div>
          <div className="flex space-x-2 h-48 rounded-lg ">
            <div className=" flex-col space-y-4 w-40 h-48 rounded-lg p-4 border-2 bg-white">
              <p className="text-xs">3rd Stage Cylinder Water Temperature</p>
              <b>Max 62</b>
              <div className="text-5xl text-center">{thrd_cylinder_y}</div>
              <div className="">Celcius</div>
            </div>

            <div className="border-2 rounded-lg w-[820px] bg-white">
              <ChartLine items={thrd_cylinder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
