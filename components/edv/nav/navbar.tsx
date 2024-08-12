import React from "react";
import EdvMobileNavbar from "./mobile";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EdvDesktopNavbar from "./desktop";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-blueNomal h-[52px] px-2">
      <Link href={"https://www.google.com/"}>
        <Image
          src={"/images/logo.png"}
          alt="hippie times logo"
          width={40}
          height={40}
        />
      </Link>
      <div className="flex items-center gap-4">
        <EdvDesktopNavbar />
        <div>
          <Button className="bg-transparent underline underline-offset-2">
            Login
          </Button>
          <Button className="bg-blueLight">Register</Button>
        </div>
        <EdvMobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
