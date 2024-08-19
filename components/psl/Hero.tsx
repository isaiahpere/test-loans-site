import Link from "next/link";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gradient-to-t from-greenDark via-green-900 to-green-950  p-16 flex flex-col items-center">
      <section className="text-white text-center lg:max-w-[800px]">
        <h1 className="text-4xl font-bold mb-4">
          The Best Firm for 2024 Investments
        </h1>
      </section>
      <section className="flex items-center flex-col w-full gap-6 mt-6 max-w-[800px]">
        <div>
          <p className="text-slate-100 text-center max-w-3xl mb-3">
            We understand! Savings, traditional financing, and initial capital
            aren&apos;t always enough. Our platform helps you explore your
            options, compare investment opportunities, and find the right
            solution to make your financial goals a reality!
          </p>
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-2 md:flex-row mb-4">
          {/* pretend this is a form didn't feel like creating one */}
          <Input
            type="text"
            className="bg-white text-balck shadow-sm"
            placeholder="Enter Amount"
          />
          <Link href={"/options"} className="w-full">
            <Button
              className="bg-brightOrange text-white text-xl w-full hover:bg-orange-700 hover:text-white"
              aria-label="Submit form"
              variant={"ghost"}
            >
              Submit
            </Button>
          </Link>
        </div>
      </section>
      <section className="text-center mt-6 w-full md:max-w-[600px]">
        <p className="text-md text-muted lg:text-lg">Our top Partners</p>
        <div className="flex items-center justify-center flex-col mt-4 gap-y-4 bg-black/10 py-2 md:flex-row md:gap-x-14">
          <Image
            src={"/images/adidas.png"}
            alt="homepage logo"
            width={140}
            height={140}
          />
          <Image
            src={"/images/horsey.png"}
            alt="homepage logo"
            width={140}
            height={140}
          />
          <Image
            src={"/images/nikeLogo.png"}
            alt="homepage logo"
            width={100}
            height={100}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
