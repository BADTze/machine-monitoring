import { Nilai } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function Get(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const res = await fetch('https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly');
//     const data:Nilai[] = await res.json() as Nilai[];
//     console.log(data)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// }
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}