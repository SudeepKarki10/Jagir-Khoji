import React from "react";
import JobRow from "./JobRow";

const Jobs = () => {
  return (
    <div className="bg-stone-100 px-2 sm:px-8 py-4">
      <h3 className="text-lg font-medium text-gray-600 text-center sm:text-left">
        Recent Jobs
      </h3>

      <JobRow />
      <JobRow />
      <JobRow />
    </div>
  );
};

export default Jobs;
