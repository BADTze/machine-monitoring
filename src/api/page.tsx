import { Thing } from "@/types";

const TEST_API = "https://jsonplaceholder.typicode.com/users";
async function Get(): Promise<Thing[]> {
    try {
      const res = await fetch(TEST_API);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const posts: Thing[] = await res.json();
      return posts;
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Mengembalikan array kosong jika terjadi kesalahan
    }
  }