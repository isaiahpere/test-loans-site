"use client";
import { CalendarDays, Minus, Plus, Trophy } from "lucide-react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ScholarshipDetails from "./scholarship-details";
import { useState } from "react";

const ScholarshipCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Card className="p-4 w-full shadow-lg border-gray-400 ">
      <CardTitle className="text-center  text-[1.4rem] text-darkBlue leading-7 mb-4">
        Citizen 1k Monthly September 2024
      </CardTitle>
      <CardContent className="p-0">
        <div className="scholarship-info flex items-center justify-between my-2">
          <div className="flex items-center gap-x-2">
            <Trophy className="text-edvYellow w-9 h-9" />
            <div className="flex flex-col items-center justce">
              <span className="font-semibold">$1,000</span>
              <span className="text-sm">AWARD</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <CalendarDays className="text-gray-600 w-9 h-9" />
            <div className="flex flex-col items-center justify-center">
              <span className="font-semibold">$1,000</span>
              <span className="text-xs">ENTRY DEADLINE</span>
            </div>
          </div>
        </div>
        <div className="scholarship-enter-btn max-w-[270px] m-auto my-2">
          <Button className="w-full bg-green-700 text-md">Enter Here</Button>
        </div>
        <div>
          <ScholarshipDetails showDetails={isExpanded} />
          <div className="flex items-center justify-center gap-x-1">
            {isExpanded ? (
              <Minus className="w-4 h-4 text-edvOrange" />
            ) : (
              <Plus className="w-4 h-4 text-edvOrange" />
            )}
            <button onClick={toggleIsExpanded} className="text-darkBlue">
              Show Details
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScholarshipCard;
