import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";

export const Layout  = () => {
    return (
        <>
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
            <div className="footer">
                <a href="">Made by Ular</a>
            </div>
        </>
    )
}