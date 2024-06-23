import { useEffect, useState } from "react";

interface ContributionData {
  date: Date;
  contributions: number;
}

const mockData: ContributionData[] = (() => {
  const data: ContributionData[] = [];
  for (let i = 0; i < 40; i++) {
    data.push({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
      contributions: Math.floor(Math.random() * 10),
    });
  }
  return data.reverse();
})();

const getColor = (contributions: number) => {
  if (contributions >= 7) return "bg-green-500";
  if (contributions >= 4) return "bg-green-300";
  if (contributions >= 1) return "bg-green-100";
  return "bg-gray-300";
};

const Github = () => {
  const [data, setData] = useState<ContributionData[]>([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  const columns = 7;

  return (
    <div className="w-full h-full bg-github rounded-3xl p-5 flex items-center justify-center">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: "0.5rem",
        }}
      >
        {data.map((day, index) => (
          <div
            key={index}
            className={`w-6 h-6 ${getColor(day.contributions)} rounded`}
            title={`${day.date.toDateString()}: ${
              day.contributions
            } contributions`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Github;
