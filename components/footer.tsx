import { MdEmail } from "react-icons/md";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-2">
        <div className="flex items-center gap-1">
          <MdEmail size={15} />
          <h1>rayssankn@gmail.com</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          Sai - Koreoxy &copy; {new Date().getFullYear()}
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Footer;
