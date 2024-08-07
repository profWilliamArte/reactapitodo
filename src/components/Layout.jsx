import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"


const Layout = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-4 col-md-3 col-lg-3 col-xl-2 col-xxl-1 p-0 m-0 border-end">
                    <Sidebar />
                </div>
                <div className="col-8 col-md-9 col-lg-9 col-xl-10 col-xxl-11 ">
                    <main>
                        <Header />
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout