import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Job = ({ job }) => {
  const {
    company_logo,
    job_title,
    company_name,
    job_type,
    salary,
    contact_info,
  } = job;
  return (
    <div className="max-w-3xl border-2 border-sky-100 px-10 py-6 rounded-md mx-a">
      <img className="max-w-[270px] mb-6" src={company_logo} alt="" />
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{job_title}</h3>
      <p className="text-gray-500 mb-4">{company_name}</p>
      <div className="flex gap-6 mb-4">
        <div className="font-medium border-2 border-sky-400 px-4 py-1 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
          {job_type[0]}
        </div>
        <div className="font-medium border-2 border-sky-400 px-4 py-1 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
          {job_type[1]}
        </div>
      </div>
      <div className="flex gap-10 mb-6">
        <p>
          <FontAwesomeIcon className="text-sky-400 mr-2" icon={faLocationDot} />
          {contact_info.address}
        </p>
        <p>
          <FontAwesomeIcon className="text-sky-400 mr-2" icon={faDollarSign} />
          {salary}
        </p>
      </div>
      <button className="px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-md hover:from-sky-400 hover:to-blue-500">View Details</button>
    </div>
  );
};

export default Job;
