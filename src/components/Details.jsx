import React from "react";

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
    <div>
      <div>
        <div>
          <h3>{job_title}</h3>
          <p>
            <span>Job Description: </span>
            {job_description}
          </p>
          <p>
            <span>Required Skills: </span>
            
              {
                required_skills.map(skill => `${skill}, `)
              }
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
