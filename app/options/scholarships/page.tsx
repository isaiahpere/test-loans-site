import React from "react";
import ScholarshipList from "./component/scholarship-list";

const Loans = () => {
  return (
    <main className="p-4 mb-10">
      <h1 className=" text-[2.2rem] text-center font-semibold leading-10">
        Featured Scholarships
      </h1>
      <ScholarshipList />
    </main>
  );
};

export default Loans;
