import React from "react";

import { MilitaryOption } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

import { useScholarshipFilterStore } from "@/hooks/use-scholarship-filters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const militaryList: MilitaryOption[] = [
  "Navy",
  "Army",
  "Marines",
  "Coast Guard",
  "Air Force",
];

interface MilitaryFilter {
  label: MilitaryOption;
}

const MilitaryFilter = () => {
  const { military, toggleFilter } = useScholarshipFilterStore();

  const handleToggle = (value: MilitaryOption) => {
    toggleFilter("military", value);
  };

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-between relative pb-0 no-underline">
            <div className="flex flex-flow items-center justify-center">
              <p className="text-lg  mb-2 font-medium">Military</p>
              {military.length > 0 && (
                <Badge className="bg-darkBlue rounded-full flex items-center justify-center w-5 h-5 text-center ml-2 mb-2 text-[10px]">
                  {military.length}
                </Badge>
              )}
            </div>
            <ChevronDown />
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-3">
            {militaryList.map((option, idx) => (
              <div
                key={`${idx}-${option}`}
                className="flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  id={`${option}-selection`}
                  checked={military.includes(option)}
                  onChange={() => handleToggle(option)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={`${option}-selection`}
                  className="text-sm font-medium leading-none  cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MilitaryFilter;
