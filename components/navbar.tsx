import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";
import { Card } from "./ui/card";
import { FaGithub, FaYoutube } from "react-icons/fa";
import AvatarBar from "./AvatarBar";

const Navbar = () => {
  return (
    <div>
      <Card className="flex gap-2 p-5 justify-between rounded-sm">
        <div className="flex flex-row items-center gap-2">
          <AvatarBar />
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
