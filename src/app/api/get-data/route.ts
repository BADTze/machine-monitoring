import { getHistorianData } from "@/lib/historian-fetcher";
import { saveHistorianData } from "@/lib/services";
import { HistorianType,HistorianData } from "@/types";

export const GET = async () => {
  const query1 = `SET NOCOUNT ON
  DECLARE @StartDate DateTime
  DECLARE @EndDate DateTime
  SET @StartDate = DateAdd(mi,-5,GetDate())
  SET @EndDate = GetDate()
  SET NOCOUNT OFF
  SELECT temp.TagName ,DateTime ,Value From (
  SELECT  * 
   FROM History
   WHERE History.TagName IN (
    '53_cold_side_first_stage_air_temp', 
    '53_cold_side_second_stage_air_temp', 
    '53_cold_side_third_stage_air_temp', 
    '53_hot_side_first_stage_air_temp', 
    '53_hot_side_second_stage_air_temp', 
    '53_hot_side_third_stage_air_temp')
   AND wwRetrievalMode = 'Cyclic'
   AND wwCycleCount = 100
   AND wwQualityRule = 'Extended'
   AND wwVersion = 'Latest'
   AND DateTime >= @StartDate
   AND DateTime <= @EndDate) temp
  LEFT JOIN AnalogTag ON AnalogTag.TagName =temp.TagName
   WHERE temp.StartDateTime >= @StartDate`;

  const result = await getHistorianData<HistorianType>({
    query: query1,
  });

  // const Argumen: HistorianType[] = result.map((item) => {
  //   return {
  //     tanggal:item.tanggal,
  //     hot_side_first_temp: item.hot_side_first_temp,
  //     cold_side_first_temp: item.cold_side_first_temp,
  //     hot_side_second_temp: item.hot_side_second_temp,
  //     cold_side_second_temp: item.cold_side_second_temp,
  //     hot_side_third_temp: item.hot_side_third_temp,
  //     cold_side_third_temp: item.cold_side_third_temp
  //   };
  // });

  // const hasil = await saveHistorianData(Argumen);

  return Response.json({
    data: result,
  });
};
