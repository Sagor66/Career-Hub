import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-7">
      <h3 className="text-3xl font-bold text-gray-800">
        <FontAwesomeIcon
          className="text-sky-500 mr-3"
          icon={faMagnifyingGlass}
        />
        Job
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
          -Search
        </span>
      </h3>
      <div className="flex gap-8 text-gray-600 font-medium">
        <p>Statistics</p>
        <p>Applied Jobs</p>
        <p>Blog</p>
      </div>
      <div>
        <button className="px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-md hover:from-sky-400 hover:to-blue-500">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
