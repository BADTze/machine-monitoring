import db from "@/lib/db";
import { NextResponse } from "next/server";
import moment from "@/lib/id-locale";

export async function Handler() {
  try {
    const cd = await db.getConnection();
    const query = "SELECT * FROM compabc";
    const [rows] = await cd.execute(query);
    cd.release();

    const rowsArray = Array.isArray(rows) ? rows : [];
    const formattedData = formatData(rowsArray);

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}

const formatData = (data: any[]) => {
  let formattedData: any = {};

  moment.locale('id')

  for (let item of data) {
    for (let key in item) {
      if (key !== "id" && key !== "tanggal") {
        if (!formattedData[key]) {
          formattedData[key] = [];
        } 
        formattedData[key].push({ x:item.tanggal, y: item[key] });
      }
    }
  }
  return formattedData;
};

export const GET = Handler;
