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
