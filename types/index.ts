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
