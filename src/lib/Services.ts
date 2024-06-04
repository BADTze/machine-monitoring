import { HistorianType,HistorianData } from "@/types";
import db from "@/lib/db";

export const saveHistorianData = async (data: HistorianType[]): Promise<void> => {
  try {
    const query = `INSERT INTO compabc (tanggal, 
      hot_side_first_temp, cold_side_first_temp, 
      hot_side_second_temp, cold_side_second_temp, 
      hot_side_third_temp, cold_side_third_temp, 
      oil_pressure, water_inlet_pressure, 
      water_outlet_temp, 
      second_stage_cylinder_water_temp, 
      third_stage_cylinder_water_temp) VALUES ?`;
    const values = data.map(item => [
      item.tanggal,
      item.hot_side_first_temp,
      item.cold_side_first_temp,
      item.hot_side_second_temp,
      item.cold_side_second_temp,
      item.hot_side_third_temp,
      item.cold_side_third_temp,
      item.oil_pressure,
      item.water_inlet_pressure,
      item.water_outlet_temp,
      item.second_stage_cylinder_water_temp,
      item.third_stage_cylinder_water_temp
    ]);
    await db.query(query, [values]);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};

