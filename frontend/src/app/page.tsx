"use client";

import Image from "next/image";
import { AiFillBulb, AiFillClockCircle } from "react-icons/ai";
import { BiCategory, BiSolidDashboard } from "react-icons/bi";
import { DiAndroid } from "react-icons/di";
import { FaBuilding, FaIndustry, FaUser, FaWrench } from "react-icons/fa";
import { Footer } from "./components/footer";
import Aside from "./components/aside";
import Table from "./components/table";
import { useState } from "react";

const cards = [
  {
    color: "bg-red-600",
    quantity: "200",
    text: "Ambientes",
    icon: <FaBuilding className="text-5xl mx-auto" />,
  },
  {
    color: "bg-yellow-500",
    quantity: "200",
    text: "Ambientes",
    icon: <DiAndroid className="text-5xl mx-auto" />,
  },
  {
    color: "bg-green-600",
    quantity: "200",
    text: "Ambientes",
    icon: <AiFillClockCircle className="text-5xl mx-auto" />,
  },
  {
    color: "bg-blue-600",
    quantity: "200",
    text: "Ambientes",
    icon: <AiFillBulb className="text-5xl mx-auto" />,
  },
];

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="flex flex-col min-h-screen">
      <section className="flex-1 flex h-full">
        <div className="fixed top-0 h-10px">
          <Aside />
        </div>
        <main className="ml-64 flex-1">
          <h1 className="text-4xl font-bold uppercase w-full transparent chgfont p-6 text-center">
            Sistema de Gestão de manutenção
          </h1>
          <div className="p-6">
            <div className="p-4 mt-6 transparent rounded-xl">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
                onClick={toggleExpand}
              >
                {isExpanded ? "Fechar" : "Expandir"} Área
              </button>
              {isExpanded && (
                <div className="bg-blue-100 p-4 rounded-xl mb-4">
                  Conteúdo da área expansível
                </div>
              )}
              <table className="w-full bg-blue-100 rounded-xl data-table">
                <thead className="rounded-xl">
                  <tr className="bg-blue-400 ">
                    <th className="w-[20%] p-2">Ambiente</th>
                    <th className="w-[15%] p-2">Prioridade</th>
                    <th className="w-[15%] p-2">Solicitação</th>
                    <th className="w-[15%] p-2">Status</th>
                    <th className="w-[30%] p-2">Descrição</th>
                    <th className="w-[5%] p-2">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((obj, index) => (
                    <Table
                      key={index}
                      env={obj.enviroment}
                      prio={obj.priority}
                      req={obj.request}
                      status={obj.status} 
                      desc={obj.desc}                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Footer />
        </main>
      </section>
    </section>
  );
}

const table = [
  {
    "enviroment": "Caldearia",
    "priority": "Alta",
    "equipment": "Chave de fenda, Chave inglesa",
    "request": "2024-08-01 10:30",
    "status": "Em andamento",
    "desc": "Manutenção das válvulas de segurança"
},
{
    "enviroment": "Ferramentaria",
    "priority": "Média",
    "equipment": "Martelo, Alicate",
    "request": "2024-08-01 09:00",
    "status": "Concluído",
    "desc": "Reparo de ferramentas manuais"
},
{
    "enviroment": "Ala-B",
    "priority": "Baixa",
    "equipment": "Multímetro, Ferro de solda",
    "request": "2024-08-01 11:15",
    "status": "Pendente",
    "desc": "Inspeção do sistema elétrico"
},
{
    "enviroment": "Linha de Montagem",
    "priority": "Alta",
    "equipment": "Chave inglesa, Chave de torque",
    "request": "2024-08-01 08:45",
    "status": "Em andamento",
    "desc": "Ajuste dos parafusos de segurança"
},
{
    "enviroment": "Depósito",
    "priority": "Média",
    "equipment": "Empilhadeira, Carrinho de mão",
    "request": "2024-08-01 10:00",
    "status": "Em andamento",
    "desc": "Manutenção da empilhadeira"
},
{
    "enviroment": "Sala de Máquinas",
    "priority": "Alta",
    "equipment": "Chave Allen, Lubrificante",
    "request": "2024-08-01 09:30",
    "status": "Concluído",
    "desc": "Lubrificação das engrenagens"
},
{
    "enviroment": "Pintura",
    "priority": "Baixa",
    "equipment": "Compressor de ar, Pistola de pintura",
    "request": "2024-08-01 11:00",
    "status": "Pendente",
    "desc": "Limpeza do compressor de ar"
},
{
    "enviroment": "Soldagem",
    "priority": "Alta",
    "equipment": "Máscara de solda, Eletrodo",
    "request": "2024-08-01 08:15",
    "status": "Em andamento",
    "desc": "Substituição de eletrodos de solda"
},
{
    "enviroment": "Qualidade",
    "priority": "Média",
    "equipment": "Micrômetro, Paquímetro",
    "request": "2024-08-01 10:45",
    "status": "Concluído",
    "desc": "Calibração de instrumentos de medição"
},
{
    "enviroment": "Mecânica",
    "priority": "Alta",
    "equipment": "Chave de boca, Martelo de borracha",
    "request": "2024-08-01 09:00",
    "status": "Em andamento",
    "desc": "Reparo na transmissão mecânica"
},
{
    "enviroment": "Elétrica",
    "priority": "Alta",
    "equipment": "Multímetro, Chave de teste",
    "request": "2024-08-01 08:00",
    "status": "Em andamento",
    "desc": "Revisão do sistema de fiação"
},
{
    "enviroment": "Hidráulica",
    "priority": "Média",
    "equipment": "Mangueiras, Chave de grifo",
    "request": "2024-08-01 09:45",
    "status": "Concluído",
    "desc": "Troca de mangueiras hidráulicas"
},
{
    "enviroment": "Pneumática",
    "priority": "Baixa",
    "equipment": "Compressor de ar, Regulador de pressão",
    "request": "2024-08-01 10:30",
    "status": "Pendente",
    "desc": "Verificação do sistema pneumático"
},
{
    "enviroment": "Robótica",
    "priority": "Alta",
    "equipment": "Chave de fenda, Multímetro",
    "request": "2024-08-01 08:30",
    "status": "Em andamento",
    "desc": "Manutenção preventiva dos robôs"
},
{
    "enviroment": "Logística",
    "priority": "Média",
    "equipment": "Empilhadeira, Carrinho de mão",
    "request": "2024-08-01 09:30",
    "status": "Concluído",
    "desc": "Verificação de segurança da empilhadeira"
}
];
