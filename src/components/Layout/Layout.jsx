import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="main-inner">
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />

        </>
    );
}

export default Layout;