import { getHistorianData } from "@/lib/historian-fetcher";
import { save_hot_first} from "@/lib/services";
import { HistorianType,HistorianData } from "@/types";

export const GET = async () => {
  const query1 = `SET
      NOCOUNT ON DECLARE @StartDate DateTime DECLARE @EndDate DateTime
    SET
      @StartDate = DateAdd(mi, -1, GetDate())
    SET
      @EndDate = GetDate()
    SET
      NOCOUNT OFF
    SELECT
      temp.TagName,
      DateTime = convert(nvarchar, DateTime, 21),
      Value,
      StartDateTime
    From
      (
          SELECT
              *
          FROM
              [Runtime].[dbo].[History]
          WHERE
              History.TagName IN ('53_hot_side_first_stage_air_temp')
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

  // const historianArgument: HistorianData[] = result.map((item) => {
  //   return {
  //     DateTime: item.DateTime,
  //     Value: item.Value,
  //   };
  // });

  // const hasil = await save_hot_first(historianArgument);

  return Response.json({
    data: result
  });
};
