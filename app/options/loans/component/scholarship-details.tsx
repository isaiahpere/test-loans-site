import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScholarshipDetailsProps {
  showDetails: boolean;
}

const ScholarshipDetails = ({ showDetails }: ScholarshipDetailsProps) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: showDetails ? "auto" : 0,
        opacity: showDetails ? 1 : 0,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn("overflow-hidden", showDetails && "my-4")}
    >
      <div className="mt-2">
        <div className="m-auto w-3/4 border-b-2 border-gray-400 mb-4" />
        <div className="m-10 flex items-center justify-center">
          <Image
            src={"/images/scholarship.png"}
            width={180}
            height={140}
            priority
            alt="scholarship success"
          />
        </div>
        <p>
          <span className="font-semibold pr-1">You want this scholarship</span>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <p className="mt-4">
          <span className="font-semibold pr-1">Elegibility: </span>There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don&apos;t look even slightly believable. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn&apos;t anything embarrassing.
        </p>
        <p className="mt-4">
          <span className="font-semibold pr-1">Rules:</span>To apply for this
          loan, you must be at least 18 years old, have a minimum credit score
          of 10,000, and provide proof of income.
        </p>
      </div>
    </motion.div>
  );
};

export default ScholarshipDetails;
