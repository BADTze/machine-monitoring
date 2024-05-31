export const formatData = (data: { TagName: string; DateTime: string; Value: number }[]) => {
    const formattedData: {
      tanggal: string;
      hot_side_first_temp: number | null;
      cold_side_first_temp: number | null;
      hot_side_second_temp: number | null;
      cold_side_second_temp: number | null;
      hot_side_third_temp: number | null;
      cold_side_third_temp: number | null;
    }[] = [];
  
    data.forEach((item) => {
      let row = formattedData.find(row => row.tanggal === item.DateTime);
      if (!row) {
        row = {
          tanggal: item.DateTime,
          hot_side_first_temp: null,
          cold_side_first_temp: null,
          hot_side_second_temp: null,
          cold_side_second_temp: null,
          hot_side_third_temp: null,
          cold_side_third_temp: null
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
      }
    });
  
    return formattedData;
  };
  