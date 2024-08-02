import Image from "next/image";
import { BiCategory, BiSolidDashboard } from "react-icons/bi";
import { FaIndustry, FaUser, FaWrench } from "react-icons/fa";
import NavBar from "./navbar";

export default function Aside() {
  return (
    <aside className="w-64 h-screen flex flex-col p-6 transparent">
      <Image
        src={"/image.png"}
        className="w-full"
        alt="Logo"
        width={4000}
        height={4000}
      />
      <NavBar />
    </aside>
  );
}
