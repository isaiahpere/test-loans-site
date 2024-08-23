import React from "react";
import ScholarshipList from "./component/scholarship-list";

const Loans = () => {
  return (
    <main className="p-4">
      <h1 className=" text-[1.5rem] text-center font-semibold">
        Unlock Your Future: Explore Top Loans Today
      </h1>
      <ScholarshipList />
    </main>
  );
};

export default Loans;
