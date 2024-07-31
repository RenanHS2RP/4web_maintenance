import Image from "next/image";
import { AiFillBulb, AiFillClockCircle } from "react-icons/ai";
import { BiCategory, BiSolidDashboard } from "react-icons/bi";
import { DiAndroid } from "react-icons/di";
import { FaBuilding, FaIndustry, FaUser, FaWrench } from "react-icons/fa";
import { Footer } from "./components/footer";
import Aside from "./components/aside";
import Card from "./components/card";
import Table from "./components/table";

const cards = [
  {
    color: "bg-orange-300",
    quantity: "200",
    text: "Ambientes",
    icon: <FaBuilding className="text-5xl mx-auto" />,
  },
  {
    color: "bg-green-300",
    quantity: "200",
    text: "Ambientes",
    icon: <DiAndroid className="text-5xl mx-auto" />,
  },
  {
    color: "bg-red-300",
    quantity: "200",
    text: "Ambientes",
    icon: <AiFillClockCircle className="text-5xl mx-auto" />,
  },
  {
    color: "bg-blue-300",
    quantity: "200",
    text: "Ambientes",
    icon: <AiFillBulb className="text-5xl mx-auto" />,
  },
];

const table = [
  {
    enviroment: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    equipment: "Steel Ball",
    request: "Horse",
    treatment: "Nyo-ho",
  },
  // Adicione mais linhas conforme necessário
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex">
        <Aside />
        <main className="flex-1">
          <h1 className="text-4xl font-bold uppercase w-full bg-white/20 p-6 text-center">
            Sistema de Gestão de manutenção
          </h1>
          <div className="p-6">
            <div className="grid grid-cols-4 gap-4">
              {cards.map((obj, index) => (
                <Card
                  key={index}
                  color={obj.color}
                  qty={obj.quantity}
                  text={obj.text}
                  icon={obj.icon}
                />
              ))}
            </div>
            <div className="p-6 mt-6 bg-white/20 rounded-xl">
              <table className="w-full bg-green-100 rounded-xl">
                <thead>
                  <tr className="bg-green-300">
                    <th className="w-[40%] p-2">Ambiente</th>
                    <th className="w-[20%] p-2">Equipamento</th>
                    <th className="w-[15%] p-2">Solicitação</th>
                    <th className="w-[15%] p-2">Hello</th>
                    <th className="w-[10%] p-2">Hello</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((obj, index) => (
                    <Table
                      key={index}
                      env={obj.enviroment}
                      equip={obj.equipment}
                      req={obj.request}
                      treat={obj.treatment}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
