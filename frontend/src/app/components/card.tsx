import { FaBuilding } from "react-icons/fa";

interface CardProps {
  color?: string;
  qty?: string;
  text?: string;
  icon?: React.ReactNode;
}

export default function Card({color, qty, text, icon}: CardProps) {
  return (
    <div className={`${color} p-6 flex items-center gap-4 rounded-xl`}>
      <div className="flex flex-col">
        <strong className="text-3xl font-bold">{qty}</strong>
        <span className="text-sm text-zinc-500">{text}</span>
      </div>
      {icon}
    </div>
  );
}
