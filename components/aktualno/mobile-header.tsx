import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const MobileHeader = ({
  links,
}: {
  links: { label: string; href: string }[];
}) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="block md:hidden">
        <div className="w-28 h-[1px] bg-primary mt-5 mb-3 "></div>
      </div>

      <h1 className="text-lighter-green text-[52px] leading-12 font-extrabold mb-8 px-5 md:px-0 md:hidden flex">
        Aktualno
      </h1>

      <motion.div
        className="flex pl-4 pr-4 gap-3 overflow-x-auto md:hidden snap-x snap-mandatory"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {links.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`min-w-[140px] h-[80px] flex items-start justify-start font-extrabold uppercase text-sm text-start break-words ${
                isActive
                  ? "text-lighter-green border-lighter-green border-b-4"
                  : "text-primary border-transparent hover:text-lighter-green"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};
