import db from "@/lib/db";

type HistorianData = {
  DateTime: string;
  Value: number;
};

export const saveDataToDB = async (data: HistorianData[]) => {
  try {
    const query = `INSERT INTO comp (DateTime, Value) VALUES ?`;
    const values = data.map(item => [item.DateTime, item.Value]);
    
    await db.query(query, [values]);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
    throw error;
  }
};
