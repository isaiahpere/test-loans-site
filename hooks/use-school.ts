import { create } from "zustand";

interface SchoolState {
  schoolName: string;
  isSchoolEntered: boolean;
  updateSchoolName: (name: string) => void;
}

const useSchoolStore = create<SchoolState>((set) => ({
  schoolName: "",
  isSchoolEntered: false,
  updateSchoolName: (name: string) =>
    set({
      schoolName: name,
      isSchoolEntered: !!name,
    }),
}));

export default useSchoolStore;
