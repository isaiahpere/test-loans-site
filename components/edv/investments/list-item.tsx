import Image from "next/image";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EnterSchoolModal from "@/components/modals/enter-school-modal";
import LenderInformation from "./lender-information";
import FeaturedTag from "../featured-tag";
interface ListItemProps {
  name: string;
  url: string;
  image: string;
  isFeatured?: boolean;
}

const ListItem = ({ name, url, image, isFeatured }: ListItemProps) => {
  return (
    <Card
      className={cn(
        "w-full p-3 shadow-md",
        isFeatured && "border-4 border-edvYellow"
      )}
    >
      <CardContent className="p-0 relative">
        {isFeatured && <FeaturedTag />}
        <div className="flex items-center justify-center mb-4">
          <Image
            src={image}
            alt={`${name} company logo`}
            width={140}
            height={140}
          />
        </div>
        <div>
          <div className="flex items-center mb-4">
            <div className="w-full text-center">
              <span className="text-md text-darkBlue sm:text-lg">
                Fixed APR
              </span>
              <sup className="text-edvOrange">1</sup>
              <p className="text-lg font-semibold xs:text-xl sm:text-2xl">
                4.69% - 13.49%
              </p>
            </div>
            <div className="w-full text-center">
              <span className="text-md text-darkBlue sm:text-lg">
                Variable APR
              </span>
              <sup className="text-edvOrange">1</sup>
              <p className="text-lg font-semibold xs:text-xl md:text-2xl">
                5.37% - 20.78%
              </p>
            </div>
          </div>
          <div className="w-full text-center mb-2">
            <EnterSchoolModal>
              <Button className="bg-edvOrange text-lg w-[200px] h-10">
                Apply Now
              </Button>
            </EnterSchoolModal>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end p-0 pb-2 px-2 mt-4">
        <LenderInformation>
          <p>Learn More</p>
        </LenderInformation>
      </CardFooter>
    </Card>
  );
};

export default ListItem;
