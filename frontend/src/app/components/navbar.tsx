import { BiCategory, BiSolidDashboard } from "react-icons/bi";
import { FaIndustry, FaUser, FaWrench } from "react-icons/fa";

const links = [
  { target: "#", text: "Dashboard", icon: <BiSolidDashboard /> },
  { target: "#", text: "Ambiente", icon: <BiCategory /> },
  { target: "#", text: "Equipamentos", icon: <FaIndustry /> },
  { target: "#", text: "Manutenção", icon: <FaWrench /> },
  { target: "#", text: "Usuários", icon: <FaUser /> },
];

export default function NavBar() {
  return (
    <nav className="space-y-4 flex flex-col mt-8">
      {links.map((obj) => (
        <>
          <a
            href={obj.target}
            className="flex items-center gap-2 hover:text-gray-500 transition-all duration-500"
          >
            {obj.icon}
            {obj.text}
          </a>
        </>
      ))}
    </nav>
  );
}
