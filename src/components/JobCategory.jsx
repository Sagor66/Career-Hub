import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faLightbulb,
  faChartSimple,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
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
        {categories.map((category) => (
          <div className="max-w-xs bg-gradient-to-r from-sky-50 to-blue-100 px-16 py-12 rounded-md">
            <img className="bg-blue-100 px-5 py-3 rounded-md mb-6" src={category.logo} alt="" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              {category.name}
            </h4>
            <p className="text-gray-500">{category.jobs_available} Jobs Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
