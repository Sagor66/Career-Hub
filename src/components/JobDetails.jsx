import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

const JobDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  
  const detailData = data.find((detail, i) => detail.id === parseInt(id))
  
  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-blue-50">
        <div className="max-w-[1600px] min-h-[300px] mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 text-center pt-28">
            Job Details
          </h1>
        </div>
      </div>
      <Details key={detailData.i} jobDetail={detailData}></Details>
    </div>
  );
};

export default JobDetails;
