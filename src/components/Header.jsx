import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-sky-50">
      <nav className="flex flex-col md:flex-row justify-between items-center gap-10 pt-7 max-w-[1600px] mx-auto">
        <Link to="/">
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
        </Link>
        <div className="flex gap-8 text-gray-500 font-medium">
          <Link
            to="/statistics"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600"
          >
            Statistics
          </Link>
          <Link
            to="/applied"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600"
          >
            Applied Jobs
          </Link>
          <Link
            to="/blog"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600"
          >
            Blog
          </Link>
        </div>
        <div>
          <button className="px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-md hover:from-sky-400 hover:to-blue-500">
            Start Applying
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
