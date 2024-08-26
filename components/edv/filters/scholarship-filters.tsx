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
  const { setFilter } = useScholarshipFilterStore();
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="p-4 ">
        <SheetHeader className="mb-12">
          <SheetTitle className="text-3xl">Scholarship Filters</SheetTitle>
          <SheetDescription className="text-md">
            Customize Your Results
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-center gap-y-8">
          <MilitaryFilter />
          <p>Filter One</p>
          <p>Filter One</p>
          <p>Filter One</p>
          <p>Filter One</p>
          <p>Filter One</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ScholarshipFilters;
