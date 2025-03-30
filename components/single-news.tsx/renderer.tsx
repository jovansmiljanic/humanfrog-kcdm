"use client";

import Image from "next/image";
import React from "react";

export type NewsBlock =
  | { type: "heading-1"; text: string }
  | { type: "heading-2"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; source: string }
  | { type: "highlight"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string };

interface Props {
  blocks: NewsBlock[];
}

export default function NewsRenderer({ blocks }: Props) {
  return (
    <div className="prose max-w-none">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading-1": {
            return (
              <h1
                key={idx}
                className="mt-8 text-[32px] leading-9 text-lighter-green font-extrabold"
              >
                {block.text}
              </h1>
            );
          }

          case "heading-2": {
            return (
              <h2
                key={idx}
                className="mt-8 text-[32px] leading-9 text-lighter-green"
              >
                {block.text}
              </h2>
            );
          }

          case "paragraph":
            return (
              <p
                key={idx}
                className="text-dark-green text-[20px] font-georgia leading-8 py-5"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={idx} className="list-disc pl-5 space-y-1">
                {block.items.map((item, i) => (
                  <li key={i} className="text-dark-green text-[20px]">
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "highlight":
            return (
              <p
                key={idx}
                className="text-[#E7745E] text-2xl leading-8 pl-5 border-l-4 border-[#D8D7D3] mt-5"
              >
                {block.text}
              </p>
            );

          case "quote":
            return (
              <div
                key={idx}
                className="mt-8 border-l-4 pl-4 py-5 text-[#D8D7D3]"
              >
                <svg
                  width="163"
                  height="54"
                  viewBox="0 0 163 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M69.5558 53.3467C70.7199 53.3467 71.6636 52.403 71.6636 51.2389L71.6636 25.2432C71.6636 24.0792 70.7199 23.1355 69.5558 23.1355L54.8511 23.1355L59.017 0.652719L51.9912 0.652719L38.642 24.5406L38.765 24.532C38.6854 24.7542 38.642 24.9936 38.642 25.2432L38.642 51.2389C38.642 52.403 39.5857 53.3467 40.7498 53.3467L69.5558 53.3467Z"
                    fill="#4BAC87"
                  />
                  <path
                    d="M30.9137 53.3467C32.0778 53.3467 33.0215 52.403 33.0215 51.2389L33.0215 25.2432C33.0215 24.0792 32.0778 23.1355 30.9137 23.1355L16.209 23.1355L20.3749 0.652719L13.3491 0.652719L-6.73682e-05 24.5406L0.122949 24.532C0.0433134 24.7542 -6.73286e-05 24.9936 -6.73067e-05 25.2432L-6.50341e-05 51.2389C-6.49324e-05 52.403 0.943611 53.3467 2.10769 53.3467L30.9137 53.3467Z"
                    fill="#4BAC87"
                  />
                  <path
                    d="M93.4442 0.652832C92.2801 0.652832 91.3364 1.59651 91.3364 2.76059L91.3364 28.7563C91.3364 29.9204 92.2801 30.864 93.4442 30.864L108.149 30.864L103.983 53.3468L111.009 53.3468L124.358 29.4589L124.235 29.4675C124.315 29.2453 124.358 29.0059 124.358 28.7563L124.358 2.76059C124.358 1.5965 123.414 0.652826 122.25 0.652827L93.4442 0.652832Z"
                    fill="#4BAC87"
                  />
                  <path
                    d="M132.086 0.652832C130.922 0.652832 129.979 1.59651 129.979 2.76059L129.979 28.7563C129.979 29.9204 130.922 30.864 132.086 30.864L146.791 30.864L142.625 53.3468L149.651 53.3468L163 29.4589L162.877 29.4675C162.957 29.2453 163 29.0059 163 28.7563L163 2.76059C163 1.5965 162.056 0.652826 160.892 0.652827L132.086 0.652832Z"
                    fill="#4BAC87"
                  />
                </svg>

                <h1 className="text-[#E7745E] text-2xl leading-8 mt-3 mb-5">
                  {block.text}
                </h1>

                <div className="text-[18px] leading-7 text-[#222E29] flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#D8D7D3]"></div>

                  <h4>{block.source}</h4>
                </div>
              </div>
            );

          case "image":
            return (
              <Image
                src={block.src}
                alt={block.alt}
                width={600}
                height={340}
                className="w-full h-auto md:w-[600px] md:h-[340px] object-cover"
              />
            );

          case "video":
            return (
              <div key={idx} className="my-6 aspect-video border-t">
                <h1 className="text-lighter-green uppercase font-extrabold py-5">
                  {block.title}
                </h1>

                <iframe
                  src={block.src}
                  title={block.title}
                  aria-label={block.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
