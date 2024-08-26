"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";

import { Card, CardFooter, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scholarship } from "@/types";
import { formatDate, formatAmount } from "@/lib/helpers";

import ScholarshipDetails from "./scholarship-details";

interface ScholarshipProps {
  scholarship: Scholarship;
}

const ScholarshipCard = ({ scholarship }: ScholarshipProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Card className="p-4 w-full shadow-lg border-gray-400 relative xs:max-w-[550px] lg:max-w-full lg:p-5 xxl:max-w-[1100px]">
      <CardContent className="p-0 items-center justify-center lg:flex-row">
        <div className="flex flex-col w-full lg:flex-row lg:justify-between lg:gap-x-[4rem]">
          <CardTitle className="text-center  text-[1.4rem]  leading-7 mb-4 font-medium lg:m-0 lg:min-w-[250px]">
            {scholarship.name}
          </CardTitle>
          <div className="flex w-full items-center justify-between  xs:justify-center xs:gap-x-[10rem] lg:gap-x-[5rem]">
            <div className="flex items-center gap-x-2">
              <FaTrophy className="h-10 w-10 text-blue2" />
              <div className="flex flex-col items-center justce">
                <span className="font-semibold text-blueNomal text-lg">
                  {formatAmount(scholarship.amount)}
                </span>
                <span className="text-xs font-thin lg:text-sm">AWARD</span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <FaCalendarAlt className="h-10 w-10 text-blue2" />
              <div className="flex flex-col items-center justify-center">
                <span className="font-semibold text-blueNomal text-lg">
                  {formatDate(scholarship.expires)}
                </span>
                <span className="text-xs font-thin text-nowrap lg:text-sm">
                  ENTRY DEADLINE
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center scholarship-enter-btn w-full max-w-[220px] m-auto mt-3 lg:m-0 ">
            <Button className="w-full bg-edvOrange text-lg">Enter Here</Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-0 w-full flex-col items-center mt-2">
        <ScholarshipDetails showDetails={isExpanded} />
        <div className="w-full flex items-center justify-center ">
          <button
            onClick={toggleIsExpanded}
            className="text-darkBlue text-sm  flex items-center gap-1"
          >
            {isExpanded ? (
              <Minus className="w-4 h-4 text-darkBlue" />
            ) : (
              <Plus className="w-4 h-4 text-darkBlue" />
            )}
            Show Details
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ScholarshipCard;
