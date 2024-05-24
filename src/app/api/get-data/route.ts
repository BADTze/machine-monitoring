import { getHistorianData } from "@/lib/historian-fetcher";

export const GET = async () => {
  const query = `SET
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

  const result = await getHistorianData({
    query: query,
  });

  return Response.json({
    data: result,
  });
};
