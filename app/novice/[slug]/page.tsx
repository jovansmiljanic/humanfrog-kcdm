import { SingleNews } from "@/components/single-news.tsx";
import { getNewsData } from "@/components/single-news.tsx/get-news-data";
import { TNewsData } from "@/types/news";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data
  const newsData: TNewsData = await getNewsData(slug);

  return {
    title: newsData.title,
  };
}

export default async function Page({ params }: Props) {
  const param = await params;
  const newsData: TNewsData = await getNewsData(param.slug);

  return <SingleNews data={newsData} />;
}
