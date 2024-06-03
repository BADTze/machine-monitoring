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
  tanggal: any;
  TagName: string;
  DateTime: string;
  Value: number;
};

export type HistorianType = {
  tanggal: string;
  hot_side_first_temp: number | null;
  cold_side_first_temp: number | null;
  hot_side_second_temp: number | null;
  cold_side_second_temp: number | null;
  hot_side_third_temp: number | null;
  cold_side_third_temp: number | null;
  oil_pressure: number | null;
  water_inlet_pressure: number | null;
  water_outlet_temp: number | null;
  second_stage_cylinder_water_temp: number | null;
  third_stage_cylinder_water_temp: number | null;
};

export type Data = {
  message: string;
  error?: string;
};
