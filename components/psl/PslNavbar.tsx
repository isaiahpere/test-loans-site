import Image from "next/image";

const PslNavbar = () => {
  return (
    <nav className="h-[52px] w-full bg-blueSky sticky top-0">
      <div className="h-full flex items-center justify-center gap-x-2">
        <Image
          src={"/images/logo.png"}
          alt="homepage logo"
          width={32}
          height={32}
        />
        <p className="text-white font-semibold text-2xl uppercase">
          Private Equity Firm
        </p>
      </div>
    </nav>
  );
};

export default PslNavbar;
