import Navbar from "@/components/edv/nav/navbar";
import AdDisclaimer from "@/components/global/AdDisclaimer";
import SchoolSearchModal from "@/components/modals/school-search-modal";
import React from "react";

const EdvLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <AdDisclaimer />
      <SchoolSearchModal />
      <div className="max-w-[1400px] m-auto">{children}</div>
    </div>
  );
};

export default EdvLayout;
