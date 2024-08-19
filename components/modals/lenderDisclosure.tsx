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

interface DisclosureModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const DisclosureModal = ({
  children,
  description,
  title,
}: DisclosureModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-80">
        <DialogHeader>
          <DialogContent></DialogContent>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"default"} type="button" className="bg-edvOrange">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclosureModal;
