"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useSearchSchoolStore } from "@/hooks/use-search-school";
import { Input } from "../ui/input";

const SchoolSearchModal = () => {
  const { isOpen, onClose } = useSearchSchoolStore();

  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal defaultOpen={isOpen}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[490px]">
        <DialogHeader className="gap-2 mb-4">
          <div className="flex flex-col gap-4 mb-4">
            <DialogDescription>
              Only One Step To Compare Your Loan Options
            </DialogDescription>
            <DialogTitle>What college will you be attending?</DialogTitle>
          </div>
          <Input placeholder="Enter Your School" />
          <Button
            className="bg-edvOrange border-edvOrange text-lg"
            onClick={onClose}
          >
            Apply Now
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SchoolSearchModal;
