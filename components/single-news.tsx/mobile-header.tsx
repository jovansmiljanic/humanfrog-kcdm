import Link from "next/link";
import { motion } from "framer-motion";

export const MobileHeader = () => {
  const links = [
    { label: "Novice", href: "#", active: true },
    { label: "Prihajajoči dogodki", href: "#" },
    { label: "Pretekli dogodki", href: "#" },
  ];

  return (
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
  );
};
