"use client";
import React, { useEffect, useState } from "react";
import ScholarshipCard from "./scholarship-card";
import scholarshipList from "../../../../public/data/edv/scholarshipList.json";
import { MilitaryOption, Scholarship } from "@/types";
import ScholarshipMenu from "./scholarship-menu";
import { useScholarshipFilterStore } from "@/hooks/use-scholarship-filters";

const ScholarshipList = () => {
  const [customScholarships, setCustomScholarships] = useState<Scholarship[]>(
    scholarshipList.scholarships
  );
  const [isAscending, setIsAscending] = useState(false);

  const { military } = useScholarshipFilterStore();

  useEffect(() => {
    if (military.length > 0) {
      let arr = Array.from(military) as string[];
      let filteredList = scholarshipList.scholarships.filter((item) => {
        if (arr.includes(item.military)) {
          return item;
        }
      });
      setCustomScholarships(filteredList);
    } else {
      setCustomScholarships(scholarshipList.scholarships);
    }
  }, [military]);

  const toggleSorting = () => {
    const sortedScholarships = [...scholarshipList.scholarships].sort(
      (a, b) => {
        if (isAscending) {
          return a.amount - b.amount;
        } else {
          return b.amount - a.amount;
        }
      }
    );
    setCustomScholarships(sortedScholarships);
    setIsAscending((prevState) => !prevState);
  };

  return (
    <section className="mt-8 flex flex-col items-center justify-center gap-y-6 md:px-[2rem] relative">
      <ScholarshipMenu
        scholarshipCount={customScholarships.length}
        onSort={toggleSorting}
      />
      {customScholarships.map((item) => (
        <ScholarshipCard key={item.id} scholarship={item} />
      ))}
    </section>
  );
};

export default ScholarshipList;
