import { HistorianType,HistorianData,Data} from "@/types";
import type { NextApiRequest, NextApiResponse } from 'next';
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

// export const save_cold_first = async (data: HistorianType[]) => {
//   try {
//     const query = `INSERT INTO compabc (cold_side_first_temp) VALUES ?`;
//     const values = data.map((item) => [item.Value]);
//     await db.query(query, [values]);
//     console.log("Data inserted successfully");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     throw error;
//   }
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   if (req.method === 'POST') {
//     const {
//       tanggal,
//       hot_side_first_temp,
//       cold_side_first_temp,
//       hot_side_second_temp,
//       cold_side_second_temp,
//       hot_side_third_temp,
//       cold_side_third_temp,
//       oil_pressure,
//       water_inlet_pressure,
//       water_outlet_temp,
//       second_stage_cylinder_water_temp,
//       third_stage_cylinder_water_temp
//     } = req.body;

//     const query = `
//       INSERT INTO comp (
//         tanggal, hot_side_first_temp, cold_side_first_temp,
//         hot_side_second_temp, cold_side_second_temp,
//         hot_side_third_temp, cold_side_third_temp,
//         oil_pressure, water_inlet_pressure, water_outlet_temp,
//         second_stage_cylinder_water_temp, third_stage_cylinder_water_temp
//       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     try {
//       const [result] = await db.execute(query, [
//         tanggal, hot_side_first_temp, cold_side_first_temp,
//         hot_side_second_temp, cold_side_second_temp,
//         hot_side_third_temp, cold_side_third_temp,
//         oil_pressure, water_inlet_pressure, water_outlet_temp,
//         second_stage_cylinder_water_temp, third_stage_cylinder_water_temp
//       ]);

//       res.status(200).json({ message: 'Data inserted successfully' });
//     } catch (error) {
//       console.error('Error inserting data:', error);
//       res.status(500).json({ message: 'Error inserting data', error: (error as Error).message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }
// }
