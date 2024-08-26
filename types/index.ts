// ADD DISCLOSURE
export type DisclosureKeys = "psl" | "edv";
export interface Disclosure {
  title: string;
  description: string;
}
export interface Disclosures {
  psl: Disclosure;
  edv: Disclosure;
}

// LENDER INFO
export interface Lender {
  id: string;
  name: string;
  url: string;
  image: string;
}

// SCHOLARSHIP FILTERS

export type MilitaryOption =
  | "Navy"
  | "Army"
  | "Marines"
  | "Coast Guard"
  | "Air Force";
export type AthleticsOption =
  | "Soccer"
  | "Basketball"
  | "Baseball"
  | "Volleyball"
  | "Softball"
  | "Tennis"
  | "Track"
  | "None";
export type RecurringOption = "None" | "Monthly" | "Quarterly" | "Annually";
export type DisabilityOption =
  | "Hearing Impaired"
  | "Learning Disability"
  | "Mental Disability"
  | "Physical Disability"
  | "Speech Disability"
  | "Visually Impaired"
  | "None";

export interface Scholarship {
  id: number;
  name: string;
  grade: string;
  amount: number;
  expires: string;
  GPA: number;
  military: string;
  athletics: string;
  recurring: string;
  disability: string;
}
