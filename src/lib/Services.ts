import { HistorianType,HistorianData } from "@/types";
import db from "@/lib/db";

export const save_hot_first = async (data: HistorianData[]) => {
  try {
    const query = `INSERT INTO compabc (tanggal, hot_side_first_temp) VALUES ?`;
    const values = data.map((item) => [item.DateTime, item.Value]);
    await db.query(query, [values]);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};
export const save_cold_first = async (data: HistorianType[]) => {
  try {
    const query = `INSERT INTO compabc (cold_side_first_temp) VALUES ?`;
    const values = data.map((item) => [item.Value]);
    await db.query(query, [values]);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};
