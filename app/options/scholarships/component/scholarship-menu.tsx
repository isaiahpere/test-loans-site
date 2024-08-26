import { Button } from "@/components/ui/button";
import { ArrowDownUp, SlidersHorizontal, X } from "lucide-react";
import React from "react";
import ScholarshipFilters from "../../../../components/edv/filters/scholarship-filters";
import { useScholarshipFilterStore } from "@/hooks/use-scholarship-filters";
import { cn } from "@/lib/utils";

interface ScholarshipFilterMenuProps {
  scholarshipCount: number;
  onSort: () => void;
}

const ScholarshipFilterMenu = ({
  scholarshipCount,
  onSort,
}: ScholarshipFilterMenuProps) => {
  const { military, clearFilters, toggleFilter } = useScholarshipFilterStore();

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="scholarship__controls flex items-center justify-center gap-x-2">
        <ScholarshipFilters>
          <Button
            className={cn(
              "border-2 rounded-2xl",
              military.length && "border-green-600"
            )}
            variant={"outline"}
          >
            <SlidersHorizontal className="w-4 h-4 mr-1" />
            Filter
          </Button>
        </ScholarshipFilters>
        <Button
          className="border-2 rounded-2xl hover:bg-transparent"
          variant={"outline"}
          onClick={onSort}
        >
          <ArrowDownUp className="w-4 h-4 mr-1" />
          Sort
        </Button>
      </div>

      <div className="w-full flex justify-center flex-col items-center mt-2">
        <div className="w-full overflow-x-scroll">
          <div className="flex space-x-4 md:justify-center">
            {military.length > 0 && (
              <div className="flex items-center justify-center gap-x-2 overflow-">
                {military.map((item) => (
                  <Button
                    key={`${item}-id`}
                    className="text-black text-xs bg-gray-50 border rounded-full h-6 px-2 hover:bg-gray-50"
                    onClick={() => toggleFilter("military", item)}
                  >
                    {item}
                    <X className="w-3 h-3" />
                  </Button>
                ))}
                <Button
                  variant={"ghost"}
                  onClick={clearFilters}
                  className="p-0 h-min text-darkBlue underline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
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
