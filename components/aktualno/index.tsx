"use client";

// Vendors
import Link from "next/link";
import { motion } from "framer-motion";

// Local components
import { Header } from "./header";
import Image from "next/image";

export const Aktualno = () => {
  const links = [
    { label: "Novice", href: "#", active: true },
    { label: "Prihajajoči dogodki", href: "#" },
    { label: "Pretekli dogodki", href: "#" },
  ];

  const aktualno = [
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 april 2025",
    },
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 april 2025",
    },
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 april 2025",
    },
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 april 2025",
    },
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 april 2025",
    },
  ];

  const napovedujemo = [
    {
      title: "Design Management Europe konferenca",
      date: "1-3 april 2025",
      place: "amsterdam, nizozemska in online",
    },
    {
      title: "Design Management Europe konferenca",
      date: "1-3 april 2025",
      place: "amsterdam, nizozemska in online",
    },
    {
      title: "Design Management Europe konferenca",
      date: "1-3 april 2025",
      place: "amsterdam, nizozemska in online",
    },
  ];

  const glavnaNovica = {
    title: "Nagrada Good Design Award Avstralija za projekt KCDM",
    description:
      "Kompetenčni center za design management svojim članom ponuja nabor pristopov, orodij in znanj -, ki podjetju omogoča, da design uporablja za doseganje poslovnih ciljev.",
    date: "1-3 april 2025",
    image: "/images/aktualno1.webp",
  };

  return (
    <div className="mt-5">
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

      <div className="w-full grid md:grid-cols-[230px_160px_1fr] px-5 md:px-0">
        <div className="flex-col gap-2.5 pl-16 pr-7 hidden md:flex">
          <Link
            href="#"
            className="font-extrabold text-primary uppercase hover:text-lighter-green border-b border-lighter-gray pt-2.5 pb-2.5 relative"
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
          <div className="absolute h-[375px] w-0.5 bg-lighter-green z-30 -top-40 -left-0.5 hidden md:block"></div>
        </div>

        <div className="-translate-y-16">
          <div className="border-b">
            <Image
              src={glavnaNovica.image}
              alt={glavnaNovica.title}
              width={600}
              height={340}
              className="w-full h-auto md:w-[600px] md:h-[340px] object-cover"
            />

            <h2 className="text-[32px] md:text-[52px] font-extrabold leading-9 md:leading-12 py-5">
              {glavnaNovica.title}
            </h2>

            <h2 className="text-[24px] md:text-[32px] leading-8 md:leading-9 font-georgia text-[#3D5F52] pb-5">
              {glavnaNovica.description}
            </h2>

            <p className="text-[#737A77] pb-8">{glavnaNovica.date}</p>
          </div>

          <div className="grid grid-cols-1 gap-10 pt-5 md:grid-cols-[2fr_1fr]">
            <div>
              <h1 className="text-[#75726E] font-extrabold uppercase border-b border-lighter-gray pb-3">
                Aktualno
              </h1>

              {aktualno.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2.5 border-b border-lighter-gray py-3"
                >
                  <Link href="" className="group inline-block relative">
                    <h2 className="text-[20px] leading-6 font-georgia">
                      <span className="relative z-10 inline bg-gradient-to-r from-primary to-primary bg-[length:0%_100%] bg-left bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_100%] text-primary hover:text-white underline decoration-dotted">
                        {item.title}
                      </span>
                    </h2>
                  </Link>

                  <p className="text-[#737A77]">{item.date}</p>
                </div>
              ))}

              <div className="pt-3">
                <Link
                  href="#"
                  className="flex items-center gap-2 uppercase underline decoration-dotted"
                >
                  več novic{" "}
                  <svg
                    width="45"
                    height="9"
                    viewBox="0 0 45 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45 4.5L37.5 0.169873L37.5 8.83013L45 4.5ZM38.25 3.75L-6.55671e-08 3.75L6.55671e-08 5.25L38.25 5.25L38.25 3.75Z"
                      fill="#4BAC87"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h1 className="text-[#75726E] font-extrabold uppercase border-b border-lighter-gray pb-3">
                NAPOVEDUJEMO
              </h1>

              {napovedujemo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2.5 border-b border-lighter-gray py-3"
                >
                  <h2 className="font-extrabold text-[#3D5F52] uppercase">
                    {item.place}
                  </h2>

                  <p className="text-[#3D5F52]">{item.date}</p>

                  <Link href="" className="group inline-block relative">
                    <h2 className="text-[20px] leading-6 font-georgia">
                      <span className="relative z-10 inline bg-gradient-to-r from-primary to-primary bg-[length:0%_100%] bg-left bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_100%] text-primary hover:text-white underline decoration-dotted">
                        {item.title}
                      </span>
                    </h2>
                  </Link>
                </div>
              ))}

              <div className="pt-3">
                <Link
                  href="#"
                  className="flex items-center gap-2 uppercase underline decoration-dotted"
                >
                  več dogodkov{" "}
                  <svg
                    width="45"
                    height="9"
                    viewBox="0 0 45 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45 4.5L37.5 0.169873L37.5 8.83013L45 4.5ZM38.25 3.75L-6.55671e-08 3.75L6.55671e-08 5.25L38.25 5.25L38.25 3.75Z"
                      fill="#4BAC87"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
