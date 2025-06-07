"use client"

import Image from "next/image"
import Header from "./Header"
import logo from "../../public/logo.jpeg"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import Sidebar from "./Sidebar"
import { useState } from "react"
import Overlay from "./Overlay"
import PrimaryButton from "./PrimaryButton"
import NavbarDropdown from "./NavbarDropdown"

const Navbar = () => {

    const navbarItems = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Academics", href: "/academics" },
        { title: "Gallery", href: "/gallery" },
        { title: "Notices", href: "/notices" },
        { title: "Contact", href: "/contact" }
    ]

    const [showSidebar, setShowSidebar] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="w-full flex flex-col items-center relative">
            <Header />
            <div className="flex items-center justify-between md:px-6 px-3 xl:w-[85rem] w-full my-4">

                <div className="flex items-center gap-2">
                    <Image
                        className="md:h-14 md:w-14 h-10 w-10 object-cover rounded-md border border-neutral-200"
                        src={logo}
                        alt="Namuna Multilingual Academy logo"
                    />
                    <div className="flex flex-col items-start">
                        <h5 className="font-semibold text-blue-600 md:text-xl text-base">Namuna</h5>
                        <h4 className="md:text-sm text-xs -mt-1 text-neutral-600">
                            Multilingual Academy
                        </h4>
                    </div>
                </div>

                <div className="lg:flex hidden items-center gap-4">
                    {navbarItems.map((item, idx) => (
                        <Link
                            href={item.href}
                            key={idx}
                            className="md:text-sm text-xs flex items-center gap-2"
                        >
                            <span className="hover:text-blue-600 transition-all">
                                {item.title}
                            </span>
                            {item.title !== "Home" && item.title !== "About" && item.title !== "Notices" &&
                                <ChevronDown className="h-3 w-3" />
                            }
                        </Link>
                    ))}
                    <PrimaryButton text="Admissions" />
                </div>

                {/* Sidebar Toggle */}
                <div
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="cursor-pointer h-10 w-10 bg-neutral-100 hover:bg-neutral-200 transition-all rounded-sm lg:flex hidden items-center justify-center"
                >
                    <Menu className="text-blue-600 h-5 w-5" />
                </div>

                {/* Mobile Menu Bar */}
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="cursor-pointer h-10 w-10 bg-[var(--primary-blue)] transition-all rounded-sm lg:hidden flex items-center justify-center"
                >
                    <Menu className="text-white h-5 w-5" />
                </div>
            </div>

            <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

            <NavbarDropdown
                showDropdown={showDropdown}
            />

            <Overlay
                dependency={showSidebar}
            />
        </div >
    )
}

export default Navbar