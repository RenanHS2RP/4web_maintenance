import Image from "next/image";
import { BiCategory, BiSolidDashboard } from "react-icons/bi";
import { FaIndustry, FaUser, FaWrench } from "react-icons/fa";
import NavBar from "./navbar";

export default function Aside() {
  return (
  <aside className="w-64 p-6 bg-white/20">
          <Image
            src={"/image.png"}
            className="w-full"
            alt="Logo"
            width={200}
            height={200}
          />
            <NavBar/>
        </aside>
  )
}