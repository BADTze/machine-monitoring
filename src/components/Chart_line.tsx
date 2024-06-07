// import React from 'react';
// import ApexCharts from 'react-apexcharts';

// interface Data {
//   x: string;
//   y: number;
// }

// interface ChartLineProps {
//   items: Data[];
// }

// const ChartLine: React.FC<ChartLineProps> = ({ items }) => {
//   const series = [{
//     name: 'Temperature',
//     data: items.map(item => ({ x: new Date(item.x), y: item.y })),
//   }];

//   const options = {
//     chart: {
//       type: 'line',
//     },
//     xaxis: {
//       type: 'datetime',
//     },
//     yaxis: {
//       title: {
//         text: 'Temperature',
//       },
//     },
//   };

//   return (
//     <div>
//       <ApexCharts option={options} series={series} type="line" height={350} />
//     </div>
//   );
// };

// export default ChartLine;
