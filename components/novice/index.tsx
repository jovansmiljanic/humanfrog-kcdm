"use client";

// Vendors
import Link from "next/link";

// Local components
import { List } from "./list";
import { Header } from "./header";
import { usePathname } from "next/navigation";
import { MobileHeader } from "./mobile-header";

export const Novice = () => {
  const links = [
    { label: "Novice", href: "/novice" },
    { label: "Prihajajoči dogodki", href: "#" },
    { label: "Pretekli dogodki", href: "#" },
  ];

  const pathname = usePathname();

  return (
    <div className="mt-5">
      <MobileHeader links={links} />

      <Header />

      <div className="w-full grid md:grid-cols-[230px_160px_1fr]">
        <div className="flex-col gap-2.5 pl-16 pr-7 hidden md:flex">
          {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`font-extrabold text-primary uppercase hover:text-lighter-green border-b border-lighter-gray pt-2.5 pb-2.5 relative ${
                  isActive ? "text-lighter-green" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute h-[375px] w-0.5 bg-lighter-green z-30 -top-40 -left-0.5"></div>
        </div>

        <List />
      </div>
    </div>
  );
};
