import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const marksArray = [
    {
      name: 'Assignment 1',
      marks: 60
    },
    {
      name: 'Assignment 2',
      marks: 60
    },
    {
      name: 'Assignment 3',
      marks: 60
    },
    {
      name: 'Assignment 4',
      marks: 58
    },
    {
      name: 'Assignment 5',
      marks: 60
    },
    {
      name: 'Assignment 6',
      marks: 57
    },
    {
      name: 'Assignment 7',
      marks: 59
    },
    {
      name: 'Assignment 8',
      marks: 60
    }
  ]

  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-blue-50">
        <div className="max-w-[1600px] min-h-[300px] mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 text-center pt-28">
            Statistics
          </h1>
        </div>
      </div>
      <div className="max-w-[1600px] my-32 mx-auto">
        <AreaChart
          width={1600}
          height={400}
          data={marksArray}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="blue" fill="skyblue" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
