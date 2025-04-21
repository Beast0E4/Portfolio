import Home from "../pages/home/Home";
import Navbar from "../pages/navbar/Navbar";

function Layout () {
    return (
        <div className="bg-[#0F172A]">
            <Navbar />
            <Home />
        </div>
    )
}

export default Layout;