import Image from "next/image";
import { AiFillClockCircle } from "react-icons/ai";
import { BiCategory, BiSolidDashboard } from "react-icons/bi";
import { DiAndroid } from "react-icons/di";
import { FaBuilding, FaIndustry, FaUser, FaWrench } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <aside className="w-64 p-6 bg-green-100">
          <Image
            src={"/image.png"}
            className="w-full"
            alt="Logo"
            width={200}
            height={200}
          />
          <nav className="space-y-4 flex flex-col mt-8">
            <a
              href=""
              className="flex items-center gap-2 hover:text-gray-500 transition-all duration-500"
            >
              <BiSolidDashboard />
              Dashboard
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:text-gray-500 transition-all duration-500"
            >
              <BiCategory />
              Ambientes
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:text-gray-500 transition-all duration-500"
            >
              <FaIndustry />
              Maquinarios
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:text-gray-500 transition-all duration-500"
            >
              <FaWrench />
              Manutenções
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:text-gray-500 transition-all duration-500"
            >
              <FaUser />
              Usuários
            </a>
          </nav>
        </aside>
        <main className="flex-1">
          <h1 className="text-4xl font-bold uppercase w-full bg-green-400 p-6 text-center">
            Sistema de Gestão de manutenção
          </h1>
          <div className="p-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-orange-200 p-6 flex items-center gap-4 rounded-xl">
                <div className="flex flex-col">
                  <strong className="text-3xl font-bold">200</strong>
                  <span className="text-sm text-zinc-500">Ambientes</span>
                </div>
                <FaBuilding className="text-5xl mx-auto" />
              </div>
              <div className="bg-green-200 p-6 flex items-center gap-4 rounded-xl">
                <div className="flex flex-col">
                  <strong className="text-3xl font-bold">200</strong>
                  <span className="text-sm text-zinc-500">Ambientes</span>
                </div>
                <DiAndroid className="text-5xl mx-auto" />
              </div>
              <div className="bg-blue-200 p-6 flex items-center gap-4 rounded-xl">
                <div className="flex flex-col">
                  <strong className="text-3xl font-bold">200</strong>
                  <span className="text-sm text-zinc-500">Ambientes</span>
                </div>
                <AiFillClockCircle className="text-5xl mx-auto" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="p-6 bg-green-100 text-center text-black">
        Footer
      </footer>
    </div>
  );
}
