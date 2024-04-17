import { NextApiResponse } from "next";
const callAPI = async () => {
	try {
        const res = await fetch('https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly');
        const data = await res.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
      }
};

export default callAPI