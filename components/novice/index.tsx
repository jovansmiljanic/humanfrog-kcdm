"use client";

// Vendors
import Link from "next/link";
import { motion } from "framer-motion";

// Local components
import { List } from "./list";
import { Header } from "./header";

export const Novice = () => {
  const links = [
    { label: "Novice", href: "#", active: true },
    { label: "Prihajajoči dogodki", href: "#" },
    { label: "Pretekli dogodki", href: "#" },
  ];

  return (
    <div className="mt-5">
      <div className="block md:hidden">
        <div className="w-28 h-[1px] bg-primary mt-5 mb-3 ml-5"></div>
        <Link
          href="/aktualno"
          className="text-primary flex items-center gap-3 uppercase font-extraboldpt-5 pb-14 pl-5"
        >
          <svg
            width="26"
            height="9"
            viewBox="0 0 26 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 4.5L8 8.83013V0.169873L0.5 4.5ZM7.25 5.25H25.5V3.75H7.25V5.25Z"
              fill="#4BAC87"
            />
          </svg>
          Aktualno
        </Link>
      </div>

      <motion.div
        className="flex pl-4 pr-4 gap-3 overflow-x-auto md:hidden snap-x snap-mandatory"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {links.map(({ label, href, active }) => (
          <Link
            key={label}
            href={href}
            className={`min-w-[140px] h-[80px] flex items-start justify-start font-extrabold uppercase text-sm text-start break-words ${
              active
                ? "text-lighter-green border-lighter-green border-b-4"
                : "text-primary border-transparent hover:text-lighter-green"
            }`}
          >
            {label}
          </Link>
        ))}
      </motion.div>

      <Header />

      <div className="w-full grid md:grid-cols-[230px_160px_1fr]">
        <div className="flex-col gap-2.5 pl-16 pr-7 hidden md:flex">
          <Link
            href="#"
            className="font-extrabold text-lighter-green uppercase border-b border-lighter-gray pt-2.5 pb-2.5 relative active"
          >
            Novice
          </Link>

          <Link
            href="#"
            className="font-extrabold text-primary uppercase hover:text-lighter-green border-b border-lighter-gray pb-2.5"
          >
            Prihajajoči dogodki
          </Link>

          <Link
            href="#"
            className="font-extrabold text-primary uppercase hover:text-lighter-green"
          >
            Pretekli dogodki
          </Link>
        </div>

        <div className="relative">
          <div className="absolute h-[375px] w-0.5 bg-lighter-green z-30 -top-40 -left-0.5"></div>
        </div>

        <List />
      </div>
    </div>
  );
};
