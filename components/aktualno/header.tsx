import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative bg-primary w-full h-50 grid md:grid-cols-[230px_160px_1fr] pt-7 items-start px-5 md:px-0">
      <div className="hidden md:flex">
        <Image
          src="/images/aktualno-header.webp"
          alt="Hero image decoration"
          width={220}
          height={205}
          className="absolute -top-2 -left-5"
        />
      </div>

      <div className="hidden md:block"></div>

      <h1 className="text-white text-[52px] leading-12 font-extrabold hidden md:flex">
        Aktualno
      </h1>
    </div>
  );
};
