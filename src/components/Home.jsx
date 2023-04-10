import React from "react";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobsData = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs jobsData={jobsData}></FeaturedJobs>
    </div>
  );
};

export default Home;
