export type Thing = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Nilai = {
  x: number | Date;
  y: number;
};

export type Data = {
  [key: string]: { x: string; y: number };
};
export type DataType = {
  x: string;
  y: string;
}

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
  hot_side_first_temp: number | 0;
  cold_side_first_temp: number | 0;
  hot_side_second_temp: number | 0;
  cold_side_second_temp: number | 0;
  hot_side_third_temp: number | 0;
  cold_side_third_temp: number | 0;
  oil_pressure: number | 0;
  water_inlet_pressure: number | 0;
  water_outlet_temp: number | 0;
  second_stage_cylinder_water_temp: number | 0;
  third_stage_cylinder_water_temp: number | 0;
};
