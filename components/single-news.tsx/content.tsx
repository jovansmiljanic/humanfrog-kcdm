import Link from "next/link";
import NewsRenderer from "./renderer";
import Image from "next/image";
import { TNewsData } from "@/types/news";

export const Content = ({ data }: { data: TNewsData }) => {
  return (
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

      <div className="-translate-y-28">
        <div className="mx-0 md:px-4 py-8 max-w-3xl">
          <div className="bg-white p-10">
            <h1 className="text-lighter-green text-[52px] leading-12 font-extrabold">
              {data.title}
            </h1>
          </div>

          <Image
            src={data.heroImage}
            alt={data.title}
            width={600}
            height={340}
            className="w-full h-auto md:w-[600px] md:h-[340px] object-cover"
          />

          <div className="text-light-gray pt-7">{data.date}</div>

          <div className="h-0.5 w-32 bg-primary my-5"></div>

          <p className="text-[32px] leading-9 text-[#3D5F52] font-georgia">
            {data.intro}
          </p>
          <NewsRenderer blocks={data.blocks} />
        </div>
      </div>
    </div>
  );
};
