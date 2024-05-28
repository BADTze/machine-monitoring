import db from "./db";

export type HistorianData = {
  DateTime: string;
  Value: number;
};

export const saveDataToDB = async (data: HistorianData[]) => {
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
