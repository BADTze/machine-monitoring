// interface CardProps {
//   value: string;
// }

const Card = ({children}:{children:React.ReactNode})=>{
  return (
    <div className="flex my-4">
      {/* Card kiri dengan angka */}
      <div className="w-1/2 p-4 border border-gray-400 rounded-l">
        <h2 className="text-lg font-semibold">Test</h2>
      </div>
      {/* Card kanan dengan chart */}
      <div className="w-1/2 p-4 border border-gray-400 rounded-r">
        <h2>Test</h2>
        {/* <AreaChart value={value} /> */}
      </div>
    </div>
  );
};

export default Card;
