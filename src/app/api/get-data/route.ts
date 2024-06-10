import { getHistorianData } from "@/lib/historian-fetcher";
import { HistorianData, HistorianType } from "@/types";
import { saveHistorianData } from "@/lib/services";
import { formatData } from "@/lib/format-data";

export const revalidate = 0;

export const GET = async () => {
  const query1 = `SET
  NOCOUNT ON DECLARE @StartDate DateTime DECLARE @EndDate DateTime
SET
  @StartDate = GetDate()
SET
  @EndDate = GetDate()
SET
  NOCOUNT OFF
SELECT
  temp.TagName,
  DateTime = convert(nvarchar, DateTime, 21),
  Value
From
  (
      SELECT
          *
      FROM
          [Runtime].[dbo].[History]
      WHERE
          History.TagName IN (
            '53_hot_side_first_stage_air_temp',
            '53_cold_side_first_stage_air_temp',
            '53_hot_side_second_stage_air_temp',
            '53_cold_side_second_stage_air_temp',
            '53_hot_side_third_stage_air_temp',
            '53_cold_side_third_stage_air_temp',
            '53_oil_pressure_comp',
            '53_water_inlet_pressure',
            '53_water_outlet_temp',
            '53_second_stage_cylinder_water_temp',
            '53_third_stage_cylinder_water_temp'
          )
          AND wwRetrievalMode = 'Cyclic'
          AND wwCycleCount = 100
          AND wwQualityRule = 'Extended'
          AND wwVersion = 'Latest'
          AND DateTime >= @StartDate
          AND DateTime <= @EndDate
  ) temp
  LEFT JOIN [Runtime].[dbo].[AnalogTag] ON AnalogTag.TagName = temp.TagName
  LEFT JOIN [Runtime].[dbo].[EngineeringUnit] ON AnalogTag.EUKey = EngineeringUnit.EUKey
  LEFT JOIN [Runtime].[dbo].[QualityMap] ON QualityMap.QualityDetail = temp.QualityDetail
WHERE
  temp.StartDateTime >= @StartDate`;

  const result = await getHistorianData<HistorianData>({
    query: query1,
  });

  const formattedData = formatData(result);
  console.log("Formatted data to be saved:", formattedData);

  let temp: any = [];
  let grup: any = {};

  for (let item of result) {
    let index = temp.findIndex((x: any) => x == item.TagName);
    if (index >= 0) {
      grup[item.TagName] = { x: item.DateTime, y: item.Value };
    } else {
      temp.push(item.TagName);
      grup[item.TagName] = { x: item.DateTime, y: item.Value };
    }
  }
  const panggil = saveHistorianData(mappingdata(grup));

  return Response.json({
    data: grup
  });
};

const mappingdata = (data: any) => {
  const timestamp = Date.now();

  const sevenHoursInMilliseconds = 7 * 60 * 60 * 1000;
  const newDate = new Date(timestamp + sevenHoursInMilliseconds);
  const formattedDate = new Date(newDate)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const hasil: HistorianType[] = [
   {
      tanggal: formattedDate,
      hot_side_first_temp: data["53_hot_side_first_stage_air_temp"].y,
      cold_side_first_temp: data["53_cold_side_first_stage_air_temp"].y,
      hot_side_second_temp: data["53_hot_side_second_stage_air_temp"].y,
      cold_side_second_temp: data["53_cold_side_second_stage_air_temp"].y,
      hot_side_third_temp: data["53_hot_side_third_stage_air_temp"].y,
      cold_side_third_temp: data["53_cold_side_third_stage_air_temp"].y,
      oil_pressure: data["53_oil_pressure_comp"].y,
      water_inlet_pressure: data["53_water_inlet_pressure"].y,
      water_outlet_temp: data["53_water_outlet_temp"].y,
      second_stage_cylinder_water_temp:
        data["53_second_stage_cylinder_water_temp"].y,
      third_stage_cylinder_water_temp:
        data["53_third_stage_cylinder_water_temp"].y,
    }
  ];
  return hasil;
};
