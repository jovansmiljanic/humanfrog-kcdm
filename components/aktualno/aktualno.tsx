import Link from "next/link";

export const AktualnoSection = () => {
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

  return (
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
  );
};
