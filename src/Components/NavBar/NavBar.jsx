import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoFastFood as Food } from "react-icons/io5";
import { MdNewspaper as Research } from "react-icons/md";
import { FaQuestion as Question } from "react-icons/fa6";

const NavBar = () => {
    const [navitem, setNavItem] = useState("barcode");
    const handleNavItem = (data) => {
        setNavItem(data);
    }

    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setNavItem("barcode");
                break;
            case "/research":
                setNavItem("research");
                break;
        }
    }, [location.pathname]);

    return (
        <div className="fixed flex flex-row justify-around sm:justify-between bg-white shadow-md top-0 w-screen p-4 sm:px-6">

            <Link to={"/"} className="flex flex-row gap-1 items-center font-medium font-Protest text-[22px] sm:text-[18px] cursor-pointer">
                <p className="p-1 rounded-[50%] border text-white bg-black">Pro</p>
                <p>Data</p>
            </Link>

            <div className="flex flex-row gap-5 justify-around">

                <div>
                    <Link to={"/"} className={`flex flex-row gap-3 items-center border border-gray-200 rounded-[10px] text-[20px] sm:text-[18px] px-4 p-3 cursor-pointer hover:bg-gray-200 duration-300 ease-in-out ${navitem === "barcode" ? `bg-gray-200` : `bg-transparent`}`} onClick={() => handleNavItem("barcode")}>
                        <Food />
                        <p className="text-[16px] sm:text-[14px] text-gray-500 sm:hidden">Barcode Scanner</p>
                    </Link>
                    {
                        navitem === "barcode" && <hr className="h-[1px] bg-black w-[80%] mx-auto" />
                    }
                </div>


                <div>
                    <Link to={"/research"} className={`flex flex-row gap-3 items-center border border-gray-200 rounded-[10px] text-[20px] sm:text-[18px] px-4 p-3 cursor-pointer hover:bg-gray-200 duration-300 ease-in-out ${navitem === "research" ? `bg-gray-200` : `bg-transparent`}`} onClick={() => handleNavItem("research")}>
                        <Research />
                        <p className="text-[16px] sm:text-[14px] text-gray-500 sm:hidden">Research Access</p>
                    </Link>
                    {
                        navitem === "research" && <hr className="h-[1px] bg-black w-[80%] mx-auto" />
                    }
                </div>
            </div>

            <div className="sm:hidden">
                <div className="p-2 cursor-pointer text-[18px] flex justify-center items-center text-center border hover:bg-gray-200 duration-300 ease-in-out rounded-[50%] text-black">
                    <Question />
                </div>
            </div>
        </div>
    )
}

export default NavBar;