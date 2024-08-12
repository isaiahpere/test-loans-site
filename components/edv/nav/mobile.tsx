import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const EdvMobileNavbar = () => {
  return (
    <nav className="flex items-center justify-end md:hidden">
      <Sheet>
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
