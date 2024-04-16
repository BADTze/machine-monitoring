import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

// export const POST = async(req:NextApiRequest, res:NextApiResponse){
//     try {
//         console.log("alsjdpaijsdpiaj")
//     } catch (err) {
//         return NextResponse.json({message:"Data Tidak Ditemukan"})
//     }
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}