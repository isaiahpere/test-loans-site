import Link from "next/link";
import footerData from "../../public/data/psl/footerLinks.json";
import Image from "next/image";

const PslFooter = () => {
  return (
    <footer className="bg-lightGray p-4">
      <section className="flex flex-col gap-y-1 text-[0.75rem] text-center">
        <p>PrivateStudentLoans.com is a service of Edvisors Network Inc.</p>
        <p>
          This platform is not a government website and is not associated with
          any federal programs or agencies. Disclosure: It is an independent,
          advertising-supported service that allows users to search, compare,
          and explore different options. The platform is not affiliated with any
          institutions. Results do not represent any official recommendations.
          The platform may receive compensation from some entities featured,
          which could influence their placement or order in listings. Not all
          options are included, and those participating may not be available in
          every area.
        </p>
        <p>
          ©1998–2024 Edvisors Network, Inc. All rights reserved. 1111 N. Tomato
          Blvd., Suite 101, Henderson, NV 89014
        </p>
      </section>
      <section className="flex items-center justify-center mt-4">
        <Link href={"https://www.bbb.org/"}>
          <Image
            src={"/images/bbbLogo.png"}
            alt="better business bureau"
            height={60}
            width={80}
          />
        </Link>
      </section>
      <nav className="mt-4">
        <ul className="grid grid-cols-1 items-center gap-y-5">
          {footerData.footerLinks.map((item) => (
            <li
              key={item.id}
              className="text-center underline underline-offset-2 text-sm"
            >
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default PslFooter;
