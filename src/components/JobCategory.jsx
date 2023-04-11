import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faLightbulb, faChartSimple, faMicrochip } from "@fortawesome/free-solid-svg-icons";

const JobCategory = () => {
  return (
    <div className="max-w-[1600px] mx-auto mt-32">
      <div className="text-center mb-9">
        <h2 className="text-5xl font-bold mb-4">Job Category List</h2>
        <p className="text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center md:justify-between items-center gap-10 ml-12 md:ml-0">
        <div className="max-w-xs bg-gradient-to-r from-sky-50 to-blue-100 px-16 py-12 rounded-md">
          <FontAwesomeIcon className="fa-2x text-blue-500 bg-blue-100 px-5 py-3 rounded-md mb-6" icon={faCalculator} />
          <h4 className="text-xl font-bold text-gray-800 mb-2">Account & Finance</h4>
          <p className="text-gray-500">300 Jobs Available</p>
        </div>
        <div className="max-w-xs bg-gradient-to-r from-sky-50 to-blue-100 px-16 py-12 rounded-md">
          <FontAwesomeIcon className="fa-2x text-blue-500 bg-blue-100 px-5 py-3 rounded-md mb-6" icon={faLightbulb} />
          <h4 className="text-xl font-bold text-gray-800 mb-2">Creative Design</h4>
          <p className="text-gray-500">100+ Jobs Available</p>
        </div>
        <div className="max-w-xs bg-gradient-to-r from-sky-50 to-blue-100 px-16 py-12 rounded-md">
          <FontAwesomeIcon className="fa-2x text-blue-500 bg-blue-100 px-5 py-3 rounded-md mb-6" icon={faChartSimple} />
          <h4 className="text-xl font-bold text-gray-800 mb-2">Marketing & Sales</h4>
          <p className="text-gray-500">150 Jobs Available</p>
        </div>
        <div className="max-w-xs bg-gradient-to-r from-sky-50 to-blue-100 px-16 py-12 rounded-md">
          <FontAwesomeIcon className="fa-2x text-blue-500 bg-blue-100 px-5 py-3 rounded-md mb-6" icon={faMicrochip} />
          <h4 className="text-xl font-bold text-gray-800 mb-2">Engineering Job</h4>
          <p className="text-gray-500">224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
