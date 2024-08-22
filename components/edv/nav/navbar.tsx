import React from "react";
import EdvMobileNavbar from "./mobile";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EdvDesktopNavbar from "./desktop";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-blueNomal h-[52px] px-4 fixed w-full z-50">
      <Link href={"/"}>
        <Image
          src={"/images/logo.png"}
          alt="hippie times logo"
          width={36}
          height={36}
        />
      </Link>
      <div className="flex items-center gap-4">
        <EdvDesktopNavbar />
        <div>
          <Button className="bg-transparent underline underline-offset-2 text-sm font-extralight">
            Login
          </Button>
          <Button className="bg-blueLight h-[32px]">Register</Button>
        </div>
        <EdvMobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
