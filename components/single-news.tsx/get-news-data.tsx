import { TNewsData } from "@/types/news";

export async function getNewsData(slug: string): Promise<TNewsData> {
  console.log(slug);

  return {
    title: "Nagrada Good Design Award Avstralija za projekt KCDM",
    intro:
      "Kompetenčni center za design management svojim članom ponuja nabor pristopov, orodij in znanj -, ki podjetju omogoča, da design uporablja za doseganje poslovnih ciljev.",
    heroImage: "/images/aktualno1.webp",
    date: "3. april 2025",

    blocks: [
      {
        type: "paragraph",
        text: "Celostno razumevanje in učinkovito upravljanje področij designa: link design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki.",
      },
      {
        type: "paragraph",
        text: "Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.",
      },
      {
        type: "list",
        items: [
          "design raziskav",
          "storitvenega oblikovanja",
          "Collaboration across 5 government agencies",
          "storitvenega oblikovanja",
          "design raziskav",
        ],
      },
      {
        type: "heading-2",
        text: "To je mednaslov 2 lorem ipsum dolor sit amet consiliqur malanga ",
      },
      {
        type: "paragraph",
        text: "Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki, design razmišljanja.",
      },
      {
        type: "video",
        src: "https://player.vimeo.com/video/376920894?api=1&player_id=vid1_vimeo_api",
        title: "KCDM Design Strategy Overview",
      },
      {
        type: "heading-1",
        text: "To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga ",
      },
      {
        type: "paragraph",
        text: "Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.",
      },
      {
        type: "list",
        items: [
          "design raziskav",
          "storitvenega oblikovanja",
          "Collaboration across 5 government agencies",
          "storitvenega oblikovanja",
          "design raziskav",
        ],
      },
      {
        type: "highlight",
        text: "This is the Highlight. Lorem ipsum gulih dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
      },

      {
        type: "heading-1",
        text: "To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga ",
      },
      {
        type: "paragraph",
        text: "Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.",
      },

      {
        type: "quote",
        text: "This is the quote. Lorem ipsum gulih dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
        source: "Jaka Jaklič, Podjetje d.o.o.",
      },
    ],
  };
}
