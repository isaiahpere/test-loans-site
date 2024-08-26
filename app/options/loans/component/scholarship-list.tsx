import React from "react";
import ScholarshipCard from "./scholarship-card";
import scholarshipList from "../../../../public/data/edv/scholarshipList.json";
import { Scholarship } from "@/types";

const ScholarshipList = () => {
  return (
    <section className="mt-8 flex flex-col items-center justify-center gap-y-6 md:px-[2rem]">
      {scholarshipList.scholarships.map((item) => (
        <ScholarshipCard key={item.id} scholarship={item} />
      ))}
    </section>
  );
};

export default ScholarshipList;
