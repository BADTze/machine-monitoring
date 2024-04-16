import { Thing } from "@/types";
import fetch from "node-fetch";

// const TEST_API = "https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly";
// async function Get(): Promise<Thing[]> {
//     try {
//       const res = await fetch(TEST_API);
//       if (!res.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const posts: Thing[] = await res.json();
//       return posts;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return []; 
//     }
// }
// pages/api/yearly.tsx

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
