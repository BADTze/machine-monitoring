export type Thing = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Nilai = {
  x: number;
  y: number;
};

export type Isi = {
  id: string;
  Bulan: string;
  Total: number;
};

export type HistorianData = {
  DateTime: string;
  Value: number;
};

export type HistorianType = {
  tanggal: string;
  hot_side_first_temp: number;
  cold_side_first_temp: number;
  hot_side_second_temp: number;
  cold_side_second_temp: number;
  hot_side_third_temp: number;
  cold_side_third_temp: number;
};

export type Data = {
  message: string;
  error?: string;
};
