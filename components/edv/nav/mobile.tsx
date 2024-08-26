"use client";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSidebarStore } from "@/hooks/use-mobile-sidebar";
import Sidebar from "./sidebar";

const EdvMobileNavbar = () => {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <nav className="flex items-center justify-end md:hidden">
      <Sheet onOpenChange={toggle} open={isOpen}>
        <SheetTrigger className="hover:opacity-75 transition">
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <Sidebar />
          <SheetTitle className="text-center">Best Loans In Town</SheetTitle>
          <SheetDescription className="text-center">
            You can also <span className="text-blue-500 underline">Login</span>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default EdvMobileNavbar;
