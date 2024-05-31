import { HistorianData, HistorianType } from "@/types";
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

export const saveHistorianData = async (data: HistorianType[]) => {
  try {
    const query = `INSERT INTO compabc_1 (tanggal, hot_side_first_temp, cold_side_first_temp, hot_side_second_temp, cold_side_second_temp, hot_side_third_temp, cold_side_third_temp) VALUES ?`;
    const values = data.map((item) => [
      item.tanggal,
      item.hot_side_first_temp,
      item.cold_side_first_temp,
      item.hot_side_second_temp,
      item.cold_side_second_temp,
      item.hot_side_third_temp,
      item.cold_side_third_temp,
    ]);
    await db.query(query, [values]);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};
