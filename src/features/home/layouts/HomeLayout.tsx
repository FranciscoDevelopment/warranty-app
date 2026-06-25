import { NavLink, Outlet } from "react-router-dom" ;
import { ROUTES } from "../../../shared/utils/Routes";


export default function HomeLayout () {

    return (

        <section>

            <header>

                <nav>

                    <article>
                        <NavLink to={ROUTES.HOME} >Inicio</NavLink>
                    </article>

                    <article>
                        <NavLink to={ROUTES.RECORD_PRODUCT} > Record a Product </NavLink>
                    </article>

                </nav>

            </header>

            <br /> <br />

            <Outlet/>

        </section>

    )

}
