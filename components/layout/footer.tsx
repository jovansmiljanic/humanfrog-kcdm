"use client";

// Vendors
import Link from "next/link";

// Local component
import { NewsletterForm } from "./newsletter-form";
import Image from "next/image";
import footerImage from "../../public/images/footer-image.webp";

export const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/KCDMslovenia/",
      icon: (
        <svg
          width="14"
          height="25"
          viewBox="0 0 14 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6484 14.3047L12.6719 14.3281H8.6875V24.5234H3.32031V14.3281H0.273438V9.80469H3.32031V7.85938C3.32031 6.59375 3.46094 5.5 3.74219 4.57812C4.03906 3.65625 4.47656 2.89844 5.0547 2.30469C5.6484 1.69531 6.3984 1.24219 7.3047 0.945312C8.2109 0.648438 9.2812 0.5 10.5156 0.5C10.9844 0.5 11.5547 0.539062 12.2266 0.617188C12.8984 0.695313 13.3984 0.773437 13.7266 0.851562V4.92969C13.5547 4.91406 13.3203 4.90625 13.0234 4.90625C12.7422 4.89063 12.4062 4.88281 12.0156 4.88281C10.8125 4.88281 9.9531 5.14062 9.4375 5.65625C8.9219 6.15625 8.6641 7 8.6641 8.1875V9.78125H13.4688L12.6484 14.3047Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/kcdm/posts/?feedView=all/",
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 24.5H19.0547V16.1094C19.0547 14.9531 18.8281 14.0703 18.375 13.4609C17.9375 12.8359 17.2656 12.5234 16.3594 12.5234C15.375 12.5234 14.625 12.8438 14.1094 13.4844C13.5938 14.1094 13.3359 14.9844 13.3359 16.1094V24.5H8.57812V8.49219H13.3359V10.6484C13.3359 10.6484 13.7109 10.2109 14.4609 9.33594C15.2266 8.46094 16.4609 8.02344 18.1641 8.02344C19.0078 8.02344 19.7891 8.15625 20.5078 8.42188C21.2109 8.67188 21.8203 9.0625 22.3359 9.59375C22.8516 10.125 23.2578 10.7891 23.5547 11.5859C23.8359 12.3828 23.9766 13.3125 23.9766 14.375V24.5234L24 24.5ZM2.92969 6.40625C2.13281 6.40625 1.44531 6.11719 0.867188 5.53906C0.289062 4.96094 0 4.25781 0 3.42969C0 2.61719 0.289062 1.92969 0.867188 1.36719C1.44531 0.789063 2.13281 0.5 2.92969 0.5C3.74219 0.5 4.42969 0.789063 4.99219 1.36719C5.57031 1.94531 5.85938 2.64063 5.85938 3.45312C5.85938 4.28125 5.57031 4.98438 4.99219 5.5625C4.42969 6.14062 3.74219 6.42969 2.92969 6.42969V6.40625ZM0.46875 24.5H5.4375V8.49219H0.46875V24.5Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Vimeo",
      url: "https://vimeo.com/kcdm/",
      icon: (
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.9766 4.8751H24.9531C24.9375 5.45322 24.8203 6.08604 24.6016 6.77354C24.3984 7.46104 24.0938 8.211 23.6875 9.0235C23.2812 9.8204 22.7812 10.6876 22.1875 11.6251C21.5781 12.547 20.8828 13.5392 20.1016 14.6017C19.2891 15.6642 18.5078 16.586 17.7578 17.3673C17.0078 18.1642 16.2891 18.8282 15.6016 19.3595C14.9141 19.8751 14.25 20.2657 13.6094 20.5313C12.9844 20.797 12.3984 20.9298 11.8516 20.9298C11.1484 20.9298 10.5 20.6017 9.90625 19.9454C9.32812 19.2892 8.78906 18.3282 8.28906 17.0626C8.17969 16.6876 8.04688 16.1954 7.89062 15.586C7.73438 14.9767 7.53906 14.2892 7.30469 13.5235C7.07031 12.7579 6.875 12.0782 6.71875 11.4845C6.5625 10.8751 6.42188 10.3751 6.29688 9.9845C5.95312 8.7189 5.58594 7.75791 5.19531 7.10166C4.80469 6.44541 4.39844 6.11729 3.97656 6.11729C3.89844 6.11729 3.70312 6.21885 3.39062 6.42198C3.07812 6.60948 2.65625 6.89854 2.125 7.28916L0.953125 5.8126C1.15625 5.67198 1.40625 5.46885 1.70312 5.20322C2 4.9376 2.34375 4.63291 2.73438 4.28916C3.125 3.92979 3.46875 3.6251 3.76562 3.3751C4.07812 3.10947 4.32812 2.89854 4.51562 2.74229C5.28125 2.08604 5.95312 1.57041 6.53125 1.19541C7.125 0.820407 7.63281 0.617287 8.05469 0.586037C9.02344 0.461037 9.78906 0.726657 10.3516 1.38291C10.9141 2.02354 11.3125 3.01572 11.5469 4.35948C11.7656 5.79698 11.9609 6.97666 12.1328 7.89854C12.3203 8.8048 12.4531 9.4532 12.5312 9.8439C12.8125 11.0313 13.1016 11.9298 13.3984 12.5392C13.6953 13.1485 14 13.4532 14.3125 13.4532C14.5469 13.4532 14.8516 13.2501 15.2266 12.8439C15.6172 12.422 16.0625 11.8282 16.5625 11.0626C17.0625 10.2501 17.4453 9.547 17.7109 8.9532C17.9766 8.3595 18.1328 7.85166 18.1797 7.42979C18.2578 6.74229 18.1641 6.22666 17.8984 5.88291C17.6328 5.53916 17.1875 5.36729 16.5625 5.36729C16.2969 5.36729 16.0078 5.39072 15.6953 5.4376C15.3984 5.48448 15.0938 5.58604 14.7812 5.74229C15.0781 4.77354 15.4375 3.92979 15.8594 3.21104C16.2812 2.50791 16.7734 1.92198 17.3359 1.45322C17.8984 0.984477 18.5234 0.632907 19.2109 0.398537C19.9141 0.179787 20.6797 0.0782268 21.5078 0.0938468C22.7422 0.140717 23.6484 0.570407 24.2266 1.38291C24.8047 2.17979 25.0547 3.34385 24.9766 4.8751Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="gap-6 mx-5 mb-20 md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-5 md:gap-28 border-t-8 border-[#D8D7D3] pt-5">
        <div className="order-2 md:order-1 border-t border-[#D8D7D3] pt-5 md:pt-0 md:border-0">
          <h1 className="text-dark-green font-bold uppercase tracking-[0.1em]">
            Spremljajte nas
          </h1>

          <div className="flex items-center justify-start gap-3 pt-3">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary hover:bg-dark-green flex justify-center items-center p-2 rounded-full w-12 h-12">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h1 className="text-dark-green font-bold uppercase tracking-[0.1em] pb-3">
            NAROČITE SE NA NAŠE E-NOVICE
          </h1>

          <NewsletterForm />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] items-start gap-5 md:gap-28 border-t-8 mt-7 border-[#D8D7D3] pt-5">
        <div>
          <h1 className="text-primary font-bold">Arhivske vsebine</h1>

          <p className="text-light-gray">
            Lorem ipsum dolor sit amet consectetur. Tempus blandit enim eget
            nunc enim. Tincidunt feugiat id eleifend eget. Fames condimentum
            scelerisque sollicitudin feugiat tellus lorem tristique iaculis.
            Mauris feugiat placerat.
          </p>
        </div>

        <div className="flex items-center gap-10 border-t-8 pt-5 md:pt-0 border-[#D8D7D3] md:border-0">
          <Image
            src={footerImage}
            alt="Ministarstvo za gospodarstvo turizem in sport"
            className="w-full md:w-[500px]"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[800px] border-t-2 mt-5 md:mt-10 border-[#D8D7D3] pt-5">
        <div className="flex flex-wrap flex-col items-start gap-x-4 gap-y-5 md:gap-y-0 md:items-center md:flex-row">
          <p className="text-light-gray after-dot">
            © Kompetenčni center za Design Management
          </p>

          <div className="hidden md:block md:w-0.5 md:h-0.5 md:bg-light-gray"></div>

          <Link href="/" className="after-dot">
            Pogoji uporabe
          </Link>

          <div className="hidden md:block md:w-0.5 md:h-0.5 md:bg-light-gray"></div>

          <Link href="/" className="after-dot">
            Politika zasebnosti
          </Link>

          <Link href="https://www.humanfrog.com/sl">
            <p className="after-image">
              Oblikovanje dasdas in razvoj spletnih strani: Humanfrog{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
