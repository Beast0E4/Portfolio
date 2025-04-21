import { useState } from "react";

function Navbar () {
    const menu = ["Home", "Timeline", "Projects", "Achivements", "Contacts"];

    const [selected, setSelected] = useState ("Home");

    return (
        <div className="title fixed top-0 left-0 w-full flex justify-between items-center py-8 px-8">
            <div className="w-full">
                <h2 className="text-[#66b2b2] font-bold text-3xl">EbisonSojan</h2>
            </div>
            <div className="flex items-center justify-evenly gap-4 text-white font-semibold">
                {menu.map (option => (
                    <h2 onClick={() => setSelected (option)} className={`hover:cursor-pointer border-b-2 border-transparent ${selected === option ? `border-white` : ``}`}>{option}</h2>
                ))}
            </div>
        </div>
    )
}

export default Navbar;