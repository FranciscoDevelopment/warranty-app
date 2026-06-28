import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
    to: string;
    icon: LucideIcon;
    label: string;
}

export default function SidebarItem({
    to,
    icon: Icon,
    label,
}: SidebarItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors
                ${
                    isActive
                        ? "bg-blue-500 text-white"
                        : "text-slate-200 hover:bg-blue-800"
                }`
            }
        >
            <Icon size={20} />
            <span>{label}</span>
        </NavLink>
    );
}