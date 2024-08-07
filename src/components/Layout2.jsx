import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"


const Layout = () => {
    return (
    <>
            <div className="d-flex ">
                <div className="flex-shrink-0 border-end">
                    <Sidebar />
                </div>
                <div className="flex-grow-1">
                    <main>
                        <Header />
                        <Outlet />
                    </main>
                </div>
                
            </div>
     <Footer />
     </>
    )
}

export default Layout