"use client";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScholarshipFilterStore } from "@/hooks/use-scholarship-filters";
import { Button } from "@/components/ui/button";
import MilitaryFilter from "./militaryFilters";

interface ScholarshipProps {
  children: React.ReactNode;
}

const ScholarshipFilters = ({ children }: ScholarshipProps) => {
  const { clearFilters } = useScholarshipFilterStore();
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="px-4 py-12 flex flex-col justify-between">
        <div>
          <SheetHeader className="">
            <SheetTitle className="text-3xl">Scholarship Filters</SheetTitle>
            <SheetDescription className="text-md">
              Customize Your Results
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col justify-center gap-y-8">
            <MilitaryFilter />
          </div>
        </div>
        <SheetFooter className="flex flex-row justify-between gap-x-2">
          <Button className="w-full" variant={"outline"} onClick={clearFilters}>
            Clear Filters
          </Button>
          <SheetClose asChild>
            <Button type="submit" className="w-full bg-edvOrange">
              Show Results
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ScholarshipFilters;
