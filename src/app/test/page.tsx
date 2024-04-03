import React from "react";
import { Thing } from "@/types";
import Link from "next/link";
import ReactApexChart from "react-apexcharts";

const TEST_API = "https://jsonplaceholder.typicode.com/users";

const page = async () => {
  const res = await fetch(TEST_API);
  const posts: Thing[] = await res.json();
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
                    data: [100, 40, 30, 21, 42, 10, 100],
                  },
                ]}
                type="area"
                height={150}
              />
            </div>
          </div>
      <p>
        {posts[9].username}
      </p>
    </div>
  );
};

export default page;
