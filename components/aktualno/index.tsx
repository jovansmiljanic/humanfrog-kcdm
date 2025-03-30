"use client";

// Vendors
import Link from "next/link";

// Local components
import { Header } from "./header";
import { MobileHeader } from "./mobile-header";
import { Napovedujemo } from "./napovedujemo";
import { AktualnoSection } from "./aktualno";
import { GlavnaNovica } from "./glavna-novica";
import { usePathname } from "next/navigation";

export const Aktualno = () => {
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

      <div className="w-full grid md:grid-cols-[230px_160px_1fr] px-5 md:px-0">
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
          <div className="absolute h-[375px] w-0.5 bg-lighter-green z-30 -top-40 -left-0.5 hidden md:block"></div>
        </div>

        <div className="-translate-y-16">
          <GlavnaNovica />

          <div className="grid grid-cols-1 gap-10 pt-5 md:grid-cols-[2fr_1fr]">
            <AktualnoSection />

            <Napovedujemo />
          </div>
        </div>
      </div>
    </div>
  );
};
