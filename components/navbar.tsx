import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";
import { Card } from "./ui/card";
import Image from "next/image";
import { FaGithub, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <Card className="flex gap-2 p-5 justify-between rounded-sm">
        <div className="flex flex-row items-center gap-2">
          <div className="animate-bounce duration-[10000ms] ease-in-out border border-gray-500 rounded-full hover:animate-none hover:ease-linear hover:cursor-pointer">
            <Image src="/avatar.png" width={50} height={50} alt="sa" />
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold">Sai - Koreoxy</h1>
            <h2 className="text-muted-foreground">
              Programmer Living in a dream
            </h2>
          </div>
        </div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <Link href="https://github.com/koreoxy" target="_blank">
            <FaGithub size={25} />
          </Link>
          <Link href="https://www.youtube.com/@1sh1sh" target="_blank">
            <FaYoutube size={25} />
          </Link>
          <ToggleTheme />
        </div>
      </Card>
    </div>
  );
};

export default Navbar;
