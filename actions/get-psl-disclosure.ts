import { Disclosures, DisclosureKeys } from "@/types";

/**
 * This is where we would trigger server actions. In this case I'm using it to get ad disclosure data
 * but we can go from a simple server request to more complex logic includes triggering third party services or events
 */

interface getAdDisclosureDataProps {
  keyName: DisclosureKeys;
}
export const getAdDisclosureData = async ({
  keyName,
}: getAdDisclosureDataProps) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/data/global/adDisclosure.json`);

    if (!response.ok) throw new Error("Failed to fetch adDisclosure data");
    const data: Disclosures = await response.json();

    if (!(keyName in data)) {
      throw new Error("AdDisclosure key does not exist. Sorry!");
    }

    return {
      adData: data[keyName],
    };
  } catch (error) {
    console.log("Error in get-psl-disclosure", error);
    return {
      adData: {
        title: "",
        description: "",
      },
    };
  }
};
