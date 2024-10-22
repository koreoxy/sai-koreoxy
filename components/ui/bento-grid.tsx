import { cn } from "@/lib/utils";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  TitleLink,
  SourceLink,
  SourceTitle,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  TitleLink?: string;
  SourceLink?: string;
  SourceTitle?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-sm group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-white/[0.1] p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent border-gray-300 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 flex items-center gap-1">
          {title} {icon}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mt-2 flex justify-between">
          <Link
            href={link ? link : "#"}
            target="_blank"
            className="hover:underline text-muted-foreground hover:text-foreground"
          >
            <h1>{TitleLink}</h1>
          </Link>
          <Link
            href={SourceLink ? SourceLink : "#"}
            className="hover:underline flex gap-1 text-muted-foreground hover:text-foreground"
            target="_blank"
          >
            <h1>{SourceTitle}</h1>
            <GitHubLogoIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
