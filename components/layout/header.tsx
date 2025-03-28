"use client";

// Core
import { useState } from "react";

// Vendor
import Link from "next/link";

// Local components
import { MobileNav } from "./mobile-nav";

// Svg's
import { SearchIcon } from "@/public/svg/search";
import Image from "next/image";
import logoImage from "../../public/logo.png";

export const Header = () => {
  const [language, setLanguage] = useState<"ENG" | "SI">("ENG");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLanguageChange = () => {
    const nextLanguage = language === "ENG" ? "SI" : "ENG";
    setLanguage(nextLanguage);
    // save it in the cookie or router.push(`/${nextLanguage.toLowerCase()}`)
  };

  const links = [
    {
      href: "#",
      label: "Znanje",
    },
    {
      href: "#",
      label: "Aktualno",
    },
    {
      href: "#",
      label: "O KCDM",
    },
  ];

  return (
    <div className="flex justify-between items-start mt-6 mx-5 md:mx-0 md:mt-12 relative">
      <Image
        src={logoImage}
        alt="KCDM"
        className="w-[240px] md:w-[300px]"
        priority
      />

      <div className="hidden md:flex flex-col">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="font-extrabold text-primary uppercase tracking-(0.1em) mb-2.5 transition-colors duration-300 ease-in-out hover:text-dark-green active:text-dark-green"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <div onClick={() => setIsSearchOpen(prev => !prev)}>
          <SearchIcon />
        </div>

        {isSearchOpen && (
          <input
            type="text"
            placeholder="Išči..."
            className="bg-white w-full p-2 pr-6 outline-0 placeholder-light-gray border border-lighter-gray"
          />
        )}

        <Link
          href="#"
          className="relative border-2 border-dashed px-4 py-2.5 uppercase overflow-hidden transition-all duration-300 ease-in-out group min-w-40"
        >
          <span className="relative z-10 text-primary group-hover:text-white transition-all duration-300">
            Platforma DNA
          </span>

          <span className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full z-0" />
        </Link>

        <div className="h-12 w-[1px] bg-lighter-gray"></div>

        <button
          onClick={handleLanguageChange}
          className="relative cursor-pointer uppercase outline-0 hover:text-white overflow-hidden group transition-all duration-300 ease-in-out w-8"
          aria-label="Change language"
        >
          <span className="relative z-10">{language}</span>
          <span className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full z-0" />
        </button>
      </div>

      <MobileNav
        links={links}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </div>
  );
};
