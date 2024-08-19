import { create } from "zustand";

type SearchSchoolStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useSearchSchoolStore = create<SearchSchoolStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
