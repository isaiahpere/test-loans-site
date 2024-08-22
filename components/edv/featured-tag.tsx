import { Badge } from "../ui/badge";

interface FeaturedTagProps {
  label?: string;
}

const FeaturedTag = ({ label }: FeaturedTagProps) => {
  return (
    <div className="absolute top-[-37px] left-[-10px]">
      <Badge className="bg-edvYellow text-black rounded-l-md rounded-r-md">
        {label || "Featured Lender"}
      </Badge>
    </div>
  );
};

export default FeaturedTag;
