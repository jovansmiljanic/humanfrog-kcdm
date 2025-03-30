import Link from "next/link";

export const Header = () => {
  return (
    <div className="relative bg-primary w-full h-50 grid md:grid-cols-[230px_160px_1fr] pt-7 items-start px-5 md:px-0">
      <div className="hidden md:flex">
        <Link
          href="/"
          className="text-white hidden md:flex md:items-center gap-3 uppercase font-extrabold pl-5"
        >
          <svg
            width="45"
            height="10"
            viewBox="0 0 45 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5L7.5 9.33013V0.669873L0 5ZM6.75 5.75H45V4.25H6.75V5.75Z"
              fill="#FFFFFF"
            />
          </svg>{" "}
          Aktualno
        </Link>
      </div>

      <div className="hidden md:block"></div>

      <Link
        href="/novice"
        className="text-white hidden md:flex md:items-center gap-3 uppercase font-extrabold pl-5"
      >
        <svg
          width="45"
          height="10"
          viewBox="0 0 45 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5L7.5 9.33013V0.669873L0 5ZM6.75 5.75H45V4.25H6.75V5.75Z"
            fill="#FFFFFF"
          />
        </svg>{" "}
        Novice
      </Link>
    </div>
  );
};
