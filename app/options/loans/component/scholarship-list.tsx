import React from "react";
import ScholarshipCard from "./scholarship-card";

const ScholarshipList = () => {
  return (
    <section className="mt-8 flex flex-col items-center justify-center gap-y-6">
      <ScholarshipCard />
      <ScholarshipCard />
      <ScholarshipCard />
      <ScholarshipCard />
    </section>
  );
};

export default ScholarshipList;
