"use client";
import { create } from "zustand";

import {
  MilitaryOption,
  RecurringOption,
  AthleticsOption,
  DisabilityOption,
} from "@/types";

// Define the state interface for the scholarship filter store
export interface ScholarshipFilterStore {
  military: MilitaryOption[];
  athletics: AthleticsOption[];
  recurring: RecurringOption[];
  disability: DisabilityOption[];

  setFilter: (
    key: keyof ScholarshipFilterStore,
    value:
      | MilitaryOption[]
      | AthleticsOption[]
      | RecurringOption[]
      | DisabilityOption[]
  ) => void;
  toggleFilter: (key: keyof ScholarshipFilterStore, value: string) => void;
  clearFilters: () => void;
}

// Create and export the Zustand store
export const useScholarshipFilterStore = create<ScholarshipFilterStore>(
  (set) => ({
    military: [],
    athletics: [],
    recurring: [],
    disability: [],

    setFilter: (key, value) => {
      set((state) => ({
        ...state,
        [key]: value,
      }));
    },

    toggleFilter: (key, value) => {
      set((state) => {
        const currentValues = state[key] as string[];
        const updatedValues = currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value];
        return { ...state, [key]: updatedValues } as Pick<
          ScholarshipFilterStore,
          keyof ScholarshipFilterStore
        >;
      });
    },

    clearFilters: () => {
      set({
        military: [],
        athletics: [],
        recurring: [],
        disability: [],
      });
    },
  })
);
