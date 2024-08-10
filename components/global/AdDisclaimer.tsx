import { getAdDisclosureData } from "@/actions/get-psl-disclosure";
import DisclosureModal from "../modals/DisclosureModal";

const AdDisclaimer = async () => {
  const { adData } = await getAdDisclosureData({ keyName: "psl" });

  if (!adData || Object.keys(adData).length === 0) return;

  const { title, description } = adData;

  return (
    <div className="h-9 w-full bg-blueExtraLight">
      <DisclosureModal title={title} description={description}>
        <button className="h-full pl-2 bg-transparent text-[0.75rem] text-blueDarkest hover:underline hover:underline-offset-1">
          Advertiser Disclosure
        </button>
      </DisclosureModal>
    </div>
  );
};

export default AdDisclaimer;
