import Image from "next/image";
import Link from "next/link";
import React from "react";

const AvatarBar = () => {
  return (
    <Link
      href="https://github.com/koreoxy"
      target="_blank"
      title="My Github"
      className="relative group flex items-center gap-3 justify-center bg-gradient-to-br from-[#282829] to-[#333335] dark:from-[#000000] dark:to-[#000000] text-white p-2 rounded-full overflow-hidden border border-zinc-700 ring-1 ring-transparent hover:ring hover:ring-zinc-600 hover:shadow-xl duration-300"
    >
      <div className="h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-700 transition-none group-hover:transition-all group-hover:duration-700 group-hover:delay-200" />

      <div className="relative size-10 md:size-12 rounded-full overflow-hidden bg-white/20">
        <Image src="/avatar.png" alt="avatar img" fill />
      </div>
      <div className="text-left">
        <div className="text-sm md:text-base">Sai - Koreoxy</div>
        <div className="text-xs md:text-sm text-gray-400">
          Programmer Living in a dream
        </div>
      </div>

      <svg
        className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
};

export default AvatarBar;
