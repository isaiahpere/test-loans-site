import { getAdDisclosureData } from "@/actions/get-psl-disclosure";
import DisclosureModal from "../modals/disclosure-modal";
import { Info } from "lucide-react";

const AdDisclaimer = async () => {
  const { adData } = await getAdDisclosureData({ keyName: "psl" });

  if (!adData || Object.keys(adData).length === 0) return;

  const { title, description } = adData;

  return (
    <div className="h-9 w-full  bg-blueExtraLight">
      <DisclosureModal title={title} description={description}>
        <button className="h-full flex items-center justify-center gap-x-1 pl-2 bg-transparent text-[0.70rem] text-blueDarkest hover:underline hover:underline-offset-1">
          <Info className="w-4 h-4" />
          Advertiser Disclosure
        </button>
      </DisclosureModal>
    </div>
  );
};

export default AdDisclaimer;
