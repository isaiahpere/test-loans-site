import Link from "next/link";
import navData from "../../../public/data/edv/navLinks.json";

const EdvDesktopNavbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-center gap-x-5">
        {navData.navLinks.map((link) => (
          <li
            key={link.id}
            className="text-white font-semibold md:text-[0.8rem] lg:text-[1rem]"
          >
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default EdvDesktopNavbar;
