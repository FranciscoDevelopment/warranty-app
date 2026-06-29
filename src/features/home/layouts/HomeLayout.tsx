import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function HomeLayout() {

    return (

        <main className="min-h-screen bg-[#F6F8FC]">

            <div className="flex flex-col lg:flex-row">

                <Sidebar />

                <section className="flex-1 flex flex-col w-full pt-16 lg:pt-0">

                    <Topbar />

                    <div className="p-4 sm:p-6 lg:p-10">
                        <Outlet />
                    </div>

                </section>

            </div>

        </main>

    );

}
