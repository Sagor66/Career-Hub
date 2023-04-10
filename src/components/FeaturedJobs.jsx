import React from "react";
import Job from "./Job";

const FeaturedJobs = ({ jobsData }) => {
  return (
    <div>
      <div>
        <div className="max-w-[1600px] mx-auto mt-32">
          <div className="text-center mb-9">
            <h2 className="text-5xl font-bold mb-4">Featured Jobs</h2>
            <p className="text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {jobsData.map((job) => (
              <Job job={job}></Job>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
