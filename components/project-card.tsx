import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconTableColumn,
  IconCameraAi,
  IconBrandHipchat,
  IconCalendarMonth,
} from "@tabler/icons-react";

import {
  RiTailwindCssFill,
  RiSupabaseFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiPrisma } from "react-icons/si";

export function ProjectCard() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          link={item.link}
          TitleLink={item.TitleLink}
          SourceLink={item.SourceLink}
          SourceTitle={item.SourceTitle}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({
  title,
  nextjs: Nextjs,
  tailwindcss: Tailwind,
  prisma: Prisma,
  supabase: Supabase,
}: {
  title: string;
  nextjs?: React.ElementType;
  tailwindcss?: React.ElementType;
  prisma?: React.ElementType;
  supabase?: React.ElementType;
}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent border-gray-900 dark:border-white/[0.9] bg-neutral-100 dark:bg-black relative">
    <div className="absolute inset-0 z-0 bg-dot-black/[0.2] rounded-xl"></div>

    <div className="z-10 relative flex items-center justify-center mx-auto flex-col">
      <h1 className="font-bold">{title}</h1>
      <div className="flex gap-2 mt-2">
        {Nextjs ? <Nextjs size={30} /> : null}
        {Tailwind ? <Tailwind size={30} /> : null}
        {Prisma ? <Prisma size={30} /> : null}
        {Supabase ? <Supabase size={30} /> : null}
      </div>
    </div>
  </div>
);

const items = [
  {
    title: "NutrixSense",
    description:
      "NutrixSense application is a web-based application that aims to calculate daily calories and nutrients in Indonesia using object detection from the YOLOv8 model. This application also allows users to calculate calories and nutrients in food manually. Currently, NutrixSense can only detect 10 types of food.",
    header: (
      <Skeleton
        title="NutrixSense"
        nextjs={RiNextjsFill}
        tailwindcss={RiTailwindCssFill}
        prisma={SiPrisma}
        supabase={RiSupabaseFill}
      />
    ),
    className: "md:col-span-2",
    icon: <IconCameraAi className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/koreoxy/nutrixsense",
    TitleLink: "Live Demo",
    SourceLink: "https://github.com/koreoxy/nutrixsense",
  },
  {
    title: "Sihati-Siswa",
    description:
      "The Sihati-Siswa project is an informational website system for junior high school students to share their thoughts and experiences through an online platform.",
    header: (
      <Skeleton
        title="Sihati-Siswa"
        nextjs={RiNextjsFill}
        tailwindcss={RiTailwindCssFill}
        prisma={SiPrisma}
        supabase={RiSupabaseFill}
      />
    ),
    className: "md:col-span-1",
    icon: <IconBrandHipchat className="h-4 w-4 text-neutral-500" />,
    link: "https://sihati-siswa.vercel.app",
    TitleLink: "Live Demo",
  },
  {
    title: "Calender-Hijriah",
    description:
      "Calender-Hijriah is a web tool for converting the Gregorian calendar to the Hijri calendar, available in Arabic and Acehnese languages.",
    header: (
      <Skeleton
        title="Calender-Hijriah"
        nextjs={RiNextjsFill}
        tailwindcss={RiTailwindCssFill}
        prisma={SiPrisma}
        supabase={RiSupabaseFill}
      />
    ),
    className: "md:col-span-1",
    icon: <IconCalendarMonth className="h-4 w-4 text-neutral-500" />,
    link: "https://calender-hijriah.netlify.app",
    TitleLink: "Live Demo",
    SourceLink: "https://github.com/koreoxy/calendar-hijriah",
  },
  {
    title: "Expert System Application",
    description:
      "This expert system application is a desktop application for diagnosing skin diseases, built using the Python programming language and the PySimpleGUI GUI library.",
    header: (
      <Skeleton
        title="Expert System Application"
        nextjs={RiNextjsFill}
        tailwindcss={RiTailwindCssFill}
        prisma={SiPrisma}
        supabase={RiSupabaseFill}
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    SourceLink: "https://github.com/koreoxy/aplikasi-sistem-pakar",
    SourceTitle: "Source Code",
  },
];
