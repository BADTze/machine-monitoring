import { HistorianData, HistorianType } from '@/types';

export const formatData = (data: HistorianData[]): HistorianType[] => {
  const formattedData: HistorianType[] = [];

  data.forEach((item) => {
    let row = formattedData.find(row => row.tanggal === item.DateTime);
    if (!row) {
      row = {
        tanggal: item.DateTime,
        hot_side_first_temp: item.Value,
        cold_side_first_temp: item.Value,
        hot_side_second_temp: item.Value,
        cold_side_second_temp: item.Value,
        hot_side_third_temp: item.Value,
        cold_side_third_temp: item.Value,
        oil_pressure: item.Value,
        water_inlet_pressure: item.Value,
        water_outlet_temp: item.Value,
        second_stage_cylinder_water_temp: item.Value,
        third_stage_cylinder_water_temp: item.Value
      };

      formattedData.push(row);
    }
    switch (item.TagName) {
      case '53_hot_side_first_stage_air_temp':
        row.hot_side_first_temp = item.Value;
        break;
      case '53_cold_side_first_stage_air_temp':
        row.cold_side_first_temp = item.Value;
        break;
      case '53_hot_side_second_stage_air_temp':
        row.hot_side_second_temp = item.Value;
        break;
      case '53_cold_side_second_stage_air_temp':
        row.cold_side_second_temp = item.Value;
        break;
      case '53_hot_side_third_stage_air_temp':
        row.hot_side_third_temp = item.Value;
        break;
      case '53_cold_side_third_stage_air_temp':
        row.cold_side_third_temp = item.Value;
        break;
      case '53_oil_pressure_comp':
        row.oil_pressure = item.Value;
        break;
      case '53_water_inlet_pressure':
        row.water_inlet_pressure = item.Value;
        break;
      case '53_water_outlet_temp':
        row.water_outlet_temp = item.Value;
        break;
      case '53_second_stage_cylinder_water_temp':
        row.second_stage_cylinder_water_temp = item.Value;
        break;
      case '53_third_stage_cylinder_water_temp':
        row.third_stage_cylinder_water_temp = item.Value;
        break;
    }
  });
  
  console.log("Formatted Data Inside formatData function:", formattedData);

  return formattedData;
};
