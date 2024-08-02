import { FaRegEdit, FaTrash } from "react-icons/fa";

interface Table {
  env: string;
  prio: string;
  req: string;
  status: string;
  desc: string;
}

function getPriorityClass(priority: string): string {
  switch (priority) {
    case "Alta":
      return "bg-red-500 bg-opacity-40"; 
    case "Média":
      return "bg-yellow-500 bg-opacity-40"; 
    case "Baixa":
      return "bg-green-500 bg-opacity-40"; 
    default:
      return "bg-gray-300 bg-opacity-40"; 
  }
}

export default function Table({ env, prio, req, status, desc }: Table) {
  return (
    <tr>
      <td className="p-2">{env}</td>
      <td className={`p-2 ${getPriorityClass(prio)}`}>{prio}</td>
      <td className="p-2">{req}</td>
      <td className="p-2">{status}</td>
      <td className="p-2">{desc}</td>
      <td className="p-2 h-100% ml-2 mr-2">
        <div className="flex flex-row justify-around">
          <FaRegEdit />
          <FaTrash />
        </div>
      </td>
    </tr>
  );
}
