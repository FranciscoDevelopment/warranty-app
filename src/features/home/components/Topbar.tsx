import { Bell, Plus, Search, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../shared/utils/Routes";

export default function Topbar() {
    return (
        <header className="h-24 bg-white border-b border-slate-200 px-8 flex items-center justify-between">

            {/* Lado izquierdo */}
            <div>

                <h1 className="text-3xl font-bold text-slate-900">
                    Mis Garantías
                </h1>

                <p className="text-slate-500 mt-1">
                    Estado general de tus productos
                </p>

            </div>

            {/* Lado derecho */}
            <div className="flex items-center gap-4">

                {/* Buscador */}
                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-72 rounded-lg border border-slate-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                {/* Notificaciones */}
                <button
                    className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100 transition"
                >
                    <Bell size={20} />
                </button>

                {/* Agregar producto */}
                <Link
                    to={ROUTES.RECORD_PRODUCT}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
                >
                    <Plus size={18} />
                    Agregar producto
                </Link>

                {/* Usuario */}
                <button className="rounded-full hover:bg-slate-100 transition p-1">
                    <UserCircle size={36} />
                </button>

            </div>

        </header>
    );
}