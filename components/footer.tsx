import { MdEmail } from "react-icons/md";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm">Sai - Koreoxy &copy; 2024 </div>
        <div className="flex items-center gap-1">
          <MdEmail size={15} />
          <h1>rayssankn@gmail.com</h1>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Footer;
