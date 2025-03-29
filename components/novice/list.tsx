"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { Pagination } from "./pagination";

type NewsItem = {
  title: string;
  date: string;
  href: string;
};

const newsData: NewsItem[] = [
  {
    title: "Nagrada Good Design Award Avstralija za projekt KCDM",
    date: "3. april 2025",
    href: "#",
  },
  {
    title: "Projekt KCDM izpostavljen na mednarodni razstavi",
    date: "4. april 2025",
    href: "#",
  },
  {
    title: "KCDM med finalisti za arhitekturno nagrado leta",
    date: "5. april 2025",
    href: "#",
  },
  {
    title: "Izjemen uspeh KCDM na natečaju za urbano prenovo",
    date: "6. april 2025",
    href: "#",
  },
  {
    title: "KCDM v središču pozornosti na tednu oblikovanja",
    date: "7. april 2025",
    href: "#",
  },
  {
    title: "Sodelovanje KCDM z vodilnimi arhitekti",
    date: "8. april 2025",
    href: "#",
  },
  {
    title: "KCDM razkriva nove trajnostne rešitve",
    date: "9. april 2025",
    href: "#",
  },
  {
    title: "KCDM projekt predstavljajo v Bruslju",
    date: "10. april 2025",
    href: "#",
  },
  { title: "Mediji poročajo o uspehu KCDM", date: "11. april 2025", href: "#" },
  {
    title: "KCDM s pilotnim projektom v središču Ljubljane",
    date: "12. april 2025",
    href: "#",
  },
  {
    title: "KCDM pridobil dodatna evropska sredstva",
    date: "13. april 2025",
    href: "#",
  },
  {
    title: "Študentje sodelujejo v razvoju KCDM",
    date: "14. april 2025",
    href: "#",
  },
  {
    title: "KCDM pohvaljen za vključevanje skupnosti",
    date: "15. april 2025",
    href: "#",
  },
  {
    title: "Novi prostorski načrti vključujejo rešitve KCDM",
    date: "16. april 2025",
    href: "#",
  },
  {
    title: "KCDM organizira okroglo mizo o prihodnosti mest",
    date: "17. april 2025",
    href: "#",
  },
  {
    title: "KCDM med primeri dobrih praks na dogodku OECD",
    date: "18. april 2025",
    href: "#",
  },
  {
    title: "KCDM prejme nagrado za digitalno inovacijo",
    date: "19. april 2025",
    href: "#",
  },
  {
    title: "Razstava KCDM navdušila obiskovalce",
    date: "20. april 2025",
    href: "#",
  },
  {
    title: "KCDM sodeluje z občinami pri prenovah",
    date: "21. april 2025",
    href: "#",
  },
  {
    title: "Uradna otvoritev nove KCDM platforme",
    date: "22. april 2025",
    href: "#",
  },
  {
    title: "KCDM nagrajen za vključevanje mladih",
    date: "23. april 2025",
    href: "#",
  },
  {
    title: "KCDM izbran za pilotni projekt v EU",
    date: "24. april 2025",
    href: "#",
  },
  {
    title: "Sklepni dogodek projekta KCDM v maju",
    date: "25. april 2025",
    href: "#",
  },
];

const ITEMS_PER_PAGE = 10;

export const List = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(pageParam, totalPages));

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return newsData.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-7 pt-5 pb-24 px-5 md:px-0">
      {currentItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2.5 pb-7 border-b border-lighter-gray"
        >
          <Link href={item.href} className="group inline-block relative">
            <h2 className="text-[32px] md:text-[52px] font-extrabold leading-7 md:leading-12">
              <span className="relative z-10 inline bg-gradient-to-r from-primary to-primary bg-[length:0%_100%] bg-left bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_100%] text-primary hover:text-white underline decoration-dotted">
                {item.title}
              </span>
            </h2>
          </Link>

          <p className="text-light-gray uppercase">{item.date}</p>
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
};
