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
        <div className="w-28 h-[1px] bg-primary mt-5 mb-3 ml-5"></div>
        <Link
          href="/"
          className="text-primary flex items-center gap-3 uppercase font-extrabold pt-5 pb-14 pl-5"
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
