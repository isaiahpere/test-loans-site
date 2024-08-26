import { Button } from "@/components/ui/button";
import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import React from "react";
import ScholarshipFilters from "../../../../components/edv/filters/scholarship-filters";

interface ScholarshipFilterMenuProps {
  scholarshipCount: number;
  onSort: () => void;
}

const ScholarshipFilterMenu = ({
  scholarshipCount,
  onSort,
}: ScholarshipFilterMenuProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="scholarship__controls flex items-center justify-center gap-x-2">
        <ScholarshipFilters>
          <Button className="border-2 rounded-2xl" variant={"outline"}>
            <SlidersHorizontal className="w-4 h-4 mr-1" />
            Filter
          </Button>
        </ScholarshipFilters>
        <Button
          className="border-2 rounded-2xl"
          variant={"outline"}
          onClick={onSort}
        >
          <ArrowDownUp className="w-4 h-4 mr-1" />
          Sort
        </Button>
      </div>
      <div>
        <p className="font-semibold text-center mt-2">
          {scholarshipCount}
          <span className="pl-2">Scholarships</span>
          <span className="font-normal pl-2">Showing</span>
        </p>
      </div>
    </div>
  );
};

export default ScholarshipFilterMenu;
