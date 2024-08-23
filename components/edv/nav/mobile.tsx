"use client";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default EdvMobileNavbar;
