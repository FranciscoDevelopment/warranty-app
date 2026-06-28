import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function HomeLayout() {

    return (

        <main className="min-h-screen bg-slate-100">

            <div className="flex">

                <Sidebar />

                <section className="flex-1 flex flex-col">

                    <Topbar />

                    <div className="p-8">

                        <Outlet />

                    </div>

                </section>

            </div>

        </main>

    );

}
