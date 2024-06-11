// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import moment from 'moment';


// const generateListOfWeeks = (year: string, month: string) => {
//   const weeks: { start: string; end: string }[] = [];

//   const firstDay = moment(`${year}-${month}-01`);
//   const lastDay = moment(firstDay).endOf('month');

//   const firstOfWeek = moment(firstDay).startOf('week');

//   while (firstOfWeek.isSameOrBefore(lastDay)) {
//     const start = firstOfWeek.format('YYYY-MM-DD');
//     const end = moment(firstOfWeek).endOf('week').format('YYYY-MM-DD');
//     weeks.push({ start, end });
//     firstOfWeek.add(1, 'week');
//   } 

//   return weeks;
// };

// const DashboardDateRangePicker = ({ buttonDisabled }: { buttonDisabled?: boolean }) => {
//   const { endDate, mode, setEndDate, setMode, setStartDate, startDate, year, setYear, month, setMonth } = useDashboardData();
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const weeks = generateListOfWeeks(year, month);
//   const [tempWeek, setTempWeek] = useState<string>(`${startDate}:${endDate}`);

//   const handleChangeDate = () => {
//     const currentSearch: Record<string, string> = {};

//     for (const iterator of searchParams.entries()) {
//       currentSearch[iterator[0]] = iterator[1];
//     }

//     if (mode === 'daily') {
//       currentSearch.startDate = startDate;
//       currentSearch.endDate = startDate;
//     }

//     if (mode === 'weekly') {
//       const [start, end] = tempWeek.split(':');
//       setStartDate(start);
//       setEndDate(end);
//       currentSearch.startDate = start;
//       currentSearch.endDate = end;
//     }

//     if (mode === 'monthly') {
//       const firstDay = moment(`${year}-${month}-01`).format('YYYY-MM-DD');
//       const lastDay = moment(firstDay).endOf('month').format('YYYY-MM-DD');
//       setStartDate(firstDay);
//       setEndDate(lastDay);
//       currentSearch.startDate = firstDay;
//       currentSearch.endDate = lastDay;
//     }

//     if (mode === 'yearly') {
//       const firstDay = moment(`${year}-01-01`).format('YYYY-MM-DD');
//       const lastDay = moment(firstDay).endOf('year').format('YYYY-MM-DD');
//       setStartDate(firstDay);
//       setEndDate(lastDay);
//       currentSearch.startDate = firstDay;
//       currentSearch.endDate = lastDay;
//     }

//     currentSearch.mode = mode;
//     navigate({ search: new URLSearchParams(currentSearch).toString() }, { replace: true });
//   };

//   return (
//     <Box display="flex" alignItems="center" gap={1}>
//       <TextField
//         disabled={buttonDisabled}
//         size="small"
//         id="mode"
//         label="Mode"
//         select
//         value={mode}
//         onChange={(e) => setMode(e.target.value as any)}
//       >
//         <MenuItem value="daily">Daily</MenuItem>
//         <MenuItem value="weekly">Weekly</MenuItem>
//         <MenuItem value="monthly">Monthly</MenuItem>
//         <MenuItem value="yearly">Yearly</MenuItem>
//         <MenuItem value="custom">Custom</MenuItem>
//       </TextField>
//       {(mode === 'daily' || mode === 'custom') && (
//         <TextField
//           size="small"
//           disabled={buttonDisabled}
//           id="startDate"
//           label="Start Date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           type="date"
//         />
//       )}
//       {mode === 'custom' && (
//         <TextField
//           disabled={buttonDisabled}
//           size="small"
//           id="endDate"
//           label="End Date"
//           value={startDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           type="date"
//         />
//       )}
//       {(mode === 'weekly' || mode === 'monthly' || mode === 'yearly') && (
//         <TextField
//           disabled={buttonDisabled}
//           size="small"
//           sx={{ width: 150 }}
//           id="year"
//           label="Year"
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//           select
//         >
//           {populateYears().map((year) => (
//             <MenuItem key={year} value={year}>
//               {year}
//             </MenuItem>
//           ))}
//         </TextField>
//       )}
//       {(mode === 'weekly' || mode === 'monthly') && (
//         <TextField
//           size="small"
//           disabled={buttonDisabled}
//           sx={{ width: 150 }}
//           id="month"
//           label="Month"
//           value={month}
//           onChange={(e) => setMonth(e.target.value)}
//           select
//         >
//           {months.map((month) => (
//             <MenuItem key={month.id} value={month.numeric}>
//               {month.char}
//             </MenuItem>
//           ))}
//         </TextField>
//       )}
//       {mode === 'weekly' && (
//         <TextField
//           disabled={buttonDisabled}
//           size="small"
//           id="weekOf"
//           sx={{ minWidth: 220 }}
//           label="Week of"
//           value={tempWeek}
//           onChange={(e) => setTempWeek(e.target.value)}
//           select
//         >
//           {weeks.map((week, index) => (
//             <MenuItem key={week.start} value={`${week.start}:${week.end}`}>
//               #{index + 1} {week.start} - {week.end}
//             </MenuItem>
//           ))}
//         </TextField>
//       )}
//       <Button variant="contained" color="primary" disabled={buttonDisabled} onClick={handleChangeDate}>
//         Change
//       </Button>
//     </Box>
//   );
// };
