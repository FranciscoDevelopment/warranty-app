import {
    House,
    Package,
    PlusCircle,
    Bell,
    Settings,
    ShieldCheck,
    UserCircle,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

import { ROUTES } from "../../../shared/utils/Routes";

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex w-72 bg-[#0E2F66] text-white flex-col justify-between">

            <div>

                <div className="px-6 py-8 border-b border-blue-800">

                    <div className="flex items-center gap-3">

                        <ShieldCheck size={34} />

                        <div>

                            <h2 className="font-bold text-lg">
                                Warranty
                            </h2>

                            <p className="text-sm text-slate-300">
                                Tracker
                            </p>

                        </div>

                    </div>

                </div>

                <nav className="flex flex-col gap-2 p-4">

                    <SidebarItem
                        to={ROUTES.HOME}
                        icon={House}
                        label="Dashboard"
                    />

                    <SidebarItem
                        to={ROUTES.HOME}
                        icon={Package}
                        label="Productos"
                    />

                    <SidebarItem
                        to={ROUTES.RECORD_PRODUCT}
                        icon={PlusCircle}
                        label="Agregar producto"
                    />

                    <button
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-200 hover:bg-blue-800 transition-colors"
                    >
                        <Bell size={20} />
                        Recordatorios
                    </button>

                    <button
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-200 hover:bg-blue-800 transition-colors"
                    >
                        <Settings size={20} />
                        Configuración
                    </button>

                </nav>

            </div>

            <div className="border-t border-blue-800 p-6">

                <div className="flex items-center gap-3">

                    <UserCircle size={40} />

                    <div>

                        <p className="font-semibold">
                            Usuario
                        </p>

                        <span className="text-sm text-slate-300">
                            Warranty Manager
                        </span>

                    </div>

                </div>

            </div>

        </aside>
    );
}