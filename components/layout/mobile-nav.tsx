// Core
import { useState } from "react";

// Vendors
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Svg's
import { SearchIcon } from "@/public/svg/search";
import { Hamburger } from "@/public/svg/hamburger-icon";

type TMobileNav = {
  links: {
    href: string;
    label: string;
  }[];
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileNav = (props: TMobileNav) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMobileMenu}
        className="p-2 cursor-pointer"
        aria-label="Menu"
      >
        <Hamburger />
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-full bg-primary z-50 flex px-10"
            >
              <div className="h-dvh w-0.5 bg-white relative z-50"></div>

              <div className="pl-2.5 w-full">
                <div className="flex mt-10 mb-14">
                  <button onClick={toggleMobileMenu}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.69531 6.75L8.66797 6.80469L13.0703 11.207L11.4023 12.875L7 8.44531L2.59766 12.875L0.929688 11.207L5.33203 6.80469L5.30469 6.75L5.33203 6.69531L0.929688 2.29297L2.59766 0.625L7 5.05469L11.4023 0.625L13.0703 2.29297L8.66797 6.69531L8.69531 6.75Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {props.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="font-extrabold text-white uppercase tracking-[0.1em] hover:text-dark-green"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href="#"
                    className="relative border-2 border-dashed border-white px-4 py-2.5 uppercase overflow-hidden transition-all group text-center"
                  >
                    <span className="relative z-10 text-white group-hover:text-white">
                      Platforma DNA
                    </span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-dark-green transition-all group-hover:w-full z-0" />
                  </Link>

                  <div className="border-t border-dark-green flex items-center justify-between pt-4">
                    <div className="flex gap-3.5">
                      <button
                        className="cursor-pointer uppercase outline-0 hover:text-black text-black text-[16px]"
                        aria-label="Change language"
                      >
                        <span className="relative z-10">SI</span>
                      </button>

                      <button
                        className="cursor-pointer uppercase outline-0 hover:text-black text-white text-[16px]"
                        aria-label="Change language"
                      >
                        <span className="relative z-10">EN</span>
                      </button>
                    </div>

                    <div onClick={() => props.setIsSearchOpen(prev => !prev)}>
                      <SearchIcon $isWhite />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {props.isSearchOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-full bg-primary px-10 z-50 flex"
            >
              <div className="h-dvh w-0.5 bg-white relative z-50"></div>

              <div className="pl-2.5 w-full">
                <div className="flex mt-10 mb-14">
                  <button onClick={() => props.setIsSearchOpen(prev => !prev)}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.69531 6.75L8.66797 6.80469L13.0703 11.207L11.4023 12.875L7 8.44531L2.59766 12.875L0.929688 11.207L5.33203 6.80469L5.30469 6.75L5.33203 6.69531L0.929688 2.29297L2.59766 0.625L7 5.05469L11.4023 0.625L13.0703 2.29297L8.66797 6.69531L8.69531 6.75Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Iskanje"
                    className="bg-dark-green text-white w-full px-3.5 py-2.5 text-[16px] pr-6 outline-0 placeholder-darker-green"
                  />

                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
                  >
                    <SearchIcon $isWhite />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
