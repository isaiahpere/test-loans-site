import { Badge } from "../ui/badge";

interface FeaturedTagProps {
  label?: string;
}

const FeaturedTag = ({ label }: FeaturedTagProps) => {
  return (
    <div className="absolute top-[-40px] left-0 lg:top-[-44px] zoom-[">
      <Badge className="bg-edvYellow h-[26px] text-black font-medium shadow-none rounded-t-lg rounded-b-none border-none md:text-[0.875rem] lg:h-[30px]">
        {label || "Featured Lender"}
      </Badge>
    </div>
  );
};

export default FeaturedTag;
