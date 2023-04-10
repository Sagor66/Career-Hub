import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center pt-16">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold text-gray-800 mb-6 leading-tight">
            One Step Closer To Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Dream Job
            </span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-md hover:from-sky-400 hover:to-blue-500">
            Get Started
          </button>
        </div>
        <div>
          <img className="max-w-3xl" src="./person.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
