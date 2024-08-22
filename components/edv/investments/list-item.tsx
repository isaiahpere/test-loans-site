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
        "w-full p-3 shadow-md min-h-[150px]",
        isFeatured && "border-[4px] border-edvYellow "
      )}
    >
      <CardContent className="p-0 relative lg:flex lg:items-center lg:pt-[12px] lg:px-[8px]">
        {isFeatured && <FeaturedTag />}
        <div className="flex items-center justify-center mb-4">
          <Image
            src={image}
            alt={`${name} company logo`}
            width={140}
            height={140}
            className="md:w-[150px] lg:w-[210px] lg:pt-4"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:w-full">
          <div className="flex items-center mb-4 sm:min-w-[60%]  lg:min-w-[70%] xl:min-w-[78%] md:px-[20px] xl:px-32">
            <div className="w-full text-center">
              <span className="text-md text-darkBlue sm:text-lg">
                Fixed APR
              </span>
              <sup className="text-edvOrange">1</sup>
              <p className="text-md font-semibold xs:text-xl md:text-2xl">
                4.69% - 13.49%
              </p>
            </div>
            <div className="w-full text-center">
              <span className="text-md text-darkBlue sm:text-lg">
                Variable APR
              </span>
              <sup className="text-edvOrange">1</sup>
              <p className="text-md font-semibold xs:text-xl md:text-2xl">
                5.37% - 20.78%
              </p>
            </div>
          </div>
          <div className="w-full text-center mb-2 lg:m-0">
            <EnterSchoolModal>
              <Button className="bg-edvOrange text-lg w-[200px] h-10 md:h-12 md:text-[1.2rem]">
                Apply Now
              </Button>
            </EnterSchoolModal>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end p-0 px-2 mt-1 md:mt-0 lg:p-0 lg:p0 lg:m-0">
        <LenderInformation>
          <div className="">
            <p>Learn More</p>
          </div>
        </LenderInformation>
      </CardFooter>
    </Card>
  );
};

export default ListItem;
