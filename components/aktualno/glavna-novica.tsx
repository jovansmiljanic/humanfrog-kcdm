import Image from "next/image";
import Link from "next/link";

export const GlavnaNovica = () => {
  const data = {
    title: "Nagrada Good Design Award Avstralija za projekt KCDM",
    description:
      "Kompetenčni center za design management svojim članom ponuja nabor pristopov, orodij in znanj -, ki podjetju omogoča, da design uporablja za doseganje poslovnih ciljev.",
    date: "1-3 april 2025",
    image: "/images/aktualno1.webp",
    href: "/novice",
  };

  return (
    <div className="border-b">
      <Image
        src={data.image}
        alt={data.title}
        width={600}
        height={340}
        className="w-full h-auto md:w-[600px] md:h-[340px] object-cover"
      />

      <Link href={data.href}>
        <h2 className="text-[32px] md:text-[52px] font-extrabold leading-9 md:leading-12 py-5">
          {data.title}
        </h2>
      </Link>

      <h2 className="text-2xl md:text-[32px] leading-8 md:leading-9 font-georgia text-[#3D5F52] pb-5">
        {data.description}
      </h2>

      <p className="text-[#737A77] pb-8">{data.date}</p>
    </div>
  );
};
