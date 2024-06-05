import db from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cd = await db.getConnection();
    const query = "select * from compabc";
    const [rows] = await cd.execute(query);
    cd.release();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}

function transformData(data: any[]): {
  [key: number]: { [key: string]: { [key: string]: string } };
} {
  const transformedData: {
    [key: number]: { [key: string]: { [key: string]: string } };
  } = {};

  for (const item of data) {
    const id = item.id;
    const timestamp = formatDate(item.tanggal);

    if (!transformedData[id]) {
      transformedData[id] = {};
    }

    const categoryData = transformedData[id];

    for (const key in item) {
      if (key !== "id" && key !== "tanggal") {
        const category = key.split("_")[0];
        if (!categoryData[category]) {
          categoryData[category] = {};
        }
        categoryData[category][timestamp] = item[key];
      }
    }
  }

  return transformedData;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
