import { FaRegEdit, FaTrash } from "react-icons/fa";

interface Table{
  env: string, 
  equip: string, 
  req: string, 
  treat: string, 
}

export default function Table({env, equip, req, treat}: Table) {
  return(<tr>
    <td className="p-2">{env}</td>
    <td className="p-2">{equip}</td>
    <td className="p-2">{req}</td>
    <td className="p-2">{treat}</td>
    <td className="p-2"><FaRegEdit /><FaTrash /></td>
  </tr>
  )
}