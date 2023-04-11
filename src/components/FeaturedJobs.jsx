import React, { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = ({ jobsData }) => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const partialData = jobsData.slice(0, 4);
    setData(partialData);
  }, []);

  const handleSeeAllJobs = () => {
    setData(jobsData);
    setActive(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="max-w-[1600px] mx-auto mt-32">
          <div className="text-center mb-9">
            <h2 className="text-5xl font-bold mb-4">Featured Jobs</h2>
            <p className="text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data.map((job) => (
              <Job key={job.id} job={job}></Job>
            ))}
          </div>
        </div>
        {active && (
          <button
            onClick={handleSeeAllJobs}
            className="px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-md hover:from-sky-400 hover:to-blue-500 mt-12"
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
