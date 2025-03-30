import { NewsBlock } from "@/components/single-news.tsx/renderer";

export type TNewsData = {
  title: string;
  intro: string;
  heroImage: string;
  date: string;
  blocks: NewsBlock[];
};
