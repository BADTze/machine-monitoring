import { checkConnection } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const isConnected = await checkConnection();

  if (!isConnected) {
    return res.status(500).json({ error: 'Failed to connect to database' });
  }

  res.status(200).json({ message: 'Successfully connected to the database' });
}


