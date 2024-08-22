"use client";
import React, { useState } from "react";

import toast from "react-hot-toast";

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
import { Input } from "../ui/input";
import useSchoolStore from "@/hooks/use-school";

interface SchoolSearchProps {
  children: React.ReactNode;
}

const EnterSchoolModal = ({ children }: SchoolSearchProps) => {
  const { schoolName, updateSchoolName } = useSchoolStore();
  const [inputValue, setInputValue] = useState<string>(schoolName);

  const handleOptions = () => {
    if (inputValue.trim()) {
      updateSchoolName(inputValue.trim());
      toast.success("School Updated!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[490px]">
        <DialogHeader className="gap-2 mb-4">
          <DialogTitle className="mb-6">
            What college will you be attending?
          </DialogTitle>
          <div className="flex flex-col gap-4 mb-4">
            <DialogDescription className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Enter your school"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <DialogClose asChild>
                <Button
                  className="bg-edvOrange border-edvOrange text-lg"
                  onClick={handleOptions}
                >
                  View My Options
                </Button>
              </DialogClose>
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EnterSchoolModal;
