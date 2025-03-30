"use client";

// Local components
import { Header } from "./header";
import { Content } from "./content";
import { MobileHeader } from "./mobile-header";
import { TNewsData } from "@/types/news";

export const SingleNews = ({ data }: { data: TNewsData }) => {
  return (
    <div className="mt-5">
      <MobileHeader />

      <Header />

      <Content data={data} />
    </div>
  );
};
