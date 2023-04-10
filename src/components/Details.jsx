import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faBriefcase,
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Details = ({ jobDetail }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    job_type,
    salary,
    contact_info,
    job_description,
    required_experience,
    required_skills,
    preferred_skills,
    how_to_apply,
  } = jobDetail;

  return (
    <div className="max-w-[1600px] mx-auto mt-32">
      <div className="flex justify-center gap-10">
        <div className="max-w-4xl text-gray-500">
          <img className="max-w-[270px] mx-auto mb-10" src={company_logo} alt="" />
          <p className="mb-6">
            <span className="font-bold text-gray-800">Job Description: </span>
            {job_description}
          </p>
          <div className="flex gap-20 mb-6">
            <h6>
              <span className="font-bold text-gray-800">Required Skills: </span>
              <ul>
                {required_skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </h6>
            <h6>
              <span className="font-bold text-gray-800">
                Preferred Skills:{" "}
              </span>
              <ul>
                {preferred_skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </h6>
          </div>
          <p className="mb-6">
            <span className="font-bold text-gray-800">Experience:</span>
            <br />
            {required_experience}
          </p>
          <p className="mb-6">
            <span className="font-bold text-gray-800">How to apply: </span>
            {how_to_apply}
          </p>
        </div>
        <div>
          <div className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-md p-6 mb-8">
            <h4 className="text-lg font-bold text-gray-800 border-b-2 border-white pb-6 mb-4">
              Job Details
            </h4>
            <p className="mb-2">
              <FontAwesomeIcon className="text-sky-400 mr-2" icon={faDollar} />
              <span className="font-semibold text-gray-800">Salary: </span>
              {salary}
            </p>
            <p className="border-b-2 border-white pb-6 mb-4">
              <FontAwesomeIcon
                className="text-sky-400 mr-2"
                icon={faBriefcase}
              />
              <span className="font-semibold text-gray-800">Job Title: </span>
              {job_title}
            </p>
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Contact Information
            </h4>
            <p className="mb-2">
              <FontAwesomeIcon className="text-sky-400 mr-2" icon={faPhone} />
              <span className="font-semibold text-gray-800">Phone: </span>
              {contact_info.phone}
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                className="text-sky-400 mr-2"
                icon={faEnvelope}
              />
              <span className="font-semibold text-gray-800">Email: </span>
              {contact_info.email}
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                className="text-sky-400 mr-2"
                icon={faLocationDot}
              />
              <span className="font-semibold text-gray-800">Address: </span>
              {contact_info.address}
            </p>
          </div>
          <button className="w-full px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-md hover:from-sky-400 hover:to-blue-500">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
