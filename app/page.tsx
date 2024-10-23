import AboutMe from "@/components/about-me";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Separator } from "@/components/ui/separator";
import { IconFolderOpen, IconArrowRoundaboutLeft } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <div className="mt-10 max-w-[21rem] sm:max-w-full mx-auto md:max-w-none">
        <div className="flex items-center gap-1">
          <h1>About Me</h1>
          <IconArrowRoundaboutLeft className="h-4 w-4 text-neutral-500" />
        </div>
        <Separator className="mb-5" />
        <AboutMe />
      </div>

      <div className="mt-10 max-w-[21rem] sm:max-w-full mx-auto md:max-w-none">
        <div className="flex items-center gap-1">
          <h1>Projects</h1>
          <IconFolderOpen className="h-4 w-4 text-neutral-500" />
        </div>
        <Separator className="mb-5" />
        <ProjectCard />
      </div>

      <div className="mt-10 max-w-[21rem] sm:max-w-full mx-auto md:max-w-none">
        <Footer />
      </div>
    </div>
  );
}
