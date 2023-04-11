import React, { useEffect, useState } from 'react';
import Applied from './Applied';
import { getShoppingCart } from '../utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
  const jobsData = useLoaderData()

  const appliedJobs = getShoppingCart()
  const appliedJobsKeys = Object.keys(appliedJobs)

  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-blue-50">
        <div className="max-w-[1600px] min-h-[300px] mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 text-center pt-28">
            Applied Jobs
          </h1>
        </div>
      </div>
      <Applied appliedJobsKeys={appliedJobsKeys} jobsData={jobsData}></Applied>
    </div>
  );
};

export default AppliedJobs;