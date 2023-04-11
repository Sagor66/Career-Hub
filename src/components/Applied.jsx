import React from "react";
import FeaturedJobs from "./FeaturedJobs";
import Job from "./Job";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Applied = ({ appliedJobsKeys, jobsData }) => {
  let arr = [];

  for (const id of appliedJobsKeys) {
    const newArr = jobsData.find((job) => job.id === parseInt(id));
    arr.push(newArr);
  }

  return (
    <div>
      <div>
        <div className="max-w-[1600px] mx-auto mt-32">
          <div className="grid grid-cols-1 gap-10">
            {arr.map((job) => (
              <div className="flex items-center justify-between border-2 rounded-md p-8">
                <div className="flex items-center gap-10">
                  <div className="bg-gray-100 p-16">
                    <img
                      className="max-w-[140px] mb-6"
                      src={job.company_logo}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {job.job_title}
                    </h4>
                    <p className="text-gray-500 mb-4">{job.company_name}</p>
                    <div className="flex gap-6 mb-4">
                      <div className="font-medium border-2 border-sky-400 px-4 py-1 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                        {job.job_type[0]}
                      </div>
                      <div className="font-medium border-2 border-sky-400 px-4 py-1 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                        {job.job_type[1]}
                      </div>
                    </div>
                    <div className="flex gap-10 mb-6">
                      <p>
                        <FontAwesomeIcon
                          className="text-sky-400 mr-2"
                          icon={faLocationDot}
                        />
                        {job.contact_info.address}
                      </p>
                      <p>
                        <FontAwesomeIcon
                          className="text-sky-400 mr-2"
                          icon={faDollarSign}
                        />
                        {job.salary}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to={`/details/${job.id}`}>
                    <button className="px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-md hover:from-sky-400 hover:to-blue-500">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applied;
