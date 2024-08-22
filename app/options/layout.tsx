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
      {children}
    </div>
  );
};

export default EdvLayout;
